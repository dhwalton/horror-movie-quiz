/* Globals, Constants, etc */
var maxQuestions = 5;
var maxAnswers = 4;
var questionCount = 1;
var score = 0;
var fadeSpeed = 500;
var slowFadeSpeed = 2000;

/* plays sound based on audio ID */
function playSound(audioID) {
	$(audioID)[0].volume = 0.5;
  	$(audioID)[0].load();
  	$(audioID)[0].play();
}

/* adds a bit of theatrics to changing a question prompt */
function changePrompt(str) {
	$('div#prompt').fadeOut(fadeSpeed);
	setTimeout(function(){
    	$('div#prompt').children('p').text(str);
    	$('div#prompt').fadeIn(fadeSpeed);
	}, fadeSpeed);	
}


/*	Loads a question onto the board */
function loadQuestion(index) {
	// display the question
	changePrompt(quiz.qA[index].q);

	// display the answers
	$('div#answers').fadeOut(fadeSpeed);
	$('span#progress').fadeOut(fadeSpeed);
	setTimeout(function(){
		for (var i = 0; i < maxAnswers; i++) {
			$('div#answers button:nth-child(' + (i+1) + ')').text(quiz.qA[index].a[i]);
			$('span#progress').text("Question " + questionCount + " of " + maxQuestions);
			$('div#answers').fadeIn(fadeSpeed);
			$('span#progress').fadeIn(fadeSpeed);
			$('div#answers').children('button').removeClass('noClick');
		}
	}, fadeSpeed);
}


/* 	Begins a new game */
function newGame() {
	// reset the score
	score = 0;
	$('div#score img').remove();
	questionCount = 1;

	// reset the board
	$('div#new-game').fadeOut(fadeSpeed);
	$('div#score').fadeIn(fadeSpeed);

	// reset the questions
	populateQuestions();

	// load first question/answers
	loadQuestion(0);

	console.log("Quiz has been initialized");
}

$(document).ready(function() {
	$('div#container').fadeIn(fadeSpeed * 4);

	// remove placeholder text on prompt and buttons
	$('div#prompt').children('p').text("");
	$('div#answers').children('button').text("");

	// answer button click event handler
	$('#answers button').click(function(){

		// prevent clicks during fade transitions
		if ($('div#answers').children('button').hasClass('noClick')) return;
		$('div#answers').children('button').addClass('noClick');

		console.log("User chose '" + $(this).text() + "'");	

		// check for correct answer
		if ($(this).text().trim() == quiz.qA[0].a[quiz.qA[0].correctIndex]) {
			// correct answer
			console.log("correct index is " + quiz.qA[0].correctIndex + " - CORRECT!")

			// increase score
			score++;
			$('div#score').append('<img src="images/machete.svg" />');

			// do something awesome
			playSound('#correct-sound');
			$('div#correct-answer').fadeIn(fadeSpeed);
			$('div#correct-answer').fadeOut(slowFadeSpeed);

		} else {
			// incorrect answer
			console.log("correct index is " + quiz.qA[0].correctIndex + " - INCORRECT!")

			// do something even more awesome
			playSound('#incorrect-sound');
			$('div#incorrect-answer').fadeIn(fadeSpeed);
			$('div#incorrect-answer').fadeOut(slowFadeSpeed);

		}

		console.log("Score is " + score + "; questionCount = " + questionCount);

		// continue with another question?
		if (questionCount < maxQuestions) {
			// next question
			quiz.nextQuestion();
			loadQuestion(0);
		} else {
			// game over, man
			if (score == questionCount) {
				var endStr = "Great Job!";
			} else {
				var endStr = "Try Again!";
			}
			changePrompt("You got " + score + " machetes out of " + questionCount + "! " + endStr);
			$('div#answers').fadeOut(fadeSpeed);			
			$('div#new-game').fadeIn(fadeSpeed);
		}

		questionCount++;
	});

	$('#new-game button').click(function(){
		newGame();	
	});
});