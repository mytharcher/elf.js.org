---
layout: doc
title:  URL与参数

trace: 文档 / 功能介绍 / URL与参数
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/url.html">URL与参数</a></span>
---

* TOC
{:toc}

URL及参数串的处理在各种丰富的Ajax应用中都有较多的使用场景，jslib准备了两个帮助开发者处理程序中的URL和参数相关操作的类：`js.net.URL`和`js.net.URLParameter`。由于参数处理是整个URL的一部分，所以我们先介绍参数处理类。

## URL参数处理

我们最常见的操作有两种，一是解析URL中的参数以获取各参数名和值，二则是当我们又一个数据对象的时候把这个对象序列化为一个HTTP需要的参数串。这两种需求都可以通过`js.net.URLParameter`类来帮助完成。参数类定义了一种保存URL参数的数据结构，基于这个数据结构再进行各种操作就可以完成不同的需求，我们还是通过例子来说明。

首先我们创建一个参数类的实例：

	var param = new js.net.URLParameter();

创建实例的同时也可以将已有的参数对象或字符串传给构造函数，就可以使参数实例包含已有的参数内容，例如：

	var param = new js.net.URLParameter({a: 1, b: 2});
	// or
	var param = new js.net.URLParameter('a=1&b=2');

如果你没有在初始化的时候传入参数，那么你可以随时调用实例的`set()`方法来设置你需要的参数，方法和构造函数的接口一致：

	param.set({c: 'def', d: 200});
	param.set('e=mc2&f=ff');
	param.set('g', 9.8);

在HTTP的POST请求时我们可能会需要同名参数有多个不同的值（比如多选的checkbox），jslib完全支持这种情况，只需照样用上面的`set()`方法来设置，多个值通过数组来表达：

	// 以下三种方法效果一样
	param.set('h', [1, 2, 3]);
	param.set({h: [1, 2, 3]});
	param.set('h=1&h=2&h=3');

需要注意的是当再次对同一个参数设置一组值的时候，后设置的会代替之前有的所有值，而不是追加。这意思就是上例中最终的结果是`'h=1&h=2&h=3'`，而不会是`'h=1&h=2&h=3&h=1&h=2&h=3&h=1&h=2&h=3'`。但如果在使用时的确需要对某个参数名追加更多的值，那么可以调用实例上的`add()`方法来追加，`add()`方法的参数和`set()`的是完全一致的。

在真正使用时我们可能需要获取参数对象中的某个值，那么这时候调用实例的`get()`方法并传入指定的参数名即可：

	var a = param.get('a'); // 1
	var e = param.get('e'); // 'mc2'

如果指定的参数存在多个值，那么将会返回一个数组：

	var h = param.get('h'); // [1, 2, 3]

而不指定参数的话，将返回一个包含全部参数的映射表：

	var paramObj = param.get(); // {a: 1, b: 2, c: 'def', d: 200, e: 'mc2', f: 'ff', g: 9.8, h: [1, 2, 3]};

如果指定的参数名在参数对象中不存在，则会返回`null`值。

怎么样，这个类是不是如你所想的简单？那我们在来看看URL处理类，它也会一样的好用。

## URL处理类

URL参数类要管理的仅仅是规则简单的URL参数部分，但一个完整的URL就复杂多了，包含了这些内容：

* 协议部分
* 主机部分
  * 主机名
  * 端口号
* 访问路径
* 查询参数
* 锚点

jslib中设计的URL管理类完成了对URL数据结构的封装，对外提供获取/设置各部分的函数接口，同时也可以完成对URL字符串解析和序列化为字符串的操作，我们可以通过一些例子来说明使用URL类的便利性。

创建一个URL对象：

	var url = new js.net.URL();

不传入初始参数则默认为当前地址栏的url，也可以传入指定url的字符串或者url各部分组成的映射表对象。现在我们用这样一个地址栏的url来举例说明：

	var url = new js.net.URL('localhost/folder/test.html?a=1&b=2#table');

这时我们可以先看看场景的url中各个部分都是什么：

	url.getProtocol(); // 因为默认没有设置，则认为是http协议，这里输出：'http'
	url.getHost(); // 和getHostname不同，如果有端口号，这里会连端口号一起返回，这里输出：'localhost'
	url.getHostname(); // 'localhost'
	url.getPort(); // 默认http端口80，所以不保存，这里输出空串：''
	url.getPath(); // '/folder/test.html'
	url.getParameter(); // {a: [1], b: [2]}
	url.getQuery(); // 'a=1&b=2'
	url.getHash(); // 'table'

对应的我们也设计了相应的set方法，如果需要设置其中任何一个部分，可以使用对应的set方法：

	url.setProtocol(js.net.URL.PROTOCOL_HTTPS);
	url.setHostname('elf.js.org');
	url.setPort(443);
	url.setPath('../docs/index.html');
	url.setParameter({a: 100, b: '中文'});
	url.setHash('');

另外，所有的set方法都是可以链式调用的，即你可以这样来写：

	url.setPath('/index.html').setHash('some-part');

URL的参数设置的方法和URLParameter中的set方法的接口完全一致，这就是说你之前怎么设置参数的，那么在URL里也是同样的方法。

当我们需要最终得到一个URL完整字符串时，我们可以调用实例的`toString()`方法，该方法可以传入一个编码函数，以提供对URL参数的编码，例如：

	console.log(url.toString(encodeURIComponent));
	// 'https://elf.js.org:443/docs/index.html?a=100&b=%E4%B8%AD%E6%96%87#some-part'

有了这些方法，那么在处理URL的时候就会非常方便了。

-EOF-