import express from 'express';
const app = express();

// TODO: middleware TBD
// Init Configuration
require(`${__dirname}/api/services/passport`);
// import passportConfig from './api/services/passport';
// Use BP for access to POST data
// import bodyParser from 'body-parser';
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Include api module
import api from './api';

// ROOT EP serves built client...
const path = require('path');
app.use(express.static(__dirname + '/client'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/index.html'));
});

// Endpoint routing...
app.use('/api', api);

// START APP...
const PORT = process.env.PORT || 3000; // ENV dynamic PORT or static preset
app.listen(PORT, () => console.log('Example app listening on PORT:', PORT));
