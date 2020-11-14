function simulasi_kpr() {
    var Currency = {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0};
    
    var harga_properti = parseInt( document.getElementById( "harga_properti" ).value.replace( "Rp", "" ).replaceAll( ".", "" ) );
    var uang_muka = parseInt( document.getElementById( "uang_muka" ).value.replace( "Rp", "" ).replaceAll( ".", "" ) );
    // harga properti
    if ( Number.isNaN( harga_properti ) == false ) {
        document.getElementById("harga_properti").value = harga_properti.toLocaleString('id-ID', Currency);
        document.getElementById( "uang_muka" ).max = harga_properti;
        console.log("a");
    } else {
        document.getElementById("harga_properti").value = "Rp 0";
    }
    
    // suku bunga per tahun
    var suku_bunga = document.getElementById("suku_bunga").value / 100;
    
    // jangka waktu tahunan
    var tenor = document.getElementById("tenor").value;
    
    // uang muka
    if( Number.isNaN( uang_muka ) == false ) {
            if( uang_muka >= document.getElementById( "uang_muka" ).max ) {
                uang_muka = document.getElementById( "uang_muka" ).max - 1;
            }
            if (uang_muka <= 0) {
                uang_muka = 0;
            }
            document.getElementById( "uang_muka" ).value = uang_muka.toLocaleString('id-ID', Currency);
    } else {
        document.getElementById( "uang_muka" ).value = "Rp 0";
        uang_muka = parseInt( document.getElementById( "uang_muka" ).value.replace( "Rp", "" ).replaceAll( ".", "" ) );
    }
    // pokok kredit
    var pokok_kredit = harga_properti - uang_muka;
    if ( Number.isNaN( pokok_kredit ) == false ) {
        document.getElementById("pokok_kredit").value = pokok_kredit.toLocaleString('id-ID', Currency);
    } else {
        document.getElementById( "pokok_kredit" ).value = "Rp 0";
    }
    // angsuran = pokok_kredit * suku_bunga / 12 / (1 - 1 / (1 + suku_bunga / 12)^(-tenor * 12));
    var angsuran = pokok_kredit * suku_bunga / 12 / ( 1 - Math.pow( (1 + suku_bunga / 12), (-tenor * 12) ) );
    if ( Number.isNaN( angsuran ) == false ) {
        document.getElementById("angsuran").value = angsuran.toLocaleString('id-ID', Currency);
    } else {
        document.getElementById( "angsuran" ).value = "Rp 0";
    }
}

if ( typeof document.getElementById("harga_properti").value != 'undefined' || document.getElementById( "harga_properti" ).value.includes( "Rp" ) ) {
    document.getElementById("harga_properti").oninput = simulasi_kpr;
    document.getElementById("uang_muka").oninput = simulasi_kpr;
    document.getElementById("tenor").oninput = simulasi_kpr;
    document.getElementById("suku_bunga").oninput = simulasi_kpr;
}