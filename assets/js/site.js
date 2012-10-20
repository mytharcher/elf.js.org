var site = {
	lib: {},
	
	common: {
		InitMap: {
			home: function () {
				elf('#Preview input[type=radio]').on('click', function (ev) {
					elf().g('DownloadButton').setAttribute('href', this.value);
				});
			},
			
			blog: function () {
				elf('#BlogSide').scrollFollow({
					side: 'right',
					sideOffset: 0,
					marginTop: 10,
					referId: 'BlogMain',
					wrapId: 'MainBody'
				});
			},
			
			post: function () {
				elf().loadScript('http://elfjs.disqus.com/embed.js', {});
			},
			
			list: function () {
				elf('#BlogList>.blog-item>h2').on('click', function (ev) {
					var target = ev.target,
						item = elf(target).parent();
					if (target.nodeName != 'A' && item.attr('data-loaded') != 1) {
						elf().ajax({
							url: target.firstChild.getAttribute('href'),
							onsuccess: function (response) {
								var content = response.split('<p class="blog-meta">')[1].split('</p>');
								content.shift();
								content = content.join('</p>').split(/<\/div>\s*<div id="disqus_thread" class="doc-comments">/)[0];
								item.query('>div.doc-content').html(content);
								item.attr('data-loaded', 1);
							}
						});
					}
					target = null;
				});
			},
			
			docs: function () {
				var toc = elf().g('markdown-toc');
				var scrollDelay = toc ? 800 : 0;
				if (toc) {
					var tocWrap = elf('#DocToc div.doc-toc');
					tocWrap.append(toc);
					tocWrap.setStyle('height', toc.offsetHeight + 'px');
					
					toc = tocWrap = null;
				}
				/*
				elf().on('DocToc', 'mouseover', function (ev) {
					elf().addClass('DocToc', 'expand');
				});
				
				elf().on('DocToc', 'mouseout', function (ev) {
					elf().removeClass('DocToc', 'expand');
				});
				*/
				// elf(window).on('scroll', scrolling), scrolling();
				
				setTimeout(function () {
					elf('#DocToc').scrollFollow({
						side: 'left',
						sideOffset: 20,
						marginTop: 10,
						referId: 'DocContent',
						wrapId: 'MainBody'
					});
				}, scrollDelay);
				
				
				elf().on('MainBody', 'dblclick', function (ev) {
					elf().toggleClass(this, 'doc-collapse-menu');
					ev.preventDefault();
					return false;
				});
			},
			
			search: function () {
				js.dom.Stage.loadScript('http://www.google.com/jsapi', {
					onLoad: function () {
						google.load('search', '1', {
							language: 'zh-CN',
							style: google.loader.themes.V2_DEFAULT,
							callback: function() {
								var customSearchControl = new google.search.CustomSearchControl('000346898720731947188:hhdkdilmh1o', {});
								customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
								
								var options = new google.search.DrawOptions();
								options.setAutoComplete(true);
								customSearchControl.draw('cse', options);
								
								var url = new js.net.URL(location);
								var query = url.getParameter('q');
								if (query) {
									document.title = elf().template(site.common.Text.TPL_SEARCH_TITLE, query);
									customSearchControl.execute(query);
								}
							}
						});
					}
				});
			},
			
			demo: function () {
				elf('#box').html('Hello world!').css({
					textAlign: 'center'
				}).tween({
					property: {fontSize: {to: 200, unit: '%'}}
				}).on('click', function (ev) {
					elf('#box').tween({
						property: {width: {from: 100, to: 40, unit: '%'}},
						oncomplete: function () {
							elf('#source').css({
								display: 'block',
								opacity: 0
							}).tween({
								property: {
									opacity: {to: 1},
									width: {to: 60, unit: '%'}
								}
							});
						}
					});
				});
			}
		},
		
		Text: {
			TPL_SEARCH_TITLE: 'elf+js: 搜索 / #{0}'
		}
	}
};

