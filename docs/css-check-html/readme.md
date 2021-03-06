<!-- Date: 2017-07-20 13:03 -->

# css 来做 html 检查

当我们在写 HTML 的时候，出现语法错误的时候很难察觉。这很容易导致代码里面有 无效的，诡异的僵尸代码，而且很不明显。

有很多方法来检查我们的 HTML 代码，发现并解决错误，比如：使用 W3C 标签校验服务 。 另外我们也有简单的方法并且能将其整合到我们的工作流当中来，那就是：使用一些稍微高级的 CSS 选择器来高亮潜在问题区域。有一些简单的错误我们可以用 CSS 选择器来捕捉到他。

## 行内样式

```css
*[style] {
    border: 5px solid red; /* Style to make the elements noticeable */
}
```

这个选择器将标记处页面上所有写了行内样式的标签。由于行内样式权重很高所以很难覆盖它，通常我们需要避免写行内样式。尽管有时候我们必须要使用行内样式，这个方法也可以将它们高亮，作为个别案例评估标准。

当用这个办法选中了问题元素后我们可以写任意的样式来让它们更加明显。

## A 标签里面的链接非法

```css
a:not([href])
a[href=""#""]
a[href=""]
a[href*=""javascript:void(0)""] { …
```

上述选择器将标记出 A 标签，无 href, 活着有一个无效的 href.
不可访问的图片 Img 标签 -

```css
img:not([alt]) {
    ...;
}
```

作为一个笼统的规则，所有的图片应该有 alt 属性。如果没有这个属性很多屏幕大多数屏幕阅读器将会读取 img 的 src 属性，这个信息对于用户来说是无用的，混淆的。

还有一点应该注意，上述的选择器将不会选取带有空值的 alt 属性，例如 `<img src=""photo.png"" alt="">`。 因为空值有可能是开发者蓄意让屏幕阅读器跳过这个 img 标签, 比如这个图片是纯装饰性的。但是将空值的标记出来，有时候也是需要的。

```css
img[alt=''] {
    ...;
}
```

## 缺少文档语言

```css
html:not([lang]) html[lang=''] {
    ...;
}
```

所有的 html 标签都应该写明的属性就是[lang]属性。这个属性将会告诉屏幕阅读器这个网页用的是种语言，以使阅读器选择那种语言来朗读。

如果没有这个标签会发生啥呢？来看个视频：

分享自 @HTeuMeuLeu’s 为什么设置 (eg. lang=”en”) 这么重要.
