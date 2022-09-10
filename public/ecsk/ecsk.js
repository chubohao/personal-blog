const express = require('express');
const path = require('path');
var fs = require('fs');
var https = require('https');
let router = express.Router();
const WebSocketServer = require("ws").Server;

// SSL Cert
const httpsOption = {
    key:fs.readFileSync('./ssl/8274150_www.bohao.de.key'),
    cert:fs.readFileSync('./ssl/8274150_www.bohao.de.pem')
};
const server = https.createServer(httpsOption).listen(8888);
const wss = new WebSocketServer({server});

let websocketObj = null;

wss.on("connection", (ws) => {
    websocketObj = ws;
    console.info("websocket connection open");
    ws.on('message', (message) => {
        console.log('websocket received: %s', message);
    });
    ws.on('close', () => {
        console.log('websocket close.')
    })
    ws.on('error', (err) => {
        console.log('websocket error.', err)
    })
});


router.use(express.static(path.resolve(__dirname, "assets/")));
router.use(express.static(path.resolve(__dirname, "main/")));

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

router.get('/data', function (req, res) {
    websocketObj.send(req.query.D);
    res.send('Hi Edge Client');
});


module.exports = router;