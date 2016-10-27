var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

var path = require('path');
var bodyParser = require('body-parser');

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5555');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(express.static(__dirname));
app.use('/node_modules', express.static(__dirname + '/../../node_modules'));
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    //res.send('App Loaded...');
     res.render('index.html');
});

app.get('/ping', function (req, res) {
     res.json({name:'Ping'});
   // res.status(500).end('Invalid credentials.');
});

app.post('/postApi', function (req, res) {
     res.json({name:'Ping'});
});

server.listen(process.env.PORT || 4000, function () {
    console.log('RMS APP listening on port 4000!');
});