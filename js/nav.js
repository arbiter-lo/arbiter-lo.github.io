function myFunction(x) {
  x.classList.toggle("change");

  var overlay = document.getElementById("nav-overlay");
  if (overlay.style.height == 0 || overlay.style.height == "0px") {
    overlay.style.height = "100%";
  } else {
    overlay.style.height = 0;
  }

}
