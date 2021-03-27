$(document).ready(function () {
	$(window).scroll(function () {
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
	}).on('click', '.dropdown-menu', function (e) {
	e.stopPropagation();
  });
}); 
