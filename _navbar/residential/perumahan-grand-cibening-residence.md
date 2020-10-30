---
title: Perumahan Grand Cibening Residence
layout: content
extra_css:
- residential
---
<div class="brochure">
{% for image in site.static_files %}
    {% if image.path contains "images/residential/" and image.basename contains "Brosur" %} 
        <img src="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" width="395" height="295">
    {% endif %}
{% endfor %}
</div>

| Blok | Model   | Tipe    | Harga           |
| ---- |:-------:| :-----: | --------------: |
| A1   | Cecilia | 36 / 72 | Rp. 340,000,000 |
|      |         |         | Rp. 385,000,000 |
|      |         |         | Rp. 405,000,000 |
| A2   | Azalea  | 36 / 72 | Rp. 300,000,000 |
| A3   | Belgia  | 36 / 72 | Rp. 340,000,000 |