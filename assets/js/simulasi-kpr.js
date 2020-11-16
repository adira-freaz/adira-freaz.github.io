function simulasi_kpr() {
    var harga_properti = document.getElementById("harga_properti").value.replace(/[a-zA-Z]+|[.]+|\s+/g , "");
    console.log(harga_properti);
    var uang_muka = document.getElementById("uang_muka").value.replace(/[a-zA-Z]+|[.]+|\s+/g , "");
    if (uang_muka.length > 0 && uang_muka > harga_properti) {
        uang_muka.max = harga_properti;
        uang_muka = harga_properti;
    }
    var suku_bunga = document.getElementById( "suku_bunga" ).value / 100;
    var pokok_kredit = harga_properti - uang_muka;
    var tenor = document.getElementById("tenor").value;
    var angsuran = pokok_kredit * suku_bunga / 12 / ( 1 - Math.pow( (1 + suku_bunga / 12), (-tenor * 12) ) );

    harga_properti = harga_properti.replace(/(\d)(?=(\d{3})+$)/g,'$1.');
    document.getElementById("harga_properti").value = "Rp " + harga_properti;

    uang_muka = uang_muka.replace(/(\d)(?=(\d{3})+$)/g,'$1.');
    document.getElementById("uang_muka").value = "Rp " + uang_muka;

    pokok_kredit = pokok_kredit.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1.');
    document.getElementById("pokok_kredit").value = "Rp " + pokok_kredit;

    angsuran = angsuran.toString().replace(/[0-9]+(\.([0-9]{1,2})?)?$|[.]/g, "").replace(/(\d)(?=(\d{3})+$)/g,'$1.');
    document.getElementById("angsuran").value = "Rp " + angsuran;
}
document.getElementById("harga_properti").oninput = simulasi_kpr;
document.getElementById("uang_muka").oninput = simulasi_kpr;
document.getElementById("tenor").oninput = simulasi_kpr;
document.getElementById("suku_bunga").oninput = simulasi_kpr;