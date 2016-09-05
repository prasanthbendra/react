var express = require('express');
var path = require('path');
var fs = require('fs')

var app = express();

app.use(express.static('./dist'));
app.use(express.static('./client'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.get('/api/marketing', function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile('data/home-marketing.json', function(err, data) {
        res.end(data);
    });
});

app.get('/api/about', function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile('data/about-about.json', function(err, data) {
        res.end(data);
    });
});

app.get('/api/team', function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile('data/about-team.json', function(err, data) {
        res.end(data);
    });
});

app.get('/api/pricing', function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile('data/pricing.json', function(err, data) {
        res.end(data);
    });
});

var port = 3000;

app.listen(port, function(err) {
    if (err) {
        throw new Error(err);
    }
    console.log('Server running at port 3000');
});
