// for navbar
$(document).ready(function () {
  $(".navbar-light .dmenu").hover(
    function () {
      $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
    },
    function () {
      $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
    }
  );
});


// for hamburger button
$(document).ready(function () {
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
});
