const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
});