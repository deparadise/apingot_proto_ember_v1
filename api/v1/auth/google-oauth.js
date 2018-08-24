console.log('> Using google-oauth EP');
import express from 'express';
import passport from 'passport';

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

googleAuth.get('/callback', passport.authenticate('google'));

module.exports = googleAuth;
