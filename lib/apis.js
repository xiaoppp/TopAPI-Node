"use strict";
//var postAPI = require("./postAPI");
var util = require("util");

module.exports = function(proto) {

	proto.taobao_shopcats_list_get = function (token, params) {
		const method = "taobao.shopcats.list.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, params).then(
				(body) => {
					resolve(body.shopcats_list_get_response.shop_cats.shop_cat);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_user_seller_get = function (token, params) {
		const method = "taobao.user.seller.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.user_seller_get_response.user);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_sellercats_list_get = function (token, params) {
		const method = "taobao.sellercats.list.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.sellercats_list_get_response.seller_cats.seller_cat);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_items_onsale_get = function (token, params) {
		const method = "taobao.items.onsale.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.items_onsale_get_response.items.item);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_items_onsale_get_amount = function (token, params) {
		const method = "taobao.items.onsale.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.items_onsale_get_response);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_item_seller_get = function (token, params) {
		const method = "taobao.item.seller.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.item_seller_get_response.item);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_product_get = function (token, params) {
		const method = "taobao.product.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_items_inventory_get = function (token, params) {
		const method = "taobao.items.inventory.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.items_inventory_get_response.items.item);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_items_inventory_get_amount = function (token, params) {
		const method = "taobao.items.inventory.get";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.items_inventory_get_response);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_picture_category_get = function (token, params) {
		const method = "taobao.picture.category.get";
		return new Promise((resolve, reject) => {

			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body.picture_category_get_response.picture_categories.picture_category[0]);
				},
				(err) => {
					reject(err);
				}
			);
		});
	};

	proto.taobao_picture_category_add = function (token, params) {
		const method = "taobao.picture.category.add";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => resolve(body),
				(err) => reject(err))
		});
	};

	proto.taobao_picture_get = function *(token, params) {
		const method = "taobao.picture.get";
		return new Promise((resolve, reject) => {
			postAPI(method, token, params).then(
				(body) => resolve(body),
				(err) => reject(err));
		});
	};

	proto.taobao_picture_upload = function (token, params, filepath) {
		const method = "taobao.picture.upload";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params, filepath).then(
				(body) => {
					resolve(body.picture_upload_response.picture);
				},
				(err) => reject(err)
			);
		});
	};

	proto.taobao_picture_delete = function (token, params) {
		const method = "taobao.picture.delete";
		return new Promise((resolve, reject) => {
			this.postAPI(method, token, params).then(
				(body) => {
					resolve(body);
				},
				(err) => reject(err)
			);
		});
	};

}
