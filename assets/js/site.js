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
				elf('pre').forEach(function (item) {
					hljs.highlightBlock(item);
				});
				
				elf('#BlogSide').scrollFollow({
					side: 'right',
					sideOffset: 0,
					marginTop: 10,
					referId: 'BlogMain',
					wrapId: 'MainBody'
				});
			},
			
			docs: function () {
				elf('pre').forEach(function (item) {
					hljs.highlightBlock(item);
				});
				
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
			}
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
		var followingBottom = this.followingBottom || (this.followingBottom = this.getFollowingAbsBottom());
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
