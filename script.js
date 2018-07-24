$(document).ready(function(){
	
	$("button").click( function() {
		$("body").css("background-color", "black");
		$("p").css("color", "#C9048D");
		$("h1").css("color", "#C9048D");
		$("h2").css("color", "#C9048D");
		$("h5").css("color", "#C9048D");
		$("h1").css("background-color", "black");
		$("button").css("color", "#C9048D");
		$("button").css("background-color", "black");
		
		var word1 = "hi";
		var word2 = "i";
		var word3 = "love";
		var word4 = "chocolate";
		
		console.log(word1);
		console.log(word2);
		console.log(word3);
		console.log(word4);
		
		var sentence = word1 + word2 + word3 + word4;
	});
	
	$("reset").click( function() {
		console.log(reset);
		$("body").css("background-color", "#C9048D");
		$("p").css("color", "black");
		$("h1").css("color", "FFD233");
		$("h2").css("color", "black");
		$("h5").css("color", "black");
		$("h1").css("background-color", "#33FFDC");
		$("button").css("color", "#FFD233");
		$("button").css("background-color", "#33FFDC");
	});
	
});