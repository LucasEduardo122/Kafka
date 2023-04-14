const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: 'certificate',
    brokers: ['localhost:9092']
}) 

module.exports = kafka;