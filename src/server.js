const express = require('express');
const app = express();
require('./config/config');

const port = process.env.port;

app.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.post('/:id', (req, res) => {
    let id = req.params.id;
    res.status(500).json({
        id
    });
});

app.listen(port, () => {
    console.log("Listening on port: " + port);
});