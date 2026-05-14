---
title: Lab
kicker: Browser-runnable experiments
lede: Public toy experiments and browser-runnable numerical demos.
permalink: /lab/
---

{% assign sorted_pages = site.pages | sort: "title" %}

The Lab collects small numerical and systems-oriented experiments that run in the browser. These are toy demonstrations and inspection aids, not performance claims.

## Current direction

The emphasis is on compact, inspectable experiments: numerical toy problems, floating-point behavior, and static browser demos that are easy to run and easy to reason about.

## Published experiments

{% assign has_lab_pages = false %}
{% for entry in sorted_pages %}
	{% if entry.url != page.url and entry.url != '/lab/' and entry.url contains '/lab/' %}
		{% assign has_lab_pages = true %}
		{% break %}
	{% endif %}
{% endfor %}

{% if has_lab_pages %}
<div class="list-grid">
	{% for entry in sorted_pages %}
		{% if entry.url != page.url and entry.url != '/lab/' and entry.url contains '/lab/' %}
			<article class="list-card">
				<h2><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></h2>
				{% if entry.kicker %}<p class="small-note">{{ entry.kicker }}</p>{% endif %}
				<p>{{ entry.lede | default: entry.summary | default: "A browser-runnable experiment in scientific software and numerical computing." }}</p>
			</article>
		{% endif %}
	{% endfor %}
</div>
{% else %}
<p class="status-note">No Lab pages are currently published.</p>
{% endif %}
