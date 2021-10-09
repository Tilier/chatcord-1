var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res){
 app.sendFile('./public/index.html') 
}
       
app.listen(3000)
