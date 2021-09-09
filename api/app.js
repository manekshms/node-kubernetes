const express = require('express');

const app = express();

app.use(express.json());


app.use('/health', (req, res) => {
	res.send({ health: 'ok'});
})

module.exports = app;