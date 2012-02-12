---
layout: doc
title:  新手入门
date:   2011-12-17

contentClass: content-type-download

trace: 文档 / 功能介绍 / 新手入门
traceHTML: |
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/getting-started">新手入门</a></span></span>
---

* TOC
{:toc}

## elf+js是什么？

elf+js是一个为愉悦的开发而设计的JavaScript基础库。

他由三个子项目组成：jslib，elf和jslib-builder。核心库jslib中提供了大量DOM操作方法，浏览器判断和兼容性修复，面向对象的类结构支持，数据类型判断，扩展数据类型Hash、Set、XArray支持，Ajax支持和文本处理等常用的基础功能。同时elf为基础库使用方便设计了大量可以灵活调用的快捷方式，以达到像jQuery那书写简洁的效果。加上jslib-builder这个为基础库自由选择功能灵活打包导出的构建工具，可以为你的应用裁剪功能量身定制。

所以，使用elf+js可以很大程度上提高JavaScript开发的效率。

## 如何使用elf+js？

### 获取基础库文件

有以下两个方式可以获取：

0. 在elf+js首页或下载页面点击下载你需要的版本
0. 使用在线的jslib-builder按需定制导出

当然，如果希望基于elf+js做自己的基础库开发，非常欢迎[Fork on Git](https://github.com/elfjs/)。

### 起步！

没错，要写的正是“Hello world!”。打开任意一个文本编辑器，粘贴以下的代码：

	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8" />
	</head>
	<body>
	<div id="box">.</div>
	<script src="elf.js"></script>
	<script>
	elf(function () {
		elf('#box').html('Hello world!').css({
			textAlign: 'center'
		}).tween({
			property: {fontSize: {to: 200, unit: '%'}}
		}).on('click', function (ev) {
			alert(elf(this).text());
		});
	});
	</script>
	</body>
	</html>

另存为hello.html，同时保证已经下载了elf.js文件并放在同级目录下。然后双击或在浏览器中打开刚刚编辑的hello.html文件，运行正常的话可以看到“Hello world!”的文字在页面上以动画的方式变大显示，那么就代表起步成功了！

正如例子里的，我们建议你把`<script>`标签放在`</body>`结束之前，这样的好处是在加载资源的时候不会被js执行所阻断，同时还可以保证js在文档加载完毕后才运行。同时我们建议你把网页里要执行的启动代码都使用`elf(function () {/*your code here*/})`包装起来，和jQuery一样，这是为了保证在DOM加载ready后才执行这些代码。

## 常用功能简介

### 包结构和命名空间

作为elf+js的核心内容，jslib是按照类似Java的类/包结构设计的，同时命名规则也如此。这里分别要介绍一下elf+js中`js.*`和`elf.*`两个命名空间下的内容。

`js.*`是jslib使用的命名空间，所有会作为一个基础功能或者解决一个实际问题的实体或者我们称之为类的东西都会归在这个命名空间之下。0.2.0版本开始以功能相关性划分为了`js.util.*`、`js.dom.*`、`js.client.*`、`js.net.*`、`js.text.*`和`js.transition.*`六个包，各个包内有处理某个具体问题的类。从名字上很容易看出jslib现有的功能涵盖了通用部分，DOM操作部分，客户端相关部分，网络相关部分，文本处理部分和动画相关部分。

以下是0.2.0版本中的主要功能类的列表：

包/类名 | 类型 | 功能简介
-|-|-
js | 包 | jslib顶级命名空间
js.client | 包 | 客户端属性及兼容性修复相关包
js.client.Browser | 静态类 | 浏览器类型及版本信息类
js.client.Features | 静态类 | 浏览器兼容性支持探测类(包含修复插件)
js.dom | 包 | DOM操作相关功能包
js.dom.Attribute | 静态类 | 元素属性操作类
js.dom.ClassName | 静态类 | 元素class属性操作类
js.dom.Cookie | 静态类 | cookie管理类
js.dom.Drag | 静态类 | 元素拖动控制类
js.dom.Event | 静态类 | DOM事件管理类
js.dom.Node | 普通类 | 元素集合控制类(类似jQuery主类)
js.dom.Operation | 静态类 | 元素操作类
js.dom.Relation | 静态类 | 元素关系类
js.dom.Selector | 静态类 | CSS选择器类
js.dom.Stage | 静态类 | 页面全局相关控制类
js.dom.Style | 派生类 | 元素的样式管理类(继承自js.util.Hash)
js.dom.Traversal | 静态类 | DOM树遍历类
js.dom.Tween | 派生类 | 元素动画类(继承自js.transition.Timeline)
js.net | 包 | 网络相关功能包
js.net.Ajax | 普通类 | 异步请求类
js.net.URL | 普通类 | URL管理类
js.net.URLParameter | 派生类 | URL参数管理类(继承自js.util.Hash)
js.text | 包 | 文本处理相关功能包
js.text.Template | 静态类 | 模板拼接类
js.text.WordString | 派生类 | 单词串类(继承自js.util.Set)
js.transition | 包 | 渐变管理包
js.transition.Easing | 静态类 | 缓动函数集合
js.transition.Timeline | 普通类 | 时间轴管理类
js.util | 包 | 通用功能包
js.util.Class | 静态类 | 类管理
js.util.Global | 静态类 | 全局管理类
js.util.Hash | 普通类 | Hash表模拟类
js.util.JSON | 静态类 | JSON数据类型兼容类
js.util.Namespace | 静态类 | 命名空间管理类
js.util.Set | 普通类 | 集合管理类
js.util.Type | 静态类 | 类型判断类
js.util.XArray | 派生类 | 扩展数组类(继承自Array)

这里罗列的并不是全部基础库的功能，如果需要了解全部的功能，请浏览[API参考手册][]。

从上面的包结构列表看起来可能会觉得使用elf+js很复杂，但elf就是为了简化这些复杂的结构而设计的。所以你大可不必被这么一长串列表吓到，这只是告诉你elf+js有哪些主要功能，而实际上通过我们设计的快捷方式，使用起来是非常简单的，下面我们会举一些例子来教你快速上手。

### DOM操作的快捷方式

#### 获取DOM元素

你一定对jQuery中通过CSS选择器获取DOM元素的方法有深刻的印象，没错，elf+js也支持这样的方法，不过略有的区别是，为了缩减选择器类的体积（压缩后只有2.02kB），我们放弃了对大量伪类选择器的支持，仅最常用的支持ID、标签、class和属性选择器。除了不支持伪类以外，使用方式上是完全一样的，例如下面的代码：

	elf('#Header>p.additional');

将返回ID为“Header”的元素下所有classname包含“additional”的直接子级`<p>`标签。之后还可以通过下面两种方式按索引获取集合内的元素：

	var addtional = elf('#Header>p.additional');
	alert(additional[0]); // HTMLElement 获得原始的元素
	alert(additional.get(0)); // Object 获得只包含第0个元素的新集合对象

我想你一定不会仅仅满足于只是获取元素，elf+js同样支持链式调用。不过这里简单介绍一些原理，正如jQuery，使用`elf('selector')`返回的也是一个集合对象，在elf+js里由`js.dom.Node`类来管理。每一次使用选择器获得集合对象后，就可以调用对象实例上的方法了。

#### 改变元素的classname

改变集合中元素的classname有3种方法，分别是`addClass`、`removeClass`和`toggleClass`，还有一个常用的判断元素是否拥有某些classname的方法`hasClass`，具体用法：

	var node = elf('body>p');
	
	node.addClass('abc def');
	alert(node.hasClass('abc def')); // true
	
	node.remvoeClass('def');
	alert(node.hasClass('def')); // false
	
	node.toggleClass('abc', false);
	alert(node.hasClass('abc')); // false
	
	node.toggleClass('abc');
	alert(node.hasClass('abc')); // true

#### 设置样式

有时候设置classname并不能完全控制元素的样式，于是我们还是会用到CSS的办法，特别是在实现动画或者其他动态计算的时候。这个方法也很简单，`css('key', 'value')`，同时可以用作set和get：

	var node = elf('body>p');
	
	node.css('color', '#f00');
	alert(node.css('color')); // #f00
	
	node.css({
		fontSize: '12px',
		backgroundColor: '#000'
	});
	alert(node.css().backgroundColor); // '#000'

#### 添加事件

比如我们要给页面上所有外部链接加上一个是否要跳出当前页面都判断，我们可以这么写：

	elf('a[href^=http]').on('click', function (ev) {
		if (!confirm('你真的要离开吗？')) {
			ev.preventDetault();
		}
	});

我们这大多数情况下启动页面需要用到window.onload，同样也可以改为elf的绑定方式：

	elf(window).on('load', function () {
		// Your code here
	});

当然我们更推荐这种从jQuery中借鉴过来的写法：

	elf(function () {
		// Your code here
	});

因为这样写不需要等待页面上图片资源或者iframe内容的加载，而且更加简洁方便。

#### 其他常用的DOM操作方法

我们经常会要设置元素的html内容，这仍然和jQuery一样：

	elf('#SomeNode').html('<strong>Strong</strong> <em>Italic</em> text');

插入一个元素：

	elf('#SomeNode').append('#AnotherNode');

移除一个元素：

	elf('#AnotherNode').remove();

很遗憾，这里没有提供类似jQuery那样通过一段html创建节点的方式，不过你可以通过下面的方法来解决这个问题：

	var another = elf.dom.Node.create('div', {id: 'AnotherNode'/*, etc.*/});
	another.appendTo(document.body);

通常我们还会用到大量根据不同关系寻找节点的方法，这里先列举一些：

	var node = elf('div.some-nodes');
	
	node.next(); // 返回node集合中所有元素的下一个兄弟节点组成的新的集合
	node.next(true); // 返回node集合中所有元素的下一个包含空文本节点的兄弟节点组成的新的集合
	node.next('.highlignt'); // 返回node集合中所有元素的下一个classname为highlight的兄弟节点组成的新的集合
	node.nextAll('.highlight'); // 返回node集合中第一个元素之后所有classname为highlight的兄弟节点的新的集合
	
	node.prev(); // 返回node集合中所有元素的上一个兄弟节点组成的新的集合
	node.prevAll(); // 返回node集合中第一个元素之前所有的所有兄弟节点的新的集合
	
	node.siblings(); // 返回node集合中第一个元素的所有兄弟节点集合(不包括自身！)
	
	node.parent(); // 返回node集合中所有元素的父节点元素组成的新的集合
	node.ancestors('div'); // 返回node集合中第一个元素的所有标签名为div的祖先节点的新的集合
	
	node.firstChild(); // 返回node集合中所有元素的第一个子节点组成的新的集合
	node.lastChild('p.extra'); // 返回node集合中所有元素的最后一个classname为extra的p标签组成的新的集合
	
	node.children('p'); // 返回node集合中第一个元素的所有标签名为p的子节点集合
	
	node.contains('p.extra'); // 判断node集合中第一个元素的子孙节点中是否包含选择器定位的元素

所有的这些关系查询方法都可以使用node.next()示例中有的各种参数，特别是选择器，以帮助你更方便的定位你要找的元素。

这里已经介绍了很多DOM操作中常用的方法，当然我们提供的不只是这些，更详细的说明请看[API参考手册][]的js.dom包部分，node集合相关的操作请参看js.dom.Node类部分。

### 更多的常用快捷方式

我们在应用开发中肯定不只是做一些与DOM有关的事情，这里列出了一个更多常用方法的快捷方式列表。所有的快捷方法都会以`elf()`开头，没有挂在`elf`顶级对象下是因为可能导致命名空间的冲突，同时一对括号`()`更能显著的表明这是一个快捷方式。

#### 浏览器属性

	elf().Chrome;
	elf().Firefox;
	elf().IE;
	elf().Opera;
	elf().Safari;

通过以上的属性可以判断当前运行在哪种浏览器下，如果取值为`undefined`，则不是该浏览器，否则将会取得当前浏览器的两位版本号。

#### 原始DOM操作相关

	elf().g(id); // 根据ID获取元素的快捷写法，相当于document.getElementById(id)
	
	elf().addClass(elem, clz); // 为一个元素添加classname
	elf().removeClass(elem, clz); // 为一个元素移除classname
	elf().toggleClass(elem, cls, force); // 添加或移除classname
	elf().hasClass(elem); // 判断一个元素是否包含classname
	
	elf().getStyle(elem, key); // 获取一个元素的某个样式属性
	elf().setStyle(elem, key, value); // 设置一个元素的某个样式属性
	elf().setCSSText(elem, css); // 以CSS文本的方式设置一个元素的某个样式属性
	
	elf().getPosition(elem, refer); // 获取元素的相对位置
	
	elf().on(elem, eventType, fn); // 对元素绑定指定类型的事件处理函数
	elf().un(elem, eventType, fn); // 对元素移除指定类型的事件处理函数

#### 数据类型判断相关

	elf().isArray(obj); // 判断是否是数组
	elf().isBoolean(obj); // 判断是否是布尔类型
	elf().isDate(obj); // 判断是否是日期类型
	elf().isDefined(obj); // 判断是否已定义
	elf().isFunction(obj); // 判断是否是函数类型
	elf().isNaN(obj); // 判断是否是NaN
	elf().isNull(obj); // 判断是否是null
	elf().isNumber(obj); // 判断是否是数字类型
	elf().isObject(obj); // 判断是否是Object类型
	elf().isRegExp(obj); // 判断是否是正则表达式类型
	elf().isString(obj); // 判断是否是字符串类型
	elf().isUndefined(obj); // 判断是否未定义
	
	elf().isDocument(obj); // 判断是否是document
	elf().isElement(obj); // 判断是否是元素类型
	elf().isWindow(obj); // 判断是否是window

#### 面向对象相关

	elf().clone(origin); // 深度克隆一个对象
	elf().copy(source, destination); // 浅拷贝一个对象到目标对象
	elf().mix(base, other); // 以另一个对象上比base对象上多的部分混入base对象
	
	elf().Class(proto, super); // 定义一个类
	elf().inherit(sub, super); // 使sub类继承自super类
	elf().implement(clz, interfaces); // 对clz类扩展interfaces上的所有方法

#### Ajax实现

	elf().ajax({
		url: 'your/path.action',
		method: 'POST',
		data: {
			username: 'Archer',
			age: 27
		},
		responseType: 'JSON'
		onsuccess: function (response) {
			// 请求成功后更多的处理
		},
		onfailure: function (xhr) {
			// 当失败时候的处理
		}
	});

#### 其他通用方法

	elf().noop(); // 空函数
	elf().guid(); // 获取一个全局唯一ID
	elf().namespace(nsStr); // 计算字符串代表的命名空间对象
	elf().ready(fn); // 把函数fn加入到DOM加载就绪的准备队列
	elf().evalScript(text); // 执行一段脚本
	elf().toArray(arrayLike); // 把一个类数组的对象转化成数组类型

### 原生语言扩展

elf+js根据ecma-262第五版和JavaScript 1.8中已有的标准针对低级浏览器做了一些高级特性的兼容实现，包括下面代码中的一些方法：

	String.prototype.trim(); // 清除字符串两端的空白字符
	
	Array.prototype.filter(fn, scope); // 通过fn过滤数组元素
	Array.prototype.forEach(fn, scope); // 遍历数组每个元素执行fn方法
	Array.prototype.indexOf(object); // 获得object元素中数组中的索引
	Array.prototype.map(fn, scope); // 通过fn函数获得原数组的映射数组
	Array.prototype.some(fn, scope); // 遍历数组元素当任意一个元素通过fn测试时返回真
	Array.prototype.every(fn, scope); // 遍历数组元素当所有元素通过fn测试时返回真
	
	Date.now(); // 获取当前客户端系统时间
	
	Object.keys(object); // 获取object对象上的属性键名列表
	
	Function.prototype.bind(scope); // 将函数的执行域绑定到某个scope对象上
	
	JSON.parse(string); // JSON解析字符串
	JSON.stringify(object); // JSON序列化对象

只要引入了elf+js中的这些特性，你就可以放心大胆的在为IE开发的应用中使用这些方便的方法了。

## 小结

到这里，我想你应该可以初步了解elf+js如何上手使用了，如果对这些罗列的方法还有疑问，请查看[API参考手册][]。

{{post.category}}

{% for cat in post.categories %}
{{ cat }}
{% endfor %}

-EOF-

[mytharcher]: mailto:mytharcher@gmail.com
[{{ site.links.api.text }}]: {{ site.links.api.url }}