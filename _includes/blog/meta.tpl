{% for author in site.meta.authors %}
	{% if author.name == post.author %}
		{% assign curAuthor = author %}
	{% endif %}
{% endfor %}
<p class="blog-meta">
	{% if curAuthor %}<a href="/docs/develop/contributor.html#{{ post.author }}" class="author"><img alt="{{ post.author }}" src="{{ site.meta.gravatar.base }}{{ curAuthor.gravatar }}{{ site.meta.gravatar.param }}20" width="20" height="20" />{{ post.author }}</a>{% else %}elf+js team{% endif %}
	post on <span class="datetime">{{ post.date | date: "%Y-%m-%d" }}</span>
	in [<a href="/blog/{{ post.category }}/" class="category">{{ site.modules.blog[post.category] }}</a>]
</p>