console.log('>> Using /v1');
import express from 'express';

// import auth from './auth';
// import testing from '../testing';

const v1 = express.Router();

v1.versionMeta = {
	regarding: 'api',
	version: 1,
	versionName: 'cuda'
};

v1.get('/', (req, res) => {
	res.json(v1.versionMeta);
});

// v1.use('/auth', auth);
// v1.use('/test', testing);

module.exports = v1;
