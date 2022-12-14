var server = require('express')()
var fs = require('fs');
var http = require('http');
var https = require('https');
const express = require("express");

// SSL Cert
const httpsOption = {
  key:fs.readFileSync('./ssl/8274150_www.bohao.de.key'),
  cert:fs.readFileSync('./ssl/8274150_www.bohao.de.pem')
};

// HTTP and HTTPS Listen
http.createServer(server).listen(80);
https.createServer(httpsOption, server).listen(443);

server.use('/', require('./public/blog/blog'));
server.use('/ecsk', require('./public/ecsk/ecsk'));

console.log("WELCOME TO BOHAO BLOG SERVER");


