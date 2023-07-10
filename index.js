const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

app.use(express.static(__dirname + '/src'));

/*

const httpsOption = {
  key:fs.readFileSync('./public/ssl/8274150_www.bohao.de.key'),
  cert:fs.readFileSync('./public/ssl/8274150_www.bohao.de.pem')
};

https.createServer(httpsOption, app).listen(443);
*/


// HTTP and HTTPS Listen
http.createServer(app).listen(80);

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
})

app.get('/ecsk', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/ecsk.html"));
})

app.get('/ecg', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/ecg.html"));
})


app.get('/cfcvae', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/cfcvae.html"));
})

app.get('/arima', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/arima.html"));
})

app.get('/loragw', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/loragw.html"));
})

app.get('/blelock', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/blelock.html"));
})

app.get('/twins', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/twins.html"));
})

app.get('/arvato', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/arvato.html"));
})

app.get('/dator', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/dator.html"));
})

console.log("WELCOME TO BOHAO BLOG SERVER");



