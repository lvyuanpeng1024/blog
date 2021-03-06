<!-- Date: 2016-04-04 17:06 -->

# express 中的 req 属性

## req.query

当请求模式为 GET 的时候，这个方法用来获取传递过来的参数，其实也就是 url 上的 search 部分，如果没有参数传递过来，他会返回一个空的对象{},

url 上的参数都是字符串类型的，这个方法能返回一个对象类型没说明他直接字符串参数都转成 JSON 对象了

如果是 ajax 传递过来的参数，这个方法既可以解析到 url 上的参数，又可以解析到 ajax.data 上传递过来的参数

当请求模式为 POST 的时候，这个方法也返回空对象

## req.body

当请求模式为 POST 的时候，这个方法用来获取传递过来的参数，包括 ajax 过来的参数, 如果没有参数，会返回一个空的对象。

当模式为 GET 的时候，这个方法返回空对象,

## req.params

一个对象，其包含了一系列的属性，这些属性和在路由中命名的参数名是一一对应的。我感觉本质实际上就是对 url 的解析

路由的模式有两种第一种是字符串模式，例如

```js
app.get('data', function (req, res) {});
```

另一种是正则表达式模式，例如：

```js
app.get(/data/, function (req, res) {});
```

当路由是字符串模式，比如

```js
app.get('/data/:param1/:param2', function (req, res) {});
```

冒号后面的部分数量不是固定的，那么当访问`/data/zhangsan/14`的时候,

```js
// GET /user/tj
req.params.param1; //zhangsan
req.params.param2; //14
```

这样就可以访问到路由上的某部分参数了，如果不好理解的话，可以参考一下 CI 里面的`$this->uri->segment()`方法

当使用正则表达式来定义路由规则，捕获组的组合一般使用 req.params[n]，这里的 n 是第几个捕获租。这个规则被施加在无名通配符匹配，比如/file/\*的路由：

```js
// GET /file/javascripts/jquery.js
req.params[0];
// => &javascripts/jquery.js&
```
