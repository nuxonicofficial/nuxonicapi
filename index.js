const axios = require("axios");
class Api {
	constructor(key) {
		if (!key) throw Error('Please provide an API_KEY.');
		this.apikey = key;
	}
}

module.exports.ApiKey = Api