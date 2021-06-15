const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/') {
      socket.write(createResponse({ body: 'hi', contentType: 'text/plain', status: '200 OK' }));
    }
    // if /echo POST status code 200 and plain text with request body
    else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({ body: request.body, contentType: 'text/plain', status: '200 OK' }));
    }
    // if /red GET html with an h1 and the word red

    // if /green GET html with an h1 and the word green

    // if /blue GET html with an h1 and the word blue
    else { 
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
