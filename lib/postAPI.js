"use strict";

const _ = require("underscore"),
	request = require('request'),
	crypto = require("crypto"),
	moment = require('moment'),
	util = require('util'),
	querystring = require('querystring');

function createSign(params, secret) {
	let s = secret;
	let keys = [];
	for (let key in params) {
		keys.push(key);
	}

	keys = keys.sort();

	for (let i in keys) {
		let key = keys[i];
		if( typeof key ==  'string' ) {
			s += key + params[key];
		}
	}
	s += secret;

	return crypto.createHash('md5').update(s, 'utf-8').digest('hex').toUpperCase();
}

module.exports = function(proto) {

	proto.postAPI = function(method, token, params) {
		return new Promise((resolve, reject) => {

			let p =  params || {};

			_.extend(p, {
				method: method,
				partner_id: "top-apitools",
				v: '2.0',
				app_key: this.appKey,
				format: "json",
				timestamp: moment(new Date()).format("YYYY-MM-DD HH:mm:ss").toString(),
				session: token,
				sign_method: 'md5'
			});

			p.sign = createSign(p, this.appSecret);

			let postdata = querystring.stringify(p);
			console.log("postdata: " + postdata);

			request.post(
				{
					uri: this.restURL,
					formData: p
				}
				, function (err, response, body) {
					if (err)
						reject("topapi exec error: " + util.inspect(err));

					console.log("============res body============");
					console.log(body);
					console.log("========================");
					resolve(JSON.parse(body));
				}
			)
		});
	};
	proto.postFile = function(method, token, params, filepath) {
		return new Promise((resolve, reject) => {

			let p =  params || {};

			_.extend(p, {
				method: method,
				partner_id: "top-apitools",
				v: '2.0',
				app_key: this.appKey,
				format: "json",
				timestamp: moment(new Date()).format("YYYY-MM-DD HH:mm:ss").toString(),
				session: token,
				sign_method: 'md5'
			});

			p.sign = createSign(p, this.appSecret);

			if (!_.isUndefined(filepath))
				p.img = require("fs").createReadStream(filepath);

			let postdata = querystring.stringify(p);
			console.log("postdata: " + postdata);

			request.post(
				{
					uri: this.restURL,
					formData: p
				}
				, function (err, response, body) {
					if (err)
						reject("topapi exec error: " + util.inspect(err));

					console.log("============res body============");
					console.log(body);
					console.log("========================");
					resolve(JSON.parse(body));
				}
			)
		});
	}
};