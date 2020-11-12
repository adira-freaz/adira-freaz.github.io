---
title: Simulasi KPR
layout: content
js_file:
- simulasi-kpr
---

<form autocomplete="off">
    <label for="harga_rumah">Harga Rumah</label>
    <input autocomplete="off" type="text" id="harga_rumah" placeholder="Harga properti"><br>
    <label for="uang_muka">Uang Muka / DP 20%</label>
    <input type="text" id="uang_muka" value="0" readonly><br>
    <label for="pokok_kredit">Pokok Kredit</label>
    <input type="text" id="pokok_kredit" value="0" readonly><br>
    <label for="tenor">Jangka Waktu</label>
    <select id="tenor">
        {% for i in (1..30) %}
            <option value="{{ i }}"> {{ i }} </option>
        {% endfor %}
    </select>
    <label for="tenor">Tahun</label><br>
    <label for="suku_bunga">Estimasi Suku Bunga</label>
    <select id="suku_bunga">
        {% for i in (10..14) %}
            <option value="{{ i }}"> {{ i }}% </option>
        {% endfor %}
    </select><br>
    <label for="angsuran">Angsuran</label>
    <input type="text" id="angsuran" value="0" readonly><br>
</form>