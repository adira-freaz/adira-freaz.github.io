function myDropDown(x) {
    var y = x.querySelector(" .dropdown-content");
    var z = document.getElementsByClassName("dropdown");
    var a = x.querySelector("a > #triangle");

    y.classList.toggle("show");
    if(x.querySelector(" .dropdown-content").classList.contains("show")) {
        for (var i=0; i < z.length; i++) {
            if(z[i].querySelector(" .dropdown-content").classList.contains("show")) {
                z[i].querySelector(" .dropdown-content").classList.remove("show");
                z[i].querySelector("a > #triangle").className = "triangle-down";
            }
        }
        y.classList.toggle("show");
    }
    if (a.className === "triangle-down") {
		a.className = "triangle-up";
	}
	else {
		a.className = "triangle-down";
	}
}