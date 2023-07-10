const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

app.use(express.static(__dirname + '/src'));




// HTTP and HTTPS Listen
http.createServer(app).listen(8080);

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



