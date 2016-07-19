var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; // if the variable name is in uppercase it means its a constant and we musnt change it
var middleware = require("./middleware.js")
app.use(middleware.logger);

//app.use(middleware.requireAuthentication);
//app.get('/', function (req , res){
//	res.send('hello express!cd ');
//});


app.get('/about', middleware.requireAuthentication, function (req , res){
	res.send('hello express about ? ');
});
app.use(express.static(__dirname +'/public'));
console.log(__dirname);
app.listen(PORT, function (){
	console.log('Express server started on port: '+ PORT);
});
 