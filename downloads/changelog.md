---
layout: doc
title:  变更记录
date:   2011-12-27

mainClass: doc-change-page

trace: 下载 / 变更记录
traceHTML: |
    / <a href="/downloads/">下载</a>
    <span class="sub-path">/ <a href="/downloads/changelog.html">变更记录</a></span>
---

* TOC
{:toc}

## 0.3.1

发布日期：
:	2011-12-27

版本摘要：
:	修复0.3.0发布后发现的一些bug。

功能变更列表：
:	

	* `js.dom.Node`类`merge`方法`length`属性计算错误；
	* `js.util.XArray`类修改实现为包装原生数组，以支持IE&lt;8的浏览器；
	* 移除nightly中未完成的`js.net.Path`类；
	* 针对IE&lt;8浏览器修复所有`[].slice.call(argument)`缺少第二个索引参数的问题；

## 0.3.0

发布日期：
:	2011-12-24

版本摘要：
:	部分接口再次调整，使之整体风格一致。整合测试用例文件，设计制作项目网站，补充大量文档，启用[elfjs.com](http://elfjs.com/)域名，首次正式发布。

功能变更列表：
:	

	* `js.dom.Attribute`针对一些特殊属性的兼容适应；
	* 拖动类增加可以直接使一个元素可拖的方法；
	* 拆分鼠标轨迹类实现作为拖动类底层支持；
	* 增加DOM事件类型枚举对象；
	* Node类添加创建一个Node节点的方法；
	* Node类集合css操作实现bug修复；
	* Node类增加按索引获取新集合的方法；
	* Global类拆分为零散函数文件；
	* `js.util.Class.extend`改名为`js.util.Class.mix`；
	* `js.util.Class.copy`方法支持使用多个源对象拷贝；
	* 类继承取消构造函数继承，新的方法如需继承构造函数必须手动指明，否则只创建空函数为构造器，同时取消._super和.superClass对父类的引用；
	* ready函数拆分线程队列处理类为底层支持；
	* Ajax类请求失败的接口名修改为onfailure，增加JSON解析失败和重复发送的事件，其他所有事件名都改为小写；

## 0.2.0

发布日期
:	2011-08-12

版本摘要
:	严格保证命名规范，由于大量接口变更，不再向下兼容，所以废弃了上一个[0.1.0版本](#0.1.0)。并增加很多功能，提交到github进行维护，补充部分测试用例，为正式发布做准备。[发布初衷](/blog/?p=1)。

## 0.1.0 (不再支持)

发布日期
:	2011-04-23

版本摘要
:	代码组织并第一次投入到实际项目中，此版本为在项目中正式使用一段时间后首个运行稳定的版本。

-EOF-