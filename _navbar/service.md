---
title: Service
layout: content
---

# Design
<div class="content-dropdown">
<p>
Perusahaan kami menyediakan jasa design rumah, ruko, saluran dan jalan, gapura, siteplan, dan sebagainya.
</p>
{% for image in site.static_files %}
    {% if image.path contains "images/service/" and image.basename contains "design" %}
        <img src="{{ site.base_url }}{{ image.path }}">
    {% endif %}
{% endfor %}
</div>
# Pengolahan dan Pengukuran Tanah
Pengukuran tanah, cut and fill, pembuatan kavling dan pematangan tanah di beberapa mitra perusahaan kami.
# Perizinan
Perusahaan kami menyediakan jasa perizinan seperti perizinan lokasi, Izin Mendirikan Bangunan (IMB), Siteplan, Izin Upaya Pemantauan Lingkungan Hidup (UPL) dan Upaya Pengelolaan Lingkungan Hidup (UKL), Andalalin, Izin Prinsip, Pertimbangan Teknis Tanah, Izin Pemanfaatan Penggunaan Tanah (IPPT), dan lainnya.
# Contruction
Perusahaan kami menyediakan jasa kontruksi yaitu, pembangunan rumah, ruko, jalan dan saluran, renovasi rumah, apartemen, ruko, pergudangan dan perkantoran