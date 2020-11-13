function DropDownContent(x) {
	var y = x.nextElementSibling;
	var a = x.querySelector("a > #content-triangle");
	y.classList.toggle("show");
    if (a.className === "content-triangle-down") {
		a.className = "content-triangle-up";
	}
	else {
		a.className = "content-triangle-down";
	}
}