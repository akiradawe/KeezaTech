// index.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for Home
app.get('/', (req, res) => {
  res.render('home');  // home.ejs will be rendered
});

// Route for About
app.get('/about', (req, res) => {
  res.render('about');  // about.ejs will be rendered
});

// Route for Services
app.get('/services', (req, res) => {
  res.render('Services');  // Services.ejs will be rendered
});

// Route for Our Team
app.get('/team', (req, res) => {
  res.render('team');  // Our Team.ejs will be rendered
});

// Route for Contact
app.get('/contact', (req, res) => {
  res.render('contact');  // contact.ejs will be rendered
});

// Route for Publications
app.get('/publications', (req, res) => {
  res.render('publications');  // publications.ejs will be rendered
});

// Route for Projects
app.get('/projects', (req, res) => {
  res.render('projects');  // projects.ejs will be rendered
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});