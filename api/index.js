console.log('>> Using api');
import express from 'express';

import v1 from './v1';

const api = express.Router();

api.get('/', (req, res) => {
	res.json({
		regarding: 'code_pot',
		versionsIncluded: [v1.versionMeta]
	});
});

api.use('/v1', v1);

module.exports = api;
