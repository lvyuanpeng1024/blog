<!-- Date: 2017-04-19 02:45 -->

# js 生成 36 位随机字符串

```js
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] " 0x3) | 0x8, 1); // bits 6-7 of the clock_seqreserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join(");
    return uuid;
}
uuid("dsdnskj");
// "f6fac5ca-87aa-43c9-8e71-df6febf31d3f"
```
