<!-- 博客分类列表 -->
<div id="BlogMain" class="layout-content-main">
	<div id="BlogList">
	{% for post in list limit 10 %}
		<div class="blog-item"{% if forloop.index == 1 %} data-loaded="1"{% endif %}>
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			{% include blog/meta.tpl %}
			<div class="doc-content">
			{% if forloop.index == 1 and preview %}
				{{ post.content }}
			{% endif %}
			</div>
		</div>
	{% endfor %}
	</div>
</div>