/*
	This class holds a string containing the question and an array of possible answers.
	correctIndex is the array index of the correct answer.
*/
var QuizQA = {
	q: "This is a question",
	a: ["correct answer","incorrect answer"],
	correctIndex: 0
};


/*	Main quiz object - holds all questions, answers */
var quiz = {
	qA: [],

	addQuestion:function(question,answer,correct) {
		var newQuestion = Object.create(QuizQA);
		newQuestion.q = question;
		newQuestion.a = answer;
		newQuestion.correctIndex = correct;
		this.qA.push(newQuestion);
	},

	shuffleQuestions:function() {
		var i = 0, 
			j = 0, 
			temp = null;

		for (i = this.qA.length - 1; i > 0; i--) {
        	j = Math.floor(Math.random() * (i + 1));
        	temp = this.qA[i];
        	this.qA[i] = this.qA[j];
       	 	this.qA[j] = temp;
		}
	},

	nextQuestion:function() {
		if (this.qA.length > 1) {
			this.qA.shift();
		}
	}
};

/* Populates the quiz object with questions */
function populateQuestions() {
	// clear the quiz question array
	quiz.qA = [];

	quiz.addQuestion("Who is the antagonist in the 1980 film 'Friday the 13th'?",
					["Jason Voorhees","Mrs. Voorhees","Lark Voorhees","Michael Meyers"],1);

	quiz.addQuestion("What actor did NOT appear in the 1982 John Carpenter film 'The Thing'?",
					["Wilford Brimley","Keith David","Kurt Russell","Ed Harris"],3);

	quiz.addQuestion("In the 1982 film 'Creepshow', the farmer (played by Stephen King) finds what on his land?",
					["Vampires","A Meteor","A Cursed Artifact","El Chupacabra"],1);

	quiz.addQuestion("Complete the line: \"There ain't nothing in Room ______. But you ain't got no business going in there anyway. So stay out.\"",
					["237", "666", "1408", "227"],0);

	quiz.addQuestion("Due to its controversial content, this film was unavailable on home video in the UK for over 20 years.",
					["Scanners", "The Thing", "Texas Chainsaw Massacre", "The Exorcist"],3);

	quiz.addQuestion("What famous movie slasher was based in part on the real-life serial killer Ed Gein?",
					["Freddy Krueger", "Jason Voorhees", "Leatherface", "Michael Meyers"],2);

	quiz.addQuestion("Tim Burton's film 'Ed Wood' tells the story of the making of what sci-fi horror classic?",
					["It Conquered the World", "Them!", "Plan 9 from Outer Space", "Invasion of the Body Snatchers"],2);

	quiz.addQuestion("In 1968, this film started the zombie craze that continues to this day.",
					["Night of the Living Dead","Day of the Dead","Dawn of the Dead","Return of the Living Dead"],0);

	quiz.addQuestion("Which of the following films is based on a Stephen King story?",
					["The Thing","The Mist","The Blob","Scanners"],1);

	quiz.addQuestion("What tool does Ash use to remove his own hand in Evil Dead 2?",
					["Cleaver","Hatchet","Machete","Chainsaw"],3);

	quiz.addQuestion("Tippi Hedren's first film role was in what Alfred Hitchcock film?",
					["Psycho","The Birds","Rear Window","Vertigo"],1);

	quiz.addQuestion("The classic version of Frankenstein's Monster is portrayed by what actor?",
					["Boris Karloff","Bela Lugosi","Lon Chaney","Lon Chaney, Jr."],0);

	quiz.addQuestion("Plan 9 from Outer Space is the final performance of what classic horror actor?",
					["Boris Karloff","Bela Lugosi","Lon Chaney","Lon Chaney, Jr."],1);

	quiz.addQuestion("This 1954 film pits humanity against giant irradiated ants.",
					["Ants!","Those!","Them!","Big Bugs!"],2);

	quiz.addQuestion("The classic version of the Wolfman is portrayed by what actor?",
					["Boris Karloff","Bela Lugosi","Lon Chaney","Lon Chaney, Jr."],3);

	quiz.addQuestion("The classic version of the Phantom of the Opera is portrayed by what actor?",
					["Boris Karloff","Bela Lugosi","Lon Chaney","Lon Chaney, Jr."],2);

	quiz.addQuestion("This macabre lady presented Saturday night horror films on 1950s television.",
					["Elvira","Morticia","Lucretia","Vampira"],3);

	quiz.addQuestion("The town of Derry, Maine was terrorized by this demonic clown.",
					["Bobo","Pennywise","Bozo","Pinkerton"],1);

	quiz.addQuestion("Sam Loomis was the psychiatrist of what movie slasher?",
					["Michael Meyers","Freddy Krueger","Hannibal Lecter","Jason Voorhees"],0);

	quiz.addQuestion("Michael Meyers did NOT appear in which Halloween film?",
					["Halloween","Halloween 2","Halloween 3","Halloween: H20"],2);

	quiz.addQuestion("Michael Meyers wears a mask bearing the likeness of what celebrity?",
					["Elvis Presley","Leonard Nimoy","John Wayne","William Shatner"],3);

	quiz.addQuestion("In 'Silence of the Lambs', Hannibal Lecter was asked to help catch what serial killer?",
					["The Tooth Fairy","Buffalo Bill","The Dragon","Wild Bill"],1);

	console.log(quiz.qA.length + " questions added")

	// add a bit of randomness
	quiz.shuffleQuestions();
}
