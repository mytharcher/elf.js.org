---
layout: doc
title:  Ajax高级控制

trace: 文档 / 功能介绍 / Ajax高级控制
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/ajax.html">Ajax高级控制</a></span>
---

* TOC
{:toc}

在[新手入门][]中我们介绍了Ajax的一个最简单的使用方式，但如果你需要对Ajax进行更灵活的控制，可以尝试这里介绍的方法。

## Ajax实例对象

之前介绍的Ajax使用时通过调用一个静态方法`js.net.Ajax.load(options)`，调用的过程中程序其实自动的创建了一个Ajax类的实例来对本次请求进行管理。不过使用静态方法的开发者一般不需要考虑考虑更多处理，但如果需要对页面中的数据模型进行固定化的操作，那么就可以用创建实例的方式来固定一个数据模型。如下例：

	var dataConnector = new js.net.Ajax({
		url: SOME_URL,
		method: js.net.Ajax.HTTP_POST,
		responseType: js.net.Ajax.DATA_TYPE_JSON,
		onsuccess: someLoadHandler
	});

初始化请求以后并没有立即发送这个请求，同时也没有在其中写入需要发送的参数，而是在需要的时候再控制发送。例如我可以要求在点击一个按钮后再去获取一些数据进行发送：

	myButton.onclick = function () {
		dataConnector.load(getData());
	};

这样做的好处是，对应一个URL只有一个请求，在发送时不需要再次创建请求对象，对后端的URL接口转化为固定的数据模型，利于理解和整体的管理。

当使用Ajax实例时，在请求发送的过程中，也可以通过实例上的`abort()`方法来取消当前发送的请求，例如：

	cancelButton.onclick = function () {
		dataConnector.abort();
	};

这样当不希望同一个请求重复发送（如用户短时间内重复提交操作）时，可以进行有效的控制。

## Ajax初始化参数表

在使用Ajax的过程中，会用到很多参数的控制，这里把jslib中Ajax相关参数列了一个表，使用时可以根据下表来进行初始化options的配置：

参数名 | 数据类型 | 注释
-|-|-
url | String | （必填）发送的目标URL，默认为空字符串''（即当前文档栏URL）。
method | String | 请求方式，'GET'或'POST'，默认：'GET'。
async | Boolean | 是否异步，默认：true。
noCache | Boolean | 是否强制不缓存，为true时请求会带上一个随机参数以控制不缓存，默认：false。
blockDuplicate | Boolean | 是否阻止重复的请求，不阻止则后一个请求会覆盖前一个，默认：false。
contentType | String | 内容编码类型，默认：'application/x-www-form-urlencoded'。
encoding | String | 字符编码方式，默认：'utf-8'。
responseType | String | 返回内容类型，'text'：纯文本；'xml'：XML文档树；'json'：JSON数据对象。默认：'text'。
encoder | Function | 编码函数，默认使用encodeURIComponent()编码。
onsuccess | Function | 请求状态成功时的处理。
onfailure | Function | 请求状态失败时的处理。
oncomplete | Function | 请求完成时的处理。
onduplicate | Function | 请求重复时的处理，如此接口函数返回为false，则忽略新的请求。
onjsonerror | Function | 当JSON返回类型解析失败时的处理。

通过这个表，你可以了解到使用一个Ajax实例时所有可以用到的配置项和默认值，属性这些在开发的时候会带来很大的方便。

-EOF-

[新手入门]: /docs/getting-start.html