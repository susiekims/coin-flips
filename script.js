$(document).ready(function() {
	console.log('ready!');
	// we need to:
	// keep track of count
	let count = 0;
	let goal;
	const checkGoal = () => {
		if ( count === goal ) {
			alert('gooooooal!!'); 
		}
	}


	// when user presses add button, we need to add 1 to count
	$('#add').on('click', function() {
		count++;
		$('.counter').text(count);
		checkGoal();
	});

	// when user presses subtract button, we need to subtract 1 from count
	$('#subtract').on('click', function() {
		if (count > 0) {
			count--;
			$('.counter').text(count);
			checkGoal();
		} else {
			alert('no negatives!');
		} 
	});

	// listen for submit on form
	// capture what the user addes as their goal
	$('form').on('submit', function(event) {
		event.preventDefault();
		goal = parseInt($('#goal').val());
	});

	// we need to check to see if user has reached the goal
	// if they have - alert them!



	// make sure the count is always updated for the user in html


});