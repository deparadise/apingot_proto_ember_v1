console.log('>> Loading passport js config');
//Passport
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import privateKeys from '../../../config/private/keys' // <<<< ENV

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

module.exports = 'passport.js config loaded ->>>';
