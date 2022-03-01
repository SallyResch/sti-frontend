var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/fortnite.html'))
});

var uri = 'https://api.fortnitetracker.com/v1/profile/';
//https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}
//API nyckel: 14df28ad-d605-40b7-87f8-5596a4cb0140
app.post('/', function (req, res) {
  request.get(uri + 'platform' + '/' + 'epicusername', {
    headers: {
      'TRN-Api-Key': '14df28ad-d605-40b7-87f8-5596a4cb0140'
    }, function(error, response, body) {
      console.log(body);
      res.json(body);
    }
  })
});

var port = process.env.PORT || 3000;
app.listen(port);