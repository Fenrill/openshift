var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

var developer = [
    {firstName: 'Alice', lastName: 'Wonderland'},
    {firstName: 'Bob', lastName: 'Marley'},
    {firstName: 'Charlie', lastName: 'Garcia'},
    {firstName: 'Dan', lastName: 'Aykroyd'},
]

app.delete('/rest/developer/:index', function(req, res){
    developer.splice(req.params.index, 1);
    res.json(developer);
});

app.post('/rest/developer/:index', function(req, res){
    var newDeveloper = req.body;
    developer.push(newDeveloper);
    res.json(developer);
});

app.get('/rest/developer', function(req, res){
    res.json(developer);
});


app.get('/rest/developer/:index', function(req, res){
    res.json(developer[req.params.index]);
});

app.use(express.static(__dirname + '/public'));

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);