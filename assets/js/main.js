$(document).ready(function () {
  $('.navbar__button').click(function () {
    $(this).toggleClass('open');
    $('.navbar__list').slideToggle(800);
  });
});