<!-- 博客分类列表 -->
<div id="BlogMain" class="layout-content-main">
	<ul id="BlogContent">
	{% for post in list limit 10 %}
		<li class="blog-item">
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			{% include blog/meta.tpl %}
			{% if forloop.index == 1 %}
			<div class="doc-content">
			{{ post.content }}
			</div>
			{% endif %}
		</li>
	{% endfor %}
	</ul>
</div>