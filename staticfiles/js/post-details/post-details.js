document.querySelector(".btn-comment").addEventListener("click", function () {
  var infoComment = document.querySelector(".info-comment");
  if (infoComment.style.display === "none") {
    infoComment.style.display = "block";
  } else {
    infoComment.style.display = "none";
  }
});
