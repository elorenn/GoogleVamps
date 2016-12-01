// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//= require tether
//= require bootstrap-sprockets

console.log("APP ONLINE");

$(document).ready(function (argument) {
	
	console.log("The page has finished loading.");
	$("#human").on("click", intoHuman);
	$("#vampire").on("click", intoVampire);
	
});

function intoHuman () {
	console.log("User is a human");
	// should this toggle content between human and vampire?
	$(".hello-vampire").toggle();
	$(".hello-human").toggle();

	$(".vampire-form").toggle();
	$(".human-form").toggle();

}

function intoVampire () {
	console.log("User is a vampire");
	// should this toggle content between human and vampire?
	$(".hello-vampire").toggle();
	$(".hello-human").toggle();

	$(".vampire-form").toggle();
	$(".human-form").toggle();

	$(".adjective").text("indecisive");

}

