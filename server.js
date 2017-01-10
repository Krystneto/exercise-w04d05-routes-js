var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
  var greet = '<h1>Hello and Welcome!</h1><br/>';
  var link = '<a href="./rabbit_hole">Right this way</a>';
  res.send( greet + link );
});

app.get('/rabbit_hole', function(req, res){
  var late = '<h1>I\'m running late!</h1><br/>';
  var link = '<a href="/off_with_their?part=head">Off with their head!</a>'
  res.send( late + link );
});

app.get('/off_with_their?:part', function(req, res) {
  var part = req.query.part;
  var html = '<h1>Off with their ' + part +' !</h1>';
  res.send( html );
});

app.get('/characters/hatter', function(req, res) {
  var html = '<h1>have a cuppa</h1>'
  res.send( html );
});

app.get('/characters/queen', function(req, res){
  res.redirect('/off_with_their?part=head');
})

app.get('/elevator', function(req, res){
  var html = '<form action="/floor"><input type="text" name="number"><input type="submit" value="Go!"></form>';
  res.send( html );
})

app.get('/floor', function(req, res) {
  var number = req.query.number;
  var floor = req.params.floor;
  res.send('Welcome to floor ' + number );
})


app.get('/characters/cheshire_cat', function(req,res){
  var html = '<form method="POST" action="/dumb_waiter"><input type="text"><br><input type="radio" name="radio" value="Show" checked>Show <input type="radio" name="radio" value="Hide">Hide <input type="submit" value="submit"></form>'
  res.send( html );
})

app.post('/dumb_waiter', function(req, res) {
  var value = req.body.radio;
  if (value === 'Show') {
    return res.redirect('/curious?visit=show')
  } else if (value === 'Hide') {
    return res.redirect('/curious?visit=hide')
  }
});

app.get('/curious', function(req, res) {
  var showHTML = '<h1>=^..^=</h1>';
  var hideHTML = '<h1>:)</h1>';
  var value = req.query.visit;
  if (value === 'show') {
    return res.send( showHTML );
  } else if (value === 'hide') {
    return res.send( hideHTML );
  }
});




var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});



