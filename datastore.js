let IoT = [
    {
      "img": "https://semantic-ui.com/images/avatar2/small/matthew.png",
      "name": "Light",
      "description": "Outside",
      "state": true,
      "value": "-"
    },
    {
      "img": "https://semantic-ui.com/images/avatar2/small/lindsay.png",
      "name": "Air",
      "description": "Bedroom",
      "state": false,
      "value": "25 C"
    },
    {
      "img": "https://semantic-ui.com/images/avatar2/small/mark.png",
      "name": "Water Pump",
      "description": "Outside",
      "state": true,
      "value": "500 Liter"
    }
  ]

exports.changeState = function (id, state) {
    if (id < IoT.length && (state == 'true' || state == 'false')) {
        if (state == 'true') {
            IoT[id].state = true
        } else {
            IoT[id].state = false
        }
        return 'Done!'
    } else {
        return 'Error!'
    }
}

exports.changeValue = function (id, value) {
    if (id < IoT.length) {
        IoT[id].value = value
        return 'Done!'
    } else {
        return 'Error!'
    }
}

exports.findAll = function () {
    return IoT
}

exports.findById = function (id) {
    if (id < IoT.length) return IoT[id]
    else return 'Not Found!'
}