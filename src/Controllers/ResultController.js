exports.getReservedResources = async (req, resp) => {
	const { Kafka, logLevel } = require('kafkajs')
	const requesterAddress = req.query.userAddress.toLowerCase();
	const kafka = new Kafka({
		brokers: ['20.71.159.181:9092'],
		logLevel: logLevel.ERROR,
	})

	let grp = (Math.random() + 1).toString(36).substring(2);

	const consumer = kafka.consumer({ groupId: grp })
	await consumer.subscribe({ topics: [requesterAddress], fromBeginning: true })

	var array = new Array();
	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			array.push(message.value.toString());
		},
	})

	setTimeout(() => {
		resp.send(array);
	}, "1000");


};
