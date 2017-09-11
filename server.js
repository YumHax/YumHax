var express = require('express');
var compression = require('compression');
var jade = require("jade");
var app = express();

app.use(compression());

app.set('view engine', 'jade');
	

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(80, function () {
	console.log("YumHax")
});

