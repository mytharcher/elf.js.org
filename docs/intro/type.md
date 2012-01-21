---
layout: doc
title:  类型判断

trace: 文档 / 功能介绍 / 类型判断
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/type.html">类型判断</a></span>
---

* TOC
{:toc}

因为JavaScript是一个弱类型的语言，而且一些数据类型之间还可以轻易的转换，所以类型判断是非常常用的功能。

## 输出类型标识

与类型判断相关的功能由`js.util.Type`类实现，在上一篇[新手入门][]中已经介绍了判断12种数据类型的方法，这里还要介绍一个输出每种类型对应标识串的方法：

	js.util.Type.of(true); // 'boolean'
	js.util.Type.of(12.3); // 'number'
	js.util.Type.of('str'); // 'string'
	js.util.Type.of([]); // 'array'
	js.util.Type.of({}); // 'object'
	js.util.Type.of(/re/); // 'regexp'
	js.util.Type.of(new Function()); // 'function'
	js.util.Type.of(new Date()); // 'date'
	js.util.Type.of(NaN); // 'nan'
	js.util.Type.of(null); // 'null'
	js.util.Type.of(undefined); // 'undefined'

同时这些标识串也定义成了`js.util.Type`类的静态成员，可以通过上面代码中的标识串的大写直接访问，比如：

	js.util.Type.UNDEFINED; // 'undefined'

设计这个功能，是我们有时候会遇到需要根据不同类型进行不同处理的场景，但是如果用一堆的isXXX()来判断，那么程序的结构将会非常的复杂，也不利于表达。所以，如果通过类型标识串，那么当遇到需要根据类型判断分发处理的场景，就可以通过表驱动模式来简化程序的结构。

这个方法会映射到elf快捷方式中的以下方法：

	elf().typeOf(obj);

## 扩展更多类型

`js.util.Type`类上还有一个名为extend的方法，它没有扩展到elf快捷方式上，这个方法用于扩展更多自定义类型的判断方式。除了上面提到的12个判断方法，标准库中还有3个类型的判断方法就是通过这个方法扩展出来的：

	js.util.Type.isElement(obj); // 判断是否是DOM元素
	js.util.Type.isDocument(obj); // 判断是否是document对象
	js.util.Type.isWindow(obj); // 判断是否是window对象

通过这个方法扩展以后，`js.util.Type`对象上也会增加对应的类型标识串，规则也是属性名为对应类型的大写，而类型标识串为对应类型的小写，即：

	js.util.Type.ELEMENT; // 'element';

同时，当使用`js.util.Type.of()`方法时，如果是这个新扩展的类型，也会输出对应的类型标识串。

如果有需要在`js.util.Type`类里增加自定义扩展类型的话，可以通过下面的示例代码来完成：

	js.util.Type.extend({
		'YourType': function (obj) {
			return obj instanceof YourTypeClass;
		},
		'Another': function (obj) {
			// another class judgement
		}
	});

这个方法接受一个对象映射表，属性名即你需要扩展的判断方法isXXX()的XXX部分，属性值为一个函数，这个函数里是真实的判断是否是对应类型的逻辑代码，接受一个任意类型的参数，返回Boolean的true或false。在代码中包含了上述内容后，即可使用下面代码中的方法：

	js.util.Type.isYourType(obj); // true or false
	js.util.Type.isAnother(obj); // true or false
	
	js.util.Type.YOURTYPE == 'yourtype'; // true
	
	js.util.Type.of(yourTypeObject); // 如果输入参数是对应YourType类型，则会返回true

其他以此类推。另外，扩展的这些判断方法和类型标识串属性也会自动的添加到elf的快捷方式中，以方便在你的应用中使用。

-EOF-

[新手入门]: /docs/getting-started.html