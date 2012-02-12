---
layout: doc
title:  拖动实现

trace: 文档 / 功能介绍 / 拖动实现
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/drag.html">拖动实现</a></span>
---

* TOC
{:toc}

拖动是个老生常谈的话题了，但都离不开最基本的鼠标按下、移动和弹起的几个阶段处理。和其他库不大一样，jslib中采用了类似Flash AS 2.0中的处理方式，当你需要拖动一个元素的时候调用拖动开始的入口，当拖动需要停止的时候调用停止的函数。`js.dom.Drag`这个控制类是一个较为底层的实现，方便向上的扩展。

我们用一个例子来说明，实现一个最简单的元素拖拽：

	var div = document.getElementById('drag');
	// 当鼠标在drag元素上按下的时候开始拖拽
	div.onmousedown = function (ev) {
		js.dom.Drag.start(this);
	};
	// 当鼠标从页面上弹起的时候停止拖拽
	document.onmouseup = function (ev) {
		js.dom.Drag.stop(div);
	};

当然，如果只是这么简单的对一个元素的拖拽，就没必要写这么多代码，完全可以通过一句话搞定：

	js.dom.Drag.attach(document.getElementById('drag'));

上面这个使元素可以简单拖动的attach方法在elf中的快捷方法是：

	elf().draggable();

-EOF-