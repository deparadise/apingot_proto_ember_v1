console.log('> Using v1 Auth...');
import express from 'express';

const auth = express.Router();

auth.get('/', (req, res) => {
  res.json({
    standard: 'email-PW'
  });
})

auth.get('/google', (req, res) => {
  res.json({
    leggo: 'my-eggo Oauth'
  });
})

module.exports = auth;
