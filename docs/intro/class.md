---
layout: doc
title:  类和对象相关

trace: 文档 / 功能介绍
traceHTML: 
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/intro/">功能介绍</a>
    <span class="sub-path">/ <a href="/docs/intro/class.html">类和对象相关</a></span>
---

* TOC
{:toc}

## 类的创建与继承

虽然JavaScript只是一门基于对象的语言，但对于较大型的系统利用JavaScript构建一套面向对象的机制还是非常有必要的。

jslib中的类继承机制参考了很多其他库的做法，不仅实现了基于prototype的成员继承，也修复了这种继承机制带来的constructor的问题，额外的，jslib还针对静态成员也做了浅拷贝的继承。这些所有的功能都依托于`js.util.Class`这个通用包中的静态类，我们来看个使用jslib创建类的例子：

	//创建一个Animal类
	var Animal = js.util.Class.create({
		constructor: function (options) {
			this.name = options.name;
		},
		getName: function () {
			return this.name;
		}
	});
	
	//创建Dog类，继承自Animal类
	var Dog = js.util.Class.create({
		getName: function () {
			return this.name + ' Dog';
		}
	}, Animal);
	
	var myDog = new Dog({name: 'Old'});
	myDog.getName(); // 'Old Dog'
	
	myDog instanceof Dog; // true
	myDog instanceof Animal; // true

`js.util.Class.create`方法的第一个参数是要创建的类上prototpye的方法或属性，第二个参数是要继承自的父类（没有可以不写或者写`null`），第三个和之后的参数都是要实现的其他接口（这个在后面接口一节会讲到）。其中第一个参数上有一个特殊的属性`constructor`用于指定该类的构造函数，这个函数就是这个类真正的构造器对象，会在以`new`的方式创建实例对象时自动调用。如不指定，会这个类创建一个空函数作为类的构造器。请注意，默认不指定构造函数的话，是不会自动调用父类的构造函数进行初始化的。

在使用继承的特性时，我们有时候会需要调用父类的方法，这时你可以通过这样的方法来调用：

	myDog.getName = function () {
		return Animal.prototype.getName.call(this);
	}

如果是需要在你自定义的构造函数中调用父类的构造函数，可以这么写：

	var HuskyDog = js.util.Class.create({
		constructor: function () {
			Dog.apply(this, arguments);
			
			// husky own counstructor process here
		}
	});

如果想修改一个已有的类的继承关系，可以使用`js.util.Class.inherit`方法，例如：

	function Bird() {
		// bird class definition
	}
	
	js.util.Class.inherit(Bird, Animal);

单独使用这个方法时需要谨慎，尽量保证原来的类不在任何继承树里，否则可能造成继承关系的混乱。

使用jslib提供的类创建和继承方法来管理应用中的类管理是方便而且无侵入的，所以非常推荐你使用jslib来创建你的类。不过我们非常建议你在使用前先确保对JavaScript的prototype相关知识有所了解，这会对你使用这些方法有所帮助。

在elf中对应创建类的快捷方法是：

	elf().Class({
		// constructor...
	}/*, SuperClass*/);

这里`Class`是`elf()`快捷方法中唯一以大写开头的，表明作为类声明的特殊性。

## 用接口的方式扩展类

上面提到创建类时还可以通过接口来进行扩展，但JavaScript里并没有“接口”的概念，所以这里说的接口其实是参照Java的interface概念模拟并且改造了的一个用法。由于JavaScript中并不存在虚函数或纯声明式的语法，jslib里设计的接口是一个真正的函数实现，这更类似于jQuery中的扩展插件的方法。当对一个类调用了实现接口的方法后，接口对象上定义的方法就会全部被注入到这个类的prototype属性上，以达到扩展原有类的目的。这里看个例子：

	// 定义动物可以说话的接口
	var IAnimalSpeak = {
		// 说话的具体实现方法
		speak: function (word) {
			alert(this.name + ': ' + word);
		}
	};
	
	// 使Animal类实现IAnimalSpeak上定义的接口
	js.util.Class.implement(Animal, IAnimalSpeak);
	
	// 之后类的实例上就具有了对应的方法
	myDog.speak('Wow!'); // 'Old Dog: Wow!'

使用实现接口的方法和直接在prototype上扩展的区别在于，在prototype上扩展是强制覆盖原有的方法，而调用implement时，如果发现类上已经有某个接口里的方法定义是，则认为这个类对该接口有自定义的实现，然后对这个方法跳过覆盖，这点也是借鉴了Java中真正接口的一点思想。

在使用jslib创建类的时候也可以直接实现接口，参见下面的代码：

	var IAnimalSwim = {
		swim: function () {
			//
		}
	};
	
	var IAnimalBreathInWater = {
		breathInWater: function () {
			//
		}
	};
	
	var Fish = js.util.Class.create({
		// constructor
	}, Animal, IAnimalSwim, IAnimalBreathInWater/*, more...*/);

介绍jslib中接口这个概念是希望使用者多通过implement的方式来扩展各种基类上的插件，而避免直接操作prototype来修改类的原型。

这个方法在elf中的快捷方法是：

	elf().implement(YourClass, IYourInterface);

## 对象的复制和扩展

对于对象的操作中，最常用的功能就是复制和扩展对象的属性了。jslib提供了以下三个方法来完成不同情况的需求：

	js.util.Class.mix(target, source, override, deep); // 将source中比target中多的属性混入到target中
	js.util.Class.copy(source/*, source2...*/, target, deep); // 复制source中的所有属性到target中
	js.util.Class.clone(source); // 返回深度克隆的source对象

后面两个方法都是基于第一个方法通过指定不同参数实现的，所以所有复制和扩展的操作都可以通过mix方法来完成，copy和clone只是两个便捷的入口。这里名字用mix而不是extend是考虑到这个方法挂在Class类上会产生歧义，可能会被误认为是用于派生类的方法。而且mix的意思“混入”在这个场合下更准确一些，而通过不同的参数选项来完成不同的需求。

混入操作针对两个对象，target是目标对象，source是源对象，在不指定任何参数的情况下，该方法会将source对象上所有target对象上不存在的属性浅拷贝到target上。例如：

	var source = {a: 1, b: 2};
	var target = {a: 3};
	js.util.Class.mix(target, source);
	target; // {a: 3, b: 2}

而已存在的属性不会被覆盖。如果需要强制覆盖或者按条件覆盖，就会用到override属性。override属性可以有4中类型的处理方式：

* undefined: 即不指定；
* true/false: 强制覆盖或强制不覆盖；
* Function: 根据源对象中的属性名进行判断，返回结果后同上；
* Array: 强制复制数组中指定的key列表；

再通过几个例子来说明：

	//Boolean
	var source = {a: 1, b: 2};
	var target = {a: 3};
	js.util.Class.mix(target, source, true);
	target; // {a: 1, b: 2}

	//Function
	var source = {a: 1, b: 2};
	var target = {a: 3};
	js.util.Class.mix(target, source, function (src, key) {
		return src[key] < 2;
	});
	target; // {a: 1}

	//Array
	var source = {a: 1, b: 2};
	var target = {a: 3};
	js.util.Class.mix(target, source, ['b']);
	target: // {a: 3, b: 2}

这样就可以通过指定不同的参数来方便的解决覆盖全部/部分或不覆盖的需求。

第四个参数deep顾名思义就是用来指定是否进行深度复制的，为true时会进行深度复制，默认为false。在深度复制时，如果复制的是一个数组，也会创建对应的数组类型。如果是一个函数，则只复制该函数的引用。

mix在elf中的快捷方法是：

	elf().mix();

copy方法的主要区别在于参数的顺序（target在后），和没有可配置是否强制覆盖的参数，而全部认为是强制覆盖，同时还有个区别是可以在一次调用中指定多个对象作为源进行复制，还是来看例子：

	var source = {a: 1, b: 2};
	var target = js.util.Class.copy(source);
	target; // {a: 1, b: 2}
	
	var source = {a: 1, b: 2};
	var target = {a: 3};
	js.util.Class.copy(source, target);
	target; // {a: 1, b: 2}
	
	var s1 = {a: 1, b: 2};
	var s2 = {b: 3, c: 4};
	var target = {};
	js.util.Class.copy(s1, s2, target);
	target; // {a: 1, b: 3, c: 4}
	
	var source = {a: [1, 2], b: {c: 'def'}};
	var t1 = js.util.Class.copy(source);
	t1.a == source.a; // true
	
	var t2 = js.util.Class.copy(source, true);
	t2.a == source.a; // false
	t2.a.toString() = source.a.toString(); // true

copy在elf中的快捷方法是：

	elf().copy();

clone方法更加直接，就是为了深度克隆一个对象设计的，所以完全不需要额外的参数配置，如果的确需要深度复制，那么直接写clone是非常好的选择。例子：

	var source = {a: [1, 2], b: {c: 'def'}};
	var target = js.util.Class.clone(source);
	target.a == source.a; // false
	target.a.toString() = source.a.toString(); // true

clone在elf中的快捷方法是：

	elf().clone();

以我们在项目中的经验来看，大多数情况下copy方法用的更多，而mix会在需要区分不同条件下是否覆盖复制的时候用到，clone只用于深度复制。所以在你的程序中可以根据具体的场景需求来选择对应的方法。

-EOF-