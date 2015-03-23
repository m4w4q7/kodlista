// segédanyag: http://webprogramozas.inf.elte.hu/ea/jstech_express.pdf
// Express dokumentáció: http://expressjs.com/4x/api.html
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // POST feldolgozásához


// fogalmak: "express view"-k --> template-ek; "view engine" --> template engine (pl. ejs, jade, handlebars, dustjs stb.)
// http://expressjs.com/api.html#app.set
app.set('views', __dirname + '/views'); // view-k helye, stringként vagy string tömbként megadva
app.set('view engine', 'ejs'); // template engine beállítása, ejs-t használunk mert azt használja az underscore


// Middleware-ek (lásd connect modul):
app.use(bodyParser.urlencoded({ extended: true})); // POST request feldolgozására, adatok a req.body-ba:
app.use(express.static(__dirname + '/public', {'index': false})); // statikus fájlkiszolgálás, ~Apache


// Helló világ a "gyökérben"
app.get('/', function(req, res) {
	res.send('Helló világ!');
});


// query-ből name kiolvasása (~ php: $_GET["name"])
app.get('/hello', function(req, res) {
	// view (template) renderelése, paraméterobjektumban a view paraméterei
	res.render('hello', { // hello.ejs, automatikus kiegészítés .ejs-sel
		name: req.query.name || "Anonymus"
	}); 
});


// paraméter kiolvasása URL-ből
app.get('/hello/:name', function(req, res) {
	// var name = req.params.name;
	res.render('hello', { // hello.ejs
		name: req.params.name
	});
});


// operandusok kiolvasása a query-ből
app.get('/add', function(req, res) {
	var sum = ('a' in req.query && 'b' in req.query) ? parseInt(req.body.a, 10) + parseInt(req.body.b, 10) : '';
	res.render('add', {
		sum: sum
	});
});


// operandusok kiolvasása a POST törzséből
app.post('/add', function(req, res) {
	console.log(req.body);
	var a = parseInt(req.body.a, 10);
	var b = parseInt(req.body.b, 10);
	var sum = a + b;
	res.render('add', {
		sum: sum
	});
});



/*
// http://expressjs.com/api.html#res.sendFile
app.get('readme', function(req, res) {
	res.sendFile('public/readme.txt', {
		root: '.'
	});
});

app.get('/file/:filename', function(req, res) {
	var filename = req.params.filename;
	console.log(filename);
	res.sendFile(filename, {
		root: './public/'
	});
});
*/



// szerver indítása:
app.listen(process.env.PORT, function() {
	console.log('Server started on port ', process.env.PORT);
});


// Továbbiakban layout-okról, session-ökről, autentikációról (passport.js) lesz majd szó
