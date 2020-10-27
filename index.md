---
layout: slideshow
title: Home
extra_css:
- slideshow
js_file:
- slideshow

---


<div class="slideshow-container">
		{% for image in site.static_files %}
			{% if image.path contains 'images/home' %}
				{% unless image.basename contains 'mobile' or image.basename contains 'placeholder' %}
				<span class="mySlides fade">
					<picture>
					<source media="(min-width: 1001px)" srcset="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" class="slideshow-content" width="1920px" height="911px">
					<!-- <source media="(max-width: 1000px)" srcset="{{ site.base_url }}/assets/images/home/{{ image.basename }}-mobile.jpg" alt="{{ image.basename | replace:'-', ' ' }}" class="slideshow-content"> -->
					<img src="{{ site.base_url }}{{ image.path | remove:'.jpg' }}-placeholder.jpg" alt="{{ image.basename | replace:'-', ' ' }} placeholder" class="slideshow-content" width="1920px" height="911px" />
					</picture>
				</span>
				{% endunless %}
			{% endif %}
		{% endfor %}
</div>