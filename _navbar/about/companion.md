---
title: Companion
layout: content
images:
- path: /assets/images/companion/mcp.jpg
  title: MCP
- path: /assets/images/companion/puri-permai-permadani.jpg
  title: Puri Permai Permadani
- path: /assets/images/companion/karawang-duta-propertindo.jpg
  title: Karawang Duta Propertindo
- path: /assets/images/companion/griya-alam-lestari.jpg
  title: Griya Alam Lestari
- path: /assets/images/companion/pdut.jpg
  title: PDUT

---

<p>Perusahaan kami telah bekerja sama dengan companion-companion sebagai berikut.</p>

<div class="picture">
    {% for img in page.images %}
            <img src=" {{ img.path }} " alt=" {{ img.title }} ">
    {% endfor %}
</div>