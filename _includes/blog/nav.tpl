<div class="doc-menu blog-categories">
	<h2>分类目录</h2>
	<ul>
	<li class="all"><a href="/blog/">全部</a></li>
	{% for category in site.modules.blog.categories %}<li class="{{ category.name }}"><a href="/blog/{{ category.name }}/">{{ category.title }}</a></li>
	{% endfor %}
	</ul>
</div>