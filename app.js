// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/views'));

//index Route:
app.get("/index", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
  });

// about Route:
app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
  });

// gallery Route:
app.get("/gallery", (request, response) => {
    response.sendFile(__dirname + "/views/gallery.html");
  });


// works Route:
app.get("/works", (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
  });


// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
