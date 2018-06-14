console.log('> using api...');
import express from 'express';

const api = express.Router();

api.get('/', (req, res) => {
	res.json({
		regarding: 'code_pot',
		versionsIncluded: []
	});
});

module.exports = api;
