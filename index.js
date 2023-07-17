const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

app.use(express.static(__dirname + '/src'));


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

app.get('/linuxGateway', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/linuxGateway.html"));
})

app.get('/wardrobe', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/wardrobe.html"));
})

app.get('/car', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/car.html"));
})

app.get('/digitalTwin', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/digitalTwin.html"));
})

app.get('/dataStream', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/dataStream.html"));
})

app.get('/hazer', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/hazer.html"));
})

app.get('/sier', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/sier.html"));
})

console.log("WELCOME TO BOHAO BLOG SERVER");



