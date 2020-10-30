---
title: Perumahan Grand Cikampek
layout: content
extra_css:
- residential
---

<div class="brochure">
{% for image in site.static_files %}
    {% if image.path contains "images/residential/grand-cikampek" and image.basename contains "Brosur" %} 
        <img src="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}">
    {% endif %}
{% endfor %}
</div>

| Type  | Harga          | Uang Muka    | Maximal KPR    | Angsuran BTN                           |||
| ^^    | ^^             | ^^           | ^^             | 10 tahun     | 15 tahun     | 20 tahun   |
| ----- | -------------- | ------------ | -------------- | ------------ | ------------ | -----------|
| 27/60 | Rp.150,500,000 | Rp.7,525,000 | Rp.142,975,000 | Rp.1,516,500 | Rp.1,130,700 | Rp.943,600 |