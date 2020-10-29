function DropDownContent(x) {
    var y = x.querySelector(" .content-dropdown");
    var a = x.querySelector("a > #content-triangle");
    y.classList.toggle("show");
    console.log(y);
    if (a.className === "content-triangle-down") {
		a.className = "content-triangle-up";
	}
	else {
		a.className = "content-triangle-down";
	}
}