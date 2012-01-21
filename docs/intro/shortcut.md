---
layout: doc
title:  快捷方式的创建

trace: 文档 / 功能介绍 / 快捷方式的创建
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/shortcut.html">快捷方式的创建</a></span>
---

* TOC
{:toc}

jslib里的快捷方式实质上就是根据参数不同重载函数后的不同处理分发，不过目前仅支持通过一个参数的类型不同进行分发，但这已经覆盖了大部分需求，包括elf中各种快捷方式也是用这个函数创建的，所以这里就直接以elf中的代码为例子来介绍。

## 创建快捷方式

创建一个快捷方式（重载）函数：

	var elf = js.util.Shortcut.create();

这样得到的elf就是一个可以进行不同参数类型分发的函数了，只是现在还没有指定如何分发。如果是要在一个已有的函数上增加分发处理，可以这么写：

	// 已有函数
	function elf() {
		// your code here
		
		// 在原有函数末尾加上这一句：
		return js.util.Shortcut.dispatch(arguments/*, i*/); // 其中“i”代表使用第几个参数作为分发判断的索引，需要为非负整数或不指定（即第0个）
	}
	
	// 对elf进行快捷方式附着（一直苦恼于如何翻译attach一词）
	js.util.Shortcut.attach(elf);

一般我们推荐用前一种方式来创建快捷方式入口，但如果要改造本身有一些逻辑的已有函数，可以通过第二种方式实现。

## 设置拦截器

在创建完入口以后，我们还需要挂接对应类型处理的拦截器，快捷方式才能发挥作用。这时我们要使用到`js.util.Shortcut.intercept`方法：

	// 数组类型交由XArray转化为扩展数组
	js.util.Shortcut.intercept(elf, js.util.Type.ARRAY, js.util.XArray.toXArray);
	// 函数类型交由DOM全局准备完成的启动函数进行处理
	js.util.Shortcut.intercept(elf, js.util.Type.FUNCTION, js.dom.Stage.ready);
	// 字符串类型交由js.dom.Node类包装处理
	js.util.Shortcut.intercept(elf, js.util.Type.STRING, js.dom.Node);
	// ...

第一个参数指定要添加拦截器的快捷方式入口对象，这里就是之前创建的elf。第二个参数指定根据哪种类型进行匹配，这些类型必须是`js.util.Type`类上[定义过](#输出类型标识)或者[扩展过](#扩展更多类型)的类型。第三个参数就是实际进行处理的拦截器函数，具体处理的返回值会返回到调用快捷方式的入口。

除了进行类似重载的分发处理，创建快捷方式还有个特殊的用途，即缩短调用语句的长度，这在elf中也得到了体现。其本质就是当分发的参数类型没有设定对应的拦截器的时候，会返回一个匿名对象，上面可以需要任意的附着属性和方法，以达到快捷调用的目的。同样的看elf中的例子：

	elf().IE; // 判断是否是IE浏览器以及版本的属性
	elf().g('id'); // 根据ID获取元素的快捷方法
	// ...

## 快捷方法

默认情况下不传入参数即越过所有已设置的拦截器，或者传入的参数也不在拦截器范围内，都可以得到这个快捷匿名对象。上面很多方法已经在[新手入门][]中介绍过，这里要说的是如何将属性和方法附着上去的。最简单的方式是直接用“.”的方式赋值即可，因为这本身可以认为是一个对象，按照对象的操作方式就行，例如：

	elf().typeOf = js.util.Type.of;

elf中还用到一个方法是把一个对象上的成员全部赋值到快捷方式上，是这么调用的：

	js.util.Shortcut.use(elf, js.client.Browser);

之后就可以像例子中一样可以方便的调用浏览器判断的属性了。

了解了快捷方式的用法以后，我想你可以充分的发挥你的想象力，去灵活的简化程序中一些常用的操作，甚至可以自由的定制属于你自己的elf，一定会为你带来更大的开发效率。

我们没有把这个方法做到elf的快捷方式上，是因为`js.util.Shortcut`类本身是为了创建快捷方式而存在的，而且大多用于基础组件声明的阶段，所以长一点也能接受。

-EOF-

[新手入门]: /docs/getting-started.html