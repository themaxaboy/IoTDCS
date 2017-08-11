let IoT = [{
        "id": 1,
        "name": "Light",
        "value": 0,
        "status": true,
    },
    {
        "id": 2,
        "name": "Air",
        "value": 0,
        "status": false,
    }
]

exports.findAll = function () {
    return IoT
}

exports.findById = function (id) {
    for (var i = 0; i < IoT.length; i++) {
        if (IoT[i].id == id) return IoT[i].status
    }
}
