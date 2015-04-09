"use strict";

var _ = require("underscore");

function Config(options) {

    options = options || {};

    if (_.isUndefined(options.appKey) || _.isUndefined(options.appSecret) || _.isUndefined(options.sessionKey))
        throw new Error("Sorry, the configuration is not correct.");

    this.appKey = options.appKey;
    this.appSecret = options.appSecret;
    this.sessionKey = options.sessionKey;

    this.restURL = options.restURL || 'http://gw.api.taobao.com/router/rest';
}

module.exports = Config;
