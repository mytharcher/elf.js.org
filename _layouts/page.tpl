<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="author" content="{{ page.author }}" />
<meta name="keywords" content="{{ page.tags | join: ',' }}" />
<meta name="google-site-verification" content="RylW_eYZwk85sTyPMVT0Rw1yBeplLJEEuL1Z6WDKcq0" />
<meta name="baidu-tc-verification" content="6090c58a8b2b73e1c4820cd2aa2aa9a5" />
<title>elf+js: {% if page.trace %}{{ page.trace }}{% else %}{{ page.title }}{% endif %}</title>
<link rel="stylesheet" type="text/css" href="/assets/css/site.css" />
{% for style in page.styles %}<link rel="stylesheet" type="text/css" href="{{ style }}" />
{% endfor %}
{% if page.feed %}
<link href="{{ page.feed }}" rel="alternate" title="elf+js Blog" type="application/atom+xml" />
{% endif %}
</head>

<body>

<div id="Holder">
	<div id="MainPage" class="{{ page.pageClass }}">
		<div id="Header">
			<div class="layout-section">
				<div class="logo"><a href="http://elfjs.com/"><img src="/assets/img/logo{{ page.logoType }}.png" alt="elf+js" title="体验愉悦的JavaScript开发" /></a></div>
				<div class="additional">{% if page.traceHTML %}{{ page.traceHTML }}{% else %}{{ page.title }}{% endif %}</div>
			</div>
			<div class="layout-aside">
				<ul>
					<li><a href="/">首页</a></li>
					<li><a href="/downloads/">下载</a></li>
					<li><a href="/docs/">文档</a></li>
					<li><a href="/blog/">博客</a></li>
				</ul>
			</div>
		</div>
		
		<div id="MainBody" class="{{page.mainClass}}">{{ content }}</div>
		
		<div id="Footer">
			<p>该项目所有代码使用<a href="http://github.com/elfjs/" target="_blank">github</a>托管，并以<a href="/LICENSE" target="_blank">MIT协议</a>授权许可。[<a href="/docs/develop/contributor.html">贡献者</a>]</p>
			<p>&copy; Since 2011 <a href="http://elfjs.com/">elfjs.com</a> | <a href="http://groups.google.com/group/elfjs" target="_blank">Google Group</a> | <a href="#" class="email-link">elfjs<span class="symbol">[at]</span>googlegroups<span class="symbol">[dot]</span>com</a></p>
		</div>
	</div>
</div>

<script src="http://elfjs.qiniudn.com/code/elf-0.5.0.min.js"></script>
<script src="/assets/js/site.js"></script>
{% for script in page.scripts %}<script src="{{ script }}"></script>
{% endfor %}

<div style="display:none">
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fc721ec118ef865ee41646415bc0e9734' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27954937-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
</div>

</body>
</html>
