function simulasi_kpr() {
    var harga_properti = parseInt( document.getElementById( "harga_properti" ).value.replace( "Rp ", "" ).replaceAll( ",","" ) );
    var uang_muka = parseInt( document.getElementById( "uang_muka" ).value.replace( "Rp ", "" ).replaceAll( ",","" ) );
    var suku_bunga = document.getElementById( "suku_bunga" ).value / 100;
    var tenor = document.getElementById("tenor").value;
    
    if (isNaN( harga_properti ) == false) {
        var temp_harga_properti =  harga_properti.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
        document.getElementById("uang_muka").max = harga_properti;
        temp_harga_properti = "Rp " + temp_harga_properti;
    } else {
        var temp_harga_properti = "Rp 0";
    }
    document.getElementById("harga_properti").value = temp_harga_properti;

    if ( isNaN( uang_muka ) == false ) {
        if( uang_muka >= document.getElementById( "uang_muka" ).max ) {
            uang_muka = document.getElementById( "uang_muka" ).max - 1;
        }
        if (uang_muka <= 0) {
            uang_muka = 0;
        }
        var temp_uang_muka =  uang_muka.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
        temp_uang_muka = "Rp " + temp_uang_muka;
    } else {
        var temp_uang_muka = "Rp 0";
    }
    document.getElementById("uang_muka").value = temp_uang_muka;

    // Pokok Kredit
    var pokok_kredit = harga_properti - uang_muka;
    if ( isNaN( pokok_kredit ) == false ) {
        var temp_pokok_kredit = pokok_kredit.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
        temp_pokok_kredit = "Rp " + temp_pokok_kredit;
    } else {
        var temp_pokok_kredit = "Rp 0";
    }
    document.getElementById("pokok_kredit").value = temp_pokok_kredit;

    var angsuran = pokok_kredit * suku_bunga / 12 / ( 1 - Math.pow( (1 + suku_bunga / 12), (-tenor * 12) ) );
    console.log(angsuran);
    if ( isNaN( angsuran ) == false ) {
        var temp_angsuran = angsuran.toLocaleString(undefined, {minimumFractionDigits: 0,maximumFractionDigits: 0})
        temp_angsuran = "Rp " + temp_angsuran;
    } else {
        var temp_angsuran = "Rp 0";
    }
    document.getElementById( "angsuran" ).value = temp_angsuran;
    // if ( isNaN( harga_properti ) == false ) {
    //     document.getElementById( "harga_properti" ).value = harga_properti.toLocaleString('id-ID', {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0} );
    //     document.getElementById( "uang_muka" ).max = harga_properti;
    // } else {
    //     document.getElementById("harga_properti").value = "Rp 0";
    // }
    
    // // suku bunga per tahun
    // var suku_bunga = document.getElementById("suku_bunga").value / 100;
    
    // // jangka waktu tahunan
    // var tenor = document.getElementById("tenor").value;
    
    // // uang muka
    // if( uang_muka >= document.getElementById( "uang_muka" ).max ) {
    //     uang_muka = document.getElementById( "uang_muka" ).max - 1;
    // }
    // if (uang_muka <= 0) {
    //     uang_muka = 0;
    // }
    // document.getElementById( "uang_muka" ).value = uang_muka.toLocaleString('id-ID', {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0} );
    // if( isNaN( uang_muka ) == false ) {
    //         if( uang_muka >= document.getElementById( "uang_muka" ).max ) {
    //             uang_muka = document.getElementById( "uang_muka" ).max - 1;
    //         }
    //         if (uang_muka <= 0) {
    //             uang_muka = 0;
    //         }
    //         document.getElementById( "uang_muka" ).value = uang_muka.toLocaleString('id-ID', {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0} );
    // } else {
    //     document.getElementById( "uang_muka" ).value = "Rp 0";
    //     uang_muka = parseInt( document.getElementById( "uang_muka" ).value.replace( "Rp", "" ).replaceAll( ".", "" ) );
    // }
    // // pokok kredit
    // var pokok_kredit = harga_properti - uang_muka;
    // document.getElementById("pokok_kredit").value = pokok_kredit.toLocaleString('id-ID', {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0} );
    // if ( isNaN( pokok_kredit ) == false ) {
    //     document.getElementById("pokok_kredit").value = pokok_kredit.toLocaleString('id-ID', {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0} );
    // } else {
    //     document.getElementById( "pokok_kredit" ).value = "Rp 0";
    // }
    // // angsuran = pokok_kredit * suku_bunga / 12 / (1 - 1 / (1 + suku_bunga / 12)^(-tenor * 12));
    // var angsuran = pokok_kredit * suku_bunga / 12 / ( 1 - Math.pow( (1 + suku_bunga / 12), (-tenor * 12) ) );
    // document.getElementById("angsuran").value = angsuran.toLocaleString('id-ID', {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0} );
    // if ( isNaN( angsuran ) == false ) {
    //     document.getElementById("angsuran").value = angsuran.toLocaleString('id-ID', {currency: 'IDR', style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0} );
    // } else {
    //     document.getElementById( "angsuran" ).value = "Rp 0";
    // }
}

if ( typeof document.getElementById("harga_properti").value != 'undefined' || document.getElementById( "harga_properti" ).value.includes( "Rp" ) ) {
    document.getElementById("harga_properti").oninput = simulasi_kpr;
    document.getElementById("uang_muka").oninput = simulasi_kpr;
    document.getElementById("tenor").oninput = simulasi_kpr;
    document.getElementById("suku_bunga").oninput = simulasi_kpr;
}