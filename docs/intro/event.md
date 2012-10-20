---
layout: doc
title:  时间处理

trace: 文档 / 功能介绍 / 事件处理
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/event.html">事件处理</a></span>
---

* TOC
{:toc}

在DOM中事件处理是丰富Web交互操作的核心部分，jslib通过对浏览器兼容性的底层封装，提供了对外标准化的处理接口，并集中组织在`js.dom.Event`类中提供这些方法。

## 监听事件 ##

和其他大多数JS库类似，jslib提供了简单的挂载事件的方法：

	js.dom.Event.add(element, type, fn, delegateFilter);

参数表：

参数名 | 类型 | 含义
-|-|-
element | Element/String | 要挂载事件的DOM元素（或ID）
type | String | 事件类型，即`click`、`mouseover`等不带`on`的字符串标识
fn | Function | 处理函数，其中第一个参数会传入标准化后的事件对象
delegateFilter | Function | 委托事件过滤函数

最普通的情况我们对一个按钮绑定一个点击后弹出对话框的事件可以这么来写：

	js.dom.Event.add(button, 'click', function (ev) {
		alert(ev.type); // 'click'
	});

在写拖动时我们通常会需要阻止鼠标选择文字，以及禁止冒泡，那么可以在处理函数里这么写：

	js.dom.Event.add(dragOne, 'mousedown', function (ev) {
		// your code ...

		// 阻止默认事件
		ev.preventDefault();

		// 阻止冒泡
		ev.stopPropagation();
	});

没错，一切都标准化了，我们会尽量让使用起来和DOM标准的API一致。

## 事件委托 ##

绑定事件的方法中，第四个参数可以传一个函数，这个就是用于处理事件委托。例如在一个不确定条目数量的列表（或表格）组件中，还可能经常对这个列表做增加修改删除操作，那么每次操作都去重新挂载对应条目上的操作事件是非常麻烦的，这种情况下就可以用到事件委托的方式，把事件处理函数挂在外围容器上，那么任意内容的改动都不需要再重新挂载了。

具体可以看个例子：

	// 当点击每个条目上的删除按钮时，删除该元素
	js.dom.Event.add(list, 'click', function (ev) {
		console(this == list); // true
		var item = ev.target;
		item.parentNode.removeChild(item);
	}, function (node) {
		return node.className == 'button-delete';
	});

传入这个函数的作用是在事件触发元素到代理外围容器的冒泡过程中判断是否是要真正进行事件处理的目标元素。每次冒泡时这个函数的第一个参数都是当前冒泡路径上的元素，执行过程可以进行自定义的条件判断，最后返回一个是否是目标元素的`true`/`false`值作为结果。

当然如果想图省事不想写这个方法，也可以传入一个CSS选择器字符串，只要匹配的元素就会进行事件处理。

如果在冒泡队列中绑定了多个基于委托的处理过程，那么在任意一个事件的处理过程中调用如下语句，都可以阻止挂载顺序之后的所有事件触发：

	ev.stopAll();

监听事件在在elf中的快捷方法是：

	elf().on(elem, type, fn, filter);
	elf('#id.class').on(type, fn, filter);

-EOF-

[新手入门]: /docs/getting-started.html