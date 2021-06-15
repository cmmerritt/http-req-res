const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET') {
      socket.write(createResponse({ body: 'hi', contentType: 'text/plain', status: '200 OK' }));
    }
    // if /echo POST status code 200 and plain text with request body
    else if(request.path === '/echo' && request.method === 'POST') {
      socket.write(createResponse({ body: request.body, contentType: 'text/plain', status: '200 OK' }));
    }
    // if /red GET html with an h1 and the word red
    else if(request.path === '/red' && request.method === 'GET') {
      socket.write(createResponse({ body: '<h1>red</h1>', contentType: 'text/html', status: '200 OK' }));
    }
    // if /green GET html with an h1 and the word green
    else if(request.path === '/green' && request.method === 'GET') {
      socket.write(createResponse({ body: '<h1>green</h1>', contentType: 'text/html', status: '200 OK' }));
    }
    // if /blue GET html with an h1 and the word blue
    else if(request.path === '/blue' && request.method === 'GET') {
      socket.write(createResponse({ body: '<h1>blue</h1>', contentType: 'text/html', status: '200 OK' }));
    }
    // else respond with 404 error
    else { 
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
