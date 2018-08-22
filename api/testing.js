console.log('> Using Testing...');
import express from 'express';

const testing = express.Router();

testing.get('/', (req, res) => {
	console.log('>> TEST HAS REQUEST PARAM:', req);

	//...

	res.send('some json soon....');
});

module.exports = testing;
