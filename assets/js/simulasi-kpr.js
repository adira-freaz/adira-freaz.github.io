function simulasi_kpr() {
    var Currency = {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0};
    //harga_properti
    var harga_rumah = parseInt( document.getElementById("harga_rumah").value.replace("Rp", "").replaceAll(".","") );
    document.getElementById("harga_rumah").value = harga_rumah.toLocaleString('id-ID', Currency);
    console.log(harga_rumah);
    // suku bunga per tahun
    var suku_bunga = document.getElementById("suku_bunga").value / 100;
    var tenor = document.getElementById("tenor").value;
    var uang_muka = harga_rumah * 20 / 100;
    document.getElementById("uang_muka").value = uang_muka.toLocaleString('id-ID', Currency);
    var pokok_kredit = harga_rumah - uang_muka;
    document.getElementById("pokok_kredit").value = pokok_kredit.toLocaleString('id-ID', Currency);
    //angsuran = pokok_kredit * suku_bunga / 12 / (1 - 1 / (1 + suku_bunga / 12)^(-tenor * 12));
    var angsuran = pokok_kredit * suku_bunga / 12 / ( 1 - Math.pow( (1 + suku_bunga / 12), (-tenor * 12) ) );
    document.getElementById("angsuran").value = angsuran.toLocaleString('id-ID', Currency);
    console.log(angsuran);
    console.log(typeof document.getElementById("harga_rumah").value != 'undefined');
}
if (typeof document.getElementById("harga_rumah").value != 'undefined' | document.getElementById("harga_rumah").value.includes("Rp")) {
    document.getElementById("harga_rumah").oninput = simulasi_kpr;
    document.getElementById("tenor").oninput = simulasi_kpr;
    document.getElementById("suku_bunga").oninput = simulasi_kpr;
}