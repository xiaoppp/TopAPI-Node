"use strict";

var _ = require("underscore"),
    needle = require('needle'),
    crypto = require("crypto"),
    moment = require('moment'),
    querystring = require('querystring');


var createSign = function (params, secret) {
    let s = secret;
    let keys = [];
    for (var key in params) {
        keys.push(key);
    }

    keys = keys.sort();

    for (var i in keys) {
        let key = keys[i];
        s += key + params[key];
    }
    s += secret;

    return crypto.createHash('md5').update(s, 'utf-8').digest('hex').toUpperCase();
}

module.exports = function(proto) {
    proto.postAPI = function(method, params) {
        var self = this;

        return new Promise((resolve, reject) => {
            let p = {
                method: method,
                partner_id: "top-apitools",
                v: '2.0',
                app_key: self.config.appKey,
                format: "json",
                timestamp: moment(new Date()).format("YYYY-MM-DD HH:mm:ss").toString(),
                session: self.config.sessionKey,
                sign_method: 'md5'
            };

            _.extend(p, params);

            p.sign = createSign(p, self.config.appSecret);

            let postdata = querystring.stringify(p);
            console.log("==============postdata================");
            console.log(self.config.restURL + "?" + postdata);

            needle.post(self.config.restURL, p, function (err, res, body) {
                if (err) reject(err);

                console.log("============res body============");
                console.log(body);
                console.log("========================");

                resolve(body);
            });
        });
    }
}