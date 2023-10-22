exports.findCompatibleResource = async (req, resp) => {
	const axios = require("axios");

	const workerpoolOrderDataFromAPI = await axios.get('http://10.0.0.5:3000/workerpoolorders?chainId=65535');
	var result = workerpoolOrderDataFromAPI.data.orders;

	/*
		const requirements = req.body.requirements;
		const quantativeParameters = requirements.quantativeParameters;
		const osRequirement = requirements.osRequirement;
		const tee = requirements.tee;
		*/


	var array = new Array();
	for (var i = 0; i < result.length; ++i) {
		var hardware = JSON.parse(result[i]['order'].hardwaredescription);
		if (req.body.requirements.cpu.min <= hardware.min_cpu && req.body.requirements.cpu.max >= hardware.max_cpu) {
			if (req.body.requirements.ram.min <= hardware.min_ram && req.body.requirements.ram.max >= hardware.max_ram) {
				if (req.body.requirements.bandwidth.min <= hardware.min_bw && req.body.requirements.bandwidth.max >= hardware.max_bw) {
					var jsonObject =
					{
						orderHash: result[i]['orderHash'],
						order: result[i]['order']
					}
					array.push(JSON.stringify(jsonObject, null, "\t"));
				}
			}
		}
	}
	resp.send(array);
};