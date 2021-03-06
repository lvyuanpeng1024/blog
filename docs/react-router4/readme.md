<!-- Date: 2016-07-26 09:41 -->

# react-router4X 版本用法

Route 组件可能是 React Router 中需要我们理解和学习的最重要的组件，它最主要的任务是当 location 发生变化的时候，渲染对应的 UI 界面，基础用法如下：

```js
import { BrowserRouter as Router, Route } from 'react-router-dom';

<Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={NewsFeed} />
    </div>
</Router>;
```

## props.exact

当这个值设置为 true 的时候，将以“精准”的模式匹配 url：

```
<Route exact path="/one" component={About}/>
```

| path | location.pathname | exact | matches? |
| ---- | ----------------- | ----- | -------- |
| /one | /one/two          | true  | no       |
| /one | /one/two          | false | yes      |

## props.strict

当这个值设置为 true 的时候，将以“严格”模式匹配 url, path 末尾必须配合一个斜杠，否则不会匹配成功

```
<Route strict path="/one/" component={About}/>
```

| path  | location.pathname | matches? |
| ----- | ----------------- | -------- |
| /one/ | /one              | no       |
| /one/ | /one/             | yes      |
| /one/ | /one/two          | yes      |

## strict 和 exact 模式可以同时使用

```
<Route exact strict path="/one" component={About}/>
```

| path | location.pathname | matches? |
| ---- | ----------------- | -------- |
| /one | /one              | yes      |
| /one | /one/             | no       |
| /one | /one/two          | no       |

测试的例子：
exact path='/about' 或者'/about/'的时候

| url       | matches |
| --------- | ------- |
| /about    | true    |
| /about/   | true    |
| /about/id | false   |

strict path='/about'

| url       | matches |
| --------- | ------- |
| /about    | true    |
| /about/   | true    |
| /about/id | true    |

strict path='/about/'

| url       | matches |
| --------- | ------- |
| /about    | false   |
| /about/   | true    |
| /about/id | true    |

## Route 中的渲染方法

总共有三种渲染方法：平常只会使用以下三种中的一种，最常用的是 component

-   `<Route component>`
-   `<Route render>`
-   `<Route children>`

以上三种方式，都会获得相同的三个属性，可以用来将他们传递到`<Route/>`的组件中使用

-   match
-   location
-   history
    其中：

component 只会在地址匹配的时候，才会被渲染，如果使用这种方式，路由会根据指定的内容创建一个新的组件，因此这种方式不适用于内联渲染，稍后再说什叫做内联渲染。用法如下：

```js
<Route path="/user/:username" component={User} />;

const User = ({ match }) => {
    return <h1>Hello {match.params.username}!</h1>;
};
```

上面是 react-router 中文翻译手册中的案例， 我自己在测试的时候 竟然发现里面 return 语句是错的 报错内容(`username undefined`),经测试，正确的如下：

```js
<Route path="/user/:username" component={User} />;

const User = (match) => {
    return <h1>Hello {match.match.params.username}!</h1>;
};
```

细心的话可以发现，两个代码块中的不同之处在于 return 语句内部，连续使用了两个 match，这是因为前面说过，三种渲染方式都会返回一个对象，这个对象中包含三种属性，我在 return 语句前面使用`console.log(match)`输出之后，发现输出的是一个`Obejct{history:Object{}, match:Object{}, location: Object{}}`，由此可见传入进来的 match 参数本身就是一个对象，如果想要在`<h1>`元素中获取到指定的 username，必须使用`Obejct.match.params.username`来获取。

偶然间发现了和案例中的不同之处，在于传递参数的参数类型， 原案例中传递的参数是一个`{match}`, 而我没写大括号，这就导致结果天差地别!!

因为人家用的是 ES6 的语法，这种叫做`对象的结构赋值`，可以直接把对象中的 match 对象拿出来，所以人家才直接使用`match.params.username`，前面犯得错误，真的是笑掉大牙!!

这里要注意一点，上面案例并没有 return 了一个新的组件出来，仅仅只是一个 DOM 节点，这种方式就可以看做是一个`内联渲染`！官方是不推荐内联渲染的时候使用 component 的，官方建议使用 render 方式：

```js

```

参考网站：
<a href="http://www.oschina.net/translate/universal-web-apps-with-react-router-4">用 React Router 4 构建通用 JavaScript 应用</a>
