//댓글 버튼 클릭시 댓글보임
document.querySelector(".btn-comment").addEventListener("click", function () {
  var infoComment = document.querySelector(".info-comment");
  if (infoComment.style.display === "none") {
    infoComment.style.display = "block";
  } else {
    infoComment.style.display = "none";
  }
});


//댓글 좋아요 버튼눌렀을때 색깔바뀌고 좋아요 갯수 카운트
var like_toggle = false;

const like_btn = document.querySelector(".btn-like")
const like = document.querySelector(".btn-like .like");
const dislike = document.querySelector(".btn-like .dislike");
const like_cnt = document.querySelector(".num-like")

like_btn.addEventListener("click", function () {
  like_toggle = !like_toggle; //false <-> true
  var current_like_cnt = like_cnt.textContent;

  if (like_toggle) {
    like.style.display = "block";
    dislike.style.display = "none";
    //좋아요 수 증가  
    like_cnt.textContent = parseInt(current_like_cnt) + 1
  } else {
    like.style.display = "none";
    dislike.style.display = "block";
    //좋아요 수 감소
    like_cnt.textContent = parseInt(current_like_cnt) - 1
  }
});


//댓글 창 열었을때


//댓글 설정( : )눌렀을때 작은 신고창 등장
const comment_setting = document.querySelector(".comment-setting");
var comment_setting_toggle = false;

comment_setting.addEventListener("click", function () {
  comment_setting.classList.add("setting-on")
  comment_setting_toggle = !comment_setting_toggle; //false <-> true
  if (comment_setting_toggle)
    comment_setting.classList.remove("setting-on")
})

//작은 신고창이 있는상태에서 아무대나 클릭하면 작은신고창이 사라짐
document.addEventListener('click', function (event) {
  var isClickInside = event.target.closest('.comment-setting');

  if (!isClickInside) {
    var commentSettingElements = document.querySelectorAll('.comment-setting');
    commentSettingElements.forEach(function (element) {
      element.classList.remove('setting-on');
    });
  }
});




