---
title: Perumahan Wancimekar Lestari
layout: content
extra_css:
- residential
---

<div class="brochure">
{% for image in site.static_files %}
    {% if image.path contains "images/residential/wancimekar-lestari" and image.basename contains "brosur" %} 
        <img src="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}">
    {% endif %}
{% endfor %}
</div>

<div class="table">
<table>
    <thead>
        <tr>
            <th rowspan="2">Tipe</th>
            <th rowspan="2">Harga</th>
            <th rowspan="2">KPR</th>
            <th colspan="2">Angsuran BTN</th>
        </tr>
        <tr>
            <th>15 tahun</th>
            <th>20 tahun</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>27/60</td>
            <td>Rp.140,000,000</td>
            <td>Rp.133,700,000</td>
            <td>Rp.1,057,291</td>
            <td>Rp.882,360</td>
        </tr>
    </tbody>
</table>
</div>