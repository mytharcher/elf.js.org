---
layout: doc
title:  文本处理

trace: 文档 / 功能介绍 / 文本处理
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/text.html">文本处理</a></span>
---

* TOC
{:toc}

在开发中字符串的操作也会很频繁，这类处理在jslib中都归到了`js.text`包下，目前这个包的内容还不够完善，但已经有了几个常用的类，今后会在碰到问题后逐渐再升级这个包。

## 简单模板

模板可以说是我在字符串操作中用的最多的功能，用于拼接一个同样模式不同数据的文本内容，配合DOM的innerHTML方法，可以让JavaScript方便的创建DOM结构的内容。我们使用了`js.text.Template`这个静态类来实现模板的功能，和其他模板引擎的语法类似，jslib使用了和Tangram一样的模板变量定义方式“#{name}”或者“#{0}”，区别在于传入的参数是一个对象映射表或者是直接的函数参数索引。

语法：
:	
~~~
js.text.Template.format('template with #{variable}', {variable: '变量'});
~~~

举个例子，如果我们要通过JavaScript动态生成一个项目列表，那么就可以用模板来拼接：

	var liTpl = '<li id="Item_#{index}" class="#{parity}">#{content}</li>';
	var data = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	var html = [];
	for (var i = 0; i < data.length; i++) {
		html.push(js.text.Template.format(liTpl, {
			index: i,
			parity: i % 2 ? 'even' : 'odd',
			content: data[i]
		}));
	}
	document.getElementById('NewsList').innerHTML = html.join('');

上面的程序将会得到以下的html内容：

	<!-- before: -->
	<ul id="NewsList"></ul>
	
	<!-- after: -->
	<ul id="NewsList">
		<li id="Item_0" class="odd">a</li>
		<li id="Item_1" class="even">b</li>
		<li id="Item_2" class="odd">c</li>
		<li id="Item_3" class="even">d</li>
		<li id="Item_4" class="odd">e</li>
		<li id="Item_5" class="even">f</li>
		<li id="Item_6" class="odd">g</li>
	</ul>

这将极大的简化创建新的HTML内容的DOM操作，而且不仅在需要插入DOM节点时可以使用，更多的文本操作里模板也是一把利器。

这里可能会有人担心每次解析模板正则的性能问题，的确，模板需要使用正则来解析，但在jslib中，每个模板只会解析一次，之后就会被编译缓存为一个特定的拼串函数，以后调用这个模板的时候就相当于调用编译好的函数，所以可以较大的减少正则解析带来的性能损耗。

另外，目前的Template类还不支持条件及循环等高级模板引擎所支持的特性，一般都建议通过其他程序结构固化模板变量来变通实现类似需求。

使用简单模板格式化在elf中的快捷方法是：

	elf().template(tplStr, dataMap);

## 类JSON解析器工厂

开发中我们会碰到一些需要对一些键/值对变量组进行拼串或者解析的操作，比如css表达式“width:100px;height:200px;”，或者其他参数定义的方式“a=1,b=2”等。jslib对这类操作抽象成了一个类JSON解析器的工厂类，可以通过这个类来创建具体的解析器或者拼串方法，只需要填写几个参数就可以完成。

语法：
:	
~~~
//创建一个字符串解析器
var someParser = js.text.JSONParserFactory.createParser(seperator, letChar, filter, trim);
//
//创建一个对象序列化器
var someStringifier = js.text.JSONParserFactory.createStringifier(seperator, letChar, filter, tail);
~~~

创建以后，就可以使用对应的函数来完成解析/序列化的操作，下面用jslib中`js.dom.Style`类的例子来说明：

	//创建序列化器
	js.dom.Style.prototype.toString = (function() {
		//以“;”分隔多个键值对，以“:”分隔键值对中的键和值，不需要过滤值的函数，需要结尾的分隔符
		var toString = js.text.JSONParserFactory.createStringifier(';', ':', null, true);
		return function () {
			toString(this._data);
		}
	})();
	//创建解析器
	//以“;”分隔多个键值对，以“:”分隔键值对中的键和值，不需要过滤值的函数，默认允许trim
	js.dom.Style.parseJSON = js.text.JSONParserFactory.createParser(';', ':', null, true);
	//
	//使用
	//
	var style = new js.dom.Style('width: 100px; height: 200px'); // 隐式的调用了js.dom.Style.parseJSON方法
	console.log(style.toString()); // 'width:100px;height:200px;'

实际上Style就是一个以分号“;”分隔多个键值对，冒号“:”作为赋值分隔符的参数组表达式。通过解析器工厂，我们还可以方便的得到更多的表达方式，如需要以竖线“|”分隔多个键值对，逗号“=”作为赋值分隔符，那么仅修改工厂方法中的两个参数就可以得到所需的解析器和序列化器，完全省去了自己写函数的麻烦和冗余的代码量。

不过由于这个类的方法大多用于定义阶段，真正在业务中调用的次数不多，所以没有对elf设计快捷方法。

## 单词串类

类似于类JSON解析器的需求，我们有时候会需要一个以某种符号分隔的字符串表达式或者说数据结构，所以就设计了这个单词串类来管理。这里对单词串的定义是：一个由多个不同字符串（这里称作“单词”）组成且单词之间以某个指定字符（或串）分隔的长字符串。这里的核心有两点：一是单词串中的单词都不相同，即没有重复的；二是单词之间都以指定的字符拼合，即分隔符是一样的。简单的理解其实像是我们常用的把一个以逗号“,”分隔的串split为一个数组的概念，不同的是这里用了jslib中集合类（`js.util.Set`）来管理而不是直接用数组。

单词串类的语法因为是继承于集合类，所以基本和集合类一致，我们直接看个实际的例子，HTML中常用的class属性就是一个以空格分隔的串，完全可以用这个类来管理：

	var classStr = new js.text.WordString(' ');
	classStr.add('abc').add('def').add('abc hi').remove('def').toggle('test');
	classStr.toString(); // 'abc hi test'

你也可以用竖线、逗号、分号等其他字符来作为单词串的间隔符，所需要的仅仅是在实例化类的时候传入不同的间隔符，另外，如果不传入，将默认为空格。

-EOF-