---
layout: blog-post
author: mytharcher
title: 设计理念（下）：针对基础库易用性的设计
category: introduction

tags: [elf, JavaScript, js, library, Shortcut, 基础库, 易用性, 设计]

trace: 博客 / 设计理念（下）：针对基础库易用性的设计
---

[上一篇](design-concept-of-jslib.html)提到“针对底层API规范的设计和易用性的设计有时候是互斥的”，从jQuery就可以看出，基本上对jQ的扩展最多的就是他的插件机制（我当年还翻译过《Learning jQuery》的<a href="http://mytharcher.blog.163.com/blog/static/2081820200781094415905/" target="_blank">第十章：插件</a>。但由于翻译的太烂，没被采纳。），而jQ的插件只遵循一条最简单的规范，就是在`jQuery.fn`（相当于`jQuery.prototype`）上扩展方法，以成为对jQuery对象的插件。但是当引入了太多的插件后却没有一个分类管理的方式显得jQ的插件规范不是很完美，特别针对于大型系统，我不知道使用jQ的团队是如何管理和部署代码的。对着jQ废话了一大堆，其实想说的是jQ把基础库的易用性做到了极致，但是我觉得他在支撑一个大型系统的规范上略有不足。

如果再对比看看百度的Tangram，对于基本结构的规范是定义的很好的，一切对象要求完成最简单的功能，一切结构都建立在“命名空间.包名.对象名”之上。这样至少会影响真正应用的业务代码，也按照这个结构来进行生长发育。虽然这个结构非常清晰，但实际上用起来很复杂，也很痛苦，每次对基础库的调用都要写很长一串点，虽然通过基于顶级命名空间“baidu”声明了很多快捷方式，但这种声明又缺乏一种规范，甚至感觉略有点随意。所以在业务开发者使用的时候会远不如jQ写起来爽。

好了，那现在的问题变成了我既需要Tangram那样规范的可拆分代码结构，也想要使用的时候想jQ那样便捷，如何才能做到两全其美呢？

于是我开始分析jQuery带来开发便利性的原因所在，顶级函数$()，根据传入的参数不同，会执行不同的操作，大多数类型如：String（选择器），Element，Document，Window，Array（，NodeList等）都会生成一个包含一个或多个元素的jQuery对象，在之后就可以随意的使用jQuery对象上prototype定义的方法进行各种操作，并且一直链式调用下去。而如果传入的类型是函数，则自动转到`jQuery.ready`去做一个等待执行。这样看快捷方式最核心的内容就是一个函数的重载。

对于jQuery对象这种元素包装机制对大多数web开发来说是非常常用的，所以我在基础库中编写了专门为此进行处理的`js.dom.Node`类，而ready的处理也对应到了`js.dom.Stage.ready`这个静态方法，现在我要做的只是设计一个从顶级命名空间就可以直接使用这两个东西的快捷方式。

从这里考虑，顶级命名空间就不能只是一个包含子级包的对象，他需要成为一个入口函数，然后对不同的参数情况进行分发。我最早的设计只是简单的照搬jQuery对象构造函数的写法，在里面进行参数的类型判断（包括字符串选择器的模式），然后再做对应处理。但后来发现这本身只是一个函数重载的事情，不应该把顶级对象搞的太复杂，所以这段逻辑需要抽取出去，只留一个分发的处理即可。

基于需要对以上功能的支持，我专门编写了根据对象输出对应类型字符串标识的`js.util.Type.of`方法，以及用于创建分发器的`js.util.Shortcut`类。并有了顶级分发器的第二个版本：

	var elf = elf || function (args) {
	    return elf.util.Shortcut.dispatch(args);
	}
	
	elf.util.Shortcut.attach(elf);
	
	///import elf.util.Shortcut;

当时elf就是基础库的名字，还没有使用js来进行拆分，这造成的一个特殊的地方就是顶级命名空间和在他之下定义的类形成了循环依赖，虽然我可以用后置依赖的方式来解决打包顺序的问题，但这样的写法还是略有一些诡异，而且不能直接使用Shortcut类的工厂方法create来创建一个快捷对象。最重要的是干扰了基础库的基本功能和设计规范——做最简单的事情，而不应该为了易用性随意的污染基础库。所以在采纳了erik拆分的建议后，启用了js这个命名空间来放置基础库，而elf成为了专为组织各种基础库快捷方式的对象，快捷方式的定义也变成了下面的方式：

	var elf = js.util.Shortcut.create();

在定义之后可以和原来一样为快捷对象添加各种拦截器以达到分发不同处理的目的。例如：

	//将String类型的参数认为是选择器表达式，并交由Node类处理
	js.util.Shortcut.intercept(elf, js.util.Type.STRING, js.dom.Node);
	
	//将DOM元素交由Node包装处理
	js.util.Shortcut.intercept(elf, js.util.Type.ELEMENT, js.dom.Node);
	
	//将函数交由全局准备执行队列处理
	js.util.Shortcut.intercept(elf, js.util.Type.FUNCTION, js.dom.Stage.ready);

除了添加顶级快捷处理，Shortcut的dispatch还有一个默认的特殊处理，即没有传入任何参数或者传入的参数是undefined，那么Shortcut会转向到一个快捷方法镜像映射表上，以支持在后续的.xxx可以调用镜像映射过的各种静态方法，达到缩短很多静态方法书写长度的目的，例如：

	//声明对elf快捷对象使用Class类中的静态方法
	js.util.Shortcut.use(elf, {
	    clone: js.util.Class.clone,
	    copy: js.util.Class.copy,
	    mix: js.util.Class.mix,
	    Class: js.util.Class.create,
	    inherit: js.util.Class.inherit,
	    implement: js.util.Class.implement
	});
	
	//声明后这样使用
	
	elf().clone(anObject);
	
	elf().Class({
		constructor: function () {
			//this is your class constructor
		}
	});
	
	//...

这里需要解释一下为什么我不把这些方法直接挂到elf下而一定要在elf()调用之后。首先，基于之前定义的开发规范包名下面不能直接放方法，所有的方法都需要用类来盛放（这是与Tangram风格上最大的不同）。第二，使用一个“()”来表示这些都是快捷方法比较直观，易于理解。当然有人要问到由于使用了快捷转发多了几次函数调用会不会影响性能？如果你不是在大量循环中调用这些基础方法是没有任何影响的，而如果对性能追求很高的话建议直接写全部的命名空间，例如：`js.util.Class.clone(anObject)`，然后把你的代码和基础库一起使用jslib-builder工具打包，勾选使用闭包包装器，那么在代码压缩后会大大减少静态函数的命名空间层级，减少内存查询的时间。

由于elf是完全混合了js下所有对象而成的，如果希望缩短基础库中各个类的命名空间，也可以直接的在elf命名空间下声明，而不影响到原有js下的任何东西。比如：

	elf.Class = js.util.Class;
	elf.Ajax = js.net.Ajax;
	//...

总的来说，上面使用<strong>拦截器分发</strong>，<strong>静态函数简短镜像映射</strong>和<strong>缩短命名空间</strong>三种方式都可以极大的简化代码，提高书写流畅度。而且这些代码都不影响基础库原有的功能，而且非常易于自由定制。使用这样的模式完全的达到了既需要规范的底层API又可以方便的书写业务代码，而不只是对基础库API硬搬硬套。

最后说一点，elf只是针对我个人定制的常用快捷方式集，而我并没有占用`$`这个最短也是最流行的命名空间，如果需要，可以自己写一句`var $ = elf;`或者针对你自己的需求来创建快捷方法集，只要定义的合适，这样甚至可以使你的项目中代码基本和用jQuery写的保持完全一致。