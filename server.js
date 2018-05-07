// Get dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors')

// Get our API routes
const mojani_api = require('./server/routes/mojani_api');
const login_api = require('./server/routes/login_api');


//Middle ware for CORS
app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our API routes based on application routes
app.use('/login', login_api);
app.use('/manageLandRecords', mojani_api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));