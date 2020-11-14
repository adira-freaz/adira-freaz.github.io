---
title: Simulasi KPR
layout: content
extra_css:
- simulasi-kpr
js_file:
- simulasi-kpr
---

<form autocomplete="off">
    <div class="form_wrapper">
        <label for="harga_properti">Harga Properti</label>
        <input autocomplete="off" type="text" id="harga_properti" placeholder="Harga properti">
    </div>
    <div class="form_wrapper">
        <label for="uang_muka">Uang Muka</label>
        <input autocomplete="off" type="text" id="uang_muka" placeholder="Uang Muka">
    </div>
    <div class="form_wrapper">
        <label for="pokok_kredit">Pokok Kredit</label>
        <input type="text" id="pokok_kredit" value="Rp 0" readonly>
    </div>
    <div class="form_wrapper">
        <label for="tenor">Jangka Waktu</label>
        <span>
        <select id="tenor">
            {% for i in (1..20) %}
                <option value="{{ i }}"> {{ i }} </option>
            {% endfor %}
        </select>
        <label for="tenor">Tahun</label>
        </span>
    </div>
    <div class="form_wrapper">
        <label for="suku_bunga">Estimasi Suku Bunga</label>
        <select id="suku_bunga">
            {% for i in (5..14) %}
                <option value="{{ i }}"> {{ i }}% </option>
            {% endfor %}
        </select>
    </div>
    <div class="form_wrapper">
        <label for="angsuran">Angsuran</label>
        <input type="text" id="angsuran" value="Rp 0" readonly>
    </div>
</form>
<div class="div">Note : Belum termasuk biaya proses KPR, biaya notaris, pajak, dan lainnya.</div>