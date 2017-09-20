var playing = false;
var score;
var trialsleft;
var randomFruit;
var randomStep;
var timeRemaining;
var counter;
var fruitBasket = ['apple','banana','berry','grapes','orange','pinapelle'];


$(function(){
	//when you click start/reset button
	$('#start-reset').click(function(){

		//if you are playing
		//yes	
		if (playing == true) {
			//reload the page
			location.reload();
		//no
		} else {// we are not playing 
			playing = true; // game initiated
			//set score to zero
			score = 0;
			$('#score-value').html(score);

			//show trialsleft button
			$('#trials-left').show();
			trialsleft = 3;
			addHearts();

			//hide game over box 
			$('#gameover').hide();

			//change button to resetGame
			$('#start-reset').text('Reset Game');
			
			startAction();

		}

	});

	$('#fruit').mouseover(function(){
		score++;
		$('#score-value').html(score);
		//document.getElementById('slicesound').play();
		$('#slicesound')[0].play();
		//stop fruit
		clearInterval(counter);
		//hide fruit
		$('#fruit').hide('explode',500);
		//start new fruit after animation
		setTimeout(startAction,800);
	});



	function addHearts() {
		//Empty trialsleft box befor we add hearts 
		$('#trials-left').empty();
		for (var i = 0; i < trialsleft; i++) {
			$('#trials-left').append('<img src="img/heart.png" width="15px" height="15px">&nbsp;&nbsp;');
		}
	}

	function startAction() {
	// randomFruit = Math.floor((Math.random() * 5) + 1);
 //            //$('#section').html(randomFruit);
 //            switch(randomFruit) {
 //            	case 0:
 //            	  	$('#Fruitsection').append('<img src="img/apple.png" width="50px" height="50px">');
 //            	break;
 //            	case 1:
 //            	 	$('#Fruitsection').append('<img src="img/banana.png" width="50px" height="50px">');
 //            	break;
 //            	case 2:
 //            	  	$('#Fruitsection').append('<img src="img/berry.png" width="50px" height="50px">');
 //            	break;
 //            	case 3:
 //            	 	$('#Fruitsection').append('<img src="img/grapes.png" width="50px" height="50px">');
 //            	break;
 //            	case 4:
 //            	  	$('#Fruitsection').append('<img src="img/orange.png" width="50px" height="50px">');
 //            	break;
 //            	case 5:
 //            	 	$('#Fruitsection').append('<img src="img/pinapelle.png" width="50px" height="50px">');

	    //generate random fruit       }
	 	$('#fruit').show();
	 	//choose a random fruit;
	 	chooseFruits();
	 	//random position 
	 	$('#fruit').css({'left':Math.round(Math.random() * 400),'top':-50});
	 	//generate random steps
	 	randomStep = Math.floor((Math.random() * 6) + 1);


	    //move fruit down by 1 step every 10ms
	    counter = setInterval(function() {
	    	    //move fruit by 1 step
				$('#fruit').css('top', $('#fruit').position().top + randomStep);
	    		//check is the fruit is too low
	    		if ($('#fruit').position().top > $('#Fruitsection').height()) {
	    			//check if any trials left
	    			if (trialsleft > 1) {
	    				 //generate random fruit       }
						$('#fruit').show();
						//choose a random fruit;
						chooseFruits();
						//random position 
						$('#fruit').css({'left':Math.round(Math.random() * 400),'top':-50});
						//generate random steps
						randomStep = Math.floor((Math.random() * 6) + 1);
						//reduce trials by 1
						trialsleft--;
						//populate new trials left
						addHearts();
	    			} else { // game over
	    				//we are not playing anymore 
	    				playing = false;
	    				//change button to startGame
	    				$('#start-reset').html('StartGame');
	    				//show game over message
	    				$('#gameover').show();
	    				$('#gameover').html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
	    				//hide trialsleft box 
	    				$('#trials-left').hide();
	    				//stop Action
	    				stopAction();
	    			}

	    		}
			
		},10);
	   

	}


	//generate a random fruit 
	function chooseFruits() {
		$('#fruit').attr('src','img/'+fruitBasket[Math.floor(Math.random() * 6)]+'.png');
	}

	//stop dropping fruits 
	function stopAction() {
		clearInterval(counter);
		$('#fruit').hide();
	}
});
			
			//1.create random fruit
			//create random step
			//2.move the fruit 1 step down every 30 sec
				//is fruit too low
				//yes- any trials left 
					//yes
						//reduce 1 heart from trailsleft button
						//repeat step1
					//no
						//show game over button and change button to StartGame
				//no
					//repeat step 2
				
			
