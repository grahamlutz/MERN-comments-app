'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var PORT = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
	res.json({ message: 'API Initialized!' });
})

app.use('/api', router);

app.listen(PORT, () => {
	console.log(`api running on port ${PORT}`)
})