---
layout: content

pageClass: page-type-content page-type-blog page-type-post

traceHTML: |
    / <a href="/blog/">博客</a> <span class="sub-path">/ 查看文章</span>
---

{% include blog/side.tpl %}

<div id="BlogMain" class="layout-content-main">
	<div id="BlogContent" class="doc-content">
    	<h1><a href="{{ page.url }}">{{ page.title }}</a></h1>
		{% assign post = page %}
		{% include blog/meta.tpl %}
		{{ content }}
		{% capture permaurl %}http://{{site.host}}{{ page.url }}{% endcapture %}
		<!--<p class="blog-permalink">永久链接：<a href="{{ permaurl }}">{{ permaurl }}</a></p>-->
	</div>
	<div id="disqus_thread" class="doc-comments"></div>
</div>
