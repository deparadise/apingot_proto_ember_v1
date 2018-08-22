console.log('> Using google-oauth...');
import express from 'express';

//Passport
import privateKeys from '../../../config/private/keys' // <<<< ENV
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
passport.use(
	new GoogleStrategy(
		{
			clientID: privateKeys.google.clientID,
			clientSecret: privateKeys.google.clientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken) => { // <<< AT handle
			console.log('Handle AT:', accessToken);
		}
	)
);

const googleAuth = express.Router();

googleAuth.get('/test', (req, res) => {
	res.json({
		leggo: 'my-eggo Oauth'
	});
});

googleAuth.get('/', passport.authenticate(
	'google',
	{
		scope: [
			'profile',
			'email'
		]
	}
));

module.exports = googleAuth;
