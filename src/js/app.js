$(function() {
  objectFitImages();
});

var menu = document.getElementById('navbar');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 580
  ) {
    document.getElementById('navbar').classList.add('nav--fixed');
    document.getElementById('space-navbar-fixed').style.marginTop = '94px';
  } else {
    document.getElementById('navbar').classList.remove('nav--fixed');
    document.getElementById('space-navbar-fixed').removeAttribute('style');
  }
}
