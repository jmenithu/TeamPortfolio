
var playing = false;
var score;
var counter;
var timeremaining;
var correctAnswer;

//when you click start/reset button
document.getElementById('start-reset').onclick = function() {

//if you are playing YES
	if (playing === true) {
		//reload the page
		location.reload();
//if you are not playing NO
	} else { 
		playing = true;
		//show the score to 0
		score = 0;
		document.getElementById('score-value').innerHTML = score;
		//show the countdown box 
		show('time-remaining');
			//set timeremaining to 10
			timeremaining = 20;
			document.getElementById('time-remaining-value').innerHTML = timeremaining;
			hide('gameover');
			//start countdown
			//change the button to reset
		    document.getElementById('start-reset').innerHTML = "Reset Game";
			startCountDown();
        
		
		//generate QA
		generateQA();
			
		

	}
}

//start and reduce countdown by 1 sec
function startCountDown() {
	counter = setInterval(function() {
		timeremaining --;
		document.getElementById('time-remaining-value').innerHTML = timeremaining;
		if (timeremaining === 0) {
			stopCountDown();
			document.getElementById('gameover').innerHTML ="<p>Game Over<p>Your score is:" + score + "</p></p>";
			show('gameover');
			hide('time-remaining');
			hide('correct');
			hide('wrong');
			playing = false;
			document.getElementById('start-reset').innerHTML ="Start Game";

		}
	},1000)
}

function stopCountDown() {
	clearInterval(counter);
}

function hide(id) {
	document.getElementById(id).style.display = "none";
}

function show(id) {
	document.getElementById(id).style.display = "block";
}

function generateQA() {

	//generate 2 random numbers and multiply
	var x = Math.floor((Math.random() * 10) + 1);
	var y = Math.floor((Math.random() * 10) + 1);
	correctAnswer = x * y;
	document.getElementById('question').innerHTML = x + "x" + y;
	//find the position
	var correctPosition = Math.floor((Math.random() * 4) +1);
	//fill one box with correct answer
	document.getElementById('box' + correctPosition).innerHTML = correctAnswer;
	//fill the other box with wrong answer
	var answers = [correctAnswer];

	for (var i = 1; i < 5; i++) {
		if (i != correctPosition) {
			var wrongAnswer;
			//check if wrongAnswer is equal to correctanswer and if found continue the loop
			do {
               wrongAnswer = (Math.floor((Math.random() * 10) + 1)) *(Math.floor((Math.random() * 10) + 1));

			//}while(wrongAnswer == correctAnswer)
			}while(answers.indexOf(wrongAnswer) > -1)

			document.getElementById('box' + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);

		}
	}

}


//if we click on answer box 
for (var i = 1; i < 5; i++) {
	document.getElementById('box' + i).onclick = function() {
		//check if we are playing
		if(playing == true) { //yes
			if(this.innerHTML == correctAnswer) {
				//if correct answer
					//increase score by 1
					score++;
					document.getElementById('score-value').innerHTML = score;
					//show correct box for 1 sec and hide wrong box 
					hide('wrong');
					show('correct');
					setTimeout(function() {
						hide('correct');
					},1000);
					//generate new QA
	            	generateQA();

			} else {// if wrong answer
				hide('correct');
				//show try again box 1 sec 
				show('wrong');
				setTimeout(function(){
					hide('wrong');
				},1000);

			}

		}
	}
}

	
		
			









































/*
var playing = false;
var score;
var counter;
var timeremaining;
//if we click on start/ reset button
document.getElementById('start-reset').onclick = function() {
			//if we are playing
			if(playing === true) {
				location.reload(); // reload the page
			} else { // if we are not playing
				// change mode to playing
				playing = true;

				//set the score to 0
				score = 0; 
				document.getElementById('score-value').innerHTML = score; 

				//show the countdown box
				show('time-remaining'); 
				timeremaining = 10;
				document.getElementById('time-remaining-value').innerHTML = timeremaining;
				hide('gameover');

				//change button to reset
                document.getElementById('start-reset').innerHTML = "Reset Game";
                
                //start countdown
                startCountDown();
                //generate QA
                generateQA();


			}
}

// start counter
function startCountDown() {
     counter = setInterval(function() {
     timeremaining -= 1;
     document.getElementById('time-remaining-value').innerHTML = timeremaining;
     if (timeremaining == 0) { // game over 
     	stopCountDown();
     	show('gameover')
     	document.getElementById('gameover').innerHTML = "<p>Game Over</p><p>Your score is "+ score +"</p>";
     	
     	hide('time-remaining');
     	hide('correct');
     	hide('wrong');
     	playing = false;
     	document.getElementById('start-reset').innerHTML ="Start Game";
     }

     },1000);
}

//stop counter
function stopCountDown() {
	clearInterval(counter);
}

//show element
function show(id) {
	document.getElementById(id).style.display = "block";
}

//hide element
function hide(id) {
	document.getElementById(id).style.display = "none";
}

//Generate QA and multiple answers
function generateQA() {

}

*/				
				    
					//reduce the time by 1 sec in loops
						//if time left?
							//yes- continue
							//no - gameover 
					//change button to reset
					//generate new Q&A

//if we click on answer box 
//var question = [10,15,35,12];
//var answer = [10,15,35,12];
// var question = ["5 * 2", "3 * 5", "5 * 7", "6 * 2"];
// for (var i = 0; i < question.length; i++) {
// 	 for (var y = 0; y < answer.length; y++) {
// 	   if(question[i] == answer[y]) {
// 	   	 var x = 0;
//          document.getElementById('score-value').innerHTML = x++; // increase score by 1
//          document.getElementById('correct').style.display = block; // show correct box
//          var randomQuestion = Math.floor(Math.random() * 4);       // generate random number 0 - 3
//          for (var randomQuestion = 0; randomQuestion < question.length; randomQuestion++) {
//          	    document.getElementById('question').innerHTML = randomQuestion; //
//          }
       
// 	   } else {
// 	   	 document.getElementById('score-value').innerHTML = x;
// 	   }
// 	 }
// }
// var box1Value = document.getElementById('box1').
// $('.class').on('click', '#box1',function(){
// 	   var questionOne = 3 * 5;
// 	   if(questionOne === 15) {
          
// 	   }
// 	  var answer;
//       switch() {
//       	case 1:
//       		 answer = 
//       }
// });
			//if we are playing
				//yes
					//if correct answer
				
						//increase score by 1
						//show correct box for 1 sec
						//generate new Q&A
					//if wrong answer
						//show try again box for 1 sec 