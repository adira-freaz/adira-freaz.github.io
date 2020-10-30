---
title: Perumahan Grand Cibening Residence
layout: content
extra_css:
- residential

---

<div class="brochure">
{% for image in site.static_files %}
    {% if image.path contains "images/residential/grand-cibening" and image.basename contains "Brosur" %} 
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
            <th rowspan="2">Maximal KPR</th>
            <th colspan="4">Jangka Waktu Angsuran</th>
        </tr>
        <tr>
            <th>10 tahun</th>
            <th>15 tahun</th>
            <th>20 tahun</th>
            <th>25 tahun</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>36/72</td>
            <td>Rp.356,000,000</td>
            <td>Rp.-</td>
            <td>Rp.356,000,000</td>
            <td>Rp.4,724,000</td>
            <td>Rp.3,789,800</td>
            <td>Rp.3,356,500</td>
            <td>Rp.3,143,000</td>
        </tr>
    </tbody>
</table>
</div>