// menu
// function openMenu() {
//     document.getElementById("sidebar").classList.toggle('active');
// }


$(function () {
	$(".toggle-btn").click(function () { 
		document.getElementById("sidebar").classList.toggle('active');
	});

	$("li a").click(function (event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	})
});


// $(".toggle-btn").mouseenter(function () { 
//     document.getElementById("sidebar").classList.toggle('active');
// });
// menu