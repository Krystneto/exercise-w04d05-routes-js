var express = require('express');

var app = express();

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
})












var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});



