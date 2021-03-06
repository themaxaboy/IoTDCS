const express = require("express")
const path = require("path")
const datastore = require("./datastore")
const nocache = require("nocache")
const bodyParser = require("body-parser")

const port = process.env.PORT || 4000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname)))
app.use(nocache())

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/portal/build", "index.html"))
})

app.get("/IoT", function(req, res) {
  res.json(datastore.findAll())
})

app.get("/IoT/state", function(req, res) {
  res.json(datastore.getAllState())
})

app.get("/IoT/:id", function(req, res) {
  let id = req.params.id
  res.json(datastore.findById(id))
})

app.get("/IoT/:id/state", function(req, res) {
  let id = req.params.id
  res.json(datastore.getStateById(id))
})

app.get("/IoT/:id/value", function(req, res) {
  let id = req.params.id
  res.json(datastore.getValueById(id))
})

app.get("/IoT/:id/state/:state", function(req, res) {
  let id = req.params.id
  let state = req.params.state
  res.json(datastore.changeState(id, state))
})

/*app.get('/IoT/:id/value/:value', function (req, res) {
    let id = req.params.id
    let value = req.params.value
    res.json(datastore.changeValue(id, value))
})*/

app.post("/IoT/value/set", function(req, res) {
  let id = req.body.id
  let value = req.body.value
  res.send(datastore.setValueById(id, value))
})

app.listen(port, function() {
  console.log("Starting IoTDCS on port " + port)
})