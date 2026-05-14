---
title: Lab
kicker: Browser-runnable experiments
lede: Public toy experiments and browser-runnable numerical demos.
permalink: /lab/
---

{% assign lab_pages = site.pages | where_exp: "entry", "entry.url != page.url and entry.url != '/lab/' and entry.url contains '/lab/'" | sort: "title" %}

The Lab collects small numerical and systems-oriented experiments that run in the browser. These are toy demonstrations and inspection aids, not performance claims.

## Current direction

The emphasis is on compact, inspectable experiments: numerical toy problems, floating-point behavior, and static browser demos that are easy to run and easy to reason about.

## Published experiments

{% if lab_pages.size > 0 %}
<div class="list-grid">
	{% for entry in lab_pages %}
		<article class="list-card">
			<h2><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></h2>
			{% if entry.kicker %}<p class="small-note">{{ entry.kicker }}</p>{% endif %}
			<p>{{ entry.lede | default: entry.summary | default: "A browser-runnable experiment in scientific software and numerical computing." }}</p>
		</article>
	{% endfor %}
</div>
{% else %}
<p class="status-note">No Lab pages are currently published.</p>
{% endif %}
