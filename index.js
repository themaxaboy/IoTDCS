const express = require('express')
const app = express()
const path = require('path')
const nocache = require('nocache')

const data = require('./datastore')

const port = process.env.PORT || 3000

app.use(express.static(__dirname))
app.use(nocache())

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/IoT', function (req, res) {
    res.json(data.findAll())
})

app.get('/random', function (req, res) {
    res.json(Math.floor((Math.random() * 100) + 1))
})

app.post('/IoT/:id', function (req, res) {
    //let body = req.body;
    let id = req.params.id
    res.json(data.findById(id))
})

app.get('/IoT/:id/:state', function (req, res) {
    let id = req.params.id
    let state = req.params.state
    res.json(data.changeState(id, state))
})

app.listen(port, function () {
    console.log('Starting IoTDCS on port ' + port)
})
