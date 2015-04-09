
TopAPI SDK for Node.js
======

[![NPM](https://nodei.co/npm/needle.png)](https://nodei.co/npm/needle/)

TopAPI SDK for node.js


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
    appKey: config.AppKey,
    appSecket: config.AppSecret,
    sessionKey: config.SessionKey
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

License
-----
(c) Fork Ltd. Licensed under the MIT license.


Using ES6 features
Promise
Array Function
Generator



