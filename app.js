const express = require('express');
const app = express();
const path = require('path');

// FE ROOT serves client...
app.use(express.static(__dirname + '/client'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/index.html'));
});

// START APP...
app.listen(3000, () => console.log('Example app listening on port 3000!'));
