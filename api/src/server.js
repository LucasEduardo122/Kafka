const express = require('express');
const kafka = require('../utils/kafka');
const route  = require('./Router');

const app = express()
const producer = kafka.producer();

app.use(express.json());
app.use((req, res, next) => {
    req.producer = producer;

    return next();
})

app.use(route)

async function run() {
    await producer.connect();
    app.listen(3000)
}

run().catch(console.error)