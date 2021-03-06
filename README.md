
TopAPI SDK for Node.js
======

Using Es6 promise, all api return promise.

[![NPM](https://nodei.co/npm/topapi-node.png)](https://nodei.co/npm/topapi-node/)

Platform Compatibility
-------

Using Promise, Generator features of ES6 

When using node 0.11.x or greater, you must use the --harmony-generators flag or just --harmony to get access to generators.

When using node 0.10.x and lower or browsers without generator support, you must use gnode and/or regenerator.

io.js is supported out of the box, you can use co without flags or polyfills.


Install
-------

```
$ npm install topapi-node
```

Usage
-----

```js
var Top = require("topapi-node");

var top = new Top({
    appKey:"",
    appSecret: "",
    sessionKey: ""
});

var params = {
    page_size: 200,
    fields: "num_iid,title,price,pic_url,num,seller_cids,modified,list_time,has_showcase"
}

top.taobao_items_onsale_get(params).then(
    (data) => {
        console.log(data);
    },
    (err) => console.log(err)
)
```

Extend Top Apis
-----
```js
Since topAPI has huge APIs, and this only implements some of them, so you have two ways to extend that, both of them were fine.
Maybe the best way is contribute your code into lib/apis file. :)

First way, you can extend the TOPAPI prototype 

Top.prototype.taobao_items_onsale_get = function(params) {
    let self = this;
    let method = "taobao.items.onsale.get";
    return new Promise((resolve, reject) => {
        self.postAPI(method, params).then(
            (body) => {resolve(body.items_onsale_get_response);},
            (err) => reject(err)
        );
    });
}

Second way, postAPI to server

let method = "taobao.items.onsale.get";

var params = {
    page_size: 200,
    fields: "num_iid,title,price,pic_url,num,seller_cids,modified,list_time,has_showcase"
}

top.postAPI(method, params).then(
    (body) => {
        console.log(body);
    },
    (err) => console.log(err)
)
```

Process Control
-----

Suggest to use <a href="https://github.com/tj/co">CO</a> for process control

```js
co(function*() {
    let param = {
        parent_id: 0,
        picture_category_name: "test"
    };
    
    let category = yield top.taobao_picture_category_get(param);
    
    if (category) {
        category = yield top.taobao_picture_category_add(param);
    }
    
    return Promise.resolve(category);
}
```

License
-----
(c) Fork Ltd. Licensed under the MIT license.


Using ES6 features
Promise
Array Function
Generator



