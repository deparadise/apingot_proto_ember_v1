console.log('> Using google-oauth...');
import express from 'express';

//Passport
import privateKeys from '../../../config/private/keys' // <<<< ENV
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
passport.use(
	new GoogleStrategy(
		// >>> Oauth Request Setup
		{
			clientID: privateKeys.google.clientID,
			clientSecret: privateKeys.google.clientSecret,
			callbackURL: 'api/v1/auth/google/callback'
		},
		// <<< authorization confirmed handle on callback
		(accessToken) => {
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

googleAuth.get('/callback', passport.authenticate(
	'google'
));

module.exports = googleAuth;
