var express = require('express');
var app = express();

var developer = [
    {firstName: 'Alice', lastName: 'Wonderland'},
    {firstName: 'Bob', lastName: 'Marley'},
    {firstName: 'Charlie', lastName: 'Garcia'},
    {firstName: 'Dan', lastName: 'Aykroyd'},
]

app.delete('/rest/developer/:index', function(req, res){
    developer.splice(req.params.index, 1);
    res.json(developer);
})

app.get('/rest/developer', function(req, res){
    res.json(developer);
})


app.get('/rest/developer/:index', function(req, res){
    res.json(developer[req.params.index]);
})

app.use(express.static(__dirname + '/public'));

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);