function myDropDown(x) {
    var y = x.querySelector(" .dropdown-content").classList.toggle("show");
    var z = document.getElementsByClassName("dropdown");
    if(x.querySelector(" .dropdown-content").classList.contains("show")) {
        for (var i=0; i < z.length; i++) {
            if(z[i].querySelector(" .dropdown-content").classList.contains("show")) {
                z[i].querySelector(" .dropdown-content").classList.remove("show");
            }
        }
        y = x.querySelector(" .dropdown-content").classList.toggle("show");
    }
}