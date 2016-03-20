function askQuestion() {


	var firstName = prompt('What is your first name');
	var lastName = prompt ('What is your last name');
	var fullName = firstName + ' ' + lastName; 
	// create ' ' to create space between the two inputs

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');
	} else if (age >= 13) {

		console.log('User is a teenager');
	} else if (age >= 0) {

		console.log('User is a child');
	}
	//Curly bracket is determined by bracket prompt user input


	if (firstName === 'General' && lastName !== 'Assembly') {
		console.log ('Greetings General!');
	} //Three equal signs to be really sure that value and type is not excluded


	var faveColour = prompt ('What is your favourite colour?');

	if (faveColour == 'red'||
		faveColour == 'blue'||
		faveColour == 'green'||
		faveColour == 'yellow'){
		$('h1').css('color', faveColour);
	}
}



//when the page has loaded
$(function() {

	$('img').on('click',askQuestion);


	//hide all the sections 
	$('h3').not(':first').next().hide();

	//when the user clicks an h3
	$('h3').on('click', function() {

		//toggle the next section
		$(this).next().slideToggle(1000);


	});


});
