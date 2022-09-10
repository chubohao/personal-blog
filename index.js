var express = require('express')
var fs = require('fs');
var http = require('http');
var https = require('https');
var server = express();

server.use('/', require('./public/blog/blog'));
server.use('/ecsk', require('./public/ecsk/ecsk'));

// SSL Cert
const httpsOption = {
  key:fs.readFileSync('./ssl/8274150_www.bohao.de.key'),
  cert:fs.readFileSync('./ssl/8274150_www.bohao.de.pem')
};

// HTTP and HTTPS Listen
http.createServer(server).listen(80);
https.createServer(httpsOption, server).listen(443);

console.log("Hello Bohao");


