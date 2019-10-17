import express from 'express';
const app = express();

// TODO: middleware TBD
// Init Configuration
// require(`${__dirname}/api/services/passport // <<<<<<<<<<<<<<<<<<
// import passportConfig from './api/services/passport';
// Use BP for access to POST data
// import bodyParser from 'body-parser';
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Include api module
import api from './api';

// ROOT EP serves built client
const path = require('path');
const PATH_TO_DIST = path.join(__dirname + '/client');
console.log('>>>--> STATIC DIST: ', PATH_TO_DIST);

app.use(express.static(PATH_TO_DIST));
app.get('/', (req, res) => {
	// Not sure if this gets used during deployment /:0(
	let clientAppPath = path.join(__dirname + '/client-dist/index.html');
	console.log('>> Request for clientAppPath:', clientAppPath);
	res.sendFile(clientAppPath);
});

// Endpoint routing
app.use('/api', api);

// START APP
const PORT = process.env.PORT || 3000; // ENV dynamic PORT or static preset
app.listen(PORT, () => console.log('Example app listening on PORT:', PORT));
