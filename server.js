var express = require('express');
var compression = require('compression');
var express = require("express");
var app = express();

var path = __dirname+"/public/templates/";

app.use(compression());
app.use(express['static'](__dirname + '/public'));

app.get('/',function(req, res){  
      res.sendFile(path + 'index.html');
});

app.get('/fr_lang.php',function(req, res){  
      res.sendFile(path + 'fr_lang.php');
});

app.listen(80, function () {
	console.log("YumHax")
});
 



