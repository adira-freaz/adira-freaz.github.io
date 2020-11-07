---
title: Companion
layout: content

---

<p>Perusahaan kami telah bekerja sama dengan companion-companion sebagai berikut.</p>

<div class="picture">
    {% for img in site.static_files %}
        {% if img.path contains "images/companion" %}
            <img src=" {{ img.path }} " alt=" {{ img.basename | replace:'-' , ' ' }} ">
        {% endif %}
    {% endfor %}
</div>