$(function() {
  objectFitImages();
});

var menu = document.getElementById('navbar');
var close = document.getElementById('close');
var open = document.getElementById('modal-open');
var shadow = document.getElementById('example');

// var body = document.body;

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 180
  ) {
    document.getElementById('navbar').classList.add('nav--fixed');
    document.getElementById('space-navbar-fixed').style.marginTop = '94px';
  } else {
    document.getElementById('navbar').classList.remove('nav--fixed');
    document.getElementById('space-navbar-fixed').removeAttribute('style');
  }
}

function openFunction() {
  modal.classList.add('modal--is-visible');
  document.body.classList.add('modal-open');
  document.getElementById('bg_layer').style.display = 'block';
}

function closeFunction() {
  modal.classList.remove('modal--is-visible');
  document.body.classList.remove('modal-open');
  document.getElementById('bg_layer').removeAttribute('style');
}
