function simulasi_kpr() {
    //harga_properti
    var harga_rumah = parseInt( document.getElementById("harga_rumah").value );
    document.getElementById("harga_rumah").value = harga_rumah;
    // suku bunga per tahun
    var suku_bunga = document.getElementById("suku_bunga").value / 100;
    var tenor = document.getElementById("tenor").value;
    var uang_muka = harga_rumah * 20 / 100;
    document.getElementById("uang_muka").value = uang_muka;
    var pokok_kredit = harga_rumah - uang_muka;
    document.getElementById("pokok_kredit").value = pokok_kredit;
    //angsuran = pokok_kredit * suku_bunga / 12 / (1 - 1 / (1 + suku_bunga / 12)^(-tenor * 12));
    var angsuran = pokok_kredit * suku_bunga / 12 / ( 1 - Math.pow( (1 + suku_bunga / 12), (-tenor * 12) ) );
    document.getElementById("angsuran").value = angsuran;
    console.log(angsuran);
}
if (typeof document.getElementById("harga_rumah").value != 'undefined') {
    document.getElementById("harga_rumah").oninput = simulasi_kpr;
    document.getElementById("tenor").oninput = simulasi_kpr;
    document.getElementById("suku_bunga").oninput = simulasi_kpr;
}