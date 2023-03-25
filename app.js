// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//index Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/index.html'))

// about Route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// gallery Route:
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

// works Route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
