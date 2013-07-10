---
layout: blog-post
author: mytharcher
title: 更换CDN
category: introduction

tags: [CDN]
---

Google Code改变政策禁止把下载连接当做CDN来使用，导致之前用的CDN地址全部失效，造成基于elf+js的博客主题[SimpleGray](http://github.com/mytharcher/SimpleGray)发生js加载失败的问题。

特此更新所有下载链接到使用了[ORCA](http://orca.io/)加速的CDN服务器，今后下载和在线CDN都可以同时使用了。

示例地址如下：

* [http://cdn.elfjs.com/code/elf-0.4.1.js](http://cdn.elfjs.com/code/elf-0.4.1.js)
* [http://cdn.elfjs.com/code/elf-0.4.1-min.js](http://cdn.elfjs.com/code/elf-0.4.1-min.js)
