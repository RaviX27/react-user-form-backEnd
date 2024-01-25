const express = require('express');
const app = express();
const cors = require('cors');
const contoller = require('./controller')

app.use(cors());

app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(express.json());

app.get('/users', (req ,res) => {
    contoller.getUsers(req, res, next => {
        res.send();
    });
});

app.post('/createuser', (req ,res) => {
    contoller.addUser(req.body, (callback) => {
        res.send();
    })
});

app.post('/updateuser', (req ,res) => {
    contoller.updateUser(req.body, (callback) => {
        res.send(callback);
    })
});

app.post('/deleteuser', (req ,res) => {
    contoller.deleteUser(req.body, (callback) => {
        res.send(callback);
    })
});
module.exports = app;
