const express = require('express')
const path = require('path')
const data = require('./datastore')
const nocache = require('nocache')

const port = process.env.PORT || 4001

const app = express()
app.use(express.static(path.join(__dirname)));
app.use(nocache())

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/portal/build', 'index.html'));
});

app.get('/IoT', function (req, res) {
    res.json(data.findAll())
})

app.get('/IoT/:id', function (req, res) {
    let id = req.params.id
    res.json(data.findById(id))
})

app.get('/IoT/:id/state', function (req, res) {
    let id = req.params.id
    res.json(data.getStateById(id))
})

app.get('/IoT/:id/value', function (req, res) {
    let id = req.params.id
    res.json(data.getValueById(id))
})

app.get('/IoT/:id/state/:state', function (req, res) {
    let id = req.params.id
    let state = req.params.state
    res.json(data.changeState(id, state))
})

app.get('/IoT/:id/value/:value', function (req, res) {
    let id = req.params.id
    let value = req.params.value
    res.json(data.changeValue(id, value))
})

/*app.post('/', function (req, res) {
    let json = req.body
    res.send('Add new ' + json.name + ' Completed!')
})*/

app.listen(port, function () {
    console.log('Starting IoTDCS on port ' + port)
})
