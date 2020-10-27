---
layout: slideshow
title: Home
extra_css:
- main
- slideshow
js_file:
- slideshow
- dropdown

---


<div class="slideshow-container">
		{% for image in site.static_files %}
			{% if image.path contains 'images/home' %}
				{% unless image.basename contains 'mobile' %}
				<div class="mySlides fade">
					<picture>
					<source media="(min-width: 1001px)" srcset="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" class="slideshow-content" width="100vw" height="">
					<!-- <source media="(max-width: 1000px)" srcset="{{ site.base_url }}/assets/images/home/{{ image.basename }}-mobile.jpg" alt="{{ image.basename | replace:'-', ' ' }}" class="slideshow-content"> -->
					<img src="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" class="slideshow-content" width="100vw" height="" />
					</picture>
				</div>
				{% endunless %}
			{% endif %}
		{% endfor %}
</div>