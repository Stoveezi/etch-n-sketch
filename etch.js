$(document).ready(function(){
gridCount = 4;	

resetGrid(4);

colorScheme = "Black";

function resetGrid(gridCount){
	size = 100 / gridCount + "." + 100 % gridCount + "%";
	$('.square').css('height', size);
	$('.square').css('width', size);
	
	console.log($('.square').css('height'));
	$('#grid').html('');
	for (i = 0; i < gridCount * gridCount; i ++){
		$('#grid').append("<div class='square' id='" + i + "' density=0></div>");
	}
	$('.square').css('height', size);
	$('.square').css('width', size);
}




$(document).on("mouseenter", ".square", function(){
	color = "#000000";

	if (colorScheme === "Opacity"){
		
		density = parseInt($(this).attr("density")) + 1;
 		$(this).attr("density", density);		
 		color = "RGBA(0,0,0," + density / 10;
	}
 	else if (colorScheme === "Random"){
 		r = Math.floor(Math.random() * 255);
 		g = Math.floor(Math.random() * 255);
 		b = Math.floor(Math.random() * 255);
 		color = "RGB(" + r + "," + g + "," + b + ")";
 	}
 	else {
 		color = "#000000";
 	}

 	

 	$(this).css('background-color', color);
});


$('#newGridBTN').click(function(){
	gridCount = prompt("How many squares per side do you want?");

	resetGrid(gridCount);
});

$('#randomBTN').click(function(){
	colorScheme = "Random";
});

$('#opacityBTN').click(function(){
	colorScheme = "Opacity";
});
$('#clearBTN').click(function(){
	$('.square').css("background-color", "#FFFFFF");
});


});