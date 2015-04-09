"use strict";


var Config = require('./lib/config');

var Top = function(options) {
    this.config = new Config(options);
}

require("./lib/postAPI")(Top.prototype);
require("./lib/apis")(Top.prototype);

module.exports = Top;