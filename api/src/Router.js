const express = require('express')
const route = express.Router();

route.post('/certificate', (req, res) => {
    const message = {
        user : {
            id: 1,
            name: "Lucas Eduardo"
        },

        course: "Kafka com nodejs",
        grade: 5
    }

    req.producer.send({
        topic: "issue-certificate",
        messages: [
            {value: JSON.stringify(message)}
        ]
    })

    return res.json({ok: true})
})

module.exports = route;