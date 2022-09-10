const express = require('express');
const path = require('path');
let router = express.Router();

router.use(express.static(path.resolve(__dirname, "assets/")));
router.use(express.static(path.resolve(__dirname, "main/")));

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

module.exports = router;