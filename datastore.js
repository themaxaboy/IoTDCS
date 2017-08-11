let IoT = [{
        "id": 1,
        "name": "Light",
        "value": 0,
        "state": true
    },
    {
        "id": 2,
        "name": "Air",
        "value": 0,
        "state": false
    }
]

exports.changeState = function (id, state) {
    if (id < IoT.length + 1 && (state == 'true' || state == 'false')) {
        if (state == 'true') {
            IoT[id - 1].state = true
        } else {
            IoT[id - 1].state = false
        }
        return IoT[id - 1].state
    } else {
        return 'Error!'
    }
}

exports.findAll = function () {
    return IoT
}

exports.findById = function (id) {
    for (var i = 0; i < IoT.length; i++) {
        if (IoT[i].id == id) return IoT[i].state
    }
}
