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
function aMenu(x) {
	x.classList.toggle("show");
}