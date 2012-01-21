---
layout: doc
title:  数组扩展

trace: 文档 / 功能介绍 / 数组扩展
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/xarray.html">数组扩展</a></span>
---

* TOC
{:toc}

数组是程序中非常常用的数据类型，除了针对ECMA-262第五版修复浏览器没有的数组方法外，我们希望扩展数组更多非标准的实用方法，但不希望入侵原生对象，所以通过继承原生的Array得到了一个扩展数组类js.util.XArray。虽然XArray是我们构造出来的一个非原生的类，但由于继承的关系，所有原生的数组操作都可以应用到这个类生成的实例上，这就是说，你可以很轻松的利用数组下标操作符“[]”来操作XArray的实例，而效果上不会和原生的数组有什么区别。

## 创建XArray实例

用下面的代码可以创建出XArray数组的实例：

	var xarr = new js.util.XArray(1, 2, 3);
	xarr[1]; // 2

用new的方式创建的确比写数组直接量“`[]`”麻烦的多，不过我们也为此提供了elf上的快捷方式：

	var xarr = elf().toXArray([1, 2, 3]);

## XArray扩展的方法

### `indexOf()`

查找项目在数组中的索引号，和原生方法相同的作用。

语法：
:	
~~~
xarr.indexOf(item, fromIndex, equal, all)
~~~

与原生的`indexOf()`方法不同的是，多了两个可选参数的扩展：`equal`对比函数和`all`是否计算全部的相等项索引。如果不填`equal`或着为`null`，则默认使用全等（`===`）来进行相等判断。`all`默认为`false`，为`true`时将会以一个数组收集全部item在原数组中相等的项的索引值返回。例子：

	var xarr = elf().toXArray([1, 2, 3, 4, 2, 3, 5]);
	xarr.indexOf(4); // 3
	xarr.indexOf(2, 2); // 4
	xarr.indexOf(3, 2, null, true); // [2, 5]
	
	var xarr2 = new js.util.XArray({a: 1}, {a: 2}, {a: 3});
	xarr2.indexOf({xx: 4}, 0, function (target, item) {
		return target.xx == item.a;
	}); // -1

### `distinct()`

数组去重函数，使用了distinct这个名字是希望区别于大多数JavaScript库里unique的叫法，因为在jslib中数组去重算法和其他库有较大的不同，其他库大多是双循环时间复杂度为O(n<sup>2</sup>)，而distinct的设计利用了JavaScript语言的特性使复杂度降低到了O(n)。同时这个方法还提供了非实例的静态方法调用方式，即使在不转化成XArray数组类型的时候也可以方便的使用。

语法：
:	
~~~
xarr.distinct()
~~~

示例：

	var a = {}, b = {
		a: a
	};
	var c = a, d = b;
	var xarr = new js.util.XArray(
		a, 213, 43, 'fdsa', b, '43', 0,
		false, true, null, c, d, undefined,
		'0', 'fasle', 'true', true, 'null', 'undefined');
	xarr.distinct(); // [a, 213, 43, 'fdsa', b, '43', 0, false, true, null, undefined, '0', 'fasle', 'true', 'null', 'undefined']

需要注意的是，使用该方法去重时，不同类型但是可以用“==”判断相等的值是不认为是重复的，如上例中的`"43"`和`43`，`null`和`undefined`等，在去重后依然会分别存在于数组中。

去重的设计不仅仅适用于用XArray创建的扩展数组，针对普通的数组，可以调用XArray类上的静态方法来完成。例如：

	var arr = [1, 1, 3, 4, 5, 5];
	js.util.XArray.distinct(arr); // [1, 3, 4, 5]

### `toArray()`

很多情况我们需要把DOM元素集合或者其他类似数组的集合转化成数组进行操作，就用得上这个方法了。

语法：
:	
~~~
js.util.XArray.toArray(arrayLike)
~~~

示例：

	var nodes = js.util.XArray.toArray(document.getElementsByTagName('a'));
	nodes.forEach(function (item) {
		// more operation
	});

在例子中，如果只是获取所有`<a>`标签的DOM集合，是不能使用数组的`forEach`实例方法的，所以用`toArray`方法将集合转化成数组后，就可以使用大量的数组方法了。

在原生的数组方法中，大部分对数组本身的操作会返回一个新的实例（`reverse()`除外），XArray类也是这么做的，比如在调用`distinct()`方法之后返回的是一个新的XArray实例，而原来的数组不会被改变。

-EOF-