site.lib.ScrollFollow = elf().Class({
	constructor: function (node, args) {
		this.node = node;
		elf().copy(args, this);
		var boundle = this._handler.bind(this);
		elf(window).on('scroll', boundle);
		elf(window).on('resize', boundle);
		this._handler();
	},
	
	getDocumentElement: function () {
		return elf().Chrome || elf().Safari ? document.body : document.documentElement;
	},
	
	getScrollTop: function () {
		return this.getDocumentElement().scrollTop;
	},
	
	getStartTop: function () {
		return this.node.getPosition(this.getDocumentElement()).y;
	},
	
	getOriginTop: function () {
		return typeof this.originTop != 'undefined' ? this.originTop
			: (this.originTop = this.node.getPosition(this.getDocumentElement()).y
			- elf().getPosition(elf().g(this.wrapId), this.getDocumentElement()).y);
	},
	
	getFollowingBottom: function () {
		var content = elf().g(this.referId);
		return (content.offsetHeight
			+ elf().getPosition(elf().g(this.referId), this.getDocumentElement()).y
			- elf().getPosition(elf().g(this.wrapId), this.getDocumentElement()).y
			- this.getFollowingHeight());
	},
	
	getFollowingAbsBottom: function () {
		var content = elf().g(this.referId);
		return elf().getPosition(content, this.getDocumentElement()).y + content.offsetHeight;
	},
	
	getFollowingHeight: function () {
		return this.node[0].offsetHeight;
	},
	
	getFollowingWidth: function () {
		return this.node[0].offsetWidth;
	},
	
	getFollowingMargin: function () {
		return 0;
	},
	
	getContentWidth: function () {
		return elf().g(this.wrapId).offsetWidth;
	},
	
	sideMap: {
		left: -1,
		right: 1
	},
	
	_handler: function (ev) {
		var scrollTop = this.getScrollTop();
		var startTop = typeof this.startTop != 'undefined' ?
			this.startTop :
			(this.startTop = this.getStartTop());
		var originTop = this.getOriginTop();
		var followingBottom = this.followingBottom = this.getFollowingAbsBottom();
		var followingWidth = this.followingWidth || (this.followingWidth = this.getFollowingWidth());
		var followingHeight = this.followingHeight || (this.followingHeight = this.getFollowingHeight());
		var followingMargin = this.followingMargin || (this.followingMargin = this.getFollowingMargin());
		var docElem = this.getDocumentElement();
		var pageWidth = docElem.offsetWidth;
		var contentWidth = this.contentWidth || (this.contentWidth = this.getContentWidth());
		var side = this.sideMap[this.side];
		var props = {};
		if (scrollTop >= startTop - this.marginTop) {
			if (followingBottom < scrollTop + followingHeight + this.marginTop) {
				elf().mix(props, {position: 'absolute', top: this.getFollowingBottom() + 'px'});
				props[this.side] = '';
			} else {
				props.position = 'fixed';
				props.top = this.marginTop + 'px';
				var screenSub = pageWidth - contentWidth;
				var sideOffset = Math.max(0, screenSub) / 2 + (this.sideOffset + docElem.scrollLeft * side);
				if (pageWidth < contentWidth && side > 0) {
					sideOffset += screenSub;
				}
				props[this.side] = sideOffset + 'px';
			}
		} else {
			props.position = 'absolute';
			props.top = originTop + 'px';
			props[this.side] = this.sideOffset + 'px';
		}
		props && this.node.css(props);
	}
});

elf().implement(js.dom.Node, {
	scrollFollow: function (options) {
		this.scrollFollow = new site.lib.ScrollFollow(this, options);
	}
});

elf(function () {
	var nav = (new elf.net.URL(location)).getPath().match(/^\/([\w\.-]+\/|\/$)/);
	if (nav) {
		elf('#Header div.layout-aside li').forEach(function (node) {
			if (node.firstChild.getAttribute('href') == nav[0]) {
				elf().addClass(node, 'current');
			}
		});
	}
	
	elf('pre').forEach(function (item) {
		hljs.highlightBlock(item);
	});
	
	var module = elf().g('MainPage').className.replace(/page-type-/g, '').split(' ');
	module.forEach(function (item) {
		var initer = site.common.InitMap[item];
		initer && initer();
	});
	
	elf('a.email-link').forEach(function (item) {
		var email = elf(item).text().replace('[at]', '@').replace('[dot]', '.');
		item.href = 'mailto:' + email;
		item.innerHTML = email;
	});
});
