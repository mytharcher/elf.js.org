{% for release in site.release.history %}
{% if release.version == version %}
{% assign current = release %}

{{ current.extract }}

你可以到项目的[下载页面](/downloads/)获取相关的发布代码，或者直接通过下面的链接来下载：

{% include downloads/links.md %}

### {{ version }}版本变更记录：

{{ current.changes }}

{% endif %}
{% endfor %}
