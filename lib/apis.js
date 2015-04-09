"use strict";
//var postAPI = require("./postAPI");
var util = require("util");

module.exports = function(proto) {

    proto.taobao_picture_category_get = function (params) {
        let self = this;

        let method = "taobao.picture.category.get";
        return new Promise((resolve, reject) => {
            self.postAPI(method, params)
                .then(
                (body) => {
                    resolve(body.picture_category_get_response.picture_categories);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    };

    proto.taobao_picture_category_add = function (params) {
        let self = this;
        let method = "taobao.picture.category.add";
        return new Promise((resolve, reject) => {
            self.postAPI(method, params).then(
                (body) => resolve(body),
                (err) => reject(err))
        });
    };

    proto.taobao_picture_get = function (params) {
        let self = this;
        let method = "taobao.picture.get";
        return new Promise((resolve, reject) => {
            postAPI(method, params).then(
                (body) => resolve(body),
                (err) => reject(err));
        });
    };

    proto.taobao_items_onsale_get = function(params) {
        let self = this;
        let method = "taobao.items.onsale.get";
        return new Promise((resolve, reject) => {
            self.postAPI(method, params).then(
                (body) => {resolve(body.items_onsale_get_response);},
                (err) => reject(err)
            );
        });
    }
}
