var nav = $("header nav");

$(document).ready(function () {
  $(".burger").on("click", function () {
    $("header nav").toggleClass("menuVerborgen");
  });
  $("nav a").on("click", function () {
    $("header nav").toggleClass("menuVerborgen");
  });
});
