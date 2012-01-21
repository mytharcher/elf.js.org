---
layout: content

pageClass:  page-type-content page-type-docs
---

<div id="DocToc" class="layout-content-side">
	<div class="doc-menu">
		<h2><a href="#" title="点击回到顶部">内容目录</a></h2>
		<div class="doc-toc"></div>
	</div>
</div>
<div class="doc-main" title="双击隐藏/展开目录">
	<!--<form class="doc-search"><input type="search" name="keyword" placeholder="输入关键词按回车搜索" /></form>-->
	<div id="DocContent" class="doc-content">
		<h1>{{ page.title }}</h1>
		{{ content }}
	</div>
	<div id="disqus_thread" class="doc-comments"></div>
</div>