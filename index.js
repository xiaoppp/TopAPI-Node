"use strict";

class Top {
	constructor(options) {
		options = options || {};
		this.appKey = options.appKey;
		this.appSecret = options.appSecret;
		this.restURL = options.restURL || 'http://gw.api.taobao.com/router/rest';
	}
}

require("./lib/postAPI")(Top.prototype);
require("./lib/apis")(Top.prototype);

module.exports = Top;