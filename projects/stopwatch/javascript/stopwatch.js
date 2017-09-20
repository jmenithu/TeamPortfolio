


$(function(){
	//variables 
		var mode = 0;//App mode
		var timeCounter = 0;//time counter
		var lapCounter = 0;//lap counter
		var action;//variables for setInterval
		var lapNumber = 0;//number of laps
		//minutes,seconds,centiseconds for time and lap
		var timeMinutes,timeSeconds,timeCentiseconds,
			lapMinutes,lapSeconds,lapCentiseconds;

	//on App load show Start and Lap buttons and hide others
	hideshowButtons('#startButton', '#lapButton');
	//click on startButton
	$('#startButton').click(function(){
		//mode on
		 mode = 1;
		//show stop and lap buttons
		 hideshowButtons('#stopButton', '#lapButton');
		//start counter
		startAction();
	});
		
	//click on stopButton
	$('#stopButton').click(function(){
		//show resume and reset buttons
		hideshowButtons('#resumeButton', '#resetButton');
		//stop counter
		clearInterval(action);
	});
		
	//click on resumeButton
	$('#resumeButton').click(function(){
		//show stop and lap buttons
		hideshowButtons('#stopButton', '#lapButton');
		//start action
		startAction();
	});
	
	//click on resetButon
	$('#resetButton').click(function(){
		//reload the page
		location.reload();
	});
	   
	//click on lapButton
	$('#lapButton').click(function() {
		//if mode is ON
		if(mode) {
			//stop action
			clearInterval(action);
			//resetLap and 
			lapCounter = 0;
			//print lap details
			addLap();
			//start action
			startAction();
		}
			
	});
		

	//function
	//hideshowButtons only show two buttons
	function hideshowButtons(x,y) {
		$('.controls').hide();
		$(x).show();
	    $(y).show();

	}

	// start the counter
	function startAction() {
		action = setInterval(function(){
			timeCounter++;
			// To limit to 100 minutes [ 100 * sec * centisecs]
			if(timeCounter == 100 * 60 * 100) {
				timeCounter = 0;
			}
			lapCounter++;
			// To limit to 100 minutes [ 100 * sec * centisecs]
			if(lapCounter == 100 * 60 * 100) {
				lapCounter = 0;
			}
			updateTime();
		},10);
	}

	//updateTime: converts counters to min,sec,centisec
	//1 min - 60 sec
	//1 sec - 100 centisec
	function updateTime() {
	 // For Time
	 //1 min = 60 * 100 = 6000 centisecs
	 //to get number of min
	 timeMinutes = Math.floor(timeCounter/ 6000);
	 //1 sec = 100 centisecs
	 //to get number of sec remainder of timecounter / 100
	 timeSeconds = Math.floor((timeCounter%6000)/100);
	 //to get number of centisecs remainder to timeseconds 
	 timeCentiseconds = (timeCounter%6000)%100;

	 $('#timeMinute').text(format(timeMinutes));
	 $('#timeSecond').text(format(timeSeconds));
	 $('#timeCentisecond').text(format(timeCentiseconds));

	 // For Lap
	 //1 min = 60 * 100 = 6000 centisecs
	 //to get number of min
	 lapMinutes = Math.floor(lapCounter/ 6000);
	 //1 sec = 100 centisecs
	 //to get number of sec remainder of timecounter / 100
	 lapSeconds = Math.floor((lapCounter%6000)/100);
	 //to get number of centisecs remainder to timeseconds 
	 lapCentiseconds = (lapCounter%6000)%100;

	 $('#lapMinute').text(format(lapMinutes));
	 $('#lapSecond').text(format(lapSeconds));
	 $('#lapCentisecond').text(format(lapCentiseconds));


	}

	//format number to get double digit always 
	function format(number) {
		if(number < 10) {
			return '0' + number;
		} else {
			return number;
		}
	}

	//add lap function: print lap details inside the lap box
	function addLap() {
		lapNumber++;
		var myLapDetails ='<div class="lap">'+
								'<div class="laptitle">'+
									'Lap' + lapNumber +
								'</div>'+

								'<div class="laptime">'+
									'<span>'+
										format(lapMinutes) +
									'</span>'+
									':<span>'+
										format(lapSeconds) +
									'</span>'+
									':<span>'+
										format(lapCentiseconds) +
									'</span>'+
								'</div>' +
						'</div>';
		$(myLapDetails).appendTo('#lapsLog');
	}

	
});
