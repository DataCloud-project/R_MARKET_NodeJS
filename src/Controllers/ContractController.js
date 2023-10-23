exports.getList = async (req, resp) => {
	const axios = require("axios");
	const requesterAddress = req.query.userAddress;
	const dealsDataFromAPI = await axios.get('http://10.0.0.5:3000/deals?chainId=65535&requester='.concat(requesterAddress));
	var result = dealsDataFromAPI.data.deals;


	var array = new Array();
	for (var i = 0; i < result.length; ++i) {

		var jsonObject =
		{
			contractID: result[i]['dealid'],
			startTime: result[i]['startTime']
		}


		array.push(JSON.stringify(jsonObject, null, "\t"));
	}
	resp.send(array);
};
