---
layout: doc
title:  Cookie操作

trace: 文档 / 功能介绍 / Cookie操作
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/cookie.html">Cookie操作</a></span>
---

* TOC
{:toc}

Cookie相关的操作都由`js.dom.Cookie`类来管理。把cookie管理归到了dom操作包里考虑的是cookie本身是基于document的，所以暂时放在dom相关包下。

## 设置Cookie

语法：
:	
	~~~
	js.dom.Cookie.set(key, value, options);

	js.dom.Cookie.set(map, options);
	~~~

设置cookie可以按一个键/值对来进行设置，为了使用方便，jslib的设计也可以使用一组键/值对进行设置，其中额外的配置项都是使用最后一个参数对象进行配置。配置中最重要的属性就是过期时间，这里jslib没有使用“expires”作为过期时间的参数名，因为考虑到可能会出现歧义，所以置换为两个可二选一的参数：“last”和“until”，代表的意思是两种需求，一种希望持续多长时间，另一种是直到什么时候，这样的写法更利于理解。

示例：
:	
	~~~
	js.dom.Cookie.set('name', 'Archer', {
		last: 86400000 // 毫秒数，表示持续一天
	});

	js.dom.Cookie.set({
		name: 'Archer',
		until: new Date(2012, 11, 21) // 保存cookie直到2012年12月21日
	});
	~~~

设置cookie在elf中的快捷方法是：

	elf().setCookie();

## 获取Cookie

语法：
:	
	~~~
	js.dom.Cookie.get(key);

	js.dom.Cookie.get();
	~~~

获取cookie的函数也有两种用法，指定获取特定key的值，或者不指定特定key，获取全部值。

示例：
:	
	~~~
	js.dom.Cookie.get('name'); // 'Archer'

	js.dom.Cookie.get(); // {name: 'Archer'}
	~~~

获取cookie在elf中的快捷方法是：

	elf().getCookie();

## 清除Cookie

如果要清除cookie中的某些值，可以使用remove方法。

语法：
:	
	~~~
	js.dom.Cookie.remove(key1/*, key2 ...*/);
	~~~

示例：
:	
	~~~
	js.dom.Cookie.remove('name'); // 移除cookie中的name键
	~~~

移除cookie在elf中的快捷方法是：

	elf().removeCookie();

如果觉得一个个移除还是太慢，那么可以尝试使用clear方法来清除全部已保存的cookie键。

语法：
:	
	~~~
	js.dom.Cookie.clear();
	~~~

这类批量操作的函数比较危险，需要谨慎使用，所以在elf上也没有提供快捷调用方式。

-EOF-