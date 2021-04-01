const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  document.getElementById("navRight").classList.toggle("toggle");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < 60) {
    // document.getElementById("header").style.top = "0";
    document.getElementById("header").style.boxShadow = "none";
    document.getElementById("header").style.backgroundColor = "transparent";
  } else {
    // document.getElementById("header").style.top = "-70px";
    document.getElementById("header").style.boxShadow =
      "-1px 5px 18px -11px rgba(0,0,0,0.81)";
    document.getElementById("header").style.backgroundColor = "#fff";
  }
  prevScrollpos = currentScrollPos;
};
