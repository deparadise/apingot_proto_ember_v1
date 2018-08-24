console.log('>> Using v1 Auth');
import express from 'express';

import googleAuth from './google-oauth';

const auth = express.Router();

auth.get('/', (req, res) => {
	res.json({
		standard: 'email-PW'
	});
});

auth.use('/google', googleAuth);

module.exports = auth;
