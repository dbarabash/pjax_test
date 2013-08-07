// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs

function checkEvents() {
	$('#pjax_container a').click( function(event) {
		var link = window.location.protocol + '//' + window.location.host + $(this).attr('href');
		$.pjax({
			url: link,
			container: '#pjax_container',
			timeout: 0
		});
		event.preventDefault();
	});
}

$(function() {
	
	checkEvents();
	
	$(document).on('pjax:success', function() {
		checkEvents();
	});

	$(document).on('pjax:error', function(xhr, textStatus, errorThrown) {
		console.log(xhr);
		console.log(textStatus);
		console.log(errorThrown);
		console.log(textStatus.status);
		console.log(textStatus.responseText);
		console.log(xhr.currentTarget.URL);
		if (textStatus.status === 302) {
			xhr.preventDefault();
		}
	});
});