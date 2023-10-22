exports.getList = async (req, resp) => {
	const axios = require("axios");
	const requesterAddress = req.query.userAddress;
	const dealsDataFromAPI = await axios.get('http://10.0.0.5:3000/deals?chainId=65535&requester='.concat(requesterAddress));
	var result = dealsDataFromAPI.data.deals;
	var array = new Array();
	for (var i = 0; i < result.length; ++i) {
		let unix_timestamp = result[i]['startTime'];
		var date = new Date(unix_timestamp * 1000);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var seconds = "0" + date.getSeconds();
		
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		
		var formattedTime = day + '/' + month + '/' + year + ', ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' GMT';

		var jsonObject =
		{
			contractID: result[i]['dealid'],
			startTime: formattedTime
		}
		array.push(JSON.stringify(jsonObject, null, "\t"));
	}
	resp.send(array);
};
