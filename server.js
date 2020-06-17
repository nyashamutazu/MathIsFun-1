const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/maths-app'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+ + '/dist/maths-app/index.html'))
})

app.listen(process.env.PORT || 8080);