console.log('> using /v1...');
import express from 'express';

const v1 = express.Router();

v1.versionMeta = {
	regarding: 'api',
	version: 1,
	versionName: 'cuda'
};

v1.get('/', (req, res) => {
	res.json(v1.versionMeta);
});

module.exports = v1;
