;
(function () {
	"use strict";
	let leftDoor = $('.ba-main-game__left-door');
	let rightDoor = $('.ba-main-game__right-door');
	let player = $('.ba-main-game__player');
	let bottom_of_player = $('.ba-main-game__bottom');
	let questionBox = $('.ba-main-game__text-box');
	let enemy = $('.ba-main-game__enemy');
	let question_label = $('.question');
	let answer_label = $('.answer');
	let correctAnswer;

	startVisibility();

	const xhr = new XMLHttpRequest();
	let answers;
	let questions;

	xhr.open('GET', '../data/db.json');
	xhr.send();
	xhr.onload = function () {
		let db = JSON.parse(this.responseText);
		questions = db[0];
		answers = db[1];
	}

	document.onkeydown = function key(event) {
		if (event.keyCode === 27) {
			//Esc
			location.href = '/';
		} else if (event.keyCode === 32) {
			//Space
			enemy.fadeIn(1000);
			generateQuestion();
		}
	}

	function generateQuestion() {
		let n = getRandom(questions.length);
		question_label.text(questions[n].question);
		answer_label.text(answers[getRandom(answers.length)]);
		correctAnswer = questions[n].correctAnswer;
	}

	function getRandom(max) {
		return Math.floor(Math.random() * max);
	}

	function startVisibility() {
		leftDoor.fadeIn(1000);
		rightDoor.fadeIn(1000);
		setTimeout(function () {
			player.fadeIn(1000);
			bottom_of_player.fadeIn(1000);
		}, 1000);
		setTimeout(function () {
			questionBox.fadeIn(1000);
		}, 2000);
	}
})($);