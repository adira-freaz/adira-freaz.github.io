---
title: Service
layout: content
extra_css:
- dropdown-content
js_file:
- dropdown
---

<div class="dropdown-wrapper" onclick="DropDownContent(this)">
    <a href="javascript:void(0);">
        <h2>Design</h2>
        <span class="content-triangle-down" id="content-triangle"></span>
    </a>
    <div class="content-dropdown">
        <p>
        Perusahaan kami menyediakan jasa design rumah, ruko, saluran dan jalan, gapura, siteplan, dan sebagainya.
        </p>
        {% for image in site.static_files %}
            {% if image.path contains "images/service/" and image.basename contains "design" %}
                <img src="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" width="395" height="295">
            {% endif %}
        {% endfor %}
    </div>
</div>

<div class="dropdown-wrapper" onclick="DropDownContent(this)">
    <a href="javascript:void(0);">
        <h2>Pengolahan dan Pengukuran Tanah</h2>
        <span class="content-triangle-down" id="content-triangle"></span>
    </a>
    <div class="content-dropdown">
        <p>
        Pengukuran tanah, cut and fill, pembuatan kavling dan pematangan tanah di beberapa mitra perusahaan kami.
        </p>
        {% for image in site.static_files %}
            {% if image.path contains "images/service/" and image.basename contains "tanah" %}
                <img src="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" width="395" height="295">
            {% endif %}
        {% endfor %}
    </div>
</div>

<div class="dropdown-wrapper" onclick="DropDownContent(this)">
    <a href="javascript:void(0);">
        <h2>Perizinan</h2>
        <span class="content-triangle-down" id="content-triangle"></span>
    </a>
    <div class="content-dropdown">
        <p>
        Perusahaan kami menyediakan jasa perizinan seperti perizinan lokasi, Izin Mendirikan Bangunan (IMB), Siteplan, Izin Upaya Pemantauan Lingkungan Hidup (UPL) dan Upaya Pengelolaan Lingkungan Hidup (UKL), Andalalin, Izin Prinsip, Pertimbangan Teknis Tanah, Izin Pemanfaatan Penggunaan Tanah (IPPT), dan lainnya.
        </p>
    </div>
</div>

<div class="dropdown-wrapper" onclick="DropDownContent(this)">
    <a href="javascript:void(0);">
        <h2>Construction</h2>
        <span class="content-triangle-down" id="content-triangle"></span>
    </a>
    <div class="content-dropdown">
        <p>
        Perusahaan kami menyediakan jasa konstruksi, yaitu pembangunan rumah, ruko, jalan dan saluran, renovasi rumah, apartemen, ruko, pergudangan dan perkantoran
        </p>
        {% for image in site.static_files %}
            {% if image.path contains "images/service/" and image.basename contains "konstruksi" %}
                <img src="{{ site.base_url }}{{ image.path }}" alt="{{ image.basename | replace:'-', ' ' }}" width="395" height="295">
            {% endif %}
        {% endfor %}
    </div>
</div>