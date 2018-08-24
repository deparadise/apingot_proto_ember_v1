console.log('>> Using Testing');
import express from 'express';

import slate from './services/slate';

const testing = express.Router();

testing.get('/', (req, res) => {
	slate.doSomething('later');
	// console.log('>> TEST HAS REQUEST:', req);

	res.send('some json soon >>>');
});

module.exports = testing;
