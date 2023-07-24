const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const geoip = require('geoip-lite');

// app.use(express.static(__dirname + '/src'));
app.set('trust proxy', true)

app.get('/ecsk', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/ecsk.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /ecsk');
})

app.get('/ecg', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/ecg.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /ecg');
})

app.get('/cfcvae', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/cfcvae.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /cfcvae');
})

app.get('/arima', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/arima.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /arima');
})

app.get('/loragw', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/loragw.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /loragw');
})

app.get('/blelock', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/blelock.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /blelock');
})

app.get('/twins', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/twins.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /twins');
})

app.get('/stream', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/stream.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /stream');
})

app.get('/arvato', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/arvato.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /arvato');
})

app.get('/dator', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/dator.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /dator');
})

app.get('/linuxGateway', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/linuxGateway.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /linuxGateway');
})

app.get('/wardrobe', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/wardrobe.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /wardrobe');
})

app.get('/car', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/car.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /car');
})

app.get('/water', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/water.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /water');
})

app.get('/digitalTwin', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/digitalTwin.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /digitalTwin');
})

app.get('/dataStream', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/dataStream.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /dataStream');
})

app.get('/hazer', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/hazer.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /hazer');
})

app.get('/sier', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/sier.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /sier');
})

app.get('/wifi', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "src/wifi.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /wifi');
})

app.get('/riscv', function(req, res) {
    res.sendFile(path.resolve(__dirname, "src/riscv.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /riscv');
})


app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "src/index.html"));
    const ip = req.ip;
    const geo = geoip.lookup(ip);
    console.log(`Time: ${new Date().toISOString()}, IP: ${ip}, Country: ${geo.country}, City: ${geo.city}`, 'Path: /#');
});

app.use(express.static(__dirname + '/src'));
app.listen(80, function (req, res) {
    console.log("WELCOME TO BOHAO BLOG SERVER ~");
});






