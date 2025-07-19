---
layout: default
title: 首页
---

# 📚 我的技术学习笔记

专注于AI、数据库、系统架构等技术领域的学习记录。

## 📊 笔记统计

<div class="stats-grid">
  <div class="stat-item">
    <h3>{{ site.categories.agent | size }}</h3>
    <p>Agent笔记</p>
  </div>
  <div class="stat-item">
    <h3>{{ site.categories.rag | size }}</h3>
    <p>RAG笔记</p>
  </div>
  <div class="stat-item">
    <h3>{{ site.posts | size }}</h3>
    <p>总笔记数</p>
  </div>
</div>

## 🔥 最新笔记

{% for post in site.posts limit:8 %}
<div class="post-preview">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <div class="post-meta">
    <span class="category">📁 {{ post.categories | first }}</span>
    <span class="date">📅 {{ post.date | date: "%Y-%m-%d" }}</span>
  </div>
  <p>{{ post.content | strip_html | truncatewords: 30 }}</p>
</div>
{% endfor %}

## 📂 笔记分类

<div class="category-grid">
  <a href="{{ '/agent/' | relative_url }}" class="category-card">
    <h3>🤖 Agent</h3>
    <p>{{ site.categories.agent | size }} 篇笔记</p>
    <span>智能代理、多Agent系统、Agentic RAG等</span>
  </a>
  
  <a href="{{ '/rag/' | relative_url }}" class="category-card">
    <h3>📚 RAG</h3>
    <p>{{ site.categories.rag | size }} 篇笔记</p>
    <span>检索增强生成、向量数据库、知识库构建</span>
  </a>
  
  <a href="{{ '/archives/' | relative_url }}" class="category-card">
    <h3>📝 其他笔记</h3>
    <p>{{ site.posts | size | minus: site.categories.agent.size | minus: site.categories.rag.size }} 篇笔记</p>
    <span>知识图谱、数据库、系统架构等</span>
  </a>
</div>

---

*📊 最后更新：{{ site.time | date: "%Y年%m月%d日 %H:%M" }}*


