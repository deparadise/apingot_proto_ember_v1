console.log('> Using google-oauth...');
import express from 'express';
// import passport from 'passport';

// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const googleAuth = express.Router();

googleAuth.get('/test', (req, res) => {
	res.json({
		leggo: 'my-eggo Oauth'
	});
})

module.exports = googleAuth;
