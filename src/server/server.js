var express = require('express'),
    app = express(),
    server = require('http').createServer(app);
var _ = require('lodash');
var path = require('path');
var bodyParser = require('body-parser');
var utils = require('./utils');
var users = require('./userData');

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5555');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
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
    res.json({ name: 'Ping' });
    // res.status(500).end('Invalid credentials.');
});

app.post('/postApi', function (req, res) {
    res.json({ name: 'Ping' });
});

app.get('/getTimesheets', function (req, res) {
    res.json([
        { id: '11111', date: '11/11/1111', billableHours: '11:11', nonBillableHours: '12:12', name: 'Records 1' },
        { id: '22222', date: '22/11/1111', billableHours: '22:11', nonBillableHours: '22:12', name: 'Records 1' },
        { id: '3333', date: '33/11/1111', billableHours: '33:11', nonBillableHours: '33:12', name: 'Records 1' },
        { id: '4444', date: '44/11/1111', billableHours: '44:11', nonBillableHours: '44:12', name: 'Records 1' },
    ]);
});

app.get('/getHolidays', function (req, res) {
    res.json([
        { id: '1111', date: '11/11/1111', title: 'Laxmi Puja', type: 'Fixed' },
        { id: '2222', date: '22/22/1111', title: 'Bhai Duj', type: 'Floating' },
        { id: '3333', date: '33/33/1111', title: 'Christmas', type: 'Fixed' },
        { id: '4444', date: '44/44/1111', title: 'New Year', type: 'Floating' },
    ]);
});

app.post('/api/Authentication/GetToken', function (req, res) {
    var userName = req.body.UserName;
    var password = req.body.Password
    var userIndex = _.findIndex(users, { UserName: userName, Password: password });
    if (userIndex != '-1') {
        var token = utils.CreateJWT(users[userIndex]);
        res.send({ token: token });
    } else {
        res.status(500).end('Invalid credentials.');
    }
});
 app.get('/api/GetLoggedInUserPermission', utils.EnsureAuthenticated,function (req, res) {
    var userIndex = _.findIndex(users, { Id: req.userID });
    res.json(users[userIndex].Permissions);
});
server.listen(process.env.PORT || 4000, function () {
    console.log('RMS APP listening on port 4000!');
});