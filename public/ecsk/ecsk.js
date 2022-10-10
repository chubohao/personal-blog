const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

let router = express.Router();
const WebSocketServer = require("ws").Server;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// add the path of assets and main
router.use(express.static(path.resolve(__dirname, "assets/")));
router.use(express.static(path.resolve(__dirname, "main/")));

// SSL Cert
const httpsOption = {
    key:fs.readFileSync('./ssl/8274150_www.bohao.de.key'),
    cert:fs.readFileSync('./ssl/8274150_www.bohao.de.pem')
};

// create a websocket server to receive raw data and resulat from edge client.
const server = https.createServer(httpsOption).listen(8888);
const websocketserver = new WebSocketServer({server});
let websocketObj = null;
websocketserver.on("connection", (ws) => {
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

// PORT FOR USER,
router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

// PORT FOR DEVELOPER
router.get('/datav', jsonParser, function (req, res) {
    try {
        // get the data from get request
        let micData = req.body.m.toString().split(',')
        let xData = req.body.x.toString().split(',')
        let yData = req.body.y.toString().split(',')
        let zData = req.body.z.toString().split(',')
        let laserData = req.body.l.toString()
        let laserValue = req.body.ld.toString()
        let activity = req.body.activity.toString()
        let eyeData = req.body.e.toString().split(',')
        let colorData = req.body.color.toString().split(',')
        let bmeData = req.body.bme.toString().split(',')
        let magData = req.body.mag.toString().split(',')

        let micResult = [], xResult = [] , yResult = [], zResult = [], eyeResult=[]
        let body = {}
        for (let i = 0; i < micData.length; i += 64) {
            micResult.push(micData.slice(i, i + 64));
            xResult.push(xData.slice(i, i + 64));
            yResult.push(yData.slice(i, i + 64));
            zResult.push(zData.slice(i, i + 64));
        }
        for (let i=0; i<eyeData.length; i += 8) {
            eyeResult.push(eyeData.slice(i, i+8))
        }

        body.micResult = micResult
        body.xResult = xResult
        body.yResult = yResult
        body.zResult = zResult
        body.laserResult = laserData
        body.laserValue = laserValue
        body.eyeResult = eyeResult
        body.colorResult = colorData
        body.bmeResult = bmeData
        body.magResult = magData
        body.activity = activity

        if (websocketObj != null) {
            websocketObj.send(JSON.stringify(body))
        }
        res.send('Hi ECSK, Feedback from Google Server!');
    } catch (error) {
        console.log('error:', error)
    }
});

module.exports = router;