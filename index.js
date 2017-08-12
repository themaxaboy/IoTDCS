const express = require('express')
const path = require('path')
const data = require('./datastore')

const port = process.env.PORT || 4000

const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/IoT', function (req, res) {
    res.json(data.findAll())
})

app.get('/IoT/:id', function (req, res) {
    let id = req.params.id
    res.json(data.findById(id))
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
