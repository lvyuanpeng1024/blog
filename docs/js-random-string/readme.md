<!-- Date: 2016-11-28 09:03 -->

# js 计算随机字符串

```js
// 参数：length 想要的随机字符串的长度
function getRandomString(length) {
 var length = length || 32;
    var str = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';
    var reStr = ';
    for (var i = 0; i < length; i++) {
        var random = parseInt(Math.random() * 36);
        console.log(str[random])
        reStr += str[random]
    }
    console.log(reStr)
}
```
