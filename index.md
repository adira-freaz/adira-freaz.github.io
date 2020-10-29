---
layout: slideshow
title: Home
extra_css:
- slideshow
js_file:
- slideshow

---


<div class="slideshow-container">
			<span class="mySlides fade">
					<picture>
					<source media="(min-width: 1001px)" srcset="{{ site.base_url }}/assets/images/home/perumahan-subang-jaya-lestari-baru-1.jpg" alt="perumahan-subang-jaya-lestari-baru-1" class="slideshow-content" width="1920" height="911">
					<source media="(max-width: 1000px)" srcset="{{ site.base_url }}/assets/images/home/perumahan-subang-jaya-lestari-baru-1-mobile.jpg" alt="perumahan-subang-jaya-lestari-baru-1-mobile" class="slideshow-content">
					<img src="{{ site.base_url }}/assets/images/home/perumahan-subang-jaya-lestari-baru-1.jpg" alt="perumahan-subang-jaya-lestari-baru-1-placeholder" class="slideshow-content" width="1920" height="911" />
					</picture>
				</span>
		{% for image in site.static_files %}
			{% if image.path contains 'images/home' %}
				{% unless image.basename contains 'mobile' or image.basename contains 'placeholder' %}
				<span class="mySlides fade">
					<picture>
					<source media="(min-width: 1001px)" srcset="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" class="slideshow-content" width="1920" height="911" style="display:none;">
					<source media="(max-width: 1000px)" srcset="{{ site.base_url }}{{ image.path | remove:'.jpg' }}-mobile.jpg" alt="{{ image.basename | replace:'-', ' ' }} mobile" class="slideshow-content" style="display:none;">
					<img src="{{ site.base_url }}{{ image.path | remove:'.jpg' }}.jpg" alt="{{ image.basename | replace:'-', ' ' }} placeholder" class="slideshow-content" width="1920" height="911" />
					</picture>
				</span>
				{% endunless %}
			{% endif %}
		{% endfor %}
</div>