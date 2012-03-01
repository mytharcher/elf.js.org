/*!
 * Build by elf JavaScript library builder @1330562923 * http://elfjs.com/
 */
(function (host, undefined) {
	function b6c4bc85 (target, source) {
		for (var i in source)
			if (source.hasOwnProperty(i))
				target[i] = source[i];
	}
	
	var js,
js_$_client,
js_$_client_$_Browser,
js_$_client_$_Features,
js_$_client_$_Features_$_scriptEval,
js_$_dom,
js_$_dom_$_Attribute,
js_$_dom_$_BoxModel,
js_$_dom_$_ClassName,
js_$_dom_$_Cookie,
js_$_dom_$_Drag,
js_$_dom_$_Event,
js_$_dom_$_INodeAttribute,
js_$_dom_$_INodeBoxModel,
js_$_dom_$_INodeClassName,
js_$_dom_$_INodeEvent,
js_$_dom_$_INodeOperation,
js_$_dom_$_INodeRelation,
js_$_dom_$_INodeStyle,
js_$_dom_$_INodeTween,
js_$_dom_$_MouseTracker,
js_$_dom_$_Node,
js_$_dom_$_NodeInterfaceFactory,
js_$_dom_$_Operation,
js_$_dom_$_Relation,
js_$_dom_$_Selector,
js_$_dom_$_Stage,
js_$_dom_$_Stage_$_evalScript,
js_$_dom_$_Stage_$_get,
js_$_dom_$_Stage_$_getDocument,
js_$_dom_$_Stage_$_getDocumentElement,
js_$_dom_$_Stage_$_getNextHighestDepth,
js_$_dom_$_Stage_$_loadScript,
js_$_dom_$_Stage_$_loadStyle,
js_$_dom_$_Stage_$_mark,
js_$_dom_$_Stage_$_ready,
js_$_dom_$_Style,
js_$_dom_$_Traversal,
js_$_dom_$_Traversal_$_bfs,
js_$_dom_$_Traversal_$_dfs,
js_$_dom_$_Traversal_$_up,
js_$_dom_$_Tween,
js_$_net,
js_$_net_$_Ajax,
js_$_net_$_URL,
js_$_net_$_URLParameter,
js_$_text,
js_$_text_$_Encoder,
js_$_text_$_Encoder_$_encodeHTML,
js_$_text_$_Escaper,
js_$_text_$_Escaper_$_escapeQuote,
js_$_text_$_Escaper_$_escapeReg,
js_$_text_$_Formatter,
js_$_text_$_JSONParserFactory,
js_$_text_$_Template,
js_$_text_$_WordString,
js_$_transition,
js_$_transition_$_Easing,
js_$_transition_$_Easing_$_cos,
js_$_transition_$_Easing_$_linear,
js_$_transition_$_Easing_$_quadIn,
js_$_transition_$_Easing_$_quadInAndOut,
js_$_transition_$_Easing_$_quadOut,
js_$_transition_$_Easing_$_sin,
js_$_transition_$_Timeline,
js_$_util,
js_$_util_$_Class,
js_$_util_$_EventDispatcher,
js_$_util_$_EventObject,
js_$_util_$_Global,
js_$_util_$_Global_$__STAMP,
js_$_util_$_Global_$_getGlobal,
js_$_util_$_Global_$_guid,
js_$_util_$_Global_$_noop,
js_$_util_$_Global_$_stamp,
js_$_util_$_Hash,
js_$_util_$_IEventDispatcher,
js_$_util_$_InterfaceFactory,
js_$_util_$_Namespace,
js_$_util_$_Processor,
js_$_util_$_Set,
js_$_util_$_Shortcut,
js_$_util_$_Type,
js_$_util_$_XArray,
elf;
/*!
 * jslib JavaScript Library
 * 
 * Copyright (c) since 2010. All rights reserved.
 * 
 * Author: mytharcher <mytharcher@gmail.com>
 */

/*
 * create:
 * @2010-2-27 by mytharcher
 * 
 * update:
 * @2010-11-17 by mytharcher
 * @2010-11-26 by mytharcher
 * @2010-12-19 by mytharcher:
 * 		[m] Change all mechanism of Shortcut.
 * @2010-12-21 by mytharcher:
 * 		[m] Simplify the Shortcut dispatch invoke.
 * @2011-04-14 by mytharcher:
 * 		[m] Change the top namespace to "js", in order to make the library to be more common.
 */

/**
 * @class js
 * 声明js顶级命名空间
 */
var js = js || {};



/**
 * @ignore 声明client包，客户端探测相关包
 */
js_$_client = {};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-04-21 By mytharcher
 * 
 * update:
 * @2010-04-27 By mytharcher
 * @2010-11-20 By mytharcher
 */



/**
 * @class js_$_client_$_Browser
 * <h2>浏览器类型及版本信息对象</h2>
 * 
 * <p>存放浏览器类型及版本的信息，通过属性取得一个浏览器版本号的小数，保留一位“.”后的子版本号。</p>
 * <p>如IE5.5的话Browser.IE则取得5.5，FF2的话取Browser.Firefox为2。</p>
 * <p>如果为undefinded则不是该类型浏览器。</p>
 * 
 * <b>分析依据：</b>
 * <dl>
 * <dt>Chrome 3.0:</dt>
 * <dd>Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/3.0.195.27 Safari/532.0</dd>
 * 
 * <dt>Firefox 3.5:</dt>
 * <dd>Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3</dd>
 * 
 * <dt>IE 6:</dt>
 * <dd>Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)</dd>
 * 
 * <dt>Safari 3.0:</dt>
 * <dd>Mozilla/5.0 (Windows; U; Windows NT 5.1; zh) AppleWebKit/522.15.5 (KHTML, like Gecko) Version/3.0.3 Safari/522.15.5</dd>
 * 
 * <dt>Opera 9.2:</dt>
 * <dd>Opera/9.2·2 (Windows NT 5.1; U; en)</dd>
 * </dl>
 * 
 * @static
 * @singleton
 */



/**
 * 如果是IE浏览器，IE的版本号，否则为undefined
 * @type {Number}
 * @property IE
 */

/**
 * 如果是Firefox浏览器，Firefox的版本号，否则为undefined
 * @type {Number}
 * @property Firefox
 */

/**
 * 如果是Chrome浏览器，Chrome的版本号，否则为undefined
 * @type {Number}
 * @property Chrome
 */

/**
 * 如果是Safari浏览器，Safari的版本号，否则为undefined
 * @type {Number}
 * @property Safari
 */

/**
 * 如果是Opera浏览器，Opera的版本号，否则为undefined
 * @type {Number}
 * @property Opera
 */
js_$_client_$_Browser = js_$_client_$_Browser || (function (identifier) {
	var type = identifier.split('|');
	var browser = {};
//	for (var i = type.length - 1; i >= 0; i--) {
//		browser[type[i]] = 0;
//	}
	var version = navigator.userAgent.match(new RegExp('(' + identifier + ')[ \\/](\\d+(\\.\\d+)?)'));
	if (version && version.length) {
		browser[version[1]] = parseFloat(version[2]);
	}
	//适应Safari
	if (version[1] == type[3]) {
		browser[version[1]] = parseFloat(navigator.userAgent.match(/Version\/(\d+(\.\d+)?)/)[1]);
	}
	return browser;
})('IE|Firefox|Chrome|Safari|Opera');

/*
 * jslib JavaScript Library
 * author: mytharcher
 * create: 2010-12-26
 * 
 * update:
 */



/**
 * @class js_$_client_$_Features
 * 浏览器特性兼容性修复
 * @static
 * @singleton
 */
js_$_client_$_Features = js_$_client_$_Features || {};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-12-27 by mytharcher
 * 
 * update:
 */

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-08-13 By mytharcher
 * 
 * update:
 */

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 By mytharcher
 * 
 * update:
 * @2011-08-13 By mytharcher
 * 		[m] move all methods to sub folder
 */



/**
 * @ignore 声明util包，常用工具包
 */
js_$_util = {};



/**
 * @class js_$_util_$_Global
 * 全局环境管理类
 * @singleton
 */
js_$_util_$_Global = js_$_util_$_Global || {};



/**
 * @class js_$_util_$_Global
 */
/**
 * 创建全局唯一id字符串
 * @method js_$_util_$_Global_$_guid
 * @static
 * 
 * 实现机制是简单的计数器++
 * 
 * @param {String} prefix 前缀串
 * @param {String} suffix 后缀串
 * 
 * @return {String}
 */
js_$_util_$_Global_$_guid = function (prefix, suffix) {
	var guid = js_$_util_$_Global_$_guid;
	return (typeof prefix != 'undefined' ? prefix : '') + (guid.i ? ++guid.i : (guid.i = 1)) + (typeof suffix != 'undefined' ? suffix : '');
};



/**
 * 是否可以使用全局执行脚本
 * @property js_$_client_$_Features_$_scriptEval
 * @type {Boolean}
 */
js_$_client_$_Features_$_scriptEval = (function () {
	var script = document.createElement('script'),
		scriptEval = false,
		id = js_$_util_$_Global_$_guid('_');
	script.type = "text/javascript";
	try {
		script.appendChild(document.createTextNode("window." + id + "=1;"));
	} catch(e) {}
	document.body.appendChild(script);
	if (window[id]) {
		scriptEval = true;
		delete window[id];
	}
	document.body.removeChild(script);
	script = null;
	return scriptEval;
})();

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-14 by mytharcher
 * 
 * update:
 */

/**
 * @ignore
 * 修复数组没有every函数
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
 */
if (!Array.prototype.every) {
	/**
	 * @class Array
	 */
	
	/**
	 * 测试数组中是否全部元素都能通过提供的测试函数
	 * @method every
	 * @param {Function} fun 要执行的测试函数
	 * @param {Object} thisp 可选，指定函数执行的作用域
	 * @return {Boolean} 如果全部元素都通过检测的，则返回true；如果有一个没有通过，就返回false。
	 */
	Array.prototype.every = function(fun /*, thisp */) {
		"use strict";
		
		if (typeof this == 'undefined' || this === null)
			throw new TypeError();
		
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t && !fun.call(thisp, t[i], i, t))
				return false;
		}
		
		return true;
	};
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-15 by mytharcher
 * 
 * update:
 */

/**
 * @ignore
 * 修复数组没有filter函数
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter
 */
if (!Array.prototype.filter) {
	/**
	 * @class Array
	 */
	
	/**
	 * 根据条件过滤数组
	 * @method filter
	 * @param {Function} fun 要执行的操作函数
	 * @param {Object} thisp 可选，指定函数执行的作用域
	 * @return {Array} 返回通过过滤条件的元素组成的副本数组
	 */
	Array.prototype.filter = function(fun /*, thisp */){
		"use strict";
		if (typeof this == 'undefined' || this === null) 
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function") 
			throw new TypeError();
		var res = [];
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t) {
				var val = t[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, t)) 
					res.push(val);
			}
		}
		return res;
	};
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-15 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher
 */

/**
 * @ignore
 * 修复数组没有forEach函数
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
 */
if (!Array.prototype.forEach) {
	/**
	 * @class Array
	 */
	
	/**
	 * 对数组每一项执行操作
	 * @method forEach
	 * @param {Function} fun 要执行的操作函数
	 * @param {Object} thisp 可选，指定函数执行的作用域
	 */
	Array.prototype.forEach = function(fun /*, thisp */){
		"use strict";
		
		if (typeof this == 'undefined' || this === null) 
			throw new TypeError();
		
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function") 
			throw new TypeError();
		
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t) 
				fun.call(thisp, t[i], i, t);
		}
	};
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-02-27 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher
 * 		[m] Simplify the code.
 */

/**
 * @ignore
 * 修复数组没有indexOf函数
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
	/**
	 * @class Array
	 */
	
	/**
	 * 在数组中查找一个元素第一次出现的索引位置。
	 * @method indexOf
	 * @param {Any} searchElement
	 * @param {Number}  fromIndex
	 * @return {Number}
	 */
	Array.prototype.indexOf = function(searchElement /*, fromIndex */){
		"use strict";
		
		if (typeof this == 'undefined' || this === null) 
			throw new TypeError();
		
		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0) 
			return -1;
		
		var n = 0;
		if (arguments.length > 0) {
			n = Number(arguments[1]);
			if (n !== n) 
				n = 0;
			else 
				if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) 
					n = (n > 0 || -1) * Math.floor(Math.abs(n));
		}
		
		if (n >= len) 
			return -1;
		
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) 
				return k;
		}
		return -1;
	};
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-14 by mytharcher
 * 
 * update:
 */

/**
 * @ignore
 * 修复数组没有map函数
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
 */
if (!Array.prototype.map){
	/**
	 * @class Array
	 */
	
	/**
	 * 对数组每一项执行操作，并返回每一个操作的返回值组成的数组
	 * @method map
	 * @param {Function} fun 要执行的操作函数
	 * @param {Object} thisp 可选，指定函数执行的作用域
	 * @return {Array}
	 */
	Array.prototype.map = function(fun /*, thisp */){
		"use strict";
		
		if (typeof this == 'undefined' || this === null) 
			throw new TypeError();
		
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function") 
			throw new TypeError();
		
		var res = new Array(len);
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t) 
				res[i] = fun.call(thisp, t[i], i, t);
		}
		
		return res;
	};
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-14 by mytharcher
 * 
 * update:
 */

/**
 * @ignore
 * 修复数组没有some函数
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
 */
if (!Array.prototype.some) {
	/**
	 * @class Array
	 */
	
	/**
	 * 测试数组中是否至少有一个元素能通过提供的测试函数
	 * @method some
	 * @param {Function} fun 要执行的测试函数
	 * @param {Object} thisp 可选，指定函数执行的作用域
	 * @return {Boolean} 如果有通过检测的元素，则返回true；如果一个都没有，则返回false。
	 */
	Array.prototype.some = function(fun /*, thisp */) {
		"use strict";
		
		if (typeof this == 'undefined' || this === null)
			throw new TypeError();
		
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t && fun.call(thisp, t[i], i, t))
				return true;
		}
		
		return false;
	};
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-15 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher
 */

/**
 * @ignore
 * 修复IE没有Date.now函数
 */
if (!Date.now) {
	/**
	 * @class Date
	 */
	
	/**
	 * 返回当前时间的毫秒数
	 * @static
	 * 
	 * @return {Number};
	 */
	Date.now = function(){
		return + new Date;
	};
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-12-27 by mytharcher
 * 
 * update:
 */

/**
 * @class Function
 */

/**
 * 返回一个作用域被修改为参数指向对象的当前函数
 * @method bind
 * 
 * @param {Object} obj
 * 
 * @return {Function}
 */
if (!Function.prototype.bind) {
	Function.prototype.bind = function(obj) {
		var slice = [].slice,
			args = slice.call(arguments, 1), 
			sjs = this, 
			nop = new Function(), 
			bound = function () {
				return sjs.apply( this instanceof nop ? this : ( obj || {} ), 
					args.concat( slice.call(arguments) ) );	
			};
	
		nop.prototype = sjs.prototype;
	
		bound.prototype = new nop();
		
		return bound;
	};
}


//if (!Function.prototype.bind) {
//	Function.prototype.bind = function(obj){
//		var me = this,
//			slice = [].slice,
//			args = slice.call(arguments, 1);
//		return function () {
//			return me.apply(obj, args.concat(slice.call(arguments)));
//		}
//	}
//}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-02-27 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher
 * 		[m] Simplify the code.
 */



/**
 * @ignore
 * 解决IE背景图片缓存问题，a:hover的background多次加载
 */
if (js_$_client_$_Browser.IE && js_$_client_$_Browser.IE <= 6) {
	try {
		document.execCommand("BackgroundImageCache", false, true);
	} catch (ex) {}
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-02-27 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher
 * 		[m] Simplify the code.
 * @2011-12-23 by mytharcher
 * 		[m] Combine the implement into this file.
 */

/**
 * @ignore
 * 修复IE没有JSON处理类
 */

/**
 * @class JSON
 * JSON处理类
 */

/**
 * 解析一个JSON格式的字符串
 * @method JSON.parse
 * @static
 * 
 * @param {String} 要解析的JSON格式字符串
 * 
 * @return {Object/Array}
 * 
 * @see js_$_util.JSON.parse
 */

/**
 * 将一个JSON对象序列化为字符串
 * @method JSON.stringify
 * @static
 * 
 * @param {Object/Array} 要序列化的对象
 * 
 * @return {String}
 * 
 * @see js_$_util.JSON.stringify
 */
(function (host) {
	host.JSON = host.JSON || {
		/**
		 * 解析json格式的字符串
		 * @static
		 * 
		 * @param {String} str 要解析的字符串
		 * 
		 * @return {Object}
		 */
		parse: function(str){
			return (new Function('return (' + str + ')'))();
		},
		
		/**
		 * 将json对象序列化为字符串
		 * @static
		 * 
		 * @param {Object} 要序列化的JSON对象
		 * 
		 * @return {String}
		 */
		stringify: (function(){
			/**
			 * 字符串处理时需要转义的字符表
			 * @private
			 */
			var escapeMap = {
				"\b": '\\b',
				"\t": '\\t',
				"\n": '\\n',
				"\f": '\\f',
				"\r": '\\r',
				'"': '\\"',
				"\\": '\\\\'
			};
			
			/**
			 * 字符串序列化
			 * @private
			 */
			function encodeString(source){
				if (/["\\\x00-\x1f]/.test(source)) {
					source = source.replace(/["\\\x00-\x1f]/g, function(match){
						var c = escapeMap[match];
						if (c) {
							return c;
						}
						c = match.charCodeAt();
						return "\\u00" +
						Math.floor(c / 16).toString(16) +
						(c % 16).toString(16);
					});
				}
				return '"' + source + '"';
			}
			
			/**
			 * 数组序列化
			 * @private
			 */
			function encodeArray(source){
				var result = ["["], l = source.length, preComma, i, item;
				
				for (i = 0; i < l; i++) {
					item = source[i];
					
					switch (typeof item) {
						case "undefined":
						case "function":
						case "unknown":
							break;
						default:
							if (preComma) {
								result.push(',');
							}
							result.push(JSON.stringify(item));
							preComma = 1;
					}
				}
				result.push("]");
				return result.join("");
			}
			
			/**
			 * 处理日期序列化时的补零
			 * @private
			 */
			function pad(source){
				return source < 10 ? '0' + source : source;
			}
			
			/**
			 * 日期序列化
			 * @private
			 */
			function encodeDate(source){
				return '"' + source.getFullYear() + "-" +
				pad(source.getMonth() + 1) +
				"-" +
				pad(source.getDate()) +
				"T" +
				pad(source.getHours()) +
				":" +
				pad(source.getMinutes()) +
				":" +
				pad(source.getSeconds()) +
				'"';
			}
			
			return function(value){
				switch (typeof value) {
					case 'undefined':
						return 'undefined';
						
					case 'number':
						return isFinite(value) ? String(value) : "null";
						
					case 'string':
						return encodeString(value);
						
					case 'boolean':
						return String(value);
						
					default:
						if (value === null) {
							return 'null';
						} else 
							if (value instanceof Array) {
								return encodeArray(value);
							} else 
								if (value instanceof Date) {
									return encodeDate(value);
								} else {
									var result = ['{'], encode = JSON.stringify, preComma, item;
									
									for (var key in value) {
										if (value.hasOwnProperty(key)) {
											item = value[key];
											switch (typeof item) {
												case 'undefined':
												case 'unknown':
												case 'function':
													break;
												default:
													if (preComma) {
														result.push(',');
													}
													preComma = 1;
													result.push(encode(key) + ':' + encode(item));
											}
										}
									}
									result.push('}');
									return result.join('');
								}
				}
			};
		})()
	};
})(this);

/*
 * js Javascript Library
 * 
 * craete:
 * @2010-11-07 by mytharcher
 * 
 * update:
 * @2010-11-16 by mytharcher
 * @2010-12-26 by mytharcher
 */

/**
 * @ignore
 * 修复Object没有keys函数
 */
if (!Object.keys) {
	/**
	 * @class Object
	 */
	
	/**
	 * 返回对象上所有可枚举的属性名组成的数组
	 * @method Object.keys
	 * @static
	 * @param {Object} o
	 * @return {Array}
	 */
	Object.keys = function (o) {
		var result = [];
		for(var name in o) {
			if (o.hasOwnProperty(name))
				result.push(name);
		}
		return result;
	}
}

/*
 * js Javascript Library
 * 
 * craete:
 * @2010-11-07 by mytharcher
 * 
 * update:
 * @2010-11-16 by mytharcher
 * @2010-12-26 by mytharcher
 */



/**
 * @ignore
 * form: http://arguments.callee.info/2008/11/10/passing-arguments-to-settimeout-and-setinterval/
 * 
 * 解决ie下setInterval不能传参数的问题
 * 但在IE8下仅能使用window.setInterval调用
 */
if (js_$_client_$_Browser.IE) {
	(function (oSetInterval, host) {
		host.setInterval = function(fn, time){
			var args = [].slice.call(arguments, 2);
			return oSetInterval(function(){
				fn.apply(this, args);
			}, time);
		};
	})(setInterval, this);
}

/*
 * js Javascript Library
 * 
 * craete:
 * @2010-11-07 by mytharcher
 * 
 * update:
 * @2010-11-16 by mytharcher
 * @2010-12-26 by mytharcher
 */



/**
 * @ignore
 * form: http://arguments.callee.info/2008/11/10/passing-arguments-to-settimeout-and-setinterval/
 * 
 * 解决ie下setTimeout不能传参数的问题
 * 但在IE8下仅能使用window.setTimeout调用
 */
if (js_$_client_$_Browser.IE) {
	(function (oSetTimeout, host) {
		host.setTimeout = function(fn, time){
			var args = [].slice.call(arguments, 2);
			return oSetTimeout(function(){
				fn.apply(this, args);
			}, time);
		};
	})(setTimeout, this);
}

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-02-27 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher
 */

/**
 * @ignore
 * 修复IE没有字符串trim函数
 */
if (!String.prototype.trim) {
	/**
	 * @class String
	 */
	
	/**
	 * 删除字符串两端的空白字符
	 * 
	 * @return {String} 返回删除空白后新的字符串
	 */
	String.prototype.trim = function(){
		return this.replace(/^\s+|\s+$/g, '');
	};
}



/**
 * @ignore 声明dom包，dom模型与操作相关
 */
js_$_dom = {};



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-12-13 by mytharcher
 * 
 * update:
 * @2011-08-13 by mytharcher
 * 		[m] add more escaped attributes' name
 */



/**
 * @class js_$_dom_$_Attribute
 * DOM元素属性操作类
 * @static
 * @singleton
 */
js_$_dom_$_Attribute = js_$_dom_$_Attribute || {
	/**
	 * 获取元素的指定属性
	 * @method js_$_dom_$_Attribute.get
	 * @static
	 * 
	 * @param {Element} elememt
	 * @param {String} key 要获取的属性
	 * 
	 * @return {String} 返回属性值
	 */
	get: function (element, key) {
		var element = js_$_dom_$_Stage_$_get(element);
	    if ('style' == key){
	        return element.style.cssText;
	    }
		return element.getAttribute(js_$_dom_$_Attribute.keyEscape[key] || key);
	},
	
	/**
	 * 设置元素的属性值
	 * @method js_$_dom_$_Attribute.set
	 * @static
	 * 
	 * @param {Element/String} element 要设置属性的元素
	 * @param {String/Object} key
	 * @param {String} value
	 */
	set: function (element, key, value) {
		var element = js_$_dom_$_Stage_$_get(element);
		if (typeof key == 'object' && typeof value == 'undefined') {
			for (var i in key) {
				js_$_dom_$_Attribute.set(element, i, key[i]);
			}
		} else {
			element.setAttribute(js_$_dom_$_Attribute.keyEscape[key] || key, value);
		}
	},
	
	/**
	 * @ignore
	 * @private
	 * 
	 * from https://github.com/BaiduFE/Tangram-base/blob/master/src/baidu/dom/_NAME_ATTRS.js
	 */
	keyEscape: (function () {
	    var result = {
	        'cellpadding': 'cellPadding',
	        'cellspacing': 'cellSpacing',
	        'colspan': 'colSpan',
	        'rowspan': 'rowSpan',
	        'valign': 'vAlign',
	        'usemap': 'useMap',
	        'frameborder': 'frameBorder'
	    };
	    
	    if (js_$_client_$_Browser.IE < 8) {
	        result['for'] = 'htmlFor';
	        result['class'] = 'className';
	    } else {
	        result['htmlFor'] = 'for';
	        result['className'] = 'class';
	    }
	    
	    return result;
	})()
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-08-13 by mytharcher
 * 
 * update:
 */

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-04-12 by mytharcher
 * 
 * update:
 */

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher
 * 		[a] Add globalEval
 * @2011-01-20 by mytharcher
 * 		[a] Add isVisible
 * @2011-02-13 by mytharcher
 * 		[m] Move 3 methods "isVisible", "getNextHighestDepth", "evalScript" to optional package of the class.
 * @2011-04-12 by mytharcher
 * 		[m] Move all methods to optional package of the class.
 */



/**
 * @class js_$_dom_$_Stage
 * 舞台类对象，包含一些与环境相关的全局方法
 * @singleton
 */
js_$_dom_$_Stage = js_$_dom_$_Stage || {};



/**
 * @class js_$_dom_$_Stage
 */

/**
 * 根据id获取元素。
 * @method js_$_dom_$_Stage_$_get
 * @static
 * 
 * @param {String/Element} 要获取的元素的id，如传入的就是元素，则直接返回该元素
 * 
 * @return {Element} 返回对应id的元素
 */
js_$_dom_$_Stage_$_get = function (id) {
	return typeof id == 'string' ? document.getElementById(id) : id;
};


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-04-12 by mytharcher
 * 
 * update:
 * @2010-11-17 by mytharcher
 * @2010-11-18 by mytharcher
 * @2011-01-11 by mytharcher
 * @2011-02-18 by mytharcher
 * 		[m] Add "Object" result type for method "get" when "key" is not passed in.
 * @2011-10-31 by mytharcher
 * 		[a] Add own constructor.
 */


/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2010-02-27 by mytharcher
 * 
 * update:
 * @2010-04-09 by mytharcher
 * @2010-07-23 by mytharcher
 * @2010-11-17 by mytharcher
 * @2010-12-23 by mytharcher [m] Modify method "extend", "clone" and "copy" will all implement by "extend".
 * @2011-01-10 by mytharcher [m] Fix bug in method "extend", especially for extend an object contains a constructor key.
 * @2011-06-29 by mytharcher [m] Fix bug in method "create" and "inherit", for supporting the syntax of "subClassInstance instanceof SuperClass == true".
 * @2011-08-13 by mytharcher
 * 		[m] Change the method "extend" to "mix" to avoid confusion about extend actions.
 * @2011-08-18 by mytharcher
 * 		[m] Move the implement process from method "inherit" to "create" for clean.
 * @2011-08-24 by mytharcher
 * 		[m] Change class inheritship property "superClass" in newly created classes to "Super".
 * 		[d] Remove prototype property "_super" from newly created classes.
 * 		[m] Modify "implement" API to support more arguments.
 * @2011-09-02 by mytharcher
 * 		[m] Add array support for method "mix" to specify the argument "override".
 * @2011-09-25 by mytharcher
 * 		[m] Change method "mix" to allow copy empty properties.
 * @2011-10-30 by mytharcher
 * 		[m] Abandon the auto-created constructor in newly created class without specifying a own constructor, for being more common as other languages.
 * 		[m] Remove "Super" in newly created sub-class to avoid confusion.
 * @2012-01-10 by mytharcher
 * 		[m] Change the type judgement from by the class js_$_util_$_Type to native implement by typeof expression, to cut off the dependency circle.
 */



/**
 * @class js_$_util_$_Class
 * 类管理
 * @static
 * @singleton
 */
js_$_util_$_Class = js_$_util_$_Class || {
	/**
	 * 通过克隆一个对象的所有层级的属性产生一个新的对象
	 * @method js_$_util_$_Class.clone
	 * @static
	 * 
	 * @param {Object} source 克隆源
	 * @param {Object} target (optional)克隆目标，不输入则自动创建。
	 * 
	 * @return {Object}
	 */
	clone: function (source, target) {
		return js_$_util_$_Class.mix(target, source, true, true);
	},
	
	/**
	 * 复制源对象上的属性到目标对象
	 * @method js_$_util_$_Class.copy
	 * @static
	 * 
	 * @param {Object...} source 复制源
	 * @param {Object} target (optional)复制目标
	 * @param {Boolean} deep (optional)是否深度复制
	 * 
	 * @return {Object}
	 */
	copy: function (source) {
		var len = arguments.length,
			lastIndex = len - 1,
			deep = arguments[lastIndex],
			hasDeep = typeof deep == 'boolean',
			target;
		
		if (lastIndex > 0) {
			if (hasDeep) {
				if (lastIndex > 1) {
					target = arguments[--lastIndex];
				}
			} else {
				target = deep;
				deep = false;
				lastIndex--;
			}
		} else {
			deep = false;
		}
		for (var i = 0; i <= lastIndex; i++) {
			target = js_$_util_$_Class.mix(target, arguments[i], true, deep);
		}
		return target;
		// return js_$_util_$_Class.mix(target, source, true, deep);
	},
	
	/**
	 * 以一个对象上有的属性扩展另一个对象，默认不覆盖已有的同名属性
	 * @method js_$_util_$_Class.mix
	 * @static
	 * 
	 * @param {Object} target 被扩展的对象
	 * @param {Object} source 源对象
	 * @param {Boolean/Function/Array} override (optional)是否覆盖已存在的属性。该参数或函数返回的值在如下三种情况下，undefined：如果已存在则不覆盖；true：强制覆盖；false：忽略该属性。默认：undefined。
	 * @param {Boolean} deep 是否深度扩展，默认：false；
	 * 
	 * @return {Object}
	 */
	mix: (function (specialKeys) {
		function ifOverride (target, source, key, override) {
			var over = typeof override == 'function' ?
				override.call(source, key)
				: (override instanceof Array ?
					override.indexOf(key) >= 0
					: override);
			return source.hasOwnProperty(key) && (typeof over == 'undefined' ? !target.hasOwnProperty(key) : over);
		}
		
		return function (target, source, override, deep) {
			var
				isFunction = Object.prototype.toString.call(source) == '[object Function]',
				isObject = source && typeof source == 'object' && !isFunction,
				isArray = source instanceof Array,
				keys = [], key, i, len, item,
				Class = js_$_util_$_Class;
			if (isObject || (isFunction && !deep)) {
				target = target || (isArray ? [] : {});
				for (i in source) {
					if (source.hasOwnProperty(i)) {
						keys.push(i);
					}
				}
				keys = keys.concat(specialKeys);
				for (i = 0, len = keys.length; i < len; i++) {
					key = keys[i];
					if (key != 'prototype' && ifOverride(target, source, key, override)) {
						item = source[key];
						target[key] = deep ? Class.mix(target[key], item, true, true) : item;
						if (!isArray && item === null) {
							delete target[key];
						}
					}
				}
			} else {
				target = source;
			}
			return target;
		};
	})(['constructor', 'toString']),
	
	/**
	 * 创建一个类
	 * @method js_$_util_$_Class.create
	 * @static
	 * 
	 * @param {Object} proto 新类的原型
	 * @param {Function} Super 超类，非必选。如有超类，则新类会继承于超类
	 * @param {Array} interfaces 接口，非必选。如果有接口，则新类会继承接口列表中的所有原型，但不会被覆盖
	 * 
	 * @return {Function} 创建的新类
	 */
	create: function (proto, Super, interfaces) {
		var Class = js_$_util_$_Class,
			newClass = proto.hasOwnProperty('constructor') ? proto.constructor : new Function;
			// Super = Super || Object;
		
		// if (proto.hasOwnProperty('constructor')) {
			// newClass = proto.constructor;
		// } else {
			// var tplStr = '';
			// //解决了派生类不指定constructor是默认继承超类构造函数不能超过两级的问题
			// if (Super) {
				// var defConRe = /^function anonymous\(\)\s*\{\s*this\.Super(\.prototype\.Super)*\.apply\(this,\s*arguments\);\s*\}$/;
				// tplStr += 'this.Super';
				// for (var s = Super; s; s = s.prototype.Super) {
					// if (defConRe.test(s.toString())) {
						// tplStr += '.prototype.Super';
					// } else {
						// break;
					// }
				// }
				// tplStr += '.apply(this, arguments);';
			// }
			// newClass = new Function(tplStr);
		// }
		Class.copy(proto, newClass.prototype);
		
		//如果声明了父类，则从父类继承
		Super && Class.inherit(newClass, Super);
		
		//实现接口
		interfaces && Class.implement(newClass, [].slice.call(arguments, 2));
		
		return newClass;
	},
	
	/**
	 * 继承一个类
	 * @method js_$_util_$_Class.inherit
	 * @static
	 * 
	 * 该继承会使用SubClass.prototype = new SuperClass()的机制继承超类，
	 * 同时会修正constructor属性，
	 * 另外，还会继承超类上所有的静态对象。
	 * 
	 * @param {Function} someClass 派生类
	 * @param {Function} Super 超类
	 * 
	 * @return {Function} 派生类
	 */
	inherit: function (someClass, Super) {
		var Class = js_$_util_$_Class,
		
			//暂存派生类原有的prototype
			proto = someClass.prototype,
		
			//超类prototype复制临时辅助类
			superHelper = new Function();
		
		//复制超类的prototype到临时辅助类
		superHelper.prototype = Super.prototype;
		
		//设置派生类的prototype为临时辅助类生成的实例
		//这里相当于给派生类一套超类干净的prototype赋值
		someClass.prototype = new superHelper();
		
		//覆盖自定义原型
		Class.copy(proto, someClass.prototype);
		
		//复制超类的静态对象到派生类
		Class.mix(someClass, Super);
		
		//设置派生类的超类属性为超类
		// someClass.prototype.Super = Super;
		
		//修复派生类的构造函数属性
		someClass.prototype.constructor = someClass;
		
		return someClass;
	},
	
	/**
	 * 实现接口
	 * @method js_$_util_$_Class.implement
	 * @static
	 * 该方法会将inter对象上的所有函数扩展到someClass的原型上，前提是someClass的原型上没有同名的方法。
	 * 通过此方法以达到在创建类时可以实现其他类提供的接口。
	 * 
	 * @param {Function} someClass
	 * @param {Array|Object...} inter
	 * 
	 * @return {Function} 返回实现了接口的对象someClass
	 */
	implement: function (someClass, inter) {
		if (inter) {
			var obj2str = Object.prototype.toString;
			var interfaces = inter instanceof Array ? inter : [].slice.call(arguments, 1);
			for (var i = 0, l = interfaces.length; i < l; i++) {
				var interProto = interfaces[i];
				for (var p in interProto) {
					if (interProto.hasOwnProperty(p)) {
						var protoItem = interProto[p];
						if (p != 'constructor'
							&& p != 'prototype'
							&& obj2str.call(protoItem) == '[object Function]'
							&& !someClass.prototype[p]
						) {
							someClass.prototype[p] = protoItem;
						}
					}
				}
			}
		}
		return someClass;
	}
};


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-04-09 by mytharcher
 * 
 * update:
 * @2010-04-27 by mytharcher
 * @2010-11-18 by mytharcher
 */



/**
 * @class js_$_util_$_Hash 哈希表类
 */
js_$_util_$_Hash = js_$_util_$_Class.create({
	
	/**
	 * 初始化，会调用set方法完成构造
	 * @param {String/Object} key 初始化传入的键名或键值对集合，如传入的是Object，则忽略value参数。
	 * @param {Any} value 初始化传入的键名或空，如key传入了Object，则此项被忽略。
	 * @return {Hash} 返回创建的Hash实例
	 */
	constructor: function (key, value) {
		this._data = {};
		return this.set.apply(this, arguments);
	},
	
	/**
	 * 获取表中的值
	 * @param {String} key 传入key则根据key获取值，否则获取整个表对象
	 * @return {Any} 返回对应键的值
	 */
	get: function (key) {
		return typeof key != 'undefined' ? this._data[key] : this._data;
	},
	
	/**
	 * 更新操作
	 * @private
	 * 
	 * @param {String} type
	 * @param {String/Object/Hash} key
	 * @param {String/Number/Array} value
	 * 
	 * @return {Hash} 返回当前实例以继续操作
	 */
	_update: function (type, key, value) {
		if (typeof key != 'undefined') {
			var methodMap = this.constructor._updataMethod;
			var map = this._data;
			if (typeof value == 'undefined') {
				if (key.constructor == this.constructor) {
					if (key == this) {
						return this;
					} else {
						return methodMap[type].update.call(this, key.get());
					}
				} else {
					var json = key;
					if (typeof json == 'string') {
						json = this.constructor.parseJSON(json);
					}
					for (var i in json) {
						methodMap[type].updateValue.call(this, i, json[i]);
					}
				}
			} else if (typeof key == 'string' && key != '') {
				methodMap[type].updateValue.call(this, key, value);
			}
		}
		return this;
	},
	
	/**
	 * 添加键值对(或组)，抽象方法，默认以set方法实现
	 * <p>与set方法不同的是，set会直接覆盖该键上的值，而add可以追加</p>
	 * 
	 * @param {String/Object/Hash} key
	 * @param {String/Number/Array} value
	 * 
	 * @return {Hash}
	 */
	add: function (key, value) {
		return this._update(this.constructor.UPDATE_TYPE_ADD, key, value);
	},
	
	/**
	 * 添加一个键值对，抽象方法，默认以setValue方式实现
	 * @param {String} key
	 * @param {String|Number} value
	 * 
	 * @return {Hash}
	 */
	addValue: function (key, value) {
		return this.setValue(key, value);
	},
	
	/**
	 * 移除键值对
	 * 
	 * @param {String|null} key
	 * 
	 * @return {Hash}
	 */
	remove: function (key) {
		if (key) {
			delete this._data[key];
		} else {
			this._data = {};
		}
		return this;
	},
	
	/**
	 * 设置值的入口方法
	 * 
	 * @param {Object/String} key 对象或键名或json串
	 * @param {String/Array} value (optional)键值
	 * 
	 * @return {Hash}
	 */
	set: function (key, value) {
		return this._update(this.constructor.UPDATE_TYPE_SET, key, value);
	},
	
	/**
	 * 设置某个键的值
	 * @param {String} key 键名
	 * @param {All} value 键值
	 * 
	 * @return {Hash} 返回自身实例，以供链式调用
	 */
	setValue: function (key, value) {
		var map = this._data;
		if (value === null) {
			delete map[key];
		} else {
			map[key] = value;
		}
		return this;
	},
	
	/**
	 * 输出为字符串
	 * 
	 * @return {String}
	 */
	toString: function () {
		return JSON.stringify(this._data);
	}
});

js_$_util_$_Class.copy({
	
	UPDATE_TYPE_ADD: 'add',
	UPDATE_TYPE_SET: 'set',
	
	/**
	 * @ignore
	 * 更新方法映射表
	 * 
	 * fuck! 这么长时间我都忘记为啥要写这么复杂的逻辑了。。。
	 */
	_updataMethod: {
		'add': {
			'update': function (key, value) {
				return this.add(key, value);
			},
			'updateValue': function (key, value) {
				return this.addValue(key, value);
			}
		},
		'set': {
			'update': function (key, value) {
				return this.set(key, value);
			},
			'updateValue': function (key, value) {
				return this.setValue(key, value);
			}
		}
	},
	
	/**
	 * 解析为JSON类型，会调用JSON类的分析函数来处理
	 * @method js_$_util_$_Hash.parseJSON
	 * @static
	 * 
	 * @param {String} source 需要解析的字符串
	 * @return {Object} 解析的json结果
	 */
	parseJSON: function(source){
		return JSON.parse(source);
	}
}, js_$_util_$_Hash);



/*
 * js Javascript Library
 * 
 * create:
 * @2010-11-18 by mytharcher
 * 
 * update:
 * @2010-12-27 by mytharcher:
 * 		[m] Reversed the meaning of trim parameter.
 * @2011-09-27 by mytharcher:
 * 		[m] Fix bug in method "createParser" for opposite order of parsing string.
 * 
 */



/**
 * @ignore
 * 声明text包，文本处理
 */
js_$_text = {};



/**
 * @class js_$_text_$_JSONParserFactory
 * 类JSON串分析器工厂类
 * @static
 * @singleton
 */
js_$_text_$_JSONParserFactory = js_$_text_$_JSONParserFactory || {
	/**
	 * 生成分析器
	 * @method js_$_text_$_JSONParserFactory.createParser
	 * @static
	 * 
	 * @param {String} sepChar 键值对分隔符
	 * @param {String} letChar 键值分隔符
	 * @param {Function} valueFilter 值过滤器，可选，默认：null
	 * @param {Boolean} trim 应用trim，可选，默认：false
	 * 
	 * @return {Function}
	 */
	createParser: function (sepChar, letChar, valueFilter, trim) {
		return function (source) {
			var ret = {};
			var sArr = source.split(sepChar);
			for (var i = 0, len = sArr.length; i < len; i++) {
				var pairStr = sArr[i];
				if (trim ? pairStr.trim() : pairStr) {
					var pair = pairStr.split(letChar);
					if (pair.length == 2) {
						var key = pair[0], value = pair[1];
						key = trim ? key.trim() : key;
						value = trim ? value.trim() : value;
						if (key) {
							ret[key] = typeof valueFilter == 'function' ? valueFilter(value) : value;
						}
					}
				}
			}
			return ret;
		}
	},
	
	/**
	 * 创建字符串生成器
	 * @static
	 * 
	 * @param {String} sepChar 键值对分隔符
	 * @param {String} letChar 键值分隔符
	 * @param {Function} valueFilter 值过滤器，可选，默认：null
	 * @param {Boolean} tailSep 是否需要尾分隔符，可选，默认：false
	 * 
	 * @return {Function}
	 */
	createStringifier: function (sepChar, letChar, valueFilter, tailSep) {
		return function (json) {
			var ret = [];
			for (var key in json) {
				ret.push(key, letChar, typeof valueFilter == 'function' ? valueFilter(json[key]) : json[key], sepChar);
			}
			!tailSep && ret.pop();
			return ret.join('');
		}
	}
};





/**
 * @class js_$_dom_$_Style
 * 样式管理类
 * @extends js_$_util_$_Hash
 */
js_$_dom_$_Style = js_$_dom_$_Style || js_$_util_$_Class.create({
	constructor: function () {
		js_$_util_$_Hash.apply(this, arguments);
	},
	/**
	 * 生成以分号分隔的样式属性字符串
	 * @return {String}
	 */
	toString: (function() {
		var toString = js_$_text_$_JSONParserFactory.createStringifier(';', ':', null, true);
		return function () {
			return toString(this._data);
		}
	})()
}, js_$_util_$_Hash);

js_$_util_$_Class.copy({
	/**
	 * 将css字符串转化为JSON键值对
	 * @method js_$_dom_$_Style.parseJSON
	 * @override
	 * @static
	 * 
	 * @param {String} source
	 * 
	 * @return {Object}
	 */
	parseJSON: js_$_text_$_JSONParserFactory.createParser(';', ':', null, true),
	
	/**
	 * 将以“-”连字符链接的属性名转化为驼峰命名的字符串
	 * @method js_$_dom_$_Style.toCamelCase
	 * @static
	 * 
	 * @param {String} source
	 * 
	 * @return {String}
	 */
	toCamelCase: function (source) {
		return String(source).replace(/[-_][a-z]/g, function (match) {
			return match.charAt(1).toUpperCase();
		});
	},
	
	/**
	 * 获取元素当前样式
	 * @method js_$_dom_$_Style.get
	 * @static
	 * 
	 * @param {Element} element 要获取的元素
	 * @param {String} key 要获取的样式名，为空则返回整个样式对象
	 * 
	 * @return {String/Object}
	 */
	get: function (element, key) {
		var Style = js_$_dom_$_Style,
			elem = js_$_dom_$_Stage_$_get(element),
			key = key ? Style.toCamelCase(key) : '',
			value,
			// 在IE下，Element没有在文档树上时，没有currentStyle属性
//			style = elem.currentStyle || (js_$_client_$_Browser.IE ? elem.style : document.defaultView.getComputedStyle(elem, null)),
			style = js_$_client_$_Browser.IE ? elem.currentStyle || elem.style : document.defaultView.getComputedStyle(elem, null);
		
		if (key) {
			value = elem.style[key];
			
			// 在取不到值的时候，用fixer进行修正
			if (!value) {
				var fixer = Style.fixer[key];
				
				if ('string' == typeof fixer) {
					value = style[fixer];
				} else if (fixer && fixer.get) {
					value = fixer.get(style, key);
				} else {
					value = style[key];
				}
			}
			
			// 检查结果过滤器
			var filter = Style.filter[key];
			if (filter) {
				value = filter.call(Style.filter, value);
			}
		} else {
			value = style;
		}
	
		return value;
	},
	
	/**
	 * 设置一个DOM元素的样式
	 * @method js_$_dom_$_Style.set
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String/Object} key
	 * @param {String} value
	 * 
	 * @return {void}
	 */
	set: function (element, key, value) {
		var Style = js_$_dom_$_Style,
			elem = js_$_dom_$_Stage_$_get(element);
		if (typeof key == 'object' && typeof value == 'undefined') {
			Style.setCSSText(elem, key);
		} else {
			var key = Style.toCamelCase(key);
			var fixer = Style.fixer[key];
			//	element.style[key] = value;
			(fixer && fixer.set) ? fixer.set(elem, value) : (elem.style[fixer || key] = value);
		}
	},
	
	/**
	 * 通过cssText设置元素的样式
	 * @method js_$_dom_$_Style.setCSSText
	 * @static
	 * 
	 * @param {Element} element 要操作的对象
	 * @param {Object/Style/String} style 要设置的样式
	 * @param {Boolean} clean (optional)是否清除原有cssText后再添加，默认：false
	 * 
	 * @return {void}
	 */
	setCSSText: function (element, style, clean) {
		var elem = js_$_dom_$_Stage_$_get(element);
		elem.style.cssText = (new js_$_dom_$_Style(clean ? {} : elem.style.cssText))
			.set(style)
			.toString();
	},
	
	/**
	 * @ignore
	 */
	fixer: {
		/**
		 * @ignore
		 */
		'opacity': js_$_client_$_Browser.IE ? {
			/**
			 * @ignore
			 */
			get: function (style) {
				var filter = style.filter;
				return filter && filter.indexOf("opacity=") >= 0 ? (parseFloat(filter.match(/opacity=([^)]*)/)[1]) / 100) + "" : "1";
			},
			
			/**
			 * @ignore
			 */
			set: function (element, value) {
				var style = element.style;
				// 只能Quirks Mode下面生效??
				style.filter = (style.filter || "").replace(/alpha\([^\)]*\)/gi, "") + ("alpha(opacity=" + value * 100 + ")");
				// IE filters only apply to elements with "layout."
				style.zoom = 1;
			}
		} : null,
		
		/**
		 * @ignore
		 */
		'float': js_$_client_$_Browser.IE ? 'styleFloat' : 'cssFloat'
	},
	
	/**
	 * @ignore
	 */
	filter: {
		/**
		 * @ignore
		 */
		background: function (value) {
			return this.color(value);
		},
		
		/**
		 * @ignore
		 */
		backgroundColor: function (value) {
			return this.color(value);
		},
		
		/**
		 * @ignore
		 */
		color: function (value) {
			return value.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/i, this._rgbColorReplacer)
				.replace(/#([0-9a-f])([0-9a-f])([0-9a-f])\b/ig, this._shortColorReplacer);
		},
		
		/**
		 * @ignore
		 */
		_rgbColorReplacer: function (rgb, r, g, b) {
			return '#' + [r, g, b].map(function(color){
				return ('0' + parseInt(color).toString(16)).substr(-2);
			}).join('');
		},
		
		/**
		 * @ignore
		 */
		_shortColorReplacer: function (color, r, g, b) {
			return ['#', r, r, g, g, b, b].join('');
		}
	}
}, js_$_dom_$_Style);


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-08-13 by mytharcher
 * 
 * update:
 */


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-02-21 by mytharcher
 * 
 * update:
 * @2011-08-13 by mytharcher
 * 		[m] move all method to sub folder.
 */



/**
 * @class js_$_dom_$_Traversal
 * DOM节点遍历类
 * @static
 * @singleton
 */
js_$_dom_$_Traversal = {};



/**
 * @class js_$_dom_$_Traversal
 */

/**
 * 从一个节点开始向上遍历
 * @method js_$_dom_$_Traversal_$_up
 * @static
 * 
 * @param {Element} element 开始遍历的元素
 * @param {Function} fn 遍历在每一个节点上要执行的操作，如果该函数的执行结果为false，则会中断所有遍历，返回已遍历的节点数。
 * @param {Object} thisp (optional)执行fn操作的scope对象
 * 
 * @return {Number} 返回已遍历的节点数量
 */
js_$_dom_$_Traversal_$_up = function (element, fn, thisp) {
	var node = js_$_dom_$_Stage_$_get(element),
		topNode = document.documentElement,
		count = 0;
	while (node && node != topNode && fn.call(thisp, node, element) !== false) {
		node = node.parentNode;
		count++;
	}
	return count;
};



/**
 * @class js_$_dom_$_BoxModel
 * DOM元素盒子模型类
 * @singleton
 */
js_$_dom_$_BoxModel = {
	/**
	 * 获取元素的位置
	 * @method js_$_dom_$_BoxModel.getPosition
	 * @static
	 * 
	 * @param {Element} el
	 * @param {Element} refer 相对的元素，如不传入则只计算相对父级节点的位置
	 * 
	 * @return {Object} 返回包含位置坐标x, y属性的对象
	 */
	getPosition: function (el, refer) {
		var pos = {x: 0, y: 0};
		
		var cStyle = el.currentStyle || document.defaultView.getComputedStyle(el, null);
		
		//	var layoutBWX = layoutBWY = 0;
		
		if (!refer) {
			if (cStyle.position == 'absolute') {
				pos.x = el.offsetLeft - (parseInt(cStyle.marginLeft) || 0);
				pos.y = el.offsetTop - (parseInt(cStyle.marginTop) || 0);
			} else if (cStyle.position == 'relative') {
				pos.x = (parseInt(cStyle.left) || 0);
				pos.y = (parseInt(cStyle.top) || 0);
			}
		} else {
			for (var node = el; node.offsetParent && node != refer; node = node.offsetParent) {
				pos.x += node.offsetLeft;
				pos.y += node.offsetTop;
	//			if (e.currentStyle && e.currentStyle.hasLayout) {
	//				layoutBWX += (parseInt(e.currentStyle.borderLeftWidth) || 0);
	//				layoutBWY += (parseInt(e.currentStyle.borderTopWidth) || 0);
	//			}
			}
			//避免ie和ff计算body的offsetLeft不一致
	//		pos.x = el.offsetLeft - node.offsetLeft;//-(parseInt(cStyle.marginLeft)||0);
	//		pos.y = el.offsetTop - node.offsetTop;//-(parseInt(cStyle.marginTop)||0);
			if (cStyle.position == 'static' && el.currentStyle) {
				pos.x += (parseInt(document.body.currentStyle.marginLeft) || 0) * 2;
				pos.y += (parseInt(document.body.currentStyle.marginTop) || 0) * 2;
			}
		}
		pos.left = pos.x;
		pos.top = pos.y;
		
		return pos;
	},
	
	/**
	 * 向上遍历获取一个元素的绝对可见状态
	 * @method js_$_dom_$_BoxModel.isDisplaying
	 * @static
	 * 
	 * @param {Element} element 要获取的元素
	 * 
	 * @return {Boolean}
	 */
	isDisplaying: function (element) {
		var Style = js_$_dom_$_Style;
		return !!js_$_dom_$_Traversal_$_up(js_$_dom_$_Stage_$_get(element), function (node) {
			if (node.nodeType == 'input' && node.type == 'hidden' || Style.get(node, 'display') == 'none') {
				return false;
			}
		});
	}
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-2-27 By mytharcher
 * 
 * update:
 * @2010-04-12 By mytharcher
 * @2010-04-20 By mytharcher
 * @2010-04-27 By mytharcher
 * @2010-11-17 By mytharcher
 * @2011-01-15 By mytharcher
 * 		[m] Change directly implement to use js_$_text_$_WordString for support string process.
 */





/**
 * @class js_$_dom_$_ClassName
 * DOM元素的class属性管理类
 * @singleton
 */
js_$_dom_$_ClassName = js_$_dom_$_ClassName || {
	/**
	 * 获取一个DOM元素的class
	 * @method js_$_dom_$_ClassName.get
	 * @static
	 * 
	 * @param {String/Element} element DOM元素的引用或id
	 * 
	 * @return {Array} 返回className数组
	 */
	get: function (element) {
		var elem = js_$_dom_$_Stage_$_get(element);
		return (elem.className || '').split(' ');
	},
	
	/**
	 * 对一个DOM元素添加class
	 * @method js_$_dom_$_ClassName.add
	 * @static
	 * 
	 * @param {String/Element} element DOM元素的引用或id
	 * @param {String/Array} cls 要添加的class
	 * 
	 * @return {String} 返回添加后的className
	 */
	add: function (element, cls) {
		var elem = js_$_dom_$_Stage_$_get(element),
			curName = elem.className;
		return (elem.className = (new js_$_text_$_WordString()).add(curName).add(cls).toString());
	},
	
	/**
	 * 对一个DOM元素移除class
	 * @method js_$_dom_$_ClassName.remove
	 * @static
	 * 
	 * @param {String/Element} element DOM元素的引用或id
	 * @param {String/Array} cls 要移除的class，可以是多个className拼接的字符串，也可以是数组
	 * 
	 * @return {String} 返回移除后的className
	 */
	remove: function (element, cls) {
		var elem = js_$_dom_$_Stage_$_get(element),
			curName = elem.className;
		return (elem.className = (new js_$_text_$_WordString()).add(curName).remove(cls).toString());
	},
	
	/**
	 * 判断一个DOM元素或一个字符串内是否存在指定的className
	 * @method js_$_dom_$_ClassName.has
	 * @static
	 * 
	 * @param {String/Element} element DOM元素的引用或id
	 * @param {String/Array} cls 要判断的class，可以是多个className拼接的字符串，也可以是数组
	 * 
	 * @return {Boolean} 存在为true，不存在为false，只要有一个className不存在即为false
	 */
	has: function (element, cls) {
		var elem = js_$_dom_$_Stage_$_get(element);
		return (new js_$_text_$_WordString()).add(elem.className).contains(cls);
	},
	
	/**
	 * className开关
	 * @method js_$_dom_$_ClassName.toggle
	 * @static
	 * 
	 * 如果设置了on参数，则按on添加或删除className，否则如果存在className则删除，反之添加
	 * 
	 * @param {String/Element} element DOM元素或者需要添加/删除的字符串
	 * @param {String/Array} cls 要添加/移除的class，可以是多个className拼接的字符串，也可以是数组
	 * @param {Boolean} on 开关项，默认不使用，如果设置了，将强制按on设置的添加或删除className
	 */
	toggle: function (element, cls, on) {
		var elem = js_$_dom_$_Stage_$_get(element);
		elem.className = js_$_text_$_WordString.toggle(elem.className, cls, ' ', on);
	},
	
	/**
	 * 替换className
	 * @method js_$_dom_$_ClassName.replace
	 * @static
	 * 
	 * 移除oldCls，添加newCls，以达到oldCls变成newCls的效果
	 * 
	 * @param {String/Element} element DOM元素或者需要添加/删除的字符串
	 * @param {String/Array} oldCls 要移除的class，可以是多个className拼接的字符串，也可以是数组
	 * @param {String/Array} newCls 要添加的class，可以是多个className拼接的字符串，也可以是数组
	 * 
	 * @return {String}
	 */
	replace: function (element, oldCls, newCls) {
		var ClassName = js_$_dom_$_ClassName;
		ClassName.remove(element, oldCls);
		return ClassName.add(element, newCls);
	}
};

/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2010-02-27 by mytharcher
 * 
 * update:
 * @2010-04-09 by mytharcher
 * @2010-07-12 by mytharcher
 * @2010-11-20 by mytharcher
 * @2010-11-25 by mytharcher
 * @2010-12-09 by mytharcher
 * @2011-02-24 by mytharcher
 */



/**
 * @class js_$_util_$_Type
 * 类型判断类
 * 
 * <p>只提供JS原生对象的判断，额外对象的类型判断可在Type包中扩展。</p>
 * @singleton
 */



/**
 * 判断一个对象是否是数组
 * @method js_$_util_$_Type.isArray
 * @static
 * 
 * @param {Any} 要判断的对象
 * 
 * @return {Boolean}
 */

/**
 * 判断一个对象是否是布尔对象/值
 * @method js_$_util_$_Type.isBoolean
 * @static
 * 
 * @param {Any} 要判断的对象
 * 
 * @return {Boolean}
 */

/**
 * 判断一个对象是否是日期对象
 * @method js_$_util_$_Type.isDate
 * @static
 * 
 * @param {Any} 要判断的对象
 * 
 * @return {Boolean}
 */

/**
 * 判断一个对象是否是函数
 * @method js_$_util_$_Type.isFunction
 * @static
 * 
 * @param {Any} 要判断的对象
 * 
 * @return {Boolean}
 */

/**
 * 判断一个对象是否是正则表达式对象
 * @method js_$_util_$_Type.isRegExp
 * @static
 * 
 * @param {Any} 要判断的对象
 * 
 * @return {Boolean}
 */

/**
 * 判断一个对象是否是字符串
 * @method js_$_util_$_Type.isString
 * @static
 * 
 * @param {Any} 要判断的对象
 * 
 * @return {Boolean}
 */
js_$_util_$_Type = js_$_util_$_Type || js_$_util_$_Class.mix((function (types) {
	function create(t, o2s) {
		return function (value) {
			return o2s.call(value) == '[object ' + t + ']';
		};
	}
	var ret = {},
		obj2Str = Object.prototype.toString;
	for (var i = types.length - 1; i >= 0; i--) {
		var type = types[i];
		ret['is' + type] = create(type, obj2Str);
		ret[type.toUpperCase()] = type.toLowerCase();
	}
	return ret;
})('Array Boolean Date Function RegExp String'.split(' ')), {
	/**
	 * 判断一个变量是否被定义了
	 * @method js_$_util_$_Type.isDefined
	 * @static
	 * 
	 * @param {Any} value 要判断的元素
	 * 
	 * @return {Boolean}
	 */
	isDefined: function (value) {
		return typeof value != 'undefined';
	},
	
	/**
	 * 判断一个变量是否是undefined类型
	 * @method js_$_util_$_Type.isUndefined
	 * @static
	 * 
	 * @param {Object} obj 要判断的变量
	 * 
	 * @return {Boolean}
	 */
	isUndefined: function (obj) {
		return typeof obj == 'undefined';
	},
	
	/**
	 * 判断一个变量是否是null类型
	 * @method js_$_util_$_Type.isNull
	 * @static
	 * 
	 * @param {Object} obj 要判断的变量
	 * 
	 * @return {Boolean}
	 */
	isNull: function (obj) {
		return obj === null;
	},
	
	/**
	 * 判断一个对象是否是数字(包括Infinity，但不包括NaN)
	 * @method js_$_util_$_Type.isNumber
	 * @static
	 * 
	 * @param {Any} value 要判断的对象
	 * 
	 * @return {Boolean}
	 */
	isNumber: function (value) {
		return Object.prototype.toString.call(value) == '[object Number]' && !isNaN(value);
	},
	
	/**
	 * 判断一个对象或值是否不是数字类型
	 * @method js_$_util_$_Type.isNaN
	 * @static
	 * 
	 * @param {Object} value
	 * 
	 * @return {Boolean}
	 */
	isNaN: isNaN,
	
	/**
	 * 判断一个变量是否是对象(不包括函数，也不包括null)
	 * @method js_$_util_$_Type.isObject
	 * @static
	 * 
	 * @param {Object} obj
	 * 
	 * @return {Boolean}
	 */
	isObject: function (obj) {
		return !!obj && typeof obj == 'object' && Object.prototype.toString.call(obj) == '[object Object]';
	},
	
	/**
	 * 给出对象类型基于js定义的字符串标识
	 * @method js_$_util_$_Type.of
	 * @static
	 * 
	 * @param {Any} obj 要计算的变量
	 * 
	 * @return {String} 返回类型的标识
	 */
	of: function (obj) {
		var Type = js_$_util_$_Type,
			type = '';
		
		if (Type.isUndefined(obj)) {
			return Type.UNDEFINED;
		}
		if (Type.isNull(obj)) {
			return Type.NULL;
		}
		//计算对象的原生JS类型
		type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
		//如果该类型未被Type库记录
		if (!Type[type.toUpperCase()] || type == Type.OBJECT) {
			//先设置为'object'
			type = Type.OBJECT;
			
			//在extension数组中查找可能的类型依次进行判断，当任意一个类型匹配时认为obj即是该类型，并返回。
			for (var i = 0, len = Type.extension.length; i < len; i++) {
				var special = Type.extension[i];
				var t = '';
				var fn = Type['is' + special];
				if (fn && fn(obj) && (t = Type[special.toUpperCase()])) {
					type = t;
					break;
				}
			}
		} else if (type == Type.NUMBER) {
			type = isNaN(obj) ? Type.NAN : type;
		}
		
		return type;
	},
	
	/**
	 * @ignore
	 * @private
	 * @property extension
	 * @type {Array}
	 */
	extension: [],
	
	/**
	 * 增加特殊类型，用于of函数输出。
	 * @method js_$_util_$_Type.extend
	 * @static
	 * 
	 * @param {Object} typeSet 类型判断方法包，由类型关键字和判断方法键值对组成。i.e.<pre><code>
	 * {
	 * 		'Window': function (obj) {return true;},
	 * 		'Document': function (obj) {return false;}
	 * 		//, ...
	 * }
	 * </code></pre>
	 */
	extend: function (typeSet) {
		var Type = js_$_util_$_Type;
		for (var i in typeSet) {
			var method = 'is' + i;
			if (!Type[method]) {
				Type[i.toUpperCase()] = i.toLowerCase();
				Type[method] = typeSet[i];
				Type.extension.push(i);
			}
		}
	},
	
	/**
	 * 布尔类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.BOOLEAN
	 * @type {String}
	 */
	
	/**
	 * 空类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.NULL
	 * @type {String}
	 */
	NULL: 'null',
	
	/**
	 * 未定义类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.UNDEFINED
	 * @type {String}
	 */
	UNDEFINED: 'undefined',
	
	/**
	 * 数字类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.NUMBER
	 * @type {String}
	 */
	NUMBER: 'number',
	
	/**
	 * 非数字类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.NAN
	 * @type {String}
	 */
	NAN: 'nan',
	
	/**
	 * 字符串类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.STRING
	 * @type {String}
	 */
	
	/**
	 * 函数类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.FUNCTION
	 * @type {String}
	 */
	
	/**
	 * 数组类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.ARRAY
	 * @type {String}
	 */
	
	/**
	 * 日期类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.DATE
	 * @type {String}
	 */
	
	/**
	 * 正则表达式类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.REGEXP
	 * @type {String}
	 */
	
	/**
	 * 普通对象类型标识
	 * @static
	 * @contant
	 * @property js_$_util_$_Type.OBJECT
	 * @type {String}
	 */
	OBJECT: 'object'
});


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-13 By mytharcher
 * 
 * update:
 */


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-14 by mytharcher
 * 
 * update:
 */


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-08-13 By mytharcher
 * 
 * update:
 * @2011-08-29 by mytharcher
 * 		[m] Add a param to specify a different stamp key from default.
 */


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-08-13 By mytharcher
 * 
 * update:
 */



/**
 * @class js_$_util_$_Global
 */
/**
 * 全局唯一标记键名
 * @property
 * @type {String}
 */
js_$_util_$_Global_$__STAMP = js_$_util_$_Global_$_guid('abcdefghijklmnopqrstuvwxyz'.charAt(+new Date % 26) + (+new Date).toString(36).slice(1) + '_');



/**
 * @class js_$_util_$_Global
 */
/**
 * 给一个对象打上唯一标识，如果已经打过标识，则返回这个标识
 * @method js_$_util_$_Global_$_stamp
 * @static
 * 
 * @param {Object} object 要打标识的对象
 * @param {String} key 预设值的key，防止多次使用时的冲突，例如在XArray去重功能中。
 * 
 * @return {String}
 */
js_$_util_$_Global_$_stamp = function (object, key) {
	var stamp = key || js_$_util_$_Global_$__STAMP;
	var id = object[stamp];
	return id ? id : (object[stamp] = js_$_util_$_Global_$_guid(stamp));
};



/**
 * @class js_$_util_$_Set
 * 集合类
 */
js_$_util_$_Set = js_$_util_$_Set || js_$_util_$_Class.create({
	/**
	 * 构造函数
	 * @param {Any} args... (optional)需要建立集合的元素，将会被添加到集合内
	 */
	constructor: function () {
		this._data = {};
		this.add.apply(this, arguments);
		
		var data = {};
	},
	
	/**
	 * 判断集合是否为空
	 * 
	 * @return {Boolean} 为空返回true，不为空返回false
	 */
	isEmpty: function () {
		var flag = true, data = this._data;
		for (var i in data) {
			if (data.hasOwnProperty(i)) {
				flag = false;
				break;
			}
		}
		return flag;
	},
	
	/**
	 * 判断集合是否包含指定元素
	 * @param {Any} value 要判断的元素
	 * @return {Boolean}
	 */
	contains: function (value) {
		return typeof this._data[this.constructor._key(value)] != 'undefined';
	},
	
	/**
	 * 获取当前集合的长度
	 * @method getLength
	 * 
	 * @return {Number}
	 */
	getLength: function () {
		return Object.keys(this._data).length;
	},
	
	/**
	 * 对集合添加元素
	 * @param {Any} args... (optional)需要添加的元素
	 * @return {Set} 返回自身引用以供链式调用
	 */
	add: function () {
		return this._processArguments(arguments, this.addValue);
	},
	
	/**
	 * 添加一个元素
	 * @ignore
	 * @protected
	 * @param {Object} value 要添加的元素，undefined类型的值不会被添加。
	 */
	addValue: function (value) {
		if (typeof value != 'undefined') {
			this._data[this.constructor._key(value)] = value;
		}
	},
	
	/**
	 * 对集合移除已有的元素
	 * @param {Any} args... (optional)需要移除的元素
	 * @return {Set} 返回自身引用以供链式调用
	 */
	remove: function () {
		return this._processArguments(arguments, this.removeValue);
	},
	
	/**
	 * 移除一个元素
	 * @ignore
	 * @protected
	 * @param {Object} value
	 */
	removeValue: function (value) {
		delete this._data[this.constructor._key(value)];
	},
	
	/**
	 * 清空集合
	 * @method clear
	 */
	clear: function () {
		var data = this._data;
		for (var i in data) {
			if (data.hasOwnProperty(i)) {
				delete data[i];
			}
		}
	},
	
	/**
	 * 处理参数
	 * @private
	 * 
	 * @param {Arguments} args 要处理的参数对象
	 * @param {Function} processor 处理函数
	 * 
	 * @return {js_$_util_$_Set} 返回自身以供链式调用
	 */
	_processArguments: function (args, processor) {
		[].slice.call(args, 0).forEach(processor, this);
		return this;
	},
	
	/**
	 * 将集合转化为数组返回
	 * 
	 * @return {Array}
	 */
	toArray: function (sort) {
		var ret = [];
		for (var key in this._data) {
			ret.push(this._data[key]);
		}
		return ret;
	}
});

/**
 * 计算一个值的键
 * @method js_$_util_$_Set.key
 * @private
 * 
 * 如果值为普通类型，则直接使用value.toString()，否则会给对象类型的值添加一个stamp属性，并自动生成唯一键名。
 * 
 * @param {Any} value
 * 
 * @return {String}
 */
js_$_util_$_Class.copy({
	/**
	 * 从一个数组生成集合对象
	 * @method js_$_util_$_Set.fromArray
	 * @static
	 * 
	 * @param {Array} array
	 * 
	 * @return {js_$_util_$_Set}
	 */
	fromArray: function (array) {
		var set = new this();
		return set.add.apply(set, array);
	},
	
	_key: function(value){
		var type = typeof value;
		return (type == 'object' || type == 'function' ? js_$_util_$_Global_$_stamp(value) : value) + '';
	}
}, js_$_util_$_Set);





/**
 * @class js_$_text_$_WordString 单词串类
 * 以某个字符分隔的单词组成的字符串
 * @extends js_$_util_$_Set
 */
js_$_text_$_WordString = js_$_text_$_WordString || js_$_util_$_Class.create({
	/**
	 * 构造函数
	 * @override
	 * @param {String} sep
	 */
	constructor: function (sep) {
		this._data = {};
		this.setSeperator(sep);
	},
	
	/**
	 * 设置分隔符
	 * @param {String} sep 新的分隔符
	 * @return {WordString} 返回自身引用以供链式调用
	 */
	setSeperator: function (sep) {
		this.seperator = sep || this.constructor.DEFAULT_SEPERATOR;
		return this;
	},
	
	/**
	 * 添加单词
	 * @override
	 * @param {Array/String} value 如果传入字符串
	 */
	addValue: function (value) {
		var Type = js_$_util_$_Type,
			values = Type.isArray(value) ? value : Type.isString(value) ? value.split(this.seperator) : [];
		values.filter(function (v) {
			return v != '';
		}).forEach(js_$_util_$_Set.prototype.addValue, this);
	},
	
	/**
	 * 移除单词
	 * @param {Array/String} value 如果传入字符串
	 */
	removeValue: function (value) {
		var values = value instanceof Array ? value : value.split(this.seperator);
		values.forEach(js_$_util_$_Set.prototype.removeValue, this);
	},
	
	/**
	 * 判断是否存在指定单词
	 * @override
	 * 
	 * @param {Array/String} value
	 * 
	 * @return {Boolean}
	 */
	contains: function (value) {
		var values = value instanceof Array ? value : value.split(this.seperator);
		return values.every(js_$_util_$_Set.prototype.contains, this);
	},
	
	/**
	 * 添加或移除一个或一组单词
	 * 
	 * @param {Array/String} value
	 * @param {Boolean} on
	 * 
	 * @return {js_$_text_$_WordString}
	 */
	toggle: function (value, on) {
		var values = value instanceof Array ? value : value.split(this.seperator),
			hasOn = typeof on != 'undefined';
		for (var i = 0, len = values.length; i < len; i++) {
			var val = values[i];
			this[(hasOn ? on : !this.contains(val)) ? 'add' : 'remove'](val);
		}
		return this;
	},
	
	/**
	 * 输出为字符串
	 * @override
	 * @param {Boolean} tail 是否在尾部也输出分隔符。默认：false。
	 * 
	 * @return {String} 返回以分隔符分隔的字符串。
	 */
	toString: function(tail) {
		var sep = this.seperator;
		return Object.keys(this._data).join(sep) + (tail ? sep : '');
	}
}, js_$_util_$_Set);

js_$_util_$_Class.copy({
	/**
	 * 默认用空格做分隔符
	 * @static
	 * @property js_$_text_$_WordString.DEFAULT_SEPERATOR
	 * @type {String}
	 */
	DEFAULT_SEPERATOR: ' ',
	
	/**
	 * 对一个字符串添加单词
	 * @method js_$_text_$_WordString.add
	 * @static
	 * 
	 * @param {String} str 要添加到的字符串
	 * @param {String/Array} words 要添加的单词
	 * 
	 * @return {String} 返回添加后的词串
	 */
	add: function (str, words, sep) {
		return (new this(sep)).add(str).add(words).toString();
	},
	
	/**
	 * 对一个字符串移除一个或多个单词
	 * @method js_$_text_$_WordString.remove
	 * @static
	 * 
	 * @param {String} str 要添加到的字符串
	 * @param {String/Array} words 要添加的单词
	 * 
	 * @return {String} 返回添加后的词串
	 */
	remove: function (str, words, sep) {
		return (new this(sep)).add(str).remove(words).toString();
	},
	
	/**
	 * 判断一个字符串内是否存在指定的单词
	 * @method js_$_text_$_WordString.contains
	 * @static
	 * 
	 * @param {String/Array} str 需要检测的字符串
	 * @param {String/Array} word 要判断的单词，可以是拼接的字符串，也可以是数组
	 * 
	 * @return {Boolean} 存在为true，不存在为false，只要有一个className不存在即为false
	 */
	contains: function (str, word, sep) {
		var wStr = (new this(sep)).add(str);
		return wStr.contains(word);
	},
	
	/**
	 * className开关
	 * @static
	 * 
	 * 如果设置了on参数，则按on添加或删除word，否则如果存在word则删除，反之添加
	 * 
	 * @param {String} str 要进行操作的单词串
	 * @param {String/Array} word 要添加/移除的class，可以是多个className拼接的字符串，也可以是数组
	 * @param {String} sep 分隔符
	 * @param {Boolean} on 开关项，默认不使用，如果设置了，将强制按on设置的添加或删除单词
	 */
	toggle: function (str, word, sep, on) {
		var wStr = (new this(sep)).add(str);
		return wStr.toggle(word, on).toString();
	}
}, js_$_text_$_WordString);





/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-02-15 by mytharcher
 * 
 * update:
 */




/**
 * @class js_$_dom_$_Cookie
 * Cookie类对象，管理Cookie的常用方法
 * @singleton
 */
js_$_dom_$_Cookie = {
	/**
	 * 获取当前文档的cookie
	 * @method js_$_dom_$_Cookie.get
	 * @static
	 * 
	 * @param {String} key
	 * 
	 * @return {String/Object}
	 */
	get: function (key) {
		var cookie = js_$_dom_$_Cookie.parseJSON(document.cookie);
		return key ? cookie[key] : cookie;
	},
	
	/**
	 * 对当前文档设置cookie值
	 * @method js_$_dom_$_Cookie.set
	 * @static
	 * 
	 * @param {String/Object} key
	 * @param {String/Object} value
	 * @param {Object} option
	 */
	set: function (key, value, option) {
		var Cookie = js_$_dom_$_Cookie,
			Type = js_$_util_$_Type,
			option = option || {},
			value = Type.isDefined(value) ? value : option;
		if (arguments.length <= 2 && Type.isObject(value)) {
			if (Type.isObject(key)) {
				for (var i in key) {
					Cookie.set(i, key[i], value);
				}
			} else if (Type.isString(key)) {
				Cookie.set(Cookie.parseJSON(key), value);
			}
		} else {
			var exDate;
			if (Type.isDefined(option.until) || Type.isDefined(option.last)) {
				exDate = new Date(option.until || Date.now());
				exDate.setTime(exDate.getTime() + (option.last || 0));
			}
			document.cookie = [
				key,
				'=',
				encodeURIComponent(value),
				exDate ? ';expires=' + exDate.toGMTString() : '',
				option.path ? ';path=' + option.path : '',
				option.domain ? ';domain=' + option.domain : '',
				option.secure ? ';secure' : ''
			].join('');
		}
	},
	
	/**
	 * 移除当前文档cookie中的键
	 * @method js_$_dom_$_Cookie.remove
	 * @static
	 * 
	 * @param {String...} key
	 */
	remove: function (key) {
		var keys = [].slice.call(arguments, 0),
			option = {until: 0};
//		document.cookie = keys.join('=1;') + '=1;expires=' + (new Date(0)).toGMTString();
		for (var i = keys.length - 1; i >= 0; i--) {
			js_$_dom_$_Cookie.set(keys[i], 1, option);
		}
	},
	
	/**
	 * 清空当前文档所有cookie
	 * @method js_$_dom_$_Cookie.clear
	 * @static
	 */
	clear: function () {
		this.remove(Object.keys(this.get()));
	},
	
	/**
	 * @method js_$_dom_$_Cookie.parseJSON
	 * @private
	 * @static
	 */
	parseJSON: js_$_text_$_JSONParserFactory.createParser(';', '=', decodeURIComponent, true)
};



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-02-05 by mytharcher
 * 
 * update:
 * @2011-02-08 by mytharcher
 * 
 */



/**
 * @class js_$_dom_$_Drag
 * 拖动元素的实现
 * @singleton
 */
js_$_dom_$_Drag = {
	/**
	 * @ignore
	 */
	dragging: {},
	
	/**
	 * 使一个元素可以被拖动
	 * @method js_$_dom_$_Drag.attach
	 * @static
	 * 
	 * @param {Element} element 要拖动的元素
	 * @param {Object} option 拖动选项
	 */
	attach: function (element, option) {
		var elem = js_$_dom_$_Stage_$_get(element),
			id = js_$_dom_$_Stage_$_mark(elem);
		js_$_dom_$_Event.add(option.handlerId || elem, 'mousedown', function (ev) {
			js_$_dom_$_Drag.start(id, option);
			js_$_dom_$_Event.add(document, 'mouseup', function (ev) {
				js_$_dom_$_Drag.stop(id);
				js_$_dom_$_Event.remove(document, 'mouseup', arguments.callee);
			});
			ev.preventDefault();
		});
		elem = null;
	},
	
	/**
	 * @private
	 * @param {Object} option
	 */
	mover: function (option) {
		return function (ev) {
			var elem = js_$_dom_$_Stage_$_get(option.id),
				x = ev.clientX,
				y = ev.clientY,
				Drag = js_$_dom_$_Drag;
			
			if (typeof option.originalPosition == 'undefined') {
				option.originalPosition = elem.style.position || '';
				elem.style.position = 'absolute';
				
				var pos = js_$_dom_$_BoxModel.getPosition(elem);
				
				
				option.offsetX = (option.startX = this.startX) - pos.x;
				option.offsetY = (option.startY = this.startY) - pos.y;
			}
			
			var cur = option.restrict ? Drag.restrict(x - option.offsetX, y - option.offsetY, option.restrict)
				: {x: x - option.offsetX, y: y - option.offsetY};
			elem.style.left = cur.x + 'px';
			elem.style.top = cur.y + 'px';
			
			option.ondrag && option.ondrag(x, y);
			
			ev.preventDefault();
		};
	},
	
	/**
	 * @private
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Array/Function} region
	 */
	restrict: function (x, y, region) {
		var Type = js_$_util_$_Type,
			type = Type.of(region),
			ret = {x: x, y: y};
		switch (Type.of(region)) {
			case Type.ARRAY:
				ret.x = Math.min(Math.max(x, region[0]), region[2]);
				ret.y = Math.min(Math.max(y, region[1]), region[3]);
				break;
			case Type.FUNCTION:
				ret = region(x, y);
				break;
			default:
				break;
		}
		return ret;
	},
	
	/**
	 * 开始拖动元素
	 * @method js_$_dom_$_Drag.start
	 * 
	 * @param {Element} element
	 * @param {Object} option
	 */
	start: function (element, option) {
		
		var option = option || {},
			elem = js_$_dom_$_Stage_$_get(element);
		
		this.stop(elem);
		
		option.id = js_$_dom_$_Stage_$_mark(elem);
		option.trackerId = js_$_dom_$_MouseTracker.start(this.mover(option));
		this.dragging[option.id] = option;
	},
	
	/**
	 * 停止拖动元素
	 * @method js_$_dom_$_Drag.stop
	 * 
	 * @param {Element} element
	 */
	stop: function (element) {
		var elem = js_$_dom_$_Stage_$_get(element),
			id = js_$_dom_$_Stage_$_mark(elem),
			option = this.dragging[id];
		if (option) {
			js_$_dom_$_MouseTracker.stop(option.trackerId);
			if (option.resetPosition) {
				element.style.position = option.originalPosition;
			}
			delete option.originalPosition;
			delete this.dragging[id];
		}
	}
};


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-04-12 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_dom_$_Stage
 */

/**
 * 获取元素的id，如果元素不存在id，那么就生成一个唯一id
 * @method js_$_dom_$_Stage_$_mark
 * @static
 * 
 * @param {Element} element 要获取id的元素
 * 
 * @return {String} 返回该元素的id
 */
js_$_dom_$_Stage_$_mark = function (element) {
	return element.id || (element.id = js_$_util_$_Global_$_guid('ELF_DOM_ID_'));
};


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-15 by mytharcher
 * 
 * update:
 * 
 */


/*
 * Elf Javascript Library
 * 
 * create:
 * @2009-12-25 by mytharcher
 * 
 * update:
 * @2010-04-22 by mytharcher
 * @2010-04-27 by mytharcher
 * @2010-07-10 by mytharcher
 * @2010-11-18 by mytharcher
 * @2011-08-24 by mytharcher
 * 		[a] Add "Event.Type" for change hard code to enum expression.
 */


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-04-26 by mytharcher
 * 
 * update:
 * @2010-11-20 by mytharcher
 * @2010-11-27 by mytharcher
 * 
 */



/**
 * @class js_$_dom_$_Selector
 * css规则dom元素查询器
 * @singleton
 */
js_$_dom_$_Selector = js_$_dom_$_Selector || {
	/**
	 * 查询一个满足规则的对象
	 * @method js_$_dom_$_Selector.query
	 * @static
	 * 
	 * @param {String} a 要查询的选择器串
	 * @param {Object/Array} c 基于查询的空间
	 * 
	 * @return {Element/Null}
	 */
	query: function (a, c) {
		var result = js_$_dom_$_Selector.queryAll(a, c);
		return result.length ? result[0] : null;
	},
	
	/**
	 * 查询全部满足规则的对象
	 * @method js_$_dom_$_Selector.queryAll
	 * @static
	 * 
	 * @param {String} a 要查询的选择器串
	 * @param {Element/Array} c 基于查询的空间
	 * 
	 * @return {Array}
	 */
	queryAll: function(a, c){
		var _ = js_$_dom_$_Selector._;
		
		c = c instanceof Array ? c.length ? c : [document] : [c || document];
		
		var ret = [], temp;
		
		var pos = (a.substr(1).search(/[ >]/) + 1) || a.length;
		
		var cur = a.substr(0, pos);
		var remain = a.substr(pos);
		
		var atom = cur.match(_.T);
		var tag = atom[3] || '*';
		cur = atom[4] && tag == '*' ? cur : cur.replace(_.T, (atom[1] || ' ') + tag + (atom[4] || ''));
		
		atom = _.W.exec(cur);
		_.W.lastIndex = 0;
		
		for (var i = 0, len = c.length; i < len; i++) {
			temp = _.G[atom[1]].call(c[i], atom[2]);
			
			ret.push.apply(ret, js_$_dom_$_Selector.filter(temp, cur, c[i]));
		}
		
		return _.U(remain && ret.length && js_$_dom_$_Selector.queryAll(remain, ret) || ret);
	},
	
	/**
	 * 根据选择器过滤集合元素
	 * @method js_$_dom_$_Selector.filter
	 * @static
	 * 
	 * @param {Array} group 要过滤的元素数组
	 * @param {String} selector 选择器
	 * @param {Element} context 上下文对象
	 * 
	 * @return {Array} 返回过滤后的元素数组
	 */
	filter: function (group, selector, context) {
		var _ = js_$_dom_$_Selector._;
		var ret = [];
		for (var j = 0, l = group.length; j < l; j++) {
			if (group[j] && js_$_dom_$_Selector.match(group[j], selector, context)) {
				ret.push(group[j]);
			}
			
			_.A = '';
		}
		return ret;
	},
	
	/**
	 * 判断一个元素是否匹配一个选择器
	 * @js_$_dom_$_Selector.match
	 * @static
	 * 
	 * @param {Element} item 要判断的元素
	 * @param {String} selector 选择器
	 * @param {Element} context 上下文对象
	 * 
	 * @return {Boolean}
	 */
	match: function (item, selector, context) {
		var _ = js_$_dom_$_Selector._,
			context = context || document,
			flag = true,
			atom;
		while ((atom = _.W.exec(selector))) {
			var fn = _.E[atom[1]];
			if (fn && !fn.call(item, atom[2], context)) {
				flag = false;
				break;
			}
		}
		_.W.lastIndex = 0;
		return flag;
	},
	
	/**
	 * @ignore
	 */
	_: {
		//匹配一个单词的正则
		W: /([ >#\.\[\]]|[~\|\^\$\*]?=)(?:"?([\w\-]*|\*)"?)?/g,
		//匹配开头第一个单词，无标签容错，id快捷
		T: /^([ >]?)((\w*|\*)?([#]\w+)?)/,
		//获取阶段的匹配符操作
		G: {
			' ': function (word) {return (this || document).getElementsByTagName(word || '*');},
			'>': function (word) {return this.childNodes;},
			'#': function (word) {return [document.getElementById(word)];}
	//		'@': function (word) {return (document).getElementsByName(word);}
		},
		//所有过滤判断条件
		E:{
	//		'\x20': function (word, pn) {for (var node = this; node && node != pn; ) if ((node = node.parentNode) == pn) return true; return false;},
			'>': function (word, pn) {return this.parentNode == pn && (word == '*' || this.nodeName == word.toUpperCase());},
			'#': function (word) {return this.getAttribute('id') == word;},
			//以name获取的优化，考虑到使用很少，忽略
	//		'@': function (word) {return this.name == word;},
			'.': function (word) {return (' ' + this.className + ' ').indexOf(' ' + word + ' ') >= 0;},
			'[': function (word) {return this.getAttribute(js_$_dom_$_Selector._.A = word) !== null;},
			'=': function (word) {return this.getAttribute(js_$_dom_$_Selector._.A) == word;},
			'~=': function(word){
				return (' ' + this.getAttribute(js_$_dom_$_Selector._.A) + ' ').indexOf(' ' + word + ' ') > -1;
			},
			'^=': function (word) {
				return !this.getAttribute(js_$_dom_$_Selector._.A).indexOf(word);
			},
			'$=': function (word) {
				var attr = this.getAttribute(js_$_dom_$_Selector._.A);
				return attr.indexOf(word) == attr.length - word.length;
			},
			'*=': function(word){
				return this.getAttribute(js_$_dom_$_Selector._.A).indexOf(word) > -1;
			},
			'|=': function(word){
				return !this.getAttribute(js_$_dom_$_Selector._.A).indexOf(word + '-');
			}
		},
		//判断条件中元素属性名暂存
		A: '',
		//去重
		U: function (arr) {
			var stamp = '_S' + + new Date + '_' + Math.random(),
				count = 1,
				map = {},
				ret = [];
			for (var i = 0, len = arr.length; i < len; i++) {
				var item = arr[i];
				var tag = item.getAttribute(stamp);
				if (!tag) {
					tag = '' + count++;
					item.setAttribute(stamp, tag);
				}
				if (!map[tag]) {
					ret.push(item);
					map[tag] = 1;
				}
			}
			//IE 不支持删除标记
			for (var i = arr.length - 1; i >= 0; i--) {
				arr[i].removeAttribute(stamp);
			}
			return ret;
		}
	}
};



/**
 * @class js_$_dom_$_Event
 * DOM对象事件注册和删除类封装，基于jQuery的思想，解决了IE里this指针指不到事件元素的问题
 * @singleton
 */
js_$_dom_$_Event = js_$_dom_$_Event || {
	/**
	 * @private
	 * 注册函数记录表
	 */
	regList: {},
	
	/**
	 * @private
	 */
	cache: {},
	
	/**
	 * @private
	 */
	targets: {},
	
	/**
	 * 转化事件对象，以适应标准事件
	 * @static
	 * 
	 * @param {DOMEvent} ev DOM事件对象
	 * 
	 * @return {Object}
	 */
	parse: function (ev) {
		var evt = ev || window.event;
		var e = {};

		for (var i in evt) {e[i] = evt[i];}
		
		e.target = e.srcElement = e.target || e.srcElement;
		e.keyCode = e.which || e.keyCode;
		e.rightClick = e.which == 3 || e.button == 2;

		//可在处理函数内调用e.preventDefault()来阻止浏览器默认事件
		e.preventDefault = js_$_dom_$_Event._handlerPreventDefault.bind(evt);

		//可在处理函数内调用e.stopPropagation()来阻止冒泡事件
		e.stopPropagation = js_$_dom_$_Event._handlerStopPropagation.bind(evt);
		
		e.stopAll = js_$_dom_$_Event._handlerStopAll;
		
		return e;
	},
	
	/**
	 * 对一个对象注册事件
	 * @method js_$_dom_$_Event.add
	 * @static
	 * 
	 * @param {Object/String} object 可以被注册原生事件的对象，如传入string则默认为DOM元素的id
	 * @param {String} type 事件名称，如click，mouseover等，即一般写法中去掉“on”的部分
	 * @param {Function} fn 要绑定的函数
	 * @param {Function} (optional) filter 过滤器，由该函数判断是否子节点可以响应事件，隐含参数:node指当前响应事件的元素
	 */
	add: function (object, type, fn, filter) {
		var Event = js_$_dom_$_Event,
			object = js_$_dom_$_Stage_$_get(object),
			isElement = js_$_util_$_Type.isElement(object),
			id;
		
		if (object) {
			if (isElement) {
				id = js_$_dom_$_Stage_$_mark(object);
			} else {
				id = js_$_util_$_Global_$_stamp(object);
				Event.targets[id] = object;
			}
			
			var elemEventList = Event.regList[id];
			if (!elemEventList) {
				elemEventList = Event.regList[id] = {};
			}
			
			var elemEventType = elemEventList[type];
			if (!elemEventType || !elemEventType.length) {
				elemEventType = elemEventList[type] = [];
				
				var processor = Event.createProcessor(id, isElement);
				
				if (object.addEventListener) {
					object.addEventListener(type, processor, false);
				} else if (object.attachEvent) {
					object.attachEvent('on' + type, processor);
				}
			}
			
			//array find
			var index = js_$_util_$_XArray.toXArray(elemEventType).indexOf(fn, 0, Event.exist);
			if (index < 0) {
				elemEventType.push({
					fn: fn,
					filter: filter
				});
			}
		}
	},
	
	/**
	 * 创建一个事件处理器
	 * @method js_$_dom_$_Event.createProcessor
	 * @private
	 * 
	 * @param {String} id
	 * @param {Boolean} isElement
	 */
	createProcessor: function (id, isElement) {
		var cache = js_$_dom_$_Event.cache, cached = cache[id];
		return cached || (cache[id] = function(ev){
			return js_$_dom_$_Event.process.call(isElement ? document.getElementById(id) : js_$_dom_$_Event.targets[id], ev);
		});
	},
	
	/**
	 * @private
	 */
	exist: function (object, item) {
		return object == item.fn;
	},
	
	/**
	 * @private
	 * [scope @ object]
	 * @param {Event} ev
	 */
	process: function (ev) {
		var Event = js_$_dom_$_Event;
		var e = Event.parse(ev || window.event);
		
		var target = e.target;
		
		var queue = Event.regList[js_$_util_$_Type.isElement(this) ? this.id : js_$_util_$_Global_$_stamp(this)][e.type];
		
		outer: for (var i = 0; i < queue.length; i++) {// 队列可能被执行函数改变，所以每次取length比较
			var turn = queue[i];
			var fn = turn.fn, filter = turn.filter;
			
			if (filter) {
				for (var node = target; node && node != this; node = node.parentNode) {
					var filterType = typeof filter;
					if (filterType == 'string' && js_$_dom_$_Selector.match(node, filter, this)
						|| (filterType == 'function') && filter(node)) {
						if (fn.call(node, e) === false) {
							e.preventDefault();
							break;
						}
						if (e.interrupt) {
							break outer;
						}
					}
				}
			} else {
				fn.call(this, e);
			}
			// 如果执行函数中remove了队列中已执行过的函数（包括当前的），
			// 则计数器-1并继续执行之后的，以免发生索引越界或跳过队列。
			if (queue.indexOf(turn) < i) {
				i--;
			}
		}
	},
	
	/**
	 * 对一个对象注销事件
	 * @method js_$_dom_$_Event.remove
	 * @static
	 * 
	 * @param {Element} o DOM对象
	 * @param {String} type (optional) 事件名称，如click，mouseover等，即一般写法中去掉“on”的部分，不填则移除对象上所有用Event.add添加的事件
	 * @param {Function} fn (optional) 要绑定的函数，不填则移除该对象ev事件的所有注册函数
	 */
	remove: function (object, type, fn) {
		var Event = js_$_dom_$_Event,
			object = js_$_dom_$_Stage_$_get(object),
			isElement = js_$_util_$_Type.isElement(object),
			id;
		
		if (isElement) {
			id = js_$_dom_$_Stage_$_mark(object);
		} else {
			id = js_$_util_$_Global_$_stamp(object);
		}
		
		var elemEventList = Event.regList[id];
		if (!elemEventList) {
			return;
		}
		
		var processor = Event.cache[id];
		
		if (processor) {
			if (type) {
				var elemEventType = elemEventList[type];
				if (elemEventType && elemEventType.length) {
					if (fn) {
						var index = js_$_util_$_XArray.toXArray(elemEventType).indexOf(fn, 0, Event.exist);
						if (index >= 0) {
							elemEventType.splice(index, 1);
						}
						if (!elemEventType.length) {
							if (object.removeEventListener) {
								object.removeEventListener(type, processor, false);
							} else {
								object.detachEvent('on' + type, processor);
							}
							delete elemEventList[type];
							if (!Object.keys(elemEventList).length) {
								delete Event.regList[id];
								delete Event.targets[id];
							}
						}
					} else {
						for (var i = elemEventType.length - 1; i >= 0; i--) {
							Event.remove(object, type, elemEventType[i].fn);
						}
					}
				}
			} else {
				for (var t in elemEventList) {
					Event.remove(object, elemEventList[t]);
				}
			}
		}
	},
	
	/**
	 * @private
	 * 停止所有后续队列中的事件
	 */
	_handlerStopAll: function () {
		this.interrupt = true;
	},
	
	/**
	 * @private
	 * 阻止默认事件的处理
	 * [scope at event]
	 */
	_handlerPreventDefault: function () {
		if (this.preventDefault) {
			this.preventDefault();
		} else {
			this.returnValue = false;
		}
	},
	
	/**
	 * @private
	 * 阻止事件冒泡的处理
	 * [scope at event]
	 */
	_handlerStopPropagation: function () {
		if (evt.stopPropagation) {
			evt.stopPropagation();
		} else {
			evt.cancelBubble = true;
		}
	},
	
	Type: {
		CLICK: 'click',
		MOUSE_OVER: 'mouseover',
		MOUSE_OUT: 'mouseout',
		MOUSE_DOWN: 'mousedown',
		MOUSE_UP: 'mouseup',
		MOUSE_WHEEL: 'mousewheel',
		
		KEY_DOWN: 'keydown',
		KEY_PRESS: 'keypress',
		KEY_UP: 'keyup',
		
		LOAD: 'load',
		BEFORE_UNLOAD: 'beforeunload',
		UNLOAD: 'unload',
		
		FOCUS: 'focus',
		BLUR: 'blur'
	}
};


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-08-19 by mytharcher
 * 
 * update:
 * @2010-11-20 by mytharcher
 * @2010-12-25 by mytharcher
 * 		[m] Move all seperated method files in the namespace js_$_util_$_XArray here.
 * @2011-08-29 by mytharcher
 * 		[m] Fix bug in method "distinct" for some duplicate stamp use.
 * @2012-01-08 by mytharcher
 * 		[a] Add methods to override native array methods for returning XArray instance after invoked.
 */






/**
 * @class js_$_util_$_XArray
 * 扩展数组类
 * @extends Array
 */
/**
 * @method constructor
 * @param {Any...} arguments
 */
js_$_util_$_XArray = js_$_util_$_XArray || js_$_util_$_Class.create({
	constructor: function () {
		var arr = [];
		arr.push.apply(arr, [].slice.call(arguments, 0));
		
		// 防止IE下使用for in XArray.prototype取不到扩展的方法名（slice等）
		var keys = js_$_util_$_XArray.__extends__.split(' ');
		for (var i = keys.length - 1; i >= 0; i--) {
			var item = keys[i];
			arr[item] = js_$_util_$_XArray.prototype[item];
		}
		
		return arr;
	},
	
	/**
	 * 去重的实例方法
	 * @method distinct
	 * @return {XArray}
	 * 
	 * @see js_$_util_$_XArray.distinct
	 */
	distinct: function () {
		var myClass = js_$_util_$_XArray;
		return myClass.toXArray(myClass.distinct(this));
	},
	
	/**
	 * 在数组中查找一个对象
	 * @override
	 * 
	 * @param {Any} target 要查找的对象或值。
	 * @param {Number} fromIndex (optional)预置起始查询的索引
	 * @param {Function} equal (optional)判断相等的函数，可选，默认相等条件是===。
	 * @param {Boolean} all (optional)是否查找全部匹配对象，默认：false
	 * 
	 * @return {Number/Array} 找不到返回-1，找到一个返回索引值，找到多个返回index所在位置组成的数组。
	 */
	indexOf: function (target, fromIndex, equal, all) {
		var len = this.length;
		if (!len) {
			return -1;
		}
		var isNativeEqual = typeof equal != 'function';
		var i = fromIndex || 0;
		i = i >= len ? len - 1 : i < 0 ? i % len + len : i;
		var index = [];
		for (; i < len; i++) {
			if (isNativeEqual ? (this[i] === target) : equal(target, this[i])) {
				index.push(i);
				if (!all) {
					break;
				}
			}
		}
		return index.length ? index.length == 1 ? index[0] : index : -1;
	},
	
	/**
	 * 通过过滤函数过滤特定项组成新数组返回
	 * @param {Function} fn 迭代器
	 * @param {Object} scope (optional)作用域
	 * 
	 * @return {XArray} 返回过滤结果新数组
	 */
	
	/**
	 * 遍历数组
	 * @param {Function} fn 迭代器
	 * @param {Object} scope (optional)作用域
	 * 
	 * @return {XArray} 返回自身实例以供链式调用
	 */
	forEach: function () {
		[].forEach.apply(this, arguments);
		return this;
	},
	
	/**
	 * 通过映射函数计算出新数组
	 * @param {Function} fn 映射函数
	 * @param {Object} scope (optional)作用域
	 * 
	 * @return {XArray} 返回映射结果新数组
	 */
	
	/**
	 * 转化为普通数组
	 * 
	 * @return {Array}
	 */
	toArray: function(){
		return [].slice.call(this, 0);
	}
}, Array);

['concat', 'filter', 'map', 'slice'].forEach(function (item) {
	js_$_util_$_XArray.prototype[item] = function () {
		return js_$_util_$_XArray.toXArray([][item].apply(this, arguments));
	};
});

js_$_util_$_Class.copy({
	/**
	 * @ignore
	 * @private
	 */
	__extends__: 'concat distinct indexOf forEach filter map slice toArray',
	
	/**
	 * 数组去重
	 * @method js_$_util_$_XArray.distinct
	 * @static
	 * 
	 * @description 数字和字符串：1 !== '1'；对象：objectA === objectB；算法复杂度o(n)。
	 *
	 * @param {Array} arrayLike 可以接受类数组对象，会先创建一个数组副本。
	 *
	 * @return {Array} 返回去重后的数组副本
	 */
	distinct: function(arrayLike){
		var copy = arrayLike.slice(),
			typeMap = {},
			guid = js_$_util_$_Global_$_guid('xarray'),
			ret = [],
			i = 0,
			len = copy.length,
			item,
			type,
			map;
		
		for ( ; i < len; i++) {
			item = copy[i];
			type = typeof item;
			map = typeMap[type] || (typeMap[type] = {});
			
			switch (type) {
				case 'function':
				case 'object':
					if (item) {
						var tag = js_$_util_$_Global_$_stamp(item, guid);
						if (!map[tag]) {
							map[tag] = true;
							ret.push(item);
						}
						break;
					}
					
				//这里不认为数字和字符串是同型的，即：1 !== '1'
				//Here consider number type's value is not equal to string which just contains a number, like: 1 !== '1'
				default:
					if (!map[item]) {
						map[item] = true;
						ret.push(item);
					}
					break;
			}
		}
		
		//删除用于去重对象上的标记
		for (var i = copy.length - 1; i >= 0; i--) {
			var item = copy[i],
				type = item && typeof item;
			if (type == 'object' || type == 'function') {
				delete item[guid];
			}
		}
		
		return ret;
	},
	
	/**
	 * <p>将一个array-like的对象转化为原生的Array对象</p>
	 * <p>如传入字符串，数字等非ArrayLike的值，则直接包装成一个数组返回</p>
	 * @method js_$_util_$_XArray.toXrray
	 * @static
	 * 
	 * @param {Object} arrayLike
	 * 
	 * @return {Array}
	 */
	toArray: function (arrayLike) {
		var ret = [];
		var type = typeof arrayLike;
		var length = arrayLike.length;
		//非数组直接包装
		if (typeof length == 'undefined' || type == 'string' || type == 'function' || arrayLike.setTimeout || arrayLike.nodeType) {
			ret.push(arrayLike);
		} else if (arrayLike instanceof Array || arrayLike.callee) {//数组或参数对象直接调用数组方法生成副本
			ret = [].slice.call(arrayLike, 0);
		} else {//其他如HTMLCollection或childNodes遍历复制
			for (var i = 0; i < length; i++) {
				ret.push(arrayLike[i]);
			}
		}
		return ret;
	},
	
	/**
	 * 将一个array-like的对象转化为XArray对象
	 * @method js_$_util_$_XArray.toXArray
	 * @static
	 * 
	 * @param {Object} arrayLike
	 * 
	 * @return {XArray}
	 */
	toXArray: function(arrayLike){
		var ret = new js_$_util_$_XArray();
		[].push.apply(ret, js_$_util_$_XArray.toArray(arrayLike));
		return ret;
	}
}, js_$_util_$_XArray);



/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2010-12-09 by mytharcher
 * 
 * update:
 * @2011-08-13 by mytharcher
 * 		[m] Update comments.
 */



/**
 * @class js_$_util_$_Type
 */
js_$_util_$_Type.extend({
	/**
	 * DOM元素类型标识
	 * @property js_$_util_$_Type.ELEMENT
	 * @type {String}
	 */
	/**
	 * 判断对象是否是HTML元素
	 * @method js_$_util_$_Type.isElement
	 * @static
	 * 
	 * @param {Object} 要判断的对象
	 * 
	 * @return {Boolean} 是返回true，否返回false。
	 */
	'Element': function(obj){
		return !!(obj && obj.nodeType == 1 && obj.nodeName);
		return Object(obj) instanceof Element;
	}
});








/**
 * @class js_$_dom_$_MouseTracker
 * 鼠标轨迹跟踪类
 * @singleton
 */
js_$_dom_$_MouseTracker = (function () {
	js_$_dom_$_Event.add(document, 'mousemove', function (ev) {
		var MT = js_$_dom_$_MouseTracker;
		MT.x = ev.clientX;
		MT.y = ev.clientY;
	});
	
	return {
		/**
		 * @property js_$_dom_$_MouseTracker.x 当前鼠标x坐标
		 * @type {Number}
		 */
		x: 0,
		
		/**
		 * @property js_$_dom_$_MouseTracker.y 当前鼠标y坐标
		 * @type {Number}
		 */
		y: 0,
		
		/**
		 * @ignore
		 */
		dragging: {},
		
		/**
		 * @private
		 */
		noDragging: function () {
			var has = true,
				i;
			for (i in this.dragging) {
				has = false;
				break;
			}
			return has;
		},
		
		/**
		 * @private
		 * @param {Event} ev
		 */
		move: function  (ev) {
			var dragging = js_$_dom_$_MouseTracker.dragging;
			for (var i in dragging) {
				var option = dragging[i];
				option.ondrag && option.ondrag(ev);
			}
		},
		
		/**
		 * 启动追踪
		 * @method js_$_dom_$_MouseTracker.start
		 * 
		 * @param {Function} ondrag 检测到拖动时要做的处理
		 * 
		 * @return {String} 返回当前追踪的id，用于停止追踪
		 */
		start: function(ondrag){
			var id = js_$_util_$_Global_$_guid();
			if (this.noDragging()) {
				js_$_dom_$_Event.add(document, 'mousemove', this.move);
			}
			
			this.dragging[id] = {
				ondrag: ondrag,
				startX: this.x,
				startY: this.y
			};
			
			return id;
		},
		
		/**
		 * 停止追踪
		 * @method js_$_dom_$_MouseTracker.stop
		 * 
		 * @param {String} id 要停止追踪的id
		 */
		stop: function (id) {
			if (id) {
				var option = this.dragging[id];
				if (option) {
					delete this.dragging[id];
				}
				
				if (this.noDragging()) {
					js_$_dom_$_Event.remove(document, 'mousemove', this.move);
				}
			}
		}
	};
})();



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 by mytharcher
 * 
 * update:
 * @2010-11-19 by mytharcher
 * @2010-11-30 by mytharcher
 * 
 */


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-15 by mytharcher
 * 
 * update:
 * @2010-11-17 by mytharcher
 * @2011-09-12 by mytharcher
 * 		[a] Add method "get" for getting new Node object form set with specified index.
 */



/**
 * @class js_$_dom_$_Node DOM节点类，类似于jQuery的核心类
 */
js_$_dom_$_Node = js_$_dom_$_Node || js_$_util_$_Class.create({
	/**
	 * 构造函数
	 * @param {String/Array/Element} selector
	 * @param {Element} context
	 * @return {Node}
	 */
	constructor: function (selector, context) {
		var Type = js_$_util_$_Type;
		var MyClass = js_$_dom_$_Node;
		if (this.constructor !== MyClass) {
			return new MyClass(selector, context);
		}
		
		if (Object(selector) instanceof MyClass) {
			return selector;
		}
		
		var queryResult = [];
		
		switch (Type.of(selector)) {
			case Type.STRING:
				queryResult = js_$_dom_$_Selector.queryAll(selector, context && (new MyClass(context)).toArray());
				break;
			
			// case Type.HTMLCOLLECTION:
			// case Type.NODELIST:
				// queryResult = js_$_util_$_XArray.toArray(selector);
				// break;
				
			case Type.ARRAY:
			// case Type.XARRAY:
				queryResult = selector.slice();
				break;
			
			case Type.NULL:
			case Type.UNDEFINED:
				break;
			
			case Type.ELEMENT:
			case Type.DOCUMENT:
			case Type.WINDOW:
			default:
				queryResult = js_$_util_$_XArray.toArray(selector);
				break;
		}
		
		this.length = 0;
		
		return this.merge(queryResult);
	},
	
	/**
	 * 返回集合中索引为index的新对象
	 * 
	 * @param {Number} index 要获取的索引
	 * 
	 * @return {js_$_dom_$_Node} 返回包装后的新对象
	 */
	get: function (index) {
		return new this.constructor(this[index]);
	},
	
	/**
	 * 遍历当前Node对象，顺序遍历每个item执行fn
	 * 
	 * @param {Function} fn
	 * @param {Object} scope
	 */
	forEach: function (fn, scope) {
		this.toArray().forEach(fn, scope || this);
		return this;
	},
	
	/**
	 * 返回选择器过滤后的元素集合
	 * 
	 * @param {String} selector
	 * 
	 * @return {Node}
	 */
	filter: function (selector) {
		var ret = [];
		for (var i = 0, len = this.length; i < len; i++) {
			var item = this[i];
			if (js_$_dom_$_Selector.match(item, selector)) {
				ret.push(item);
			}
		}
		return new this.constructor(ret);
	},
	
	/**
	 * 判断集合中的元素是否包含匹配选择符的对象
	 * 
	 * @param {String} selector
	 * 
	 * @return {Boolean}
	 */
	has: function (selector) {
		for (var i = this.length - 1; i >= 0; i--) {
			if (js_$_dom_$_Selector.match(this[i], selector)) {
				return true;
			}
		}
		return false;
	},
	
	/**
	 * 判断集合中的首个元素是否匹配选择符
	 * 
	 * @param {String} selector
	 * 
	 * @return {Boolean}
	 */
	is: function (selector) {
		return js_$_dom_$_Selector.match(this[0]);
	},
	
	/**
	 * 把一个数组或者Node对象合并到当前对象
	 * @param {Array|Node} arrayLike
	 */
	merge: function (arrayLike) {
		var arr = js_$_util_$_XArray.toArray(arrayLike);
		[].push.apply(this, arr);
		return this;
	},
	
	/**
	 * 查找当前对象集合中匹配selector规则的元素，并返回新的Node对象
	 * 
	 * @param {String} selector
	 * 
	 * @return {Node}
	 */
	query: function (selector) {
		return new this.constructor(js_$_dom_$_Selector.queryAll(selector, this.toArray()));
	},
	
	/**
	 * 返回包含对象集合的普通数组
	 * 
	 * @return {Array}
	 */
	toArray: function () {
		var ret = [];
		for (var i = this.length - 1; i >= 0; i--) {
			ret.unshift(this[i]);
		}
		return ret;
	}
});


/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2010-12-09 by mytharcher
 * 
 * update:
 * @2011-08-13 by mytharcher
 * 		[m] Update comments.
 */



/**
 * @class js_$_util_$_Type
 */
js_$_util_$_Type.extend({
	/**
	 * 文档对象类型标识
	 * @property js_$_util_$_Type.DOCUMENT
	 * @type {String}
	 */
	/**
	 * 判断对象是否是document对象
	 * @method js_$_util_$_Type.isDocument
	 * @static
	 * 
	 * @param {Any} 要判断的对象
	 * 
	 * @return {Boolean} 是返回true，否返回false。
	 */
	'Document': function (obj) {
		return obj && obj.nodeType == 9;
	}
});


/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2010-12-09 by mytharcher
 * 
 * update:
 * @2011-08-13 by mytharcher
 * 		[m] Update comments.
 */



/**
 * @class js_$_util_$_Type
 */
js_$_util_$_Type.extend({
	/**
	 * 窗口对象类型标识
	 * @property js_$_util_$_Type.WINDOW
	 * @type {String}
	 */
	/**
	 * 判断对象是否是window对象
	 * @method js_$_util_$_Type.isWindow
	 * @static
	 * 
	 * @param {Any} 要判断的对象
	 * 
	 * @return {Boolean} 是window对象的话返回true，否返回false。
	 */
	'Window': function(obj){
		//解决IEMMNNM 
		return obj == obj.self;
	}
});


/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2011-09-27 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_util_$_Type
 */
js_$_util_$_Type.extend({
	/**
	 * XArray类型标识
	 * @property js_$_util_$_Type.XArray
	 * @type {String}
	 */
	/**
	 * 判断对象是否是XArray实例
	 * @method js_$_util_$_Type.isXArray
	 * @static
	 * 
	 * @param {Object} 要判断的对象
	 * 
	 * @return {Boolean} 是返回true，否返回false。
	 */
	'XArray': function(obj){
		return obj instanceof js_$_util_$_XArray;
	}
});





/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 by mytharcher
 * 
 * update:
 * @2010-11-19 by mytharcher
 * 
 */


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-21 by mytharcher
 * 
 * update:
 * 
 */



/**
 * @class js_$_util_$_InterfaceFactory
 * 类接口工厂
 * @singleton
 */
js_$_util_$_InterfaceFactory = js_$_util_$_InterfaceFactory || {
	/**
	 * 创建接口
	 * @method js_$_util_$_InterfaceFactory.create
	 * @static
	 * 
	 * @param {String} option.name 多是Pascal命名的方法，如：ClassName则传入name: "Class"，加上key得到的方法名即：addClass
	 * @param {Object} option.base 使用哪个对象上的静态方法创建，如：base: js_$_dom_$_ClassName
	 * @param {Array} option.methods 需要创建接口的方法名列表，如：methods: ['add', 'remove']，这些方法名直接对应原有对象的方法名，并与name参数拼装后形成接口的方法名。
	 * @param {Array} option.alias 新接口名称的别名，如有则在接口上增加该别名的对应的方法，别名数组需要与方法名列表一一对应。
	 * 
	 * @return {Object}
	 */
	create: function (option) {
		var keys = option.methods,
			name = option.name || '',
			proto = {},
			template = option.template || this.template;
		for (var i = keys.length - 1; i >= 0; i--) {
			var key = keys[i];
			var method = key.method || key;
			var methodName = method + name;
			//这里执行函数闭包会返回key对应的实际接口方法
			proto[methodName] = template(option.base, method, key);
			
			var alias = key.alias;
			if (alias) {
				proto[alias] = proto[methodName];
			}
		}
		
		return proto;
	},
	
	/**
	 * 模板方法
	 * @static
	 * 
	 * @param {Object} base 实现基础类
	 * @param {String} method 方法名标识
	 * @return {Function} 返回包装过的对应method接口标识的方法
	 */
	template: function (base, method) {
		return function () {
			return base[method].apply(base, [this].concat([].slice.call(arguments, 0)));
		};
	}
};



/**
 * @class js_$_dom_$_NodeInterfaceFactory
 * Node类接口工厂，用于创建给Node类实现的接口，继承自js_$_util_$_InterfaceFactory
 * @extends js_$_util_$_InterfaceFactory
 * @singleton
 */
js_$_dom_$_NodeInterfaceFactory = js_$_dom_$_NodeInterfaceFactory || js_$_util_$_Class.mix({
	/**
	 * 创建接口类
	 * @method js_$_dom_$_NodeInterfaceFactory.create
	 * @static
	 * 
	 * @param {Object} options 参数集
	 * @return {Object}
	 */
	
	/**
	 * 模板方法
	 * @private
	 * 
	 * @param {Object} base
	 * @param {String} method
	 * 
	 * @return {Function} 
	 */
	template: function(base, method, key){
		//判断是否是get类只针对一个元素操作的方法
		return key.custom || (key.single ? function(){
			return base[method].apply(base, [this[0]].concat([].slice.call(arguments, 0)));
		} : function(){
			var args = [].slice.call(arguments, 0);
			this.forEach(function(element){
				return base[method].apply(base, [element].concat(args));
			}, this);
			return this;
		});
	}
}, js_$_util_$_InterfaceFactory);



/*
 * @class js_$_dom_$_INodeAttribute
 * Node类实现Style的接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */

/**
 * 获取当前集合首个元素的指定属性
 * @method getAttribute
 * @param {String} key 要获取的属性名称
 * @return {String} 返回属性的值
 */
/**
 * 设置当前元素集合的属性
 * @method setAttribute
 * @param {String/Object} key 要设置的属性名称，或多个要设置的键值对
 * @param {String/undefined} value 要设置的属性值
 * @return {Node} 返回当前集合对象，供链式操作继续调用
 */
/**
 * 获取/设置当前元素集合的属性
 * @method attr
 * @param {String/Object/undefined} key 要获取/设置的属性名称，或多个要设置的键值对
 * @param {String/undefined} value 要设置的属性值
 * @return {Node} 返回当前集合对象，供链式操作继续调用
 */
js_$_dom_$_INodeAttribute = js_$_dom_$_INodeAttribute || js_$_dom_$_NodeInterfaceFactory.create({
	name: 'Attribute',
	base: js_$_dom_$_Attribute,
	methods: [
		{method: 'get', single: true},
		'set'
	]
});

js_$_dom_$_INodeAttribute.attr = function (key, value) {
	var node = this.get(0),
		Type = js_$_util_$_Type;
	if (Type.isDefined(value) || Type.isObject(key)) {
		this.setAttribute(key, value);
	} else {
		return this.getAttribute(key);
	}
	return this;
};

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeAttribute);

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 by mytharcher
 * 
 * update:
 * @2010-11-30 by mytharcher
 * @2011-12-24 by mytharcher
 */





/*
 * @class js_$_dom_$_INodeBoxModel
 * Node类实现ClassName的接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */


/**
 * 获取集合首个元素的相对位置
 * @method getPosition
 * @param {Element} refer 相对的元素，如不传入则只计算相对父级节点的位置
 * @return {Object} 返回包含位置坐标x, y属性的对象
 */

/**
 * 判断集合首个元素是否可见
 * @method isDisplaying
 * @return {Boolean}
 */
js_$_dom_$_INodeBoxModel = js_$_dom_$_INodeBoxModel || js_$_dom_$_NodeInterfaceFactory.create({
	base: {
		getPosition: js_$_dom_$_BoxModel.getPosition,
		isDisplaying: js_$_dom_$_BoxModel.isDisplaying
	},
	methods: [{method: 'getPosition', single: true}, {method: 'isDisplaying', single: true}]
});

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeBoxModel);

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 by mytharcher
 * 
 * update:
 * @2010-11-30 by mytharcher
 * 
 */





/*
 * @class js_$_dom_$_INodeClassName
 * Node类实现ClassName的接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */


/**
 * 对当前集合中每个元素都添加一个class
 * @method addClass
 * @param {String/Array} className
 * @return {Node} 返回当前对象，以供链式调用
 */

/**
 * 对当前集合中每个元素都移除一个class
 * @method removeClass
 * @param {String/Array} className
 * @return {Node} 返回当前对象，以供链式调用
 */

/**
 * 对当前集合中每个元素都添加或移除一个class
 * @method toggleClass
 * @param {String/Array} className
 * @param {Boolean/undefined} 强制指定添加或删除
 * @return {Node} 返回当前对象，以供链式调用
 */

/**
 * 对当前集合中每个元素都替换一个class
 * @method replaceClass
 * @param {String/Array} className 要被替换的class
 * @param {String/Array} replaceClassName 新的class
 * @return {Node} 返回当前对象，以供链式调用
 */

/**
 * 判断结合中的首个元素是否含有指定的class
 * @method hasClass
 * @param {String/Array} className 要判断的class
 * @return {Boolean}
 */
js_$_dom_$_INodeClassName = js_$_dom_$_INodeClassName || js_$_dom_$_NodeInterfaceFactory.create({
	name: 'Class',
	base: js_$_dom_$_ClassName,
	methods: ['add', 'remove', 'toggle', 'replace', {method: 'has', single: true}, {method: 'get', single: true}]
});

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeClassName);

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 by mytharcher
 * 
 * update:
 * @2010-11-30 by mytharcher
 * 
 */





/*
 * @class js_$_dom_$_INodeEvent
 * Node类实现Event的接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */


/**
 * 对当前集合内的所有元素绑定事件
 * @method addEventListener
 * @alias on
 * @param {String} type 事件类型
 * @param {Function} callback 处理函数
 * @return {Node} 返回当前集合，以供链式调用
 */

/**
 * 对当前集合内的所有元素移除绑定的事件
 * @method removeEventListener
 * @alias un
 * @param {String} type 事件类型
 * @param {Function} callback 处理函数
 * @return {Node} 返回当前集合，以供链式调用
 */
js_$_dom_$_INodeEvent = js_$_dom_$_INodeEvent || js_$_dom_$_NodeInterfaceFactory.create({
	name: 'EventListener',
	base: js_$_dom_$_Event,
	methods: [{method: 'add', alias: 'on'}, {method: 'remove', alias: 'un'}]
});

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeEvent);

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-27 by mytharcher
 * 
 * update:
 * @2011-01-09 by mytharcher
 * 
 */



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-27 by mytharcher
 * 
 * update:
 * @2011-01-07 by mytharcher
 * 
 */



/**
 * @class js_$_dom_$_Operation
 * DOM节点操作类
 * @static
 * @singleton
 */
js_$_dom_$_Operation = js_$_dom_$_Operation || {
	/**
	 * 创建一个元素
	 * @method js_$_dom_$_Operation.create
	 * @static
	 * 
	 * @param {String} tag
	 * @param {Object} attributes
	 * 
	 * @return {Element}
	 */
	create: function (tag, attributes) {
		var elem = document.createElement(tag || 'div');
		js_$_dom_$_Attribute.set(elem, attributes);
		return elem;
	},
	
	/**
	 * 插入一个节点
	 * @method js_$_dom_$_Operation
	 * @static
	 * 
	 * @param {Element/String} element 要插入的元素
	 * @param {Element/String} parentNode 要插入到的父节点
	 * @param {Element/String/Number} position 要插入的相对位置，如传入Number类型，则表示插入的索引位置
	 */
	insert: function (element, parentNode, position) {
		var Type = js_$_util_$_Type,
			element = js_$_dom_$_Stage_$_get(element),
			parentNode = js_$_dom_$_Stage_$_get(parentNode),
			position = Type.isElement(position) ?
				position :
				Type.isString(position) ?
					js_$_dom_$_Stage_$_get(position) :
					Type.isNumber(position) ?
						js_$_dom_$_Relation.children(parentNode)[position] :
						js_$_util_$_Global_$_noop();
		
		parentNode.insertBefore(element, position);
	},
	
	/**
	 * 在某个元素前插入一个元素
	 * @method js_$_dom_$_Operation.before
	 * @static
	 * 
	 * @param {Element/String} element
	 * @param {Element} afterElement
	 */
	before: function (element, afterElement) {
		this.insert(element, afterElement.parentNode, afterElement);
	},
	
	/**
	 * 在某个元素后插入一个元素
	 * @method js_$_dom_$_Operation.after
	 * @static
	 * 
	 * @param {Element/String} element
	 * @param {Element} beforeElement
	 */
	after: function (element, beforeElement) {
		this.insert(element, beforeElement.parentNode, js_$_dom_$_Relation.next(beforeElement));
	},
	
	/**
	 * 在某个元素内最后插入一个元素
	 * @method js_$_dom_$_Operation.append
	 * @static
	 * 
	 * @param {Element/String} element
	 * @param {Element/String} beforeElement
	 */
	append: function (element, parentNode) {
		this.insert(element, parentNode);
	},
	
	/**
	 * 在某个元素内最后插入一个元素
	 * @method js_$_dom_$_Operation.append
	 * @static
	 * 
	 * @param {Element/String} element
	 * @param {Element/String} beforeElement
	 */
	remove: function (element) {
		var element = js_$_dom_$_Stage_$_get(element);
		element.parentNode.removeChild(element);
	},
	
	/**
	 * 清空一个元素的内容
	 * @method js_$_dom_$_Operation.empty
	 * 
	 * @param {Element/String} element
	 */
	empty: function (element) {
		var elem = js_$_dom_$_Stage_$_get(element);
		elem.innerHTML = '';
	},
	
	/**
	 * 获取/设置元素的html内容
	 * @method js_$_dom_$_Operation.html
	 * @static
	 * 
	 * @param {Element/String} element
	 * @param {String} html (optional)
	 * @param {Function} callback (optional)
	 */
	html: function (element, html, callback) {
		var elem = js_$_dom_$_Stage_$_get(element);
		return js_$_util_$_Type.isDefined(html) ? ((elem.innerHTML = html) && callback && setTimeout(callback, 0)) : elem.innerHTML;
	},
	
	/**
	 * 获取一个元素的文本内容
	 * @method js_$_dom_$_Operation.text
	 * @static
	 * 
	 * @param {Element/String} element
	 * @param {String} text
	 * 
	 * @return {String}
	 */
	text: function (element, text) {
		var Type = js_$_util_$_Type;
		var elem = js_$_dom_$_Stage_$_get(element);
		var textProp = Type.isDefined(elem.innerText) ? 'innerText' : 'textContent';
		return Type.isDefined(text) ? (elem[textProp] = text) : elem[textProp];
	}
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-08-13 By mytharcher
 * 
 * update:
 */



/**
 * @class js_$_util_$_Global
 */
/**
 * 空操作
 * @method js_$_util_$_Global_$_noop
 * @static
 */
js_$_util_$_Global_$_noop = function () {};



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-27 by mytharcher
 * 
 * update:
 * 
 */


/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2010-11-26 by mytharcher
 * 
 * update:
 * @2010-12-10 by mytharcher
 * @2010-12-19 by mytharcher:
 * 		[m] Change all mechanism of Shortcut.
 * @2010-12-21 by mytharcher:
 * 		[m] Change dispatch method constructor into static for interface.
 * @2011-02-17 by mytharcher:
 * 		[m] Change method "create" name to "attach".
 * 		[d] Remove constructor.
 * 		[a] Add method "create" for creating new shortcut method.
 * 		[m] Change the implement of method "attach" to store dispatchers in Shortcut sjs, not in the specified shortcut method.
 * @2011-03-18 by mytharcher:
 * 		[m] Change method "dispatch", add a parameter "index" for user to specify which index in arguments should be dispatched according to;
 * 			Add a limit that only empty arguments(with zero length) would be dispatched to the mirror, so that the undefined value could be according to;
 */



/**
 * @class js_$_util_$_Shortcut
 * 快捷方式类
 * @singleton
 */
js_$_util_$_Shortcut = {
	/**
	 * @private
	 * @property STAMP 唯一标识键
	 * @type {String}
	 */
	STAMP: 'ELF_SHORTCUT_' + (+new Date).toString(36),
	
	/**
	 * @private
	 */
	dispatcher: [],
	
	/**
	 * 对一个函数attach快捷方式的处理
	 * @method js_$_util_$_Shortcut.attach
	 * @static
	 * 
	 * @param {Object} object
	 */
	attach: function (object, interceptors) {
		!object[this.STAMP] && (this.dispatcher[object[this.STAMP] = this.dispatcher.length] = {mirror: {}, interceptor: {}});
		interceptors && this.intercept(object, interceptors);
		return object;
	},
	
	/**
	 * 创建一个快捷方式函数
	 * @method js_$_util_$_Shortcut.create
	 * @static
	 * 
	 * @param {Object} interceptors
	 * @param {Number} index
	 */
	create: function (interceptors, index) {
		return this.attach(function () {
			var args = arguments;
			return args.length ?
				js_$_util_$_Shortcut.dispatch(args, index)
				: js_$_util_$_Shortcut.get(args.callee).mirror;
		}, interceptors);
	},
	
	/**
	 * 获取对象上的快捷方式实例
	 * @method js_$_util_$_Shortcut.get
	 * @private
	 * 
	 * @param {Object} object
	 * 
	 * @return {js_$_util_$_Shortcut}
	 */
	get: function (object) {
		var index = object[this.STAMP];
		return typeof index != 'undefined' ? this.dispatcher[index] : null;
	},
	
	/**
	 * 分发快捷处理
	 * @method js_$_util_$_Shortcut.dispatch
	 * @static
	 * 
	 * @param {Arguments} args 分发调用的参数对象
	 * @param {Number} index 使用参数的第几项作为分发的判断依据
	 * 
	 * @return {Any} 返回值由添加的分发器定义
	 */
	dispatch: function (args, index) {
		var dispatcher = this.get(args.callee);
//		return dispatcher && dispatcher.dispatch.apply(dispatcher, [].slice.call(args));
		
		if (dispatcher) {
			if (args.length) {
				var Type = js_$_util_$_Type, processor = dispatcher.interceptor[Type.of(args[index || 0])];
				if (Type.isFunction(processor)) {
					return processor.apply(null, args);
				}
			}
			//没有任何参数的话返回快捷方式
			return dispatcher.mirror;
		}
	},
	
	/**
	 * 申明快捷方式，将会被作为快捷方式对象的快捷属性
	 * <p>将需要声明快捷方式的方法以一个name-value对象传入，则会把该成员以这个名字挂载到指定对象的快捷空间下。</p>
	 * @method js_$_util_$_Shortcut.use
	 * @static
	 * 
	 * @param {Object} object 挂载了快捷方式的对象
	 * @param {Object} args 传入name-method对，如：
	 * <pre><code>{test: someFunction}</code></pre>
	 * @param {Function} filter 过滤函数，遍历args，返回false的时候不会被申明为快捷方式。
	 */
	use: function (object, args, filter) {
		js_$_util_$_Class.mix(this.get(object).mirror, args, filter);
	},
	
	/**
	 * 对创建了快捷方式的实例申明类型拦截器，将会影响分发器的分发
	 * @method js_$_util_$_Shortcut.intercept
	 * @static
	 * 
	 * @param {Object} object 要注入拦截器的已创建快捷方式的实例
	 * @param {String/Object} type 单个拦截器的类型标识或一组拦截器
	 * @param {Function} processor (optional) 拦截器方法或undefined
	 */
	intercept: function (object, type, processor) {
		var Type = js_$_util_$_Type,
			dispatcher = this.get(object);
		if (Type.isObject(type) && Type.isUndefined(processor)) {
			for (var i in type) {
				this.intercept(object, i, type[i]);
			}
		} else {
			dispatcher.interceptor[type] = processor;
		}
	}
};





/**
 * @class js_$_dom.Releation
 * DOM节点关系类
 * @static
 * @singleton
 */
js_$_dom_$_Relation = js_$_dom_$_Relation || {
	/**
	 * 判断元素是否包含另一个元素，即元素是否是另一个元素的祖先
	 * @method js_$_dom_$_Relation.contains
	 * @static
	 * 
	 * @param {Element} element 当前元素
	 * @param {Element} contained 要判断是否被包含的元素
	 * 
	 * @return {Boolean}
	 */
	contains: function (element, contained) {
		for (var node = contained; node && node != element; node = node.parentNode) {
			if (node == contained) {
				return true;
			}
		}
		return false;
	},
	
	/**
	 * 获取元素在父级元素中的索引
	 * @method js_$_dom_$_Relation.indexOfSiblings
	 * @static
	 * 
	 * @param {Element} element
	 * 
	 * @return {Number}
	 */
	indexOfSiblings: function (element) {
		var parentNode = element.parentNode;
		return parentNode ? this.children(parentNode).indexOf(element) : 0;
	},
	
	/**
	 * 是否是非空文本节点或匹配选择符的节点
	 * @method js_$_dom_$_Relation.test
	 * @private
	 * @static
	 * 
	 * @param {Element} element 要判断的节点
	 * @param {String/Boolean} selector 如传入字符串，则认为是选择符；如传入Boolean，则认为是是否包含非空文本节点的依据；不传入值，则默认包含非空文本节点。
	 * 
	 * @return {Boolean}
	 */
//	test: function (element, selector) {
//		var Type = js_$_util_$_Type, ret = false;
//		switch (Type.of(selector)) {
//			case Type.UNDEFINED:
//				selector = true;
//			case Type.BOOLEAN:
//				ret = element.nodeType == 1 || element.nodeType == 3 && selector && element.toString().trim().length > 0;
//				break;
//			case Type.STRING:
//				ret = js_$_dom_$_Selector.match(element, selector);
//				break;
//			case Type.FUNCTION:
//				ret = selector(element);
//				break;
//			default:
//				break;
//		}
//		return ret;
//	},
	test: js_$_util_$_Shortcut.create({
		'undefined': function (element) {
			return element.nodeType == 1 || element.nodeType == 3 && element.toString().trim().length > 0;
		},
		'boolean': function (element, includeBlank) {
			return element.nodeType == 1 || element.nodeType == 3 && includeBlank && element.toString().trim().length > 0;
		},
		'string': function (element, selector) {
			return js_$_dom_$_Selector.match(element, selector);
		},
		'function': function (element, tester) {
			return tester(element);
		}
	}, 1),
	
	/**
	 * 获取元素的下一个符合匹配的兄弟节点，没有则返回null
	 * @method js_$_dom_$_Relation.next
	 * @static
	 * 
	 * @param {Element} element 要查找的元素
	 * @param {String/Boolean} (optional)selector @see js_$_dom_$_Relation.test
	 * 
	 * @return {Element}
	 */
	next: function (element, selector) {
		var node = element;
		do {
			node = node.nextSibling;
		} while (node && !this.test(selector));
		return node;
	},
	
	/**
	 * 获取元素之后所有匹配的兄弟节点
	 * @method js_$_dom_$_Relation.nextAll
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String/Boolean} (optional)selector 
	 * 
	 * @return {Array}
	 */
	nextAll: function (element, selector) {
		var ret = [];
		for (var node = element.nextSibling; node && this.test(selector); node = node.nextSibling) {
			ret.push(node);
		}
		return ret;
	},
	
	/**
	 * 获取元素的上一个兄弟节点，没有则返回null
	 * @method js_$_dom_$_Relation.prev
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String} (optional)selector
	 * 
	 * @return {Element}
	 */
	prev: function (element, selector) {
		var node = element;
		do {
			node = node.previousSibling;
		} while (node && !this.test(selector));
		return node;
	},
	
	/**
	 * 获取元素之前的所有兄弟节点
	 * @method js_$_dom_$_Relation.prevAll
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String} (optional)selector
	 * 
	 * @return {Array}
	 */
	prevAll: function (element, selector) {
		var ret = [];
		for (var node = element.previousSibling; node && this.test(selector); node = node.previousSibling) {
			ret.push(node);
		}
		return ret;
	},
	
	/**
	 * 获取元素的父节点
	 * @method js_$_dom_$_Relation.parent
	 * @static
	 * 
	 * @param {Element} element
	 * 
	 * @return {Element}
	 */
	parent: function (element) {
		return element.parentNode;
	},
	
	/**
	 * 获取selector指定的祖先节点，如未指定，则获取全部祖先节点
	 * @method js_$_dom_$_Relation.ancestors
	 * @static
	 * 
	 * @param {Object} element
	 * @param {String} (optional)selector 选择器
	 * 
	 * @return {Array}
	 */
	ancestors: function (element, selector) {
		var Relation = js_$_dom_$_Relation;
		var ret = [];
		for (var node = element.parentNode; node; node = node.parentNode) {
			if (selector) {
				if (Relation.test(node, selector)) {
					ret.push(node);
				}
			} else {
				ret.push(node);
			}
		}
		return ret;
	},
	
	/**
	 * 获取元素的第一个非文本子节点
	 * @method js_$_dom_$_Relation.firstChild
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String} (optional)selector
	 * 
	 * @return {Element}
	 */
	firstChild: function (element, selector) {
		for (var node = element.firstChild; node && !this.test(selector);node = node.nextSibling);
		return node;
	},
	
	/**
	 * 获取元素的倒数第一个非文本子节点
	 * @method js_$_dom_$_Relation.lastChild
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String} (optional)selector
	 * 
	 * @return {Element|null}
	 */
	lastChild: function (element, selector) {
		for (var node = element.lastChild; node && !this.test(selector);node = node.previousSibling);
		return node;
	},
	
	/**
	 * 获取元素的全部非文本子节点
	 * @method js_$_dom_$_Relation.children
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String} (optional)selector
	 * 
	 * @return {Array}
	 */
	children: function (element, selector) {
		var ret = [];
		for (var node = element.firstChild; node; node = node.nextSibling) {
			this.test(node, false) && ret.push(node);
		}
		return ret;
	},
	
	/**
	 * 获取匹配选择器的所有兄弟节点
	 * @method js_$_dom_$_Relation.siblings
	 * @static
	 * 
	 * @param {Element} element
	 * @param {String} (optional)selector
	 * 
	 * @return {Array}
	 */
	siblings: function (element, selector) {
		return this.prevAll(element, selector).concat(this.nextAll(element, selector));
	}
};







/*
 * @class js_$_dom_$_INodeOperation
 * DOM节点操作接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */
js_$_dom_$_INodeOperation = js_$_dom_$_INodeOperation || js_$_util_$_Class.mix({
	/**
	 * 插入一个节点
	 * @param {Element/String/Array/Node} node 要插入的元素或集合
	 * @param {Element/Number/String/Array/Node} position (optional)要插入的相对位置，如传入Number类型，则表示插入的索引位置
	 * @return {Node} 返回自身以供链式调用
	 */
	insert: function(node, position){
		var Type = js_$_util_$_Type;
		var nodes = new this.constructor(node);
		var pos;
		switch (Type.of(position)) {
			case Type.ELEMENT:
			case Type.UNDEFINED:
				pos = position;
				break;
			case Type.NUMBER:
				pos = js_$_dom_$_Relation.children(this[0])[position];
				break;
			case Type.STRING:
			case Type.OBJECT:
			case Type.ARRAY:
				pos = (new this.constructor(position))[0];
				break;
			default:
				break;
		}
		var frag = document.createDocumentFragment();
		for (var i = 0, len = nodes.length; i < len; i++) {
			frag.appendChild(nodes[i]);
		}
		this[0].insertBefore(frag, pos);
		
		return this;
	},
	
	/**
	 * 在某个元素后插入一个元素
	 * @param {Element/String/Array/Node} node 要插入的元素或集合
	 * @param {Element/Number/String/Array/Node} position (optional)要插入的相对位置，如传入Number类型，则表示插入的索引位置
	 * @return {Node} 返回自身以供链式调用
	 */
	after: function (node, position) {
		return this.insert(node, js_$_util_$_Type.isNumber(position) ? position + 1 : (new this.constructor(position))[0]);
	},
	
	/**
	 * 在某个元素内最后插入一个元素
	 * @param {Element/String/Array/Node} node 要插入的元素或集合
	 * @return {Node} 返回自身以供链式调用
	 */
	append: function (node) {
		return this.insert(node);
	},
	
	/**
	 * 将当前集合插入到一个元素中
	 * @param {Element/String/Array/Node} node 要插入的元素或集合
	 */
	appendTo: function (node) {
		return (new this.constructor(node)).insert(this);
	},
	
	/**
	 * 将当前集合插入到一个元素中，可以指定插入的位置
	 * @param {Object} node
	 * @param {Element/Number/String/Array/Node} position (optional)要插入的相对位置，如传入Number类型，则表示插入的索引位置
	 */
	insertTo: function (node, position) {
		return (new this.constructor(node)).insert(this, position);
	},
	
//	remove: function () {
//		return this.forEach(js_$_dom_$_Operation.remove);
//	},
//	
//	empty: function () {
//		return this.forEach(js_$_dom_$_Operation.empty);
//	},
//	
	html: function (html, callback) {
		var ret = js_$_dom_$_Operation.html(this[0], html, callback);
		return js_$_util_$_Type.isDefined(html) ? this : ret;
	},
	
	text: function (text) {
		var ret = js_$_dom_$_Operation.text(this[0], text);
		return js_$_util_$_Type.isDefined(text) ? this : ret;
	}
}, js_$_dom_$_NodeInterfaceFactory.create({
	base: js_$_dom_$_Operation,
	methods: ['remove', 'empty']
}));

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeOperation);

/**
 * 创建一个Node节点
 * @method js_$_dom_$_Node.create
 * @static
 * 
 * @param {String} tag
 * @param {Object} attrs
 * 
 * @return {js_$_dom_$_Node}
 */
js_$_dom_$_Node.create = function (tag, attrs) {
	return new this(js_$_dom_$_Operation.create(tag, attrs));
};




/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-27 by mytharcher
 * 
 * update:
 * 
 */




/*
 * @class js_$_dom_$_INodeRelation
 * DOM节点关系接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */

/**
 * 获取元素在父级元素中的索引
 * @method indexOfSiblings
 * @return {Number}
 */
/**
 * 获取当前节点集合的next节点集合
 * @method next
 * @param {String} selector 只获取符合选择器条件的元素，如果下一个不匹配，则继续找
 * @return {Node}
 */
/**
 * 获取当前节点集合的全部后续节点集合
 * @method nextAll
 * @param {String} selector 只获取符合选择器条件的元素
 * @return {Node}
 */
/**
 * 获取当前节点集合的prev节点集合
 * @method prev
 * @param {String} selector 只获取符合选择器条件的元素，如果上一个不匹配，则继续找
 * @return {Node}
 */
/**
 * 获取当前节点集合的全部前置节点集合
 * @method prevAll
 * @param {String} selector 只获取符合选择器条件的元素
 * @return {Node}
 */
/**
 * 获取当前节点集合的父节点
 * @method parent
 * @return {Node}
 */
/**
 * 获取当前节点集合的所有祖先集合
 * @method ancestors
 * @param {String} selector 只获取符合选择器条件的元素
 * @return {Node}
 */
/**
 * 获取当前节点集合的第一个子节点集合
 * @method firstChild
 * @param {String} selector 只获取符合选择器条件的元素，如果第一个不匹配，则继续找
 * @return {Node}
 */
/**
 * 获取当前节点集合的最后一个子节点集合
 * @method lastChild
 * @param {String} selector 只获取符合选择器条件的元素，如果最后一个不匹配，则继续找
 * @return {Node}
 */
/**
 * 获取当前节点集合的第一个元素的所有子节点集合
 * @method children
 * @param {String} selector 只获取符合选择器条件的元素
 * @return {Node}
 */
/**
 * 获取当前节点集合的第一个元素的所有兄弟节点集合
 * @method siblings
 * @param {String} selector 只获取符合选择器条件的元素
 * @return {Node} 返回的元素集合不包含当前节点
 */

/**
 * @ignore
 */
js_$_dom_$_INodeRelation = js_$_dom_$_INodeRelation || js_$_util_$_InterfaceFactory.create({
	template: function (base, method, key) {
		return key.custom || (key.single ? function(){
			return base[method].apply(base, [this[0]].concat([].slice.call(arguments, 0)));
		} : function (selector) {
			var ret = [];
			for (var i = 0; i < this.length; i++) {
				var result = base[method](this[i], selector);
				ret.push.apply(ret, result instanceof Array ? result : [result]);
			}
			return this.constructor(js_$_util_$_XArray.distinct(ret));
		});
	},
	
	base: js_$_dom_$_Relation,
	
	methods: [
		{method: 'indexOfSiblings', single: true},
		'next',
		{method: 'nextAll', single: true},
		'prev',
		{method: 'prevAll', single: true},
		'parent',
		{method: 'ancestors', single: true},
		'firstChild',
		'lastChild',
		{method: 'children', single: true},
		{method: 'siblings', single: true},
		{
			/**
			 * 判断当前节点集合的首个元素是否包含另一个集合的首个元素
			 * @method contains
			 * @param {Element/Node/String} 要判断的元素/集合/选择器
			 * @return {Boolean}
			 */
			method: 'contains',
			custom: function (element) {
				var node = this.constructor(element)[0];
				if (node) {
					return js_$_dom_$_Relation.contains(this[0], node);
				}
				return false;
			}
		}
	]
});

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeRelation);



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-17 by mytharcher
 * 
 * update:
 * @2010-11-19 by mytharcher
 * @2010-11-30 by mytharcher
 * @2011-09-25 by mytharcher
 * 		[m] Move 'css()' method out of interface factory to be a single implement.
 */





/*
 * @class js_$_dom_$_INodeStyle
 * Node类实现Style的接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */

/**
 * 获取当前集合首个元素的指定样式
 * @method getStyle
 * @param {String} key 要获取的样式名称
 * @return {String} 返回样式的值
 */
/**
 * 设置当前元素集合的样式
 * @method setStyle
 * @param {String/Object} key 要设置的样式名称，或多个要设置的键值对
 * @param {String/undefined} value 要设置的样式值
 * @return {Node} 返回当前集合对象，供链式操作继续调用
 */
js_$_dom_$_INodeStyle = js_$_dom_$_INodeStyle || js_$_dom_$_NodeInterfaceFactory.create({
	name: 'Style',
	base: js_$_dom_$_Style,
	methods: [
		{method: 'get', single: true},
		'set'
	]
});

js_$_dom_$_INodeStyle.css = function (key, value) {
	if (arguments.length <= 1) {
		if (typeof key == 'undefined' || typeof key == 'string' && key.indexOf(':') < 0) {
			return this.getStyle(key);
		} else {
			return this.setStyle(key);
		}
	} else {
		return this.setStyle(key, value);
	}
};

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeStyle);

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-09-11 by mytharcher
 * 
 * update:
 */



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-11 by mytharcher
 * 
 * update:
 * @2011-10-31 by mytharcher
 * 		[a] Add own constructor.
 */


/*
 * js Javascript Library
 * 
 * create:
 * @2010-4-24 by mytharcher
 * 
 * update:
 * @2010-04-27 by mytharcher
 * @2010-07-22 by mytharcher
 * @2011-01-10 by mytharcher
 */




/**
 * transition，动画效果相关
 */
js_$_transition = {};



/**
 * @class js_$_transition_$_Timeline
 * 时间轴类
 */
js_$_transition_$_Timeline = js_$_transition_$_Timeline || js_$_util_$_Class.create({
	/**
	 * 构造函数
	 * @param {Object} option 参数表见Timeline.start
	 */
	constructor: function (options) {
		var Class = js_$_util_$_Class;
		
		Class.mix(this, options);
		Class.mix(this, this.constructoConfigig);
		
		//定时执行句柄
		this.interval = null;
		
		//是否在进行变形
		this.running = false;
		
		//已执行的百分比
		this.percent = 0;
		
		//运行的总时间
		this.period = this.loop >= 0 ? this.loop * this.duration : Number.POSITIVE_INFINITY;
		
		var me = this;
		/**
		 * @ignore
		 * @param {Number} percent
		 */
		this._onenterframe = function (percent) {
	//		Debug.out(me.object.className + ':' + me.interval + '>' + percent);
			me.percent = percent;
			me.onenterframe && me.onenterframe(percent);
		};
		
		/**
		 * @ignore
		 */
		this._oncomplete = function () {
	//		Debug.out(me.object.className + ':Complete');
			me.percent = 1;
			me.running = false;
			me.oncomplete && me.oncomplete();
		};
	},
	
	/**
	 * 获取当前播放的百分比
	 * @method getPercent
	 * @return {Number}
	 */
	getPercent: function () {
		return this.percent || 0;
	},
	
	/**
	 * 获取当前的方向值
	 * @method getDirection
	 * @return {Number}
	 */
	getDirection: function () {
		return this.direction;
	},
	
	/**
	 * 获取当前时间轴选项的副本
	 * @private
	 * @param {Object} option
	 * @return {Object}
	 */
	getOptions: function (option) {
		return js_$_util_$_Class.mix(option || {}, {
			fps: this.fps,
			duration: this.duration,
			offset: this.offset,
			direction: this.direction,
			loop: this.loop,
			onstart: this.onstart,
			onfirstframe: this.onfirstframe,
			onenterframe: this._onenterframe,
			oncomplete: this._oncomplete
		});
	},
	
	/**
	 * 启动补间
	 * @method start
	 * 
	 * @param {Object} option 启动的参数
	 * 
	 * @return {Number} 返回定时器的id
	 */
	start: function (option) {
		if (!this.running) {
			this.running = true;
			
			this.interval = this.constructor.start(this.getOptions(option));
		}
		
		return this.interval;
	},
	
	/**
	 * 停止补间
	 * @method stop
	 */
	stop: function () {
		if (this.running) {
			this.constructor.stop(this.interval);
		}
		this.running = false;
	},
	
	/**
	 * 继续已停止补间
	 * @method resume
	 * 
	 * @param {Object} option
	 * 
	 * @return {Number}
	 */
	resume: function (option) {
		return this.start(js_$_util_$_Class.mix(option || {}, {
			offset: this.duration * this.percent
		}));
	},
	
	/**
	 * 转向：转到指定方向
	 * @method turn
	 * @param {Number} dir 要转到的方向，1：正向；-1：反向
	 */
	turn: function (dir) {
		var same = this.direction == dir;
		this.direction = dir;
		if (!same && this.running) {
			this.stop();
			this.start({
				offset: this.duration * (1 - this.getPercent())
			});
		}
	},
	
	/**
	 * 反向
	 */
	reverse: function () {
		this.turn(this.direction *= -1);
	}
});

/**
 * @ignore
 * Timeline类静态成员定义
 */
js_$_util_$_Class.copy({
	/**
	 * @static
	 * @property js_$_transition_$_Timeline.DIRECTION_FORWARD 正向(enum)
	 * @type {Number}
	 */
	DIRECTION_FORWARD: 1,
	/**
	 * @static
	 * @property js_$_transition_$_Timeline.DIRECTION_BACKWARD 反向(enum)
	 * @type {Number}
	 */
	DIRECTION_BACKWARD: -1,
	
	/**
	 * @ignore
	 * @property js_$_transition_$_Timeline.Config 默认配置参数
	 * @type {Object}
	 */
	Config: {
		/**
		 * @cfg {Number} fps 每秒运行的帧数，默认：50。
		 */
		fps: 50,
		/**
		 * @cfg {Number} speed 倍速，倍率。用于调节时间快慢的系数，一般不设置。默认：1。
		 */
		speed: 1,
		/**
		 * @cfg {Number} duration 持续时间的毫秒数，默认：Infinity。
		 */
		duration: Infinity,
		/**
		 * @cfg {Number} offset 起始时间偏移量的毫秒数，默认：0。
		 */
		offset: 0,
		/**
		 * @cfg {Number} direction 方向，1：正向；-1：反向；默认：1。
		 */
		direction: 1,
		/**
		 * @cfg {Number} loop 循环次数，&gt; 0：循环loop次；0：停止；&lt; 0：无限循环；可以使小数。默认：1。
		 */
		loop: 1
		
		/**
		 * @cfg {Function} onstart 形变启动时调用的外部接口。如果接口函数返回结果是false，则阻止后续的动画启动。默认：undefined。
		 */
		/**
		 * @cfg {Function} onfirstframe 进入第一帧调用的外部接口，与onstart不同的是会经过第一次时间间隔时才调用。默认：undefined。
		 */
		/**
		 * @cfg {Function} onenterframe 每帧调用的外部接口。默认：undefined。
		 */
		/**
		 * @cfg {Function} oncomplete 变化完成时调用的外部接口。默认：undefined。
		 */
	},
	
	/**
	 * @private
	 * @property js_$_transition_$_Timeline.running
	 * @type {Object}
	 * 所有开始过的定时器的运行状态，定时器的id作为索引标识
	 */
	running: {},
	
	/**
	 * 获取下一次定时器的数字索引标识
	 * @method js_$_transition_$_Timeline.getNextTimer
	 * @static
	 * 
	 * @return {Number}
	 */
	getNextTimer: function () {
		return setTimeout(js_$_util_$_Global_$_noop, 0) + 1;
	},
	
	/**
	 * 开始前的预处理
	 * @method js_$_transition_$_Timeline.prepare
	 * @protected
	 * @static
	 * 
	 * @param {Object} option
	 * 
	 * @return {Object}
	 */
	prepare: function (option) {
		var Class = js_$_util_$_Class;
		Class.mix(option, this.Config);
		Class.mix(option, {
			//记录即将开始的定时器的id
			id: this.getNextTimer(),
			
			//开始时间，取实际时间来计算，用于修正IE下时间不同步，另外允许从用户设置的offset偏移量开始计算
			startTime: Date.now(),
			
			//帧数记录
			frame: 0,
			
			//运行的总时间
			period: option.loop >= 0 ? option.loop * option.duration : Infinity
		});
		
		return option;
	},
	
	/**
	 * 启动一条匿名的时间轴
	 * @method js_$_transition_$_Timeline.start
	 * @static
	 * 
	 * @param {Object} option 形变的参数集
	 * 
	 * @return {Number} interval，返回定时执行的句柄，可供停止渐变调用
	 */
	start: function (option) {
		var opt, run;
		if (typeof option.onstart != 'function' || (run = option.onstart()) !== false) {
			opt = this.prepare(option);
			run = window.setInterval(this.run.bind(this), 1 / option.fps * 1000, opt);
			
			this.running[run] = true;
		}
		
		return run;
	},
	
	/**
	 * 定时器每次执行的内容
	 * @method js_$_transition_$_Timeline.run
	 * @private
	 * 
	 * @param {Object} option @see js_$_transition_$_Timeline.Config
	 * 
	 * @return {Number}
	 */
	run: function (option) {
		option.spend = (Date.now() - option.startTime + option.offset) * option.speed;
		
		if (!option.frame++ && typeof option.onfirstframe == 'function') {
			option.onfirstframe();
		}
		
		if (option.spend < option.period) {
			if (typeof option.onenterframe == 'function') {
				option.onenterframe(option.spend);
			}
		} else {
			this.stop(option.id);
			
			if (typeof option.onenterframe == 'function') {
				option.onenterframe(option.period);
			}
			
			if (typeof option.oncomplete == 'function') {
				option.oncomplete();
			}
		}
	},
	
	/**
	 * 补间序列
	 * @method js_$_transition_$_Timeline.order
	 * @static
	 * 
	 * @param {Array} queue 由补间参数option组成的数组
	 * @param {Function} oncomplete 所有动画结束时的回调函数
	 */
	order: function (queue, oncomplete) {
		var i = queue.length - 1, me = this;
		queue[i].oncomplete = oncomplete;
		for (i--; i >= 0; i--) {
			queue[i].next = queue[i + 1];
			queue[i].oncomplete = function(){
				me.start(this.next);
			};
		}
		this.start(queue[0]);
	},
	
	/**
	 * 停止某个定时器
	 * @method js_$_transition_$_Timeline.stop
	 * @static
	 * 
	 * @param {Number} id
	 */
	stop: function (id) {
		var running = this.running;
		if (running[id]) {
			clearInterval(id);
			delete running[id];
		}
	},
	
	/**
	 * 停止所有由Timeline启动的定时器
	 * @method js_$_transition_$_Timeline.stopAll
	 * @static
	 */
	stopAll: function () {
		for (var i in this.running) {
			this.stop(i);
		}
	}
}, js_$_transition_$_Timeline);





/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */

/*
 * js Javascript Library
 * 
 * create:
 * @2010-4-24 by mytharcher
 * 
 * update:
 * @2010-04-27 by mytharcher
 * @2010-07-22 by mytharcher
 */



/**
 * @class js_$_transition_$_Easing
 * 声明缓动曲线静态类
 * @static
 * @singleton
 */
js_$_transition_$_Easing = {};



/**
 * @class js_$_transition_$_Easing
 */
/**
 * 线性变化
 * @method js_$_transition_$_Easing_$_linear
 * @static
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */
js_$_transition_$_Easing_$_linear = function (t) {
	return t;
};



/**
 * @class js_$_dom_$_Tween
 * 元素运动补间类
 * @extends js_$_transition_$_Timeline
 */
js_$_dom_$_Tween = js_$_util_$_Class.create({
	consturctor: function () {
		js_$_transition_$_Timeline.apply(this, arguments);
	},
	getOptions: function (option) {
		var opt = js_$_transition_$_Timeline.prototype.getOptions(option);
		
		return js_$_util_$_Class.mix(opt, {
			
		});
	}
}, js_$_transition_$_Timeline);

js_$_util_$_Class.copy({
	/**
	 * 字符串转为数字的方法
	 * @method js_$_dom_$_Tween.parseFloat
	 * @private
	 * @static
	 * 
	 * 将第一次匹配到的数字部分转化为小数
	 * 
	 * @param {String} str
	 * 
	 * @return {Number}
	 */
	parseFloat: function (str) {
		var m = str.match(/-?\d+(\.\d+)?/);
		return parseFloat(m && m[0] || 0);
	},
	
	/**
	 * 计算一个属性当前步骤的目标值
	 * @method js_$_dom_$_Tween.step
	 * @private
	 * @static
	 * 
	 * @param {Object} prop 属性参数
	 * @param {Number} percent 运动的时间百分比
	 * @param {Number} direction 方向
	 * 
	 * @return {String} 带单位返回的style值
	 */
	step: function (prop, percent, direction) {
		return ((direction > 0 ? prop.from : prop.to) + prop.distance * prop.ease(percent) * direction) + prop.unit;
	},
	
	/**
	 * @private
	 * @method js_$_dom_$_Tween.prepare
	 * @param {Object} option
	 * @return {Object}
	 */
	prepare: function (option) {
		var Tween = js_$_dom_$_Tween,
			Style = js_$_dom_$_Style,
			option = js_$_transition_$_Timeline.prepare.call(Tween, option);
		
		//预处理属性列表
		for (var prop in option.property) {
			var p = option.property[prop];
			
			//默认无缓动，即线性运动
			if (typeof p.ease != 'function') {
				p.ease = Tween.Config.ease;
			}
			
			//默认没有单位
			if (typeof p.unit == 'undefined') {
				p.unit = '';
			}
			
			var hasFrom = typeof p.from != 'undefined';
			
			//如果没有from属性,则认为当前样式的值是from
			if (!hasFrom) {
				p.from = Tween.parseFloat(Style.get(option.object, prop));
			}
			
			//设置目标距离属性为
			p.distance = p.to - p.from;
			
			if (hasFrom) {
				Style.set(option.object, prop, Tween.step(p, option.offset / option.duration, option.direction));
			}
		}
		
		option.onenterframe = Tween.createOnEnterFrameProcessor(option);
		
		return option;
	},
	
	/**
	 * @private
	 * @param {Object} option
	 */
	createOnEnterFrameProcessor: function (option) {
		var temp = option.onenterframe;
		return function (spendTime) {
			var Style = js_$_dom_$_Style,
				Tween = js_$_dom_$_Tween,
				percent = spendTime < this.period ? (spendTime % this.duration) / this.duration : 1;
			
			if (this.direction < 0) {
				percent = 1 - percent;
			}
			
			for (var prop in this.property) {
				Style.set(this.object, prop, Tween.step(this.property[prop], percent, this.direction));
			}
			temp && temp.call(this, percent);
		};
	}
}, js_$_dom_$_Tween);

js_$_dom_$_Tween.Config = js_$_util_$_Class.mix({
	duration: 500,
	ease: js_$_transition_$_Easing_$_linear
}, js_$_transition_$_Timeline.Config);



/*
 * @class js_$_dom_$_INodeStyle
 * Node类实现Tween的接口类
 * @interface
 * @singleton
 */
/**
 * @class js_$_dom_$_Node
 */
js_$_dom_$_INodeTween = js_$_dom_$_INodeTween || {
	/**
	 * 开始动画
	 * @method tween
	 * @param {Object} options 动画参数
	 * 
	 * @return {js_$_dom_$_Node} 返回自身引用以供链式调用
	 */
	tween: function (options) {
		var transStamp = js_$_util_$_Global_$__STAMP + '_transformer';
		if (!this[transStamp]) {
			this[transStamp] = {};
		}
		
		this.forEach(function (element) {
			var transStamp = js_$_util_$_Global_$__STAMP + '_transformer';
			var transSet = this[transStamp];
			var marker = js_$_dom_$_Stage_$_mark(element);
			if (!transSet[marker]) {
				transSet[marker] = [];
			}
			transSet[marker].push(js_$_dom_$_Tween.start(js_$_util_$_Class.mix({
				object: element
			}, options)));
		});
		
		return this;
	},
	
	/**
	 * 停止动画
	 * @method rest
	 * 
	 * @return {js_$_dom_$_Node} 返回自身引用以供链式调用
	 */
	rest: function () {
		this.forEach(function (element) {
			var transStamp = js_$_util_$_Global_$__STAMP + '_transformer';
			var transSet = this[transStamp];
			var marker = js_$_dom_$_Stage_$_mark(element) || [];
			transSet[marker].forEach(js_$_dom_$_Tween.stop);
		});
		
		return this;
	}
};

js_$_util_$_Class.implement(js_$_dom_$_Node, js_$_dom_$_INodeTween);

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-2-13 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_dom_$_Stage
 */

/**
 * 在全局作用域执行js代码
 * @method js_$_dom_$_Stage_$_evalScript
 * @static
 * 
 * from jQuery-1.4.4 globalEval
 * 
 * @param {String} data
 */
js_$_dom_$_Stage_$_evalScript = function( data ) {
	if ( data && /\S/.test(data) ) {
		// Inspired by code by Andrea Giammarchi
		// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
		var head = document.getElementsByTagName("head")[0] || document.documentElement,
			script = document.createElement("script");

		script.type = "text/javascript";
		
		if ( js_$_client_$_Features_$_scriptEval ) {
			script.appendChild( document.createTextNode( data ) );
		} else {
			script.text = data;
		}

		// Use insertBefore instead of appendChild to circumvent an IE6 bug.
		// This arises when a base node is used (#2709).
		head.insertBefore( script, head.firstChild );
		head.removeChild( script );
		script = null;
		head = null;
	}
};



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-11-23 by mytharcher
 * 
 * update:
 */



/**
 * 获取文档元素
 * @method js_$_dom_$_Stage_$_getDocument
 * @static
 * 
 * @param {Window} win (optional)对应窗口，可以用于指定获取特定窗口的文档
 * 
 * @return {HTMLDocument}
 */
js_$_dom_$_Stage_$_getDocument = function (win) {
	return (win || window).document;
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-11-23 by mytharcher
 * 
 * update:
 */



/**
 * 获取文档根节点元素
 * @method js_$_dom_$_Stage_$_getDocumentElement
 * @static
 * 
 * @param {Window} win (optional)对应窗口，可以用于指定获取特定窗口的文档
 * 
 * @return {HTMLDocumentElement}
 */
js_$_dom_$_Stage_$_getDocumentElement = function (win) {
	var doc =js_$_dom_$_Stage_$_getDocument(win);
	return doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_dom_$_Stage
 */
	
/**
 * 获取页面中下一个更高的z-index数值
 * @method js_$_dom_$_Stage_$_getNextHighestDepth
 * @static
 * 
 * @param {Boolean} force 强制重新计算，默认：false
 * 
 * @return {Number}
 */
js_$_dom_$_Stage_$_getNextHighestDepth = function (force) {
	var depth = arguments.callee.depth;
	if (!depth || force) {
		var highest = 1;
		var allNodes = document.getElementsByTagName('*');
		for (var i = allNodes.length - 1; i >= 0; i--) {
			var node = allNodes[i];
			var zIndex = (node.currentStyle ? node.currentStyle : document.defaultView.getComputedStyle(node, null)).zIndex;
			if (parseInt(zIndex)) {
				if (zIndex > highest) {
					highest = zIndex;
				}
			}
		}
		arguments.callee.depth = highest;
	}
	return ++arguments.callee.depth;
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-2-13 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_dom_$_Stage
 */

/**
 * 加载脚本
 * @method js_$_dom_$_Stage_$_loadScript
 * @static
 * 
 * @param {String} url 脚本的URL地址
 * @param {Object} option 其他选项：noCache，是否缓存，默认false；onLoad，加载完成的回调函数；
 */
js_$_dom_$_Stage_$_loadScript = function (url, option) {
	var url = new js_$_net_$_URL(url);
	if (option.noCache) {
		url.setParameter(Date.now(), Math.random());
	}
	var script = document.createElement('script');
	script.type = 'text/javascript';
	
	script[js_$_client_$_Browser.IE ? 'onreadystatechange' : 'onload'] = function (ev) {
		if (js_$_client_$_Browser.IE && this.readyState == 'loaded' || !js_$_client_$_Browser.IE) {
			option.onLoad && option.onLoad(this);
			this.onreadystatechange = this.onload = null;
		}
	}
	
	document.body.appendChild(script);
	script.src = url.toString();
	
	script = null;
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-04-09 by mytharcher
 * 
 * update:
 * @2011-09-18 by mytharcher
 * 		[a] Add method "removeParameter" for removing a key of url's parameter
 * 		[a] Add method "clearParameter" for removing all keys of url's parameter
 */




/**
 * @ignore 声明net包，网络传输相关
 */
js_$_net = {};


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-04-09 by mytharcher
 * 
 * update:
 * @2011-08-18 by mytharcher
 * 		[m] Remove the branch for no-key input from method "remove".
 * 		[a] Add method "clear".
 * 		[m]	Fix recurrence bug in method "addValue".
 * @2011-08-20 by mytharcher
 * 		[m] Fix delete value bug in method "remove".
 */




/**
 * @class js_$_net_$_URLParameter URL参数串处理类
 * @extends js_$_util_$_Hash
 */
js_$_net_$_URLParameter = js_$_util_$_Class.create({
	constructor: function () {
		js_$_util_$_Hash.apply(this, arguments);
	},
	/**
	 * @private
	 */
	//_data: {},
	
	/**
	 * 对一个参数名加一个值
	 * @method addValue
	 * @override
	 * 
	 * @param {String} key
	 * @param {String/Array} value
	 * 
	 * @return {URLParameter} 返回自身对象，以供链式调用
	 */
	addValue: function (key, value) {
		var map = this._data;
		if (!map[key]) {
			map[key] = {};
		}
		
		var keyObj = map[key];
		var valueObj = {};
		if (value instanceof Array) {
			for (var i = 0, l = value.length; i < l; i++) {
				this.add(key, value[i]);
			}
		} else {
			if (value !== null) {
				keyObj[value] = 1;
			}
		}
		
		return this;
	},
	
	/**
	 * 移除一个参数
	 * @method remove
	 * @override
	 * 
	 * @param {String} key 要移除的参数名
	 * @param {String/Array} value 要移除的参数值
	 * 
	 * @return {URLParameter} 返回自身实例，以供链式调用
	 */
	remove: function (key, value) {
		if (key) {
			if (typeof value != 'undefined') {
				if (value instanceof Array) {
					for (var i = value.length - 1; i >= 0; i--) {
						this.remove(key, value[i]);
					}
				} else {
					delete this._data[key][value];
				}
			} else {
				delete this._data[key];
			}
		}
		return this;
	},
	
	/**
	 * 清空对象
	 * @method clear
	 * 
	 * @return {URLParameter} 返回自身实例，以供链式调用
	 */
	clear: function () {
		this._data = {};
		return this;
	},
	
	/**
	 * 获取参数
	 * @method get
	 * @override
	 * 
	 * @param {String} (optional)key 要获取的参数名，如不传入此参数，则返回全部参数对象
	 * 
	 * @return {Array/String/Object}
	 */
	get: function (key) {
		var ret = [];
		var param = this._data;
		if (key) {
			var value = param[key];
			if (value) {
				for (var i in value) {
					ret.push(i);
				}
			}
			ret = ret.length ? ret.length == 1 ? ret[0] : ret : null;
		} else {
			ret = {};
			for (var i in param) {
				var item = this.get(i);
				if (item !== null) {
					ret[i] = item;
				}
			}
		}
		return ret;
	},
	
	/**
	 * 设置单个参数
	 * @method setValue
	 * @override
	 * 
	 * @param {String} key 需要设置的参数名
	 * @param {String} value 需要设置的参数值，如果为null，则remove掉这个参数
	 * 
	 * @return URLParameter
	 */
	setValue: function (key, value) {
		if (value === null) {
			this.remove(key);
		} else {
			var valueObj = {};
			if (value instanceof Array) {
				for (var i = 0, l = value.length; i < l; i++) {
					valueObj[value[i]] = 1;
				}
			} else {
				valueObj[value] = 1;
			}
			
			this._data[key] = valueObj;
		}
		return this;
	},
	
	/**
	 * 设置参数
	 * @method set
	 * 
	 * @param {String/Object} key 需要设置的参数名，或新的url参数串，当参数是object时，以key-value形式遍历设置
	 * @param {String/Array} value 如果值不是一个数组，将被转化成一个数组。如果不传入value，那么就按照url参数格式解析并对param扩展，如果为null，则remove掉这个参数
	 * 
	 * @return {URLParameter} 返回自身实例，以供链式调用
	 */
	
	/**
	 * 输出为字符串
	 * @method toString
	 * @override
	 * 
	 * @param {Function} encoder 传入对所有参数值进行编码的函数，默认不编码
	 * 
	 * @return {String}
	 */
	toString: function (encoder) {
		var param = this._data;
		var ret = [];
		var useEncoder = typeof encoder == 'function';
		for(var i in param){
			if(i.toString().length && typeof(param[i]) != 'undefined' && param[i] != null){
				var p = param[i];
				
				for (var j in p) {
					if (p[j]) {
						ret.push('&', i, '=', useEncoder ? encoder(j) : j);
					}
				}
			}
		}
		ret.shift();
		return ret.join('');
	}
}, js_$_util_$_Hash);


/**
 * 将一个参数串转化成JSON类型
 * @method parseJSON
 * @static
 * 
 * @param {String} p 要解析的字符串
 * @param {Function} decoder (optional)解码器函数，非必选
 * 
 * @return {Object} 返回一个key-value参数对象集合
 */
js_$_net_$_URLParameter.parseJSON = function(p, decoder){
	var param = {},
		paramFlag = {},
		pp,
		pair;
	
	p = p.replace(/^[\?&]*|&*$/g, '').split('&');
	
	for (var i = 0, l = p.length; i < l; i++) {
		pp = p[i];
		if (pp && pp.indexOf('=') > 0) {
			pair = pp.split('=');
			var key = pair[0], value = pair[1];
			value = typeof decoder == 'function' ? decoder(value) : value;
			if (!paramFlag[key]) {
				param[key] = [value];
				paramFlag[key] = 1;
			} else {
				param[key].push(value);
			}
		}
	}
	
	return param;
};





/**
 * @class js_$_net_$_URL URL处理类
 */

/**
 * @property protocol 协议
 * @type {String}
 */
/**
 * @property hostname 主机
 * @type {String}
 */
/**
 * @property port 端口
 * @type {Number}
 */
/**
 * @property path 路径
 * @type {String}
 */
/**
 * @property parameter 查询参数
 * @type {String/Object/js_$_net_$_URLParameter}
 */
/**
 * @property hash 锚点
 * @type {String}
 */
js_$_net_$_URL = js_$_util_$_Class.create({
	/**
	 * @cfg {String} protocol 协议
	 */
	/**
	 * @cfg {String} hostname 主机名
	 */
	/**
	 * @cfg {Number} port 端口
	 */
	/**
	 * @cfg {String} path 路径
	 */
	/**
	 * @cfg {String/Object/js_$_net_$_URLParameter} parameter 参数
	 */
	/**
	 * @cfg {String} hash 锚点
	 */
	
	/**
	 * 构造函数
	 * @method constructor
	 * 
	 * @param {Object} args
	 */
	constructor: function (args) {
		var args = args || {};
		
		js_$_util_$_Class.mix(this, this.constructor.Config);
		
		js_$_util_$_Class.copy(
			js_$_util_$_Type.isString(args) || args === location ?
				this.constructor.parseJSON(args)
				: args,
			this
		);
		
		this.parameter = new js_$_net_$_URLParameter(this.parameter);
		
		return this;
	},
	
	/**
	 * 设置协议
	 * @param {String} protocol
	 * 
	 * @return {js_$_net_$_URL}
	 */
	setProtocol: function (protocol) {
		this.protocol = protocol;
		return this;
	},
	
	/**
	 * 获取协议部分
	 * @param {Boolean} withSep 是否获取用于分隔协议的“://”部分，默认：false。
	 * 
	 * @return {String} 如果有主机部分，则返回如http://类似的协议部分，否则返回空串。
	 */
	getProtocol: function (withSep) {
		var protocol = '';
		if (this.getHost()) {
			protocol = (this.protocol || this.constructor.PROTOCOL_HTTP) + (withSep ? '://' : '');
		}
		return protocol;
	},
	
	/**
	 * 设置主机名
	 * @param {String} hostname
	 * 
	 * @return {js_$_net_$_URL}
	 */
	setHostname: function (hostname) {
		this.hostname = hostname;
		return this;
	},
	
	/**
	 * 获取主机名
	 * @return {String}
	 */
	getHostname: function () {
		return this.hostname;
	},
	
	/**
	 * 设置端口号
	 * @param {String/Number} port
	 * 
	 * @return {js_$_net_$_URL} 返回自身引用以供链式调用
	 */
	setPort: function (port) {
		this.port = port;
		return this;
	},
	
	/**
	 * 获取端口号
	 * @param {Boolean} withSep 是否包含端口号的分隔符“:”，默认：false
	 * 
	 * @return {String}
	 */
	getPort: function (withSep) {
		var port = this.port;
		return port && port != this.constructor.DEFAULT_PORT_HTTP ? withSep ? ':' + port : port : '';
	},
	
	/**
	 * 获取主机部分
	 * @return {String} 如果有主机部分，则返回主机+端口部分作为主机返回，如"abc.baidu.com"或"10.81.12.236:8080"
	 */
	getHost: function () {
		var host = '';
		if (this.hostname) {
			host = this.hostname + this.getPort(true);
		}
		
		return host;
	},
	
	/**
	 * 设置URL的路径
	 * @param {String} path
	 * 
	 * @return {js_$_net_$_URL} 返回自身引用以供链式调用
	 */
	setPath: function (path) {
		this.path = path;
		return this;
	},
	
	/**
	 * 获取URL的路径部分
	 * @return {String}
	 */
	getPath: function () {
		return this.path;
	},
	
	/**
	 * 设置URL的参数部分，详见：{@link js_$_net_$_URLParameter.set}
	 * @param {String/Object} key
	 * @param {String} value
	 * 
	 * @return {js_$_net_$_URL} 返回自身实例，以供链式调用
	 */
	setParameter: function (key, value) {
		this.parameter.set(key, value);
		return this;
	},
	
	/**
	 * 获取指定的参数，详见：{@link js_$_net_$_URLParameter.get}
	 * @param {String} key
	 * @return {String/Object}
	 */
	getParameter: function (key) {
		return this.parameter.get(key);
	},
	
	/**
	 * 移除指定的参数，详见：{@link js_$_net_$_URLParameter.set}
	 * @param {String} key
	 * 
	 * @return {js_$_net_$_URL} 返回自身实例，以供链式调用
	 */
	removeParameter: function (key) {
		this.parameter.set(key, null);
		return this;
	},
	
	/**
	 * 移除所有参数，详见：{@link js_$_net_$_URLParameter.clear}
	 * 
	 * @return {js_$_net_$_URL} 返回自身实例，以供链式调用
	 */
	clearParameter: function () {
		this.parameter.clear();
		return this;
	},
	
	/**
	 * 获取URL的参数部分
	 * @param {Function} encoder (optional)编码函数 @see js_$_net_$_URLParameter
	 * @param {Boolean} withSep (optional)是否需要问号分隔符，默认：false
	 * @return {String}
	 */
	getQuery: function (encoder, withSep) {
		var param = this.parameter.toString(encoder);
		return param ? (withSep ? '?' + param : param) : '';
	},
	
	/**
	 * 获取URL的hash部分
	 * @param {Boolean} withSep (optional)是否需要井号分隔符，默认：false
	 * @return {String}
	 */
	getHash: function (withSep) {
		var hash = this.hash;
		return hash ? (withSep ? '#' + hash : hash) : '';
	},
	
	/**
	 * 将URL输出为一个字符串
	 * @param {Function} encoder (optional)参数编码函数 @see js_$_net_$_URL.getQuery
	 * @return {String}
	 */
	toString: function (encoder) {
		return [
			this.getProtocol(true),
			this.getHost(),
			this.path,
			this.getQuery(encoder, true),
			this.getHash(true)
		].join('');
	}
});


js_$_util_$_Class.mix(js_$_net_$_URL, {
	/**
	 * @constant
	 * @static
	 * @property js_$_net_$_URL.DEFAULT_PORT_HTTP http协议默认端口
	 * @type {Number}
	 */
	DEFAULT_PORT_HTTP: 80,
	
	/**
	 * @constant
	 * @static
	 * @property js_$_net_$_URL.PROTOCOL_HTTP http协议标识
	 * @type {String}
	 */
	PROTOCOL_HTTP: 'http',
	
	/**
	 * @constant
	 * @static
	 * @property js_$_net_$_URL.PROTOCOL_HTTPS https协议标识
	 * @type {String}
	 */
	PROTOCOL_HTTPS: 'https',
	
	/**
	 * @ignore
	 * 默认配置项
	 */
	Config: {
		protocol: '',
		hostname: '',
		port: '',
		path: '',
		parameter: '',
		hash: ''
	},
	
	/**
	 * 解析url为JSON格式
	 * @method parseJSON
	 * @static
	 * 
	 * @param {Location/String} u 输入源
	 * 
	 * @return {Object}
	 */
	parseJSON: function (u) {
		var Class = js_$_util_$_Class,
			Type = js_$_util_$_Type,
			json = Class.copy(js_$_net_$_URL.Config);
		if (!u || u == location.href || u === location) {
			var u = location;
			json = Class.copy({
				protocol: u.protocol.replace(':', ''),
				hostname: u.hostname,
				port: u.port,
				path: u.pathname,
				parameter: u.search.slice(1),
				hash: u.hash.slice(1)
			}, json);
		} else if (Type.isObject(u)) {
			Class.copy(u, json);
		} else if (Type.isString(u)) {
			var ret = u;
			var matcher = u.match(/^(([a-z]+):\/\/)((([a-z0-9]+-?)*[a-z0-9]+\.)*([a-z0-9]+-?)*[a-z0-9]+)(\:(\d+))?([\/?#]|$)/i);
			//对于没有协议部分的url，仅认为是一个相对路径
			if (matcher) {
				json.protocol = matcher[2];
				json.hostname = matcher[3];
				json.port = matcher[8] || '';
				ret = u.replace(matcher[0], matcher[9]);
			}
			
			if (ret) {
				var searchStart = ret.indexOf('?');
				var searchEnd = ret.indexOf('#');
				var len = ret.length;
				json.path = ret.substring(0, searchStart >= 0 ? searchStart : searchEnd >= 0 ? searchEnd : len);
				json.parameter = ret.substring(searchStart >= 0 ? searchStart : len, searchEnd >= 0 ? searchEnd : len);
				json.hash = ret.substring(searchEnd >= 0 ? searchEnd : len, len);
			}
		}
		
		return json;
	}
});



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-2-13 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_dom_$_Stage
 */

/**
 * 加载样式表
 * @method js_$_dom_$_Stage_$_loadStyle
 * @static
 * 
 * @param {String} url 样式表的URL地址
 * @param {Boolean} noCache 是否清除缓存
 */
js_$_dom_$_Stage_$_loadStyle = function (url, noCache) {
	var url = new js_$_net_$_URL(url);
	if (noCache) {
		url.setParameter(Date.now(), Math.random());
	}
	
	var css = document.createElement('link');
	css.setAttribute('type', 'text/css');
	css.setAttribute('rel', 'stylesheet');
	css.setAttribute('href', url.toString());
	document.getElementsByTagName('head')[0].appendChild(css);
	css = null;
};



/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-04-12 by mytharcher
 * 
 * update:
 * @2011-09-22 by mytharcher
 * 		[m] Change API, and will not support absolute order queue any more.
 */

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-09-21 by mytharcher
 * 
 * update:
 */




/**
 * @class js_$_util_$_Processor
 * 执行器类
 * @singleton
 */
js_$_util_$_Processor = {
	/**
	 * 按队列顺序执行
	 * @method js_$_util_$_Processor.queue
	 * @static
	 * 
	 * @param {Function} fn 要调用的函数操作
	 * @param {Object} scope (optional)需要指定的作用域
	 * @param {Any...} argument (optional)调用时需要传入的参数
	 * 
	 * @return {Function} 返回原函数，以供继续调用
	 */
	queue: (function () {
		var queue = [], running = false;
		
		function process () {
			while(queue.length) {
				var cur = queue.shift();
				cur.fn.apply(cur.scope || null, cur.args);
			}
			running = false;
		}
		
		return function (fn, scope) {
			queue.push({
				fn: fn,
				scope: scope,
				args: [].slice.call(arguments, 2)
			});
			
			if (!running) {
				running = true;
				setTimeout(process, 0);
			}
			
			return arguments.callee;
		};
	})(),
	
	/**
	 * 异步串行队列
	 * 
	 * @example <pre><code>
var data = 0;
function fn1(next){
	ajax(options, function () {data += 100; next();});
}
function fn2(next){
	data *= 2;
	setTimeout(next, 2000);
}
function callback(){
	console.log(data); // 200
}
js_$_util_$_Processor.asyncQueue(fn1, fn2, callback);
</code></pre>
	 */
	asyncQueue: (function () {
		var queue = [], running = false;
		
		function process() {
			if (!running) {
				running = true;
				if (queue.length) {
					var item = queue.shift();
					item.fn.apply(item.scope, [item.next].concat(item.args));
				} else {
					running = false;
				}
			}
		}
		
		return function () {
			queue.push({
				group: [].slice.call(arguments, 0),
				next: process
			});
			
			process();
			
			return arguments.callee;
		};
	})(),
	
	/**
	 * 并行处理组
	 * @method js_$_util_$_Processor.parallel
	 * @static
	 * 
	 * @return {Function} 返回原函数，以供继续调用
	 * 
	 * @example <pre><code>
function fn1(done){
	ajax(options, function () {done();});
}
function fn2(done){
	setTimeout(done, 2000);
}
function callback(){
	console.log('All done!');
}
js_$_util_$_Processor.parallel(fn1, fn2, callback);
</code></pre>
	 */
	parallel: (function () {
		var queue = [];
		
		function start() {
			queue.forEach(process);
		}
		
		function process (item, index) {
			if (!item.running) {
				item.running = true;
				for (var i = 0, len = item.fn.length; i < len; i++) {
					item.fn[i](function () {
						item.count++;
						callback(item);
					});
				}
			}
		}
		
		function callback (group) {
			if (group.fn.length == group.count) {
				queue.splice(queue.indexOf(group), 1);
				group.callback();
			}
		}
		
		return function () {
			var fns = [].slice.call(arguments, 0);
			var cb = fns.pop();
			queue.push({
				fn: fns,
				callback: cb,
				conut: 0
			});
			
			start();
			
			return arguments.callee;
		}
	})(),
	
	mix: function (map, callback) {
		
	}
};

/*
 * use:
 * 
 * function f1() {
 * 	console.log(1);
 * }
 * function f2() {
 * 	console.log(2);
 * }
 * 
 * js_$_util_$_Processor.queue(f1);
 * js_$_util_$_Processor.queue(f2);
 * //...time out
 * //1
 * //2
 * 
 * js_$_util_$_Processor.parallel(f1, f2, ... fn, callback);
 * 
 */




/**
 * @class js_$_dom_$_Stage
 */

/**
 * DOM加载完毕后的执行队列
 * @method js_$_dom_$_Stage_$_ready
 * @static
 * 
 * for use: <pre><code>js_$_dom_$_Stage_$_ready(f1)(f2, scope)(f3, scope, args)</code></pre> ...
 * 
 * @param {Function...} callback 可传入多个要执行的操作函数
 * 
 * @return {Function} js_$_dom_$_Stage_$_ready 返回供链式调用的当前函数
 */
js_$_dom_$_Stage_$_ready = (function(){
	var isReady = false, queue = [], running = false;
	
	function ready(){
		isReady = true;
		start();
	}
	
	function start () {
		while (queue.length) {
			js_$_util_$_Processor.queue.apply(null, queue.shift());
		}
	}
	
	function bindReady(){
		var doc = document, w = window, opera = js_$_client_$_Browser.Opera;
		
		// Mozilla, Opera (see further below for it) and webkit nightlies currently support this event
		if (doc.addEventListener && !opera) {
			// Use the handy event callback
			doc.addEventListener("DOMContentLoaded", opera ? function(){
				if (isReady) {
					return;
				}
				for (var i = 0; i < doc.styleSheets.length; i++) {
					if (doc.styleSheets[i].disabled) {
						setTimeout(arguments.callee, 0);
						return;
					}
				}
				// and execute any waiting functions
				ready();
			} : ready, false);
		} else if (js_$_client_$_Browser.IE && w == top) {
			// If IE is used and is not in a frame
			// Continually check to see if the doc is ready
			(function(){
				if (isReady) {
					return;
				}
				
				try {
					// If IE is used, use the trick by Diego Perini
					// http://javascript.nwbox.com/IEContentLoaded/
					doc.documentElement.doScroll("left");
				} catch (error) {
					setTimeout(arguments.callee, 10);
					return;
				}
				// and execute any waiting functions
				ready();
			})();
		} else if (js_$_client_$_Browser.Safari) {
			var numStyles;
			(function(){
				if (isReady) {
					return;
				}
				if (doc.readyState != "loaded" && doc.readyState != "complete") {
					setTimeout(arguments.callee, 0);
					return;
				}
				if (typeof numStyles == 'undefined') {
					numStyles = 0;
					var s1 = doc.getElementsByTagName('style');
					var s2 = doc.getElementsByTagName('link');
					if (s1) {
						numStyles += s1.length;
					}
					if (s2) {
						for (var i = 0, j = s2.length; i < j; i++) {
							if (s2[i].getAttribute("rel") == "stylesheet") {
								numStyles++;
							}
						}
					}
				}
				// numStyles = jQuery("style, link[rel=stylesheet]").length;
				if (doc.styleSheets.length != numStyles) {
					setTimeout(arguments.callee, 0);
					return;
				}
				// and execute any waiting functions
				ready();
			})();
		}
		
		// A fallback to window.onload, that will always work
		w.attachEvent ? w.attachEvent("onload", ready) : w.addEventListener("load", ready, false);
	}
	
	bindReady();
	
	return function(){
		var args = [].slice.call(arguments, 0);
		queue.push(args);
		isReady && start();
		return arguments.callee;
	};
})();

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-08-13 by mytharcher
 * 
 * update:
 */




/**
 * @class js_$_dom_$_Traversal
 */
	
/**
 * 从一个节点开始向下广度优先遍历(递归)
 * @method js_$_dom_$_Traversal_$_bfs
 * @static
 * 
 * @param {Array/Element/String} element 开始遍历的元素
 * @param {Function} fn 遍历在每一个节点上要执行的操作，如果该函数的执行结果为false，则会中断所有遍历，返回已遍历的节点数。
 * @param {Object} thisp (optional)执行fn操作的scope对象
 * @param {Boolean} includeText (optional)是否包含文本节点，默认：false。
 * 
 * @return {Number} 返回已遍历的节点数量
 */
js_$_dom_$_Traversal_$_bfs = function (element, fn, thisp, includeText) {
	var 
		node = js_$_dom_$_Stage_$_get(element),
		count = 0,
		layer = js_$_util_$_Type.isArray(node) ?
			node :
			fn.call(thisp, node, count++) === false ?
				[] :
				[node.firstChild],
		nextLayer = []
	;
	
	while (layer.length) {
		for (node = layer.shift(); node; node = node.nextSibling) {
			if (includeText || node.nodeType == 1) {
				if (fn.call(thisp, node, count++) !== false) {
					nextLayer.push(node.firstChild);
				} else {
					return count;
				}
			}
		}
	}
	if (nextLayer.length) {
		count += arguments.callee(nextLayer, fn, thisp, includeText);
	}
	
	return count;
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-08-13 by mytharcher
 * 
 * update:
 * @2011-08-13 by mytharcher
 * 		[m] move all method to sub folder.
 */



/**
 * @class js_$_dom_$_Traversal
 */

/**
 * 从一个节点开始向下深度优先遍历(非递归算法，低效)
 * @method js_$_dom_$_Traversal_$_dfs
 * @static
 * 
 * @param {Element/String} element 开始遍历的元素
 * @param {Function} fn 遍历在每一个节点上要执行的操作，如果该函数的执行结果为false，则会中断所有遍历，返回已遍历的节点数。
 * @param {Object} thisp (optional)执行fn操作的scope对象
 * @param {Boolean} includeText (optional)是否包含文本节点，默认：false。
 * 
 * @return {Number} 返回已遍历的节点数量
 */
js_$_dom_$_Traversal_$_dfs = function (element, fn, thisp, includeText) {
	var element = js_$_dom_$_Stage_$_get(element),
		node = element,
		n,
		count = 0;
	while (1) {
		if (node) {
			if (includeText || node.nodeType == 1) {
				if (fn.call(thisp, node, count++) === false) {
					break;
				} else {
					n = node;
					node = node.firstChild;
				}
			} else {
				node = node.nextSibling;
			}
		} else {
			if (n == element) {
				break;
			} else {
				node = n.nextSibling;
				n = n.parentNode;
			}
		}
	}
	return count;
};

/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2010-02-27 by mytharcher
 * 
 * update:
 * @2010-12-13 by mytharcher
 * @2011-08-21 by mytharcher
 * 		[m] Change the event handler "onFail" to "onfailure".
 * @2011-09-10 by mytharcher
 * 		[m] Change JSON parser from anonymouse function to native JSON.parse().
 * 		[m] Change JSON parse exception caught by alert to a interface function onjsonerror.
 * @2011-12-23 by mytharcher
 * 		[m] Change all events handler name to lower case.
 */





/**
 * @class js_$_net_$_Ajax 异步加载类
 */
js_$_net_$_Ajax = js_$_net_$_Ajax || js_$_util_$_Class.create({
	/**
	 * @cfg {String} url 发送地址，默认空
	 */
	/**
	 * @cfg {String} method 请求方式，默认：'GET'
	 */
	/**
	 * @cfg {Boolean} async 是否异步，默认：true
	 */
	/**
	 * @cfg {Boolean} noCache 是否无缓存，默认：false
	 */
	/**
	 * @cfg {Boolean} blockDuplicate 是否阻止同一个实例上重复的请求，默认：false
	 */
	/**
	 * @cfg {String} contentType 发送内容类型，默认：'application/x-www-form-urlencoded'
	 */
	/**
	 * @cfg {String} encoding 发送编码，默认：'utf-8'
	 */
	/**
	 * @cfg {String} responseType 返回数据类型，默认：'text'(纯文本)
	 */
	/**
	 * @cfg {Function} encoder 发送数据的编码函数，默认无
	 */
	/**
	 * @cfg {Function} onsuccess 当使用默认onreadystatechange事件(readyState==4&&200<=status<300)加载成功时的处理，下同
	 */
	/**
	 * @cfg {Function} onfailure 当使用默认事件加载失败时的处理
	 */
	/**
	 * @cfg {Function} oncomplete 当使用默认事件加载结束时的处理
	 */
	/**
	 * @cfg {Function} onduplicate 当同一个实例上的请求重复时的处理
	 */
	/**
	 * @cfg {Function} onjsonerror 当解析JSON失败时的处理
	 */
	/**
	 * @cfg {Function} onreadystatechange 处理请求onreadystatechange事件的函数，默认配置(readyState==4&&200<=status<300)
	 */
	
	/**
	 * 构造函数
	 * @param {Object} args 参数集，默认使用js_$_net_$_Ajax.option中的内容
	 */
	constructor: function (args) {
		var option = this.constructor.option;
		
		js_$_util_$_Class.mix(this, args);
		js_$_util_$_Class.mix(this, option);
		
		this.method = this.method.toUpperCase();
		
		this.httpRequest = this.constructor.createRequest();
		
		this._readyStateChangeHander = this.onreadystatechange.bind(this);
		this.httpRequest.onreadystatechange = this._readyStateChangeHander;
	},
	
	/**
	 * 获取异步请求的XMLHttpRequest对象
	 * @return {XMLHttpRequest}
	 */
	getHttpRequest: function () {
		return this.httpRequest;
	},
	
	/**
	 * 发送请求
	 * @param {Object/URLParameter} 加载时的参数
	 */
	request: function (data) {
		var myClass = this.constructor;
		
		var request = this.httpRequest;
		
		if (request.readyState && request.readyState != myClass.STATE_COMPLETE) {
			if (this.blockDuplicate || this.onduplicate(request) === false) {
				return;
			} else {
				this.abort();
			}
		}
		
		var url = new js_$_net_$_URL(this.url);
		
		var data = new js_$_net_$_URLParameter(data);
		
		if (this.noCache) {
			url.setParameter('@', (new Date()).valueOf());
		}
		
		if (this.method == myClass.HTTP_GET) {
			url.setParameter(data.get());
			data = null;
		} else {
			data = data.toString(this.encoder);
		}
		
		request.open(this.method, url.toString(), this.async);
		
		data && request.setRequestHeader("Content-type", this.contentType);
			
		request.send(data);
	},
	
	/**
	 * 取消请求
	 * @method abort
	 */
	abort: function () {
		var request = this.httpRequest
		if (request.readyState != this.constructor.STATE_COMPLETE) {
			request.abort();
			request.onreadystatechange = this._readyStateChangeHander;
		}
	}
});

/**
 * @ignore
 */
js_$_util_$_Class.copy({
	/**
	 * @property js_$_net_$_Ajax.HTTP_GET HTTP的GET方式
	 * @type {String}
	 */
	HTTP_GET: 'GET',
	/**
	 * @property HTTP_POST HTTP的POST方式
	 * @type {String}
	 */
	HTTP_POST: 'POST',
	
	/**
	 * @property STATE_UNINITIALIZE 请求状态：未初始化
	 * @type {Number}
	 */
	STATE_UNINITIALIZE: 0,
	/**
	 * 请求状态：加载中
	 * @property STATE_LOADING
	 * @type {Number}
	 */
	STATE_LOADING: 1,
	/**
	 * 请求状态：加载完毕
	 * @constant
	 * @property STATE_LOADED
	 * @type {Number}
	 */
	STATE_LOADED: 2,
	/**
	 * 请求状态：加载交互中
	 * @constant
	 * @property STATE_INTERACTIVE
	 * @type {Number}
	 */
	STATE_INTERACTIVE: 3,
	/**
	 * 请求状态：请求结束
	 * @constant
	 * @property STATE_COMPLETE
	 * @type {Number}
	 */
	STATE_COMPLETE: 4,
	
	/**
	 * 数据类型：JSON
	 * @constant
	 * @property DATA_TYPE_JSON
	 * @type {String}
	 */
	DATA_TYPE_JSON: 'json',
	/**
	 * 数据类型：文本
	 * @constant
	 * @property DATA_TYPE_TEXT
	 * @type {String}
	 */
	DATA_TYPE_TEXT: 'text',
	/**
	 * 数据类型：XML
	 * @constant
	 * @property DATA_TYPE_XML
	 * @type {String}
	 */
	DATA_TYPE_XML: 'xml',
	
	/**
	 * 创建异步请求对象
	 * @method js_$_net_$_Ajax.createRequest
	 * @static
	 * 
	 * @return {XMLHttpRequest}
	 */
	createRequest: function () {
		return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
	},
	
	/**
	 * 加载一个Ajax请求
	 * @method js_$_net_$_Ajax.request
	 * @static
	 * 
	 * @param {Object} option
	 * 
	 * @return {XMLHttpRequest}
	 */
	request: function (option) {
		var ajax = new js_$_net_$_Ajax(option);
		ajax.request(option.data);
		return ajax.httpRequest;
	},
	
	/**
	 * 以get方式请求
	 * @method js_$_net_$_Ajax.get
	 * @static
	 * 
	 * @param {Object} option
	 * 
	 * @return {XMLHttpRequest}
	 */
	get: function (option) {
		option.method = js_$_net_$_Ajax.HTTP_GET;
		return js_$_net_$_Ajax.request(option);
	},
	
	/**
	 * 以post方式请求
	 * @method js_$_net_$_Ajax.post
	 * @static
	 * 
	 * @param {Object} option
	 * 
	 * @return {XMLHttpRequest}
	 */
	post: function (option) {
		option.method = js_$_net_$_Ajax.HTTP_POST;
		return js_$_net_$_Ajax.request(option);
	}
}, js_$_net_$_Ajax);

/**
 * 加载一个Ajax请求
 * @method js_$_net_$_Ajax.load
 * @static
 * 
 * @param {Object} option
 * 
 * @return {XMLHttpRequest}
 */
js_$_net_$_Ajax.load = js_$_net_$_Ajax.request;

/**
 * 默认配置参数
 * @constant
 * @property option
 * @type {Object}
 */
js_$_net_$_Ajax.option = {
	url: '',
	method: js_$_net_$_Ajax.HTTP_GET,
	async: true,
	noCache: false,
	blockDuplicate: false,
	contentType: 'application/x-www-form-urlencoded',
	encoding: 'utf-8',
	responseType: js_$_net_$_Ajax.DATA_TYPE_TEXT,
	encoder: encodeURIComponent,
	
	onsuccess: js_$_util_$_Global_$_noop,
	onfailure: js_$_util_$_Global_$_noop,
	onjsonerror: js_$_util_$_Global_$_noop,
	oncomplete: js_$_util_$_Global_$_noop,
	onduplicate: js_$_util_$_Global_$_noop,
	
	onreadystatechange: function(){
		var me = this;
		var myClass = me.constructor;
		var request = me.httpRequest;
		if (request.readyState == myClass.STATE_COMPLETE) {
		
			if (request.status >= 200 && request.status < 300) {
				if (me.onsuccess) {
					var response = request.responseText;
					switch (me.responseType) {
						case myClass.DATA_TYPE_XML:
							response = request.responseXML;
							break;
							
						case myClass.DATA_TYPE_JSON:
							var json = response;
							try {
								json = (new Function('return ' + response + ';'))();
							} catch (ex) {
								me.onjsonerror(ex, response);
							} finally {
								if (typeof json == 'object') {
									response = json;
								}
							}
							break;
							
						default:
							break;
					}
					me.onsuccess(response, request);
				}
			} else if (me.onfailure) {
				me.onfailure(request);
			}
			
			if (me.oncomplete) {
				me.oncomplete(request);
			}
		}
	}
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-08-10 by mytharcher
 * 
 * update:
 * 
 */



/**
 * @class js_$_text_$_Encoder
 * 转码函数集
 * @static
 * @singleton
 */
js_$_text_$_Encoder = js_$_text_$_Encoder || {};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-08-10 by mytharcher
 * 
 * update:
 * 
 */



/**
 * @class js_$_text_$_Encoder
 */

/**
 * 编码HTML敏感字符
 * @method js_$_text_$_Encoder_$_encodeHTML
 * @static
 * 
 * @param {String} str
 * 
 * @return {String}
 */
js_$_text_$_Encoder_$_encodeHTML = function (str) {
	return str.replace(/([&<>'"])/g, function (matcher, symbol) {
		return '&#' + symbol.charCodeAt(0) + ';';
	});
};


/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-11-20 by mytharcher
 * 
 * update:
 * 
 */



/**
 * @class js_$_text_$_Escaper
 * 转义函数集
 * @static
 * @singleton
 */
js_$_text_$_Escaper = js_$_text_$_Escaper || {};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-18 by mytharcher
 * 
 * update:
 * 
 */



/**
 * @class js_$_text_$_Escaper
 */

/**
 * 转义字符串中的引号
 * @method js_$_text_$_Escaper_$_escapeQuote
 * @static
 * 
 * @param {String} source 要转义的字符串
 * 
 * @return {String} 转义后的字符串
 */
js_$_text_$_Escaper_$_escapeQuote = js_$_text_$_Escaper_$_escapeQuote || function (source) {
	return String(source)
		.replace(/(["'])/g, '\\\x241');
};

/*
 * jslib JavaScript Library
 * 
 * from baidu Tangram: baidu.string.escapeReg
 * 
 * create:
 * @2010-11-20 by mytharcher
 * 
 * update:
 * 
 */



/**
 * @class js_$_text_$_Escaper
 */

/**
 * 转义字符串中的正则相关字符
 * @method escapeReg
 * @static
 * 
 * @param {String} source 要转义的字符串
 * 
 * @return {String} 转义后的字符串
 */
js_$_text_$_Escaper_$_escapeReg = js_$_text_$_Escaper_$_escapeReg || function (source) {
	return String(source)
		.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\\x241');
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2011-01-20 by mytharcher
 * 
 * update:
 * 
 */



/**
 * @class js_$_text_$_Formatter
 * 格式化函数集
 * @static
 * @singleton
 */
js_$_text_$_Formatter = js_$_text_$_Formatter || {};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-02-02 by mytharcher
 * 
 * update:
 * @2010-11-21 by mytharcher
 * @2010-02-13 by mytharcher
 * 
 */



/**
 * @class js_$_text_$_Template 文本拼串模板类
 * @static
 * @singleton
 */
js_$_text_$_Template = js_$_text_$_Template || {
	/**
	 * @final
	 * @property LEFT_DELIMITER 变量左边界
	 * @type {String}
	 */
	LEFT_DELIMITER: '#{',
	
	/**
	 * @final
	 * @property RIGHT_DELIMITER 变量右边界
	 * @type {String}
	 */
	RIGHT_DELIMITER: '}',
	
	/**
	 * @ignore
	 * @private
	 * 缓存已编译的模板，未考虑缓存上限及管理机制
	 */
	compiled: {},
	
	/**
	 * 模板缓存管理
	 * @method js_$_text_$_Template.cache
	 * @static
	 * 
	 * <p>查找缓存看是否已经被缓存，如果是则返回缓存的模板方法，否则生成该模板的模板方法并缓存</p>
	 * 
	 * @param {String} tpl 模板字符串
	 * 
	 * @return {Function} 返回模板方法
	 */
	cache: function (tpl) {
		var Template = js_$_text_$_Template,
			compiled = Template.compiled[tpl];
		if (!compiled) {
			compiled = Template.compiled[tpl] = Template.compile(tpl);
		}
		return compiled;
	},
	
	/**
	 * 预编译模板
	 * @method js_$_text_$_Template.compile
	 * @static
	 * 
	 * @param {String} tpl
	 * 
	 * @return {Function}
	 */
	compile: function (tpl) {
		var Template = js_$_text_$_Template;
		if (!Template._re) {
			Template.delimiter();
		}
		var fnBody = [
			'var args = args && typeof args == "object" ? args : [].slice.call(arguments, 0);',
			'return ["',
			tpl.replace(/(["'])/g, '\\\x241').replace(Template._re, '", args["\x241"], "'),
			'"].join("");'
		].join('');
		
		return new Function('args', fnBody);
	},
	
	/**
	 * 格式化模板
	 * @method js_$_text_$_Template.format
	 * @static
	 * 
	 * @param {String/Function} tpl 使用的模板，可以是一个函数，使用函数可以做更高级的扩展
	 * @param {Any...} vars 模板变量群，可以是Object，也可以是更多的类String型的参数
	 * 
	 * @return {String}
	 */
	format: function(tpl, vars){
		var args = [].slice.call(arguments, 1);
		//支持函数扩展处理
		if (typeof tpl == 'function') {
			return tpl.apply(null, args);
		}
		return js_$_text_$_Template.cache(tpl).apply(null, args);
		
		// return (typeof tpl == 'function' ? tpl : js_$_text_$_Template.cache(tpl)).apply(null, args);
	},
	
	/**
	 * 修改定界符
	 * @method js_$_text_$_Template.delimiter
	 * @static
	 * 
	 * @param {String} left
	 * @param {String} right
	 * 
	 * @return {void}
	 */
	delimiter: function (left, right) {
		var Template = js_$_text_$_Template,
			escapeReg = js_$_text_$_Escaper_$_escapeReg;
		Template._re = new RegExp(escapeReg(left || Template.LEFT_DELIMITER) + '(\\w+)' + escapeReg(right || Template.RIGHT_DELIMITER), 'ig');
	}
};

/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_transition_$_Easing
 */
/**
 * 正弦周期变化
 * @method js_$_transition_$_Easing_$_cos
 * @static
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */
js_$_transition_$_Easing_$_cos = function (t) {
	return Math.cos(2 * Math.PI * t);
};

/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_transition_$_Easing
 */
/**
 * 二次渐强变化
 * @method js_$_transition_$_Easing_$_quadIn
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */

js_$_transition_$_Easing_$_quadIn = function (t) {
	return t * t;
};

/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_transition_$_Easing
 */
/**
 * 二次渐强-渐弱变化
 * @method js_$_transition_$_Easing_$_quadInAndOut
 * @static
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */

js_$_transition_$_Easing_$_quadInAndOut = function (t) {
	var Easing = js_$_transition_$_Easing;
	return t < 0.5 ? Easing.quadIn(t) : Easing.quadOut(t);
};

/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_transition_$_Easing
 */
/**
 * 二次渐弱变化
 * @method js_$_transition_$_Easing_$_quadOut
 * @static
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */

js_$_transition_$_Easing_$_quadOut = function (t) {
	return (2 - t) * t;
};



/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_transition_$_Easing
 */
/**
 * 正弦周期变化
 * @method js_$_transition_$_Easing_$_sin
 * @static
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */
js_$_transition_$_Easing_$_sin = function (t) {
	return Math.sin(2 * Math.PI * t);
};

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-21 By mytharcher
 * 
 * update:
 * @2011-11-27 By mytharcher
 * 		[m] Divide this class into an interface declare and this for flexible inherit.
 */


/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-11-27 By mytharcher
 * 
 * update:
 */


/*
 * jslib JavaScript Library
 * 
 * create: 
 * @2011-08-25 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_util_$_EventObject
 * 自定义事件
 */
js_$_util_$_EventObject = js_$_util_$_Class.create({
	/**
	 * 构造函数
	 * @param {Object} args
	 */
	constructor: function (args) {
		this.returnValue = true;
		
		js_$_util_$_Class.copy(args, this);
	},
	
	/**
	 * 阻止默认事件
	 * @method preventDefault
	 */
	preventDefault: function () {
		this.returnValue = false;
	}
});




/**
 * @interface js_$_util_$_IEventDispatcher 事件派发者接口类
 */
js_$_util_$_IEventDispatcher = {
	/**
	 * @private
	 */
	_getListeners: function (type) {
		var listeners = this._listeners || (this._listeners = {});
		return type ? listeners[type] : listeners;
	},
	
	/**
	 * 派发事件
	 * @param {String} type
	 * @param {Object} data
	 */
	dispatchEvent: function (type, data) {
		var ev = new js_$_util_$_EventObject({
			target: this,
			type: type,
			data: data
		});
		var listenerList = this._getListeners(type);
		if (listenerList) {
			for (var i = 0, len = listenerList.length; i < len; i++) {
				listenerList[i].call(this, ev);
			}
		}
		
		return ev.returnValue;
	},
	
	/**
	 * 添加事件监听器
	 * @param {String} type
	 * @param {Function} listener
	 */
	addEventListener: function (type, listener) {
		var listenerList = this._getListeners(type);
		if (!eventList[type]) {
			eventList[type] = [];
		}
		
		var registeredType = eventList[type];
		if (registeredType.indexOf(listener) < 0) {
			registeredType.push(listener);
		}
	},
	
	/**
	 * 移除事件监听器
	 * @param {String} type
	 * @param {Function} listener
	 */
	removeEventListener: function (type, listener) {
		var listenerList = this._getListeners(type);
		if (registeredType) {
			var index = registeredType.indexOf(listener);
			if (index >= 0) {
				registeredType.splice(index, 1);
			}
		}
	}
};




/**
 * @class js_$_util_$_EventDispatcher 事件派发者类
 */
js_$_util_$_EventDispatcher = js_$_util_$_Class.create({}, null, js_$_util_$_IEventDispatcher);

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-08-13 By mytharcher
 * 
 * update:
 */



/**
 * @class js_$_util_$_Global
 */
/**
 * 获取全局对象，web应用中即获取window
 * @method js_$_util_$_Global_$_getGlobal
 * @static
 * 
 * @return {Object}
 */
js_$_util_$_Global_$_getGlobal = function () {
	return (new Function('return this;'))();
};

/*
 * jslib JavaScript Library
 * 
 * create:
 * @2010-04-09 by mytharcher
 * 
 * update:
 * @2010-11-19 by mytharcher:
 * 		[m] Add using() parameter - target, default window;
 * 		[m] Change inner sjs referrence to this;
 * 		[a] Add using self to js;
 * @2011-05-06 by mytharcher:
 * 		[f] Fix the method name "use" to "using";
 * 		[r] Remove using self to js;
 * @2011-08-13 by mytharcher:
 * 		[m] Rename the method "using" to "use";
 * 		[m] Change window to js_$_util_$_Global_$_getGlobal();
 */



/**
 * @class js_$_util_$_Namespace
 * 命名空间管理
 * @static
 * @singleton
 */
js_$_util_$_Namespace = js_$_util_$_Namespace || {
	/**
	 * 获取命名空间
	 * @method js_$_util_$_Namespace.get
	 * @static
	 * 
	 * @param {String} nsStr 以“.”分隔的命名空间字符串
	 * @param {Object/String} base 基于查询的空间
	 * @param {Object} object 把object挂到指定的命名空间下，如传入此对象，则在命名空间任意一个层级不存在的时候，会自动以Object创建该层级。默认undefined
	 * 
	 * @return {Object} 返回计算出的命名空间对象，如果没有namespace串传入则返回undefined
	 */
	get: function (nsStr, base, object, undef) {
		var isCreate = typeof object != 'undefined';
		var Namespace = js_$_util_$_Namespace;
		
		var ns = js_$_util_$_Global_$_getGlobal();
		
		if (nsStr) {
			switch(typeof(base)) {
				case 'object':
					ns = base;
					break;
				case 'string':
					ns = Namespace.get(base);
					break;
//				case 'undefined':
//					return (new Function('return ' + nsStr + ';'))();
				default:
					break;
			}
			if (ns) {
				var nsStr = nsStr.split('.');
				for (var i = 0, l = nsStr.length; i < l; i++) {
					var word = nsStr[i];
					if (!ns[word]) {
						if (isCreate) {
							ns[word] = i < l - 1 ? {} : object;
						} else {
							ns = undef;
							break;
						}
					}
					ns = ns[word];
				}
			}
		} else {
			ns = undef;
		}
		
		return ns;
	},
	
	/**
	 * 声明包结构中的类的快捷方式
	 * @method js_$_util_$_Namespace.use
	 * @static
	 * 
	 * 已存在去重判断
	 * 别名声明
	 * 通配符匹配*
	 * 
	 * @param {String} ns 命名空间串，指定一个已存在的类或包
	 * @param {Object} target 目标命名空间，默认：window
	 * @param {String} alias 别名，如不传入，则默认为类名
	 * 
	 * @return {void}
	 */
	use: function (ns, target, alias) {
		var target = target || js_$_util_$_Global_$_getGlobal();
		var className = ns.match(/(?:^|\.)([\w\$]+|\*)$/)[1];
		var Namespace = js_$_util_$_Namespace;
		
		if (className == '*') {
			var baseName = ns.slice(0, -2);
			var baseNs = Namespace.get(baseName);
			for (var i in baseNs) {
				if (i != 'prototype') {
					Namespace.use(baseName + '.' + i, target);
				}
			}
		} else {
			className = alias || className;
			if (!target[className]) {
				target[className] = Namespace.get(ns);
			}
		}
	}
};

/*!
 * elf JavaScript Library Shell
 * 
 * Copyright (c) since 2010. All rights reserved.
 * 
 * Author: mytharcher <mytharcher@gmail.com>
 */

/*
 * create:
 * @2010-2-27 by mytharcher
 * 
 * update:
 * @2010-11-17 by mytharcher
 * @2010-11-26 by mytharcher
 * @2010-12-19 by mytharcher:
 * 		[m] Change all mechanism of Shortcut.
 * @2010-12-21 by mytharcher:
 * 		[m] Simplify the Shortcut dispatch invoke.
 * @2011-04-12 by mytharcher:
 * 		[m] Divide the base library and the shortcut part to two projects.
 */



var elf = elf || js_$_util_$_Shortcut.create();

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



elf.Ajax = js_$_net_$_Ajax;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 By mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_client_$_Browser类提供简短的命名空间elf.Browser
 */
elf.Browser = js_$_client_$_Browser;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_util_$_Class类提供简短的命名空间elf.Class
 */
elf.Class = js_$_util_$_Class;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-01-17 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_dom_$_ClassName类提供简短的命名空间elf.ClassName
 */
elf.ClassName = js_$_dom_$_ClassName;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-16 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_dom_$_Cookie类提供简短的命名空间elf.Cookie
 */
elf.Cookie = js_$_dom_$_Cookie;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 * @2011-12-24 by mytharcher
 */



/**
 * 对js_$_dom_$_Drag类提供简短的命名空间elf.Drag;
 */
elf.Drag = js_$_dom_$_Drag;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_transition_$_Easing类提供简短的命名空间elf.Easing
 */
elf.Easing = js_$_transition_$_Easing;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_text_$_Escaper类提供简短的命名空间elf.Escaper
 */
elf.Escaper = js_$_text_$_Escaper;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_dom_$_Event类提供简短的命名空间elf.Event
 */
elf.Event = js_$_dom_$_Event;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_text_$_Formatter类提供简短的命名空间elf.Formatter
 */
elf.Formatter = js_$_text_$_Formatter;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_util_$_Global类提供简短的命名空间elf.Global
 */
elf.Global = js_$_util_$_Global;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_util_$_Hash类提供简短的命名空间elf.Hash
 */
elf.Hash = js_$_util_$_Hash;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_util_$_Namespace类提供简短的命名空间elf.Namespace
 */
elf.Namespace = js_$_util_$_Namespace;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_dom_$_Node类提供简短的命名空间elf.Node
 */
elf.Node = js_$_dom_$_Node;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_util_$_Shortcut类提供简短的命名空间elf.Shortcut
 */
elf.Shortcut = js_$_util_$_Shortcut;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_dom_$_Stage类提供简短的命名空间elf.Stage
 */
elf.Stage = js_$_dom_$_Stage;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_dom_$_Style类提供简短的命名空间elf.Style
 */
elf.Style = js_$_dom_$_Style;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-01-17 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_text_$_Template类提供简短的命名空间elf.Template
 */
elf.Template = js_$_text_$_Template;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-01-17 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_transition_$_Timeline类提供简短的命名空间elf.Timeline
 */
elf.Timeline = js_$_transition_$_Timeline;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-01-17 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_dom_$_Tween类提供简短的命名空间elf.Tween
 */
elf.Tween = js_$_dom_$_Tween;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_util_$_Type类提供简短的命名空间elf.Type
 */
elf.Type = js_$_util_$_Type;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_net_$_URL类提供简短的命名空间elf.URL
 */
elf.URL = js_$_net_$_URL;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_net_$_URLParameter类提供简短的命名空间elf.URLParameter
 */
elf.URLParameter = js_$_net_$_URLParameter;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-13 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_text_$_WordString类提供简短的命名空间elf.WordString
 */
elf.WordString = js_$_text_$_WordString;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-19 by mytharcher
 * 
 * update:
 * @2011-05-25 by mytharcher
 */



/**
 * 对js_$_util_$_XArray类提供简短的命名空间elf.XArray
 */
elf.XArray = js_$_util_$_XArray;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-19 By mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, js_$_client_$_Browser);



//elf().Chrome = js_$_client_$_Browser.Chrome;

/*
 * elf JavaScript Library
 * 
 * create: 
 * @2010-12-19 by mytharcher
 * 
 * update:
 */




js_$_util_$_Shortcut.use(elf, {
	clone: js_$_util_$_Class.clone,
	copy: js_$_util_$_Class.copy,
	mix: js_$_util_$_Class.mix,
	Class: js_$_util_$_Class.create,
	inherit: js_$_util_$_Class.inherit,
	implement: js_$_util_$_Class.implement
});



//elf().Class = js_$_util_$_Class.create;



//elf().Firefox = js_$_client_$_Browser.Firefox;



//elf().IE = js_$_client_$_Browser.IE;



//elf().Opera = js_$_client_$_Browser.Opera;



//elf().Safari = js_$_client_$_Browser.Safari;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-20 By mytharcher
 * 
 * update:
 * 
 */



js_$_util_$_Shortcut.use(elf, js_$_util_$_Global);



//elf()._STAMP = js_$_util_$_Global_$__STAMP;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-01-17 By mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, {
	getClass: js_$_dom_$_ClassName.get,
	addClass: js_$_dom_$_ClassName.add,
	removeClass: js_$_dom_$_ClassName.remove,
	hasClass: js_$_dom_$_ClassName.has,
	toggleClass: js_$_dom_$_ClassName.toggle
});



//elf().addClass = js_$_dom_$_ClassName.add;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2012-02-04 By mytharcher
 * 
 * update:
 */



elf().ajax = js_$_net_$_Ajax.request;



//elf().ajax = js_$_net_$_Ajax.request;

//import elf.~shortcut.util.Class;

//elf().clone = js_$_util_$_Class.clone;



//elf().copy = js_$_util_$_Class.copy;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-01-17 by mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, js_$_util_$_XArray);



//elf().distinct = js_$_util_$_XArray.distinct;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-24 By mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, {
	getPosition: js_$_dom_$_BoxModel.getPosition,
	isDisplaying: js_$_dom_$_BoxModel.isDisplaying
});

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-17 By mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, {
	getCookie: js_$_dom_$_Cookie.get,
	setCookie: js_$_dom_$_Cookie.set,
	removeCookie: js_$_dom_$_Cookie.remove
});

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-09-29 By mytharcher
 * 
 * update:
 * @2011-12-24 By mytharcher
 */



js_$_util_$_Shortcut.use(elf, {
	draggable: js_$_dom_$_Drag.attach
});

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-24 By mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, {
	addEventListener: js_$_dom_$_Event.add,
	removeEventListener: js_$_dom_$_Event.remove,
	on: js_$_dom_$_Event.add,
	un: js_$_dom_$_Event.remove
});

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-19 By mytharcher
 * 
 * update:
 * @2011-01-10 By mytharcher
 * 		[m] Use 'g' instead 'get' method.
 * @2011-12-24 By mytharcher
 */





js_$_util_$_Shortcut.use(elf, {
	ready: js_$_dom_$_Stage_$_ready,
	g: js_$_dom_$_Stage_$_get,
	mark: js_$_dom_$_Stage_$_mark,
	getNextHighestDepth: js_$_dom_$_Stage_$_getNextHighestDepth,
	evalScript: js_$_dom_$_Stage_$_evalScript
});

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-18 By mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, {
	setStyle: js_$_dom_$_Style.set,
	getStyle: js_$_dom_$_Style.get,
	setCSSText: js_$_dom_$_Style.setCSSText
});

/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-11-10 By mytharcher
 * 
 * update:
 * @2011-12-24 By mytharcher
 */



js_$_util_$_Shortcut.use(elf, {
	tween: js_$_dom_$_Tween.start
});



//elf().draggable = js_$_dom_$_Drag.attach;



//elf().evalScript = js_$_dom_$_Stage_$_evalScript;



//elf().g = js_$_dom_$_Stage_$_get;



//elf().getClass = js_$_dom_$_ClassName.get;



//elf().getPosition = js_$_dom_$_BoxModel.getPosition;



//elf().getStyle = js_$_dom_$_Style.get;



//elf().guid = js_$_util_$_Global_$_guid;



//elf().hasClass = js_$_dom_$_ClassName.has;



//elf().implement = js_$_util_$_Class.implement;



//elf().inherit = js_$_util_$_Class.inherit;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-19 by mytharcher
 * 
 * update:
 */




js_$_util_$_Shortcut.use(elf, js_$_util_$_Type, function (key) {
	return ({extension: false, extend: false, of: false})[key];
});

js_$_util_$_Shortcut.use(elf, {typeOf: js_$_util_$_Type.of});




//elf().isArray = js_$_util_$_Type.isArray;



//elf().isBoolean = js_$_util_$_Type.isBoolean;



//elf().isDate = js_$_util_$_Type.isDate;



//elf().isDefined = js_$_util_$_Type.isDefined;



//elf().isDocument = js_$_util_$_Type.isDocument;



//elf().isElement = js_$_util_$_Type.isElement;



//elf().isFunction = js_$_util_$_Type.isFunction;



//elf().isNaN = js_$_util_$_Type.isNaN;



//elf().isNull = js_$_util_$_Type.isNull;



//elf().isNumber = js_$_util_$_Type.isNumber;



//elf().isObject = js_$_util_$_Type.isObject;



//elf().isRegExp = js_$_util_$_Type.isRegExp;



//elf().isString = js_$_util_$_Type.isString;



//elf().isUndefined = js_$_util_$_Type.isUndefined;



//elf().isWindow = js_$_util_$_Type.isWindow;



//elf().mark = js_$_dom_$_Stage_$_mark;



//elf().mix = js_$_util_$_Class.mix;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-19 by mytharcher
 * 
 * update:
 */




js_$_util_$_Shortcut.use(elf, {
	namespace: js_$_util_$_Namespace.get,
	using: js_$_util_$_Namespace.using
});



//elf().namespace = js_$_util_$_Namespace.get;



//elf().noop = js_$_util_$_Global_$_noop;



//elf().on = js_$_dom_$_Event.add;



//elf().ready = js_$_dom_$_Stage_$_ready;



//elf().removeClass = js_$_dom_$_ClassName.remove;



//elf().removeCookie = js_$_dom_$_Cookie.remove;



//elf().setCSSText = js_$_dom_$_Style.setCSSText;



//elf().setStyle = js_$_dom_$_Style.set;



//elf().stamp = js_$_util_$_Global_$_stamp;

/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-02-13 by mytharcher
 * 
 * update:
 */



js_$_util_$_Shortcut.use(elf, {
	template: js_$_text_$_Template.format
});



//elf().template = js_$_text_$_Template.format;



//elf().toArray = js_$_util_$_XArray.toArray;



//elf().toXArray = js_$_util_$_XArray.toXArray;



//elf().toggleClass = js_$_dom_$_ClassName.toggle;



//elf().tween = js_$_dom_$_Tween.start;




//elf().typeOf = js_$_util_$_Type.of;



//elf().un = js_$_dom_$_Event.remove;



//elf().using = js_$_util_$_Namespace.use;

/*
 * elf JavaScript Library
 * 
 * create: 
 * @2010-12-10 by mytharcher
 * 
 * update:
 */




/**
 * @ignore
 * 给快捷处理添加转化为扩展数组的处理方式
 */
js_$_util_$_Shortcut.intercept(elf, js_$_util_$_Type.ARRAY, js_$_util_$_XArray.toXArray);

/*
 * elf JavaScript Library
 * 
 * create: 
 * @2011-02-05 by mytharcher
 * 
 * update:
 */




/**
 * @class js_$_util_$_Shortcut
 */

/**
 * @ignore
 * 给快捷处理添加元素处理方式
 */
js_$_util_$_Shortcut.intercept(elf, js_$_util_$_Type.DOCUMENT, js_$_dom_$_Node);

/*
 * elf JavaScript Library
 * 
 * create: 
 * @2010-12-10 by mytharcher
 * 
 * update:
 */




/**
 * @class js_$_util_$_Shortcut
 */

/**
 * @ignore
 * 给快捷处理添加元素处理方式
 */
js_$_util_$_Shortcut.intercept(elf, js_$_util_$_Type.ELEMENT, js_$_dom_$_Node);

/*
 * elf JavaScript Library
 * 
 * create: 
 * @2010-12-10 by mytharcher
 * 
 * update:
 */



/**
 * @ignore
 * 给快捷处理添加函数处理方式
 */
js_$_util_$_Shortcut.intercept(elf, js_$_util_$_Type.FUNCTION, js_$_dom_$_Stage_$_ready);

/*
 * elf JavaScript Library
 * 
 * create: 
 * @2010-12-10 by mytharcher
 * 
 * update:
 */



/**
 * @class js_$_util_$_Shortcut
 */

/**
 * @ignore
 * 给快捷处理添加元素处理方式
 */
js_$_util_$_Shortcut.intercept(elf, js_$_util_$_Type.STRING, js_$_dom_$_Node);

/*
 * elf JavaScript Library
 * 
 * create: 
 * @2011-02-05 by mytharcher
 * 
 * update:
 */




/**
 * @class js_$_util_$_Shortcut
 */

/**
 * @ignore
 * 给快捷处理添加元素处理方式
 */
js_$_util_$_Shortcut.intercept(elf, js_$_util_$_Type.WINDOW, js_$_dom_$_Node);

	var packages = {js:{"client":{"Browser":js_$_client_$_Browser,"Features":{"scriptEval":js_$_client_$_Features_$_scriptEval}},"dom":{"Attribute":js_$_dom_$_Attribute,"BoxModel":js_$_dom_$_BoxModel,"ClassName":js_$_dom_$_ClassName,"Cookie":js_$_dom_$_Cookie,"Drag":js_$_dom_$_Drag,"Event":js_$_dom_$_Event,"INodeAttribute":js_$_dom_$_INodeAttribute,"INodeBoxModel":js_$_dom_$_INodeBoxModel,"INodeClassName":js_$_dom_$_INodeClassName,"INodeEvent":js_$_dom_$_INodeEvent,"INodeOperation":js_$_dom_$_INodeOperation,"INodeRelation":js_$_dom_$_INodeRelation,"INodeStyle":js_$_dom_$_INodeStyle,"INodeTween":js_$_dom_$_INodeTween,"MouseTracker":js_$_dom_$_MouseTracker,"Node":js_$_dom_$_Node,"NodeInterfaceFactory":js_$_dom_$_NodeInterfaceFactory,"Operation":js_$_dom_$_Operation,"Relation":js_$_dom_$_Relation,"Selector":js_$_dom_$_Selector,"Stage":{"evalScript":js_$_dom_$_Stage_$_evalScript,"get":js_$_dom_$_Stage_$_get,"getDocument":js_$_dom_$_Stage_$_getDocument,"getDocumentElement":js_$_dom_$_Stage_$_getDocumentElement,"getNextHighestDepth":js_$_dom_$_Stage_$_getNextHighestDepth,"loadScript":js_$_dom_$_Stage_$_loadScript,"loadStyle":js_$_dom_$_Stage_$_loadStyle,"mark":js_$_dom_$_Stage_$_mark,"ready":js_$_dom_$_Stage_$_ready},"Style":js_$_dom_$_Style,"Traversal":{"bfs":js_$_dom_$_Traversal_$_bfs,"dfs":js_$_dom_$_Traversal_$_dfs,"up":js_$_dom_$_Traversal_$_up},"Tween":js_$_dom_$_Tween},"net":{"Ajax":js_$_net_$_Ajax,"URL":js_$_net_$_URL,"URLParameter":js_$_net_$_URLParameter},"text":{"Encoder":{"encodeHTML":js_$_text_$_Encoder_$_encodeHTML},"Escaper":{"escapeQuote":js_$_text_$_Escaper_$_escapeQuote,"escapeReg":js_$_text_$_Escaper_$_escapeReg},"Formatter":js_$_text_$_Formatter,"JSONParserFactory":js_$_text_$_JSONParserFactory,"Template":js_$_text_$_Template,"WordString":js_$_text_$_WordString},"transition":{"Easing":{"cos":js_$_transition_$_Easing_$_cos,"linear":js_$_transition_$_Easing_$_linear,"quadIn":js_$_transition_$_Easing_$_quadIn,"quadInAndOut":js_$_transition_$_Easing_$_quadInAndOut,"quadOut":js_$_transition_$_Easing_$_quadOut,"sin":js_$_transition_$_Easing_$_sin},"Timeline":js_$_transition_$_Timeline},"util":{"Class":js_$_util_$_Class,"EventDispatcher":js_$_util_$_EventDispatcher,"EventObject":js_$_util_$_EventObject,"Global":{"_STAMP":js_$_util_$_Global_$__STAMP,"getGlobal":js_$_util_$_Global_$_getGlobal,"guid":js_$_util_$_Global_$_guid,"noop":js_$_util_$_Global_$_noop,"stamp":js_$_util_$_Global_$_stamp},"Hash":js_$_util_$_Hash,"IEventDispatcher":js_$_util_$_IEventDispatcher,"InterfaceFactory":js_$_util_$_InterfaceFactory,"Namespace":js_$_util_$_Namespace,"Processor":js_$_util_$_Processor,"Set":js_$_util_$_Set,"Shortcut":js_$_util_$_Shortcut,"Type":js_$_util_$_Type,"XArray":js_$_util_$_XArray}},elf:elf};
	host['js'] = packages['js'];
	b6c4bc85(packages['elf'], packages['js']);
	host['elf'] = packages['elf'];
})(this);