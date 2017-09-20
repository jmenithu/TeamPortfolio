$(function(){
	
	// var canvas = document.getElementById('paint');
	// var context = canvas.getContext('2d');

	// //draw a line declare a new path
	// context.beginPath();
	// //set line width
	// context.lineWidth = 10;
	// //set line color
	// context.strokeStyle = '#000';
	// 	//set cap to the line ( round, butt, square)
	// 	context.lineCap = 'round';
	// 	//set line join style (bevel, round, miter)
	// 	context.lineJoin = 'round';
	// //position the context point
	// context.moveTo(50, 50);
	// //draw a straight line from starting point to a new position
	// context.lineTo(200, 200);
	// //draw another line
	// context.lineTo(400, 100);
	// //make line visible
	// context.stroke();

//script starts for drawing here

	//declare variables
		
		var paint = false; 								//paintingErasing or not
		
		var paint_erase = 'paint';  					//painting or erasing
		
		var canvas = document.getElementById('paint');  //get the canvas and context
		var ctx = canvas.getContext('2d');
		
		var container = $('#canvasContainer');		    //get the canvas container
		
		var mouse = {x: 0, y: 0};						//mouse position

		//onload load saved work from localStorage
		if(localStorage.getItem('imgCanvas')) {       // to check value of variable
			var img = new Image();                 	  // create an image
			    img.onload = function() { 		      // img is loaded
			  		ctx.drawImage(img, 0, 0)	      // draw a image
			}	
			img.src = localStorage.getItem('imgCanvas');//set the src of the image	
			//which refers to encoded url on line 111						   								  
		};


		// if (localStorage.getItem('x') != null) {
		// 	window.alert("x is there and it is equal to"
		// 	 + localStorage.getItem('x'));
		// };



		//set drawing parameters (linewidth,lineJoin, lineCap)
		ctx.lineWidth = 1;
		ctx.lineJoin = "round";
		ctx.lineCap = "round";

		//click inside container
		container.mousedown(function(e) {
			paint = true;
			ctx.beginPath();
			mouse.x = e.pageX - this.offsetLeft;		// distance between mouse and left border of page - distance between container and that left border of page	
														// x coordinates
			mouse.y = e.pageY - this.offsetTop;			// y coordinates 
			ctx.moveTo(mouse.x, mouse.y);
		});

		//move the mouse whild holding mouse key
		container.mousemove(function(e) {
			mouse.x = e.pageX - this.offsetLeft;
			mouse.y = e.pageY - this.offsetTop;
			if(paint == true) {
				if (paint_erase == 'paint') {
					//get color input
					ctx.strokeStyle = $('#paintColor').val();;
				} else {
					//white color
					ctx.strokeStyle = 'white';
				}
				ctx.lineTo(mouse.x, mouse.y);
				ctx.stroke();
			}
		});
		//mouse up - we are not paintingErasing anymore
		container.mouseup(function() {
			paint = false;
		});
		//if we leave the container we are not paintingErasing anymore
		container.mouseleave(function() {
			paint = false;
		});
		//click on reset button
		$('#reset').click(function() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			paint_erase = 'paint';
			$('#erase').removeClass('eraseMode');
		});
		//click on save button
		$('#save').click(function() {
			if (typeof(localStorage) != null) {
				//localStorage.setItem("x", 5);
				localStorage.setItem('imgCanvas',canvas.toDataURL());
				window.alert(localStorage.getItem('imgCanvas'));

			} else {
				window.alert("your browser does not support local storage!");
			}
		});

		//click on eraser button
		$('#erase').click(function() {
			if(paint_erase == 'paint') {
				paint_erase = 'erase';
			} else {
				paint_erase = 'paint';
			}
			$(this).toggleClass('eraseMode');
		});

		//change color input
		$('#paintColor').change(function() {
			$('#circle').css('background',$(this).val());
		});

		//change lineWidth using slider
		$('#slider').slider({
			min : 3,
			max : 30,
			slide : function(event, ui) {
				$('#circle').height(ui.value);
				$('#circle').width(ui.value);
				ctx.lineWidth = ui.value;
			}

		});
	

});