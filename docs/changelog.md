---
layout: doc
title:  变更记录
date:   2011-12-27

mainClass: doc-change-page

trace: 文档 / 变更记录
traceHTML: |
    / <a href="/docs/">文档</a>
    <span class="sub-path">/ <a href="/docs/changelog.html">变更记录</a></span>
---

* TOC
{:toc}

{% for version in site.release.history %}
## {{ version.version }}

发布日期：
:	{{ version.date }}
{% if version.extract %}
版本摘要：
:	{{ version.extract }}{% endif %}
{% if version.changes %}
功能变更列表：
:	
{{ version.changes }}{% endif %}
{% endfor %}

-EOF-