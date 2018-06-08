import os, socket;
webserver_port = 8000;

server_socket = socket.socket();
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1);
server_socket.bind(('', webserver_port));
server_socket.listen(1);
print 'Webserver running at http://localhost:%d/' % webserver_port;

while 1:
  client_socket,_ = server_socket.accept();
  request = client_socket.recv(1024);
  print '>> ' + request.split('\r\n')[0];
  response = '\r\n'.join([
    'HTTP/1.1 204 No Content',
    'Content-Type: text/html',
    'Content-Length: 10'
  ]);
  print '<< ' + response.split('\r\n')[0];
  try:
    client_socket.send(response);
  except socket.error, e:
    pass;
  client_socket.close();

