$(document).ready(function () {
  $('.navbar__button').click(function () {
    $(this).toggleClass('open');
    $('.navbar__list').slideToggle(800);
  });
});

function updateNavbar() {
  switch (window.innerWidth > 768) {
    case true:
      document.querySelector('.navbar__list').style.display = 'flex';
      break;
    case false:
      document.querySelector('.navbar__list').style.display = 'none';
      document.querySelector('.navbar__button').classList.remove('open');
      break;
    default:
      break;
  }
}

window.addEventListener('resize', updateNavbar);