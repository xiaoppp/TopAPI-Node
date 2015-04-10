"use strict";

var should = require('should');

describe('TOPAPI test', () => {

    var Top = require("../index");

    var top = new Top({
        appKey:"",
        appSecret: "",
        sessionKey: ""
    });

    describe("extend TOP APIs", () => {
        it('should extend top api', () => {
            Top.prototype.taobao_items_onsale_get = function(params, p) {
                console.log(p);
                let self = this;
                let method = "taobao.items.onsale.get";
                return new Promise((resolve, reject) => {
                    self.postAPI(method, params).then(
                        (body) => {resolve(body.items_onsale_get_response);},
                        (err) => reject(err)
                    );
                });
            }

            var params = {
                page_size: 200,
                fields: "num_iid,title,price,pic_url,num,seller_cids,modified,list_time,has_showcase"
            }

            top.taobao_items_onsale_get(params).then(
                (data) => {
                    data.should.not.have.length(0);
                    done();
                },
                (err) => console.log(err)
            )
        })
    })

    describe("post api test", () => {
        it('should post top api', (done) => {
            let method = "taobao.items.onsale.get";

            var params = {
                page_size: 200,
                fields: "num_iid,title,price,pic_url,num,seller_cids,modified,list_time,has_showcase"
            }

            top.postAPI(method, params).then(
                (body) => {
                    console.log(body);
                    done();
                },
                (err) => console.log(err)
            )
        })
    })

    describe('taobao.picture.category.get', () => {
        it('should return category', (done) => {

            var params = {
                parent_id: 0,
                picture_category_name: "test category"
            };

            top.taobao_picture_category_get(params).then(
                (data) => {
                    data.should.not.have.length(0);
                    done();
                },
                (err) => console.log(err)
            );
        })
    });

    describe('taobao.items.onsale.get', () => {
        it('should return onsale items', (done) => {
            var params = {
                page_size: 200,
                fields: "num_iid,title,price,pic_url,num,seller_cids,modified,list_time,has_showcase"
            }

            top.taobao_items_onsale_get(params).then(
                (data) => {
                    data.should.not.have.length(0);
                    done();
                },
                (err) => console.log(err)
            )
        })
    });
})
