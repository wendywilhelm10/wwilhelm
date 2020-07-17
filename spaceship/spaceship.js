let guessLetter = document.getElementById('guessLetter');
let letters = document.getElementById('letters');
let word = document.getElementById('displayWord');
let singleLetter = false;
let multiLetters = false;
const guesses = [];
const wordLetters = [];
let secretWordArr = [];
let lettersCorrect = 0;

let secretWord = getWord();
let spaceship = [ ...document.querySelectorAll('path, circle, line') ];
displayAreaWord();

console.log('secret word ' + secretWord);

console.log('after calling displayWord');

function getWord() {
	var word = sessionStorage.getItem('sent');
	// word = 'secret';
	console.log(word);
	secretWordArr = word.toUpperCase().split('');
	console.log(secretWordArr);
	return word;
}

function displayAreaWord() {
	for (let i = 0; i < secretWord.length; i++) {
		let node = document.createElement('LI');
		word.appendChild(node);
		wordLetters.push(word.appendChild(node));
	}
}

function checkLetter() {
	let letter = guessLetter.value.toUpperCase();

	if (letterValidation(letter, guessLetter.value.length)) return;

	addLetterGuessed(letter);
	checkLetterInWord(letter);
}

function letterValidation(letterGuessed, inputLength) {
	if (inputLength > 1) {
		multiLetters = true;
	}

	if (inputLength === 0 || multiLetters) {
		if (inputLength === 0) {
			multiLetters = false;
		}
		return true;
	}

	if (letterGuessed < 'A' || letterGuessed > 'Z') {
		alert(letterGuessed + ' is not a valid letter');
		return true;
	}

	if (guesses.includes(letterGuessed)) {
		alert(letterGuessed + ' was already guessed');
		return true;
	}

	return false;
}

function addLetterGuessed(letterGuessed) {
	let node = document.createElement('LI');
	let textnode = document.createTextNode(letterGuessed);
	node.appendChild(textnode);
	letters.appendChild(node);
	guesses.push(letterGuessed);
}

function checkLetterInWord(letterGuessed) {
	let letterFound = false;

	for (let i = 0; i < secretWordArr.length; i++) {
		if (letterGuessed === secretWordArr[i]) {
			lettersCorrect++;
			let node = wordLetters[i];
			let textnode = document.createTextNode(letterGuessed);
			node.appendChild(textnode);
			letterFound = true;
		}
	}

	if (!letterFound) {
		if (drawSegment()) {
			setTimeout(function() {
				alert('Too bad, you did not guess the word');
			}, 100);

			guessLetter.disabled = true;
			displayWord();
		}
	}

	if (lettersCorrect === secretWordArr.length) {
		setTimeout(function() {
			alert('You guessed the word!!');
		}, 300);

		guessLetter.disabled = true;
	}
}

function drawSegment() {
	let count = 0;
	for (node of spaceship) {
		if (!node.classList.contains('show')) {
			node.classList.add('show');
			count++;
			break;
		}
		count++;
	}

	if (count === spaceship.length) {
		return true;
	}
	return false;
}

function displayWord() {
	for (let i = 0; i < wordLetters.length; i++) {
		let node = wordLetters[i];
		if (!node.hasChildNodes()) {
			let textnode = document.createTextNode(secretWord[i]);
			node.appendChild(textnode);
		}
	}
}
