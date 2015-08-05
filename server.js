// Load module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mailRouter = require('./routes/mailRouter.js');
var grunt = require('grunt');
// Create our Express application
var app = express();
// Middlewares
app.use(express.static('public'));
app.use(bodyParser.json());
// Map routes with their routers
app.use('/mail', mailRouter);
// Make our application listen on the given port
app.listen(3000, function () {
    console.log('Application running on: http://localhost:3000');
});