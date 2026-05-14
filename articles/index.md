---
title: Self-Published Notes
kicker: Informal Technical Writing
lede: Informal self-published technical notes on HPC, scientific software, computational science, reproducibility, and related engineering practice. These are not peer-reviewed publications.
permalink: /articles/
---

{% assign ordered_articles = site.articles | sort: 'date' | reverse %}

{% if ordered_articles.size > 0 %}
<div class="list-grid">
  {% for article in ordered_articles %}
    <article class="list-card">
      <h2><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h2>
      <p class="small-note">{{ article.date | date: "%B %-d, %Y" }}{% if article.status %} · {{ article.status }}{% endif %}</p>
      <p>{{ article.summary }}</p>
    </article>
  {% endfor %}
</div>
{% else %}
<p class="status-note">No notes are currently published. Drafts can remain in the repository with <code>published: false</code> until they are ready to appear on the site.</p>
{% endif %}
