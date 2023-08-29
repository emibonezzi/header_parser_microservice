// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
const { application } = require('express');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// who am I endpoint
app.get('/api/whoami', function (req, res) {
  // save values from the req objects
  const user_ip = req.ip;
  const user_language = req.get('Accept-Language');
  const user_software = req.get('User-Agent') 
  // send it back in JSON
  res.json({
    'ipaddress': user_ip,
    'language': user_language,
    'software': user_software
  })  

})

app.use(express.static(__dirname + '/api/whoami'))

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
