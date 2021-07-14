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

<div class="table">
<table>
    <thead>
        <tr>
            <th rowspan="2">Tipe</th>
            <th rowspan="2">Harga</th>
            <th rowspan="2">Uang Muka</th>
            <th rowspan="2">Maksimum KPR</th>
            <th colspan="3">Angsuran BTN</th>
        </tr>
        <tr>
            <th>10 tahun</th>
            <th>15 tahun</th>
            <th>20 tahun</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>27/60</td>
            <td>Rp.150,500,000</td>
            <td>Rp.7,525,000</td>
            <td>Rp.142,975,000</td>
            <td>Rp.1,516,500</td>
            <td>Rp.1,130,700</td>
            <td>Rp.943,600</td>
        </tr>
    </tbody>
</table>
</div>