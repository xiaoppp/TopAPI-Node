"use strict";
var Top = require("../index");
var should = require('should');

describe('TOPAPI test', () => {

    var top = new Top({
        appKey:"12458315",
        appSecret: "982717aa4b8cba86a6bea2953f3fbb58",
        sessionKey: "610250225e19d0f4b533f4df7932f273c9797bcbe5cfc2a75404940"
    });

    describe("post api test", () => {
        it('should post top api', (done) => {
            let method = "taobao.items.onsale.get";

            var params = {
                page_size: 200,
                fields: "num_iid,title,price,pic_url,num,seller_cids,modified,list_time,has_showcase"
            }

            top.postAPI(method, params).then(
                (body) => {
                    done();
                },
                (err) => console.log(err)
            );
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
