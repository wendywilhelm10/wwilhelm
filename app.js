let rc00 = document.querySelector('#rc00');
let rc01 = document.querySelector('#rc01');
let rc02 = document.querySelector('#rc02');
let rc10 = document.querySelector('#rc10');
let rc11 = document.querySelector('#rc11');
let rc12 = document.querySelector('#rc12');
let rc20 = document.querySelector('#rc20');
let rc21 = document.querySelector('#rc21');
let rc22 = document.querySelector('#rc22');
let move;
let num1;
let num2;

const row0 = [];
const row1 = [];
const row2 = [];

function changeText(tttElement, position) {
	console.log('tttElement ' + tttElement);
	if (tttElement.innerHTML !== '') {
		return;
	}

	if (move === undefined) {
		move = 'X';
	} else if (move === 'O') {
		move = 'X';
	} else {
		move = 'O';
	}

	tttElement.innerHTML = move;

	num1 = Number(position[0]);
	num2 = Number(position[1]);
	console.log('num1 ' + num1 + ' num2 ' + num2);

	console.log(row0[0]);
	switch (num1) {
		case 0:
			console.log('case 0');
			row0[num2] = move;
			break;
		case 1:
			console.log('case 1');
			row1[num2] = move;
			break;
		case 2:
			console.log('case 2');
			row2[num2] = move;
			break;
	}

	setTimeout(function() {
		checkWinner();
	}, 100);
}

function checkWinner() {
	// check rows are X or O
	if (
		(row0[0] === 'X' && row0[1] === 'X' && row0[2] === 'X') ||
		(row1[0] === 'X' && row1[1] === 'X' && row1[2] === 'X') ||
		(row2[0] === 'X' && row2[1] === 'X' && row2[2] === 'X') ||
		(row0[0] === 'O' && row0[1] === 'O' && row0[2] === 'O') ||
		(row1[0] === 'O' && row1[1] === 'O' && row1[2] === 'O') ||
		(row2[0] === 'O' && row2[1] === 'O' && row2[2] === 'O')
	) {
		announceWinner('Y');
	}

	// check columns are X or O
	if (
		(row0[0] === 'X' && row1[0] === 'X' && row2[0] === 'X') ||
		(row0[1] === 'X' && row1[1] === 'X' && row2[1] === 'X') ||
		(row0[2] === 'X' && row1[2] === 'X' && row2[2] === 'X') ||
		(row0[0] === 'O' && row1[0] === 'O' && row2[0] === 'O') ||
		(row0[1] === 'O' && row1[1] === 'O' && row2[1] === 'O') ||
		(row0[2] === 'O' && row1[2] === 'O' && row2[2] === 'O')
	) {
		announceWinner('Y');
	}

	// check diagonals are X or O
	if (
		(row0[0] === 'X' && row1[1] === 'X' && row2[2] === 'X') ||
		(row0[2] === 'X' && row1[1] === 'X' && row2[0] === 'X') ||
		(row0[0] === 'O' && row1[1] === 'O' && row2[2] === 'O') ||
		(row0[2] === 'O' && row1[1] === 'O' && row2[0] === 'O')
	) {
		announceWinner('Y');
	}

	// check if all boxes occupied but no winner
	if (
		row0[0] !== undefined &&
		row0[1] !== undefined &&
		row0[2] !== undefined &&
		row1[0] !== undefined &&
		row1[1] !== undefined &&
		row1[2] !== undefined &&
		row2[0] !== undefined &&
		row2[1] !== undefined &&
		row2[2] !== undefined
	) {
		announceWinner('N');
	}
}

function announceWinner(winner) {
	if (winner === 'Y') {
		alert(move + ' is the winner');
	} else {
		alert("No winner, it's a tie!");
	}

	let element;

	for (let i = 0; i <= 2; i++) {
		row0[i] = undefined;
		row1[i] = undefined;
		row2[i] = undefined;
	}

	rc00.innerHTML = '';
	rc01.innerHTML = '';
	rc02.innerHTML = '';
	rc10.innerHTML = '';
	rc11.innerHTML = '';
	rc12.innerHTML = '';
	rc20.innerHTML = '';
	rc21.innerHTML = '';
	rc22.innerHTML = '';
	move = undefined;
}

rc00.addEventListener('click', function(e) {
	changeText(rc00, '00');
});

rc01.addEventListener('click', function(e) {
	changeText(rc01, '01');
});

rc02.addEventListener('click', function(e) {
	changeText(rc02, '02');
});

rc10.addEventListener('click', function(e) {
	changeText(rc10, '10');
});

rc11.addEventListener('click', function(e) {
	changeText(rc11, '11');
});

rc12.addEventListener('click', function(e) {
	changeText(rc12, '12');
});

rc20.addEventListener('click', function(e) {
	changeText(rc20, '20');
});

rc21.addEventListener('click', function(e) {
	changeText(rc21, '21');
});

rc22.addEventListener('click', function(e) {
	changeText(rc22, '22');
});
