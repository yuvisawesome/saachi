function moreText() {
  var dots = document.getElementById("dots");
  var btnText = document.getElementById("moreTextButton");
  var moreText = document.getElementById("more-text");


  btnText.classList.toggle("rotate");

  if (dots.style.display === "none") {
    dots.style.display = "inline-block";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }

}
