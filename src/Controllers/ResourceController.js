exports.findCompatibleResource = async (req, resp) => {
	const axios = require("axios");

	const workerpoolOrderDataFromAPI = await axios.get('http://20.71.159.181:3000/workerpoolorders?chainId=65535');
	var result = workerpoolOrderDataFromAPI.data.orders;

	/*
		const requirements = req.body.requirements;
		const quantativeParameters = requirements.quantativeParameters;
		const osRequirement = requirements.osRequirement;
		const tee = requirements.tee;
		*/


	var array = new Array(JSON.stringify(req.body, null, "\t"));
	for (var i = 0; i < result.length; ++i) {
		var jsonObject =
		{
			orderHash: result[i]['orderHash'],
			category: result[i]['order'].category
		}
		array.push(JSON.stringify(jsonObject, null, "\t"));
	}
	resp.send(array);
};