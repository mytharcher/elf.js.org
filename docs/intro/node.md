---
layout: doc
title:  Node类详解

trace: 文档 / 功能介绍 / Node类详解
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/node.html">Node类详解</a></span>
---

* TOC
{:toc}

之前在[新手入门][]中已经介绍了很多Node类的方法，不过都是以elf快捷方式来说明的。除了之前介绍过的那些，这里还会有一些其他方法和使用需要注意的地方。

## 获取集合中的子集

要从已创建的集合中获取一个元素，最简单的就是用数组下标索引的方式，但这样获取后得到的是原生的DOM元素，无法继续进行Node类的其他操作，所以这里设计了一个`get()`方法来协助完成。

	var node = elf('body p');
	js.dom.ClassName.add(node[1], 'test'); // 通过下标获取的写法
	node.get(1).addClass('test'); // 使用get()方法获取的写法

使用`get()`方法返回的是一个新的集合实例，这样就可以继续进行实例方法的链式调用了。

## 过滤集合

有时候我们在并不知道想获取元素的索引，但知道元素的CSS匹配规则的话，换句话说，如果希望从已有集合中过滤一部分元素出来作为新的集合，就可以用`filter()`方法来完成。例如：

	var node = elf('body p');
	node.filter('.highlighted').css({backgroundColor: '#ffff00'});

`filter()`方法返回的也是一个新的集合实例，不改变原有集合。

## 在集合中查找

同样的，我们还可能需要以当前集合为上下文对象根据CSS选择器查询这些元素所包含的其他元素，可以通过`query()`方法来完成。

	var node = elf('body p');
	node.query('a[href^=http]').addClass('external');

对应`filter()`和`query()`，有两个用于判断的方法：`is()`和`has()`。`is()`用于判断集合中首个元素是否匹配要判断的选择器；`has()`用于判断集合中所有元素是否包含要判断的选择器匹配的元素。

	var node = elf('body p');
	node.is('div'); // false
	node.has('p'); // false
	node.has('a.external'); // true or false

## 集合遍历

对于集合对象，遍历是一个很普遍的操作，和数组一样，我们提供了`forEach()`方法，来进行遍历操作。其中各项参数和数组的`forEach()`方法的用法是一致的，scope如不指定会默认指向集合对象本身。包括Node类本身很多实例方法也是这样遍历到每一个元素上操作完成的。示例：

	var node = elf('body p');
	node.forEach(function (item, index) {
		item.setAttribute('index', index);
	});

## 转化为普通数组

如果觉得这些方法不够用，或者还希望把集合当做数组使用其他数组的方法来操作，可以通过`toArray()`方法将集合转化成数组返回。例子：

	var nodeArr = elf('body p').toArray();
	nodeArr.push(document.getElementById('Test'));
	// ... 更多数组方法

-EOF-

[新手入门]: /docs/getting-started.html