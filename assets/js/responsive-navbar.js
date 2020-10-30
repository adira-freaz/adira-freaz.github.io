---

---

function rNavbar() {
    var x = document.getElementById("topnav");
	if (x.className === "navbar") {
		x.className += " responsive";
	}
	else {
		x.className = "navbar";
	}
}
function aMenu(y) {
	y.classList.toggle("show");
	a = document.querySelectorAll(" .dropdown-content");
	for (var i=0; i < a.length; i++) {
		if (a[i].classList.contains("show")) {
			a[i].classList.remove("show");
			var b = a[i].parentElement.querySelector("a > #triangle").className = "triangle-down";
		}
	}
}