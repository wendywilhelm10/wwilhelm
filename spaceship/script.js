let hide = document.querySelector('#hide');
let word = document.querySelector('#secretWord');
let submit = document.querySelector('#submit');

hide.addEventListener('click', function() {
	console.log('clicked hide button');
	console.log('button type ' + word.type);

	if (word.type === 'password') {
		word.type = 'text';
		hide.innerHTML = 'Hide';
	} else {
		word.type = 'password';
		hide.innerHTML = 'Unhide';
	}
});

submit.addEventListener('click', function(e) {
	console.log('clicked on submit button');
	console.log(word);
	console.dir(word);
	console.dir(word.value);
	let secretWord = word.value;
	console.log('secret word ' + secretWord);

	sessionStorage.setItem('sent', secretWord);

	// window.open('hangman.html', '_self');
	window.open('spaceship.html', '_self');
});
