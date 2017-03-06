const express = require('express');
const routes = require('./routes');

const app = express();

// set our port
const port = process.env.PORT || 3000;

// routes
app.use('/', routes);

// start app at localhost:3000
app.listen(port);

console.log(`Listening on ${port}`);
module.exports = app;
