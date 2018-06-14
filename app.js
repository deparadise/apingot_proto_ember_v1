import express from 'express';
const app = express();

// Use BP for access to POST data
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Include api module
import api from './api';

// ROOT serves FE_shovel client...
const path = require('path');
app.use(express.static(__dirname + '/client'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/index.html'));
});

// Routes...
app.use('/api', api);

// START APP...
const port = process.env.PORT || 3000; // ENV dynamic port or static preset
app.listen(port, () => console.log('Example app listening on port:', port));
