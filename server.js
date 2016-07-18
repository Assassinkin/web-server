var express = require('express');
var app = express();
var PORT = 3000; // if the variable name is in uppercase it means its a constant and we musnt change it
var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function (req,res,next){
		console.log('Request '+ new Date().toString() +' '+req.method + ' ' + req.originalUrl);
		next();
	}
};
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

//app.get('/', function (req , res){
//	res.send('hello express!');
//});

app.get('/about', middleware.requireAuthentication, function (req , res){
	res.send('hello express! about');
});
app.use(express.static(__dirname +'/public'));
console.log(__dirname);
app.listen(PORT, function (){
	console.log('Express server started on port: '+ PORT);
});
 