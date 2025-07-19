---
layout: page
title: 所有笔记
permalink: /archives/
---

# 📚 所有笔记归档

## 按分类浏览

### 🤖 Agent ({{ site.categories.agent | size }} 篇)
{% for post in site.categories.agent %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

### 📚 RAG ({{ site.categories.rag | size }} 篇)
{% for post in site.categories.rag %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

### 📝 其他笔记
{% for post in site.posts %}
  {% unless post.categories contains 'agent' or post.categories contains 'rag' %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%Y-%m-%d" }}
  {% endunless %}
{% endfor %}

## 按时间浏览

{% for post in site.posts %}
  {% assign current_year = post.date | date: "%Y" %}
  {% assign previous_year = post.previous.date | date: "%Y" %}
  
  {% if current_year != previous_year %}
### {{ current_year }}年
  {% endif %}
  
- {{ post.date | date: "%m-%d" }} [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
