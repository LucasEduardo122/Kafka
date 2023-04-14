const kafka = require('../utils/kafka');

const consumer = kafka.consumer({groupId: 'certificate-group'});

async function run() {  
    await consumer.connect();
    await consumer.subscribe({topic: 'issue-certificate'});
    await consumer.run({
        eachMessage: ({topic, partition, message}) => {
            const prefix = `${topic}[${partition} | ${message.offset} / ${message.timestamp}]`
            console.log(`- ${prefix} ${message.key}#${message.value}}`)
        }
    })
}

run().catch(console.error)