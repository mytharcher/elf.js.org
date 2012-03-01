---
layout: doc
title:  动画效果

trace: 文档 / 功能介绍 / 动画效果
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/transition.html">动画效果</a></span>
---

* TOC
{:toc}

在所有浏览器都支持CSS3之前，很多动画的效果还是需要用JavaScript来实现，所以jslib中也对此进行了支持，并且提供了良好的封装。

## 简单动画

最简单的动画入手就如[新手入门](#起步！)中第一个例子，只要调用一个方法就可以完成。这个方法的全名是js.dom.Tween.start(options)，再elf快捷方式上使用的是别名tween，更容易理解一些。其中在新手入门中没有详细介绍options中有很多可选的参数配置，参见下面的参数表：

参数名 | 数据类型 | 注释
-|-|-
object | Element | 要进行动画动作的元素。
direction | Number | 方向，1：正向；-1：反向；默认：1。
duration | Number | 持续时间的毫秒数，默认：Infinity。
fps | Number | 每秒运行的帧数，默认：50。
loop | Number | 循环次数，> 0：循环loop次；0：停止；< 0：无限循环；可以使小数。默认：1。
offset | Number | 起始时间偏移量的毫秒数，默认：0。
property | Object | 动画需要改变的属性对象，其中包含from（初始值）、to（目标值）、unit（单位）和ease（单独的缓动函数）。
speed | Number | 倍速，倍率。用于调节时间快慢的系数，一般不设置。默认：1。
oncomplete | Function | 变化完成时调用的外部接口。默认：undefined。
onenterframe | Function | 每帧调用的外部接口。默认：undefined。
onfirstframe | Function | 进入第一帧调用的外部接口，与onstart不同的是会经过第一次时间间隔时才调用。默认：undefined。
onstart | Function | 形变启动时调用的外部接口。默认：undefined。

其中object为必选参数，用于指定希望对哪个元素进行动画操作。以“on”开头的四个事件函数用于用户自定义动画过程中发生的事件处理方式。

示例：
:	
	~~~
	js.dom.Tween.start({
		// 指定动画在id为test的元素上起作用
		object: document.getElementById('test'),
		// 动画属性列表
		property: {
			// x坐标从100到200像素匀速（默认）运动
			left: {from: 100, to: 200, unit: 'px'},
			// y坐标从100到400像素加速运动
			top: {from: 100, to: 400, unit: 'px', ease: js.transition.Easing.quadIn}
		},
		// 每秒帧数25
		fps: 25,
		// 循环2次
		loop: 2
	});
	~~~

调用以上代码后，如果绝对定位的test元素中有内容，就可以看到这个元素做了两次平抛运动。当然你可以发挥你的想象力做出各种丰富的运动方式和渐变效果，诸如使用sin/cos完成圆周运动等。

## 高级动画控制

上面使用Tween对象上的静态方法完成了最简单的例子，如果需要对动画的过程做更细致的控制，那么可以使用创建实例的方法来完成。

示例：
:	
	~~~
	// 所有参数与静态方法需要的参数一致
	var myTween = new js.dom.Tween({
		object: document.getElementById('test'),
		property: {
			left: {from: 100, to: 200, unit: 'px'},
			top: {from: 100, to: 400, unit: 'px', ease: js.transition.Easing.quadIn}
		},
		fps: 25,
		loop: 2
	});
	
	// 点击开始按钮的时候启动myTween的动画
	document.getElementById('startButton').onclick = function (ev) {
		myTween.start();
	};
	
	// 点击暂停按钮的时候暂停myTween动画
	document.getElementById('pauseButton').onclick = function (ev) {
		myTween.stop();
	};
	
	// 点击恢复按钮的时候继续myTween动画
	document.getElementById('resumeButton').onclick = function (ev) {
		myTween.resume();
	};
	
	// 点击反向按钮的时候调转myTween动画的执行方向
	document.getElementById('reverseButton').onclick = function (ev) {
		myTween.reverse();
	};
	~~~

这样定义的动画就可以在有用户交互的时候自由控制，而不是简单的一跑到底。还有一些没有在例子里列出来的实例方法，可以在`js.dom.Tween`类的API文档中查到。

## 更多关于时间的效果

如果上面的方法还不能满足效果？或者希望根据时间变化的不只是元素的显示，比如需要驱动某些数值的改变时，Tween类就无能为力了，但是你可以通过Tween所继承的`js.transition.Timeline`时间轴类来进行更多扩展的操作。时间轴类是元素补间动画的父类，拥有更普适的底层接口，当需要用到根据时间变化的函数来做一些事情的时候，Timeline就是个很好的选择。Tween类的很多实例方法也是继承自Timeline，所以使用起来基本一样。比如我们实现一个刚刚提到的根据时间变化来驱动一些数值改变的例子：

	var GRAVITY = 9.8; // 设置重力加速度
	var ball = {speed: 0, height: 100}; // 设置自由落体小球的初速度和起始高度
	var dropping = new js.transition.Timeline({
		onenterframe: function (spend) {
			var time = spend / 1000;
			ball.speed = GRAVITY * time;
			var s = ball.speed * time / 2;
			ball.y = Math.max(ball.height - s, 0);
			if (!ball.y) {
				this.stop();
				console.log(time); // 显示最终下坠运行的秒数
			}
		}
	});
	// 启动自由落体
	dropping.start();

例子实现的结果就是计算一个小球自由落体运动的速度和高度值，当然这可以也用Tween类做成可视化的动画演示。可能例子举的不是很好，但要说明的是，使用Timeline类可以实现更多功能。当你需要在应用中开发一些与时间进程相关的功能时，Timeline类会是一个非常好的帮手。剩下的只需要发挥你的想象力去实现更丰富更有趣的效果了。

-EOF-

[新手入门]: /docs/getting-started.html