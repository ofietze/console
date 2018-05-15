// =====================
// Create required vars
// =====================
var output = $('.output');
var input = $('textarea.input');
var toOutput;

// Creates the event listner for the comands ==
// Yes this is a long one - could do with some
// improvements ===============================
input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		//console.log(inputVal);

		if (inputVal == "help") {
			help();
			input.val('');
		} else if (inputVal == "ping" || inputVal.startsWith("cd games") === true) {
			pong();
			input.val('');
		} else if (inputVal == "ls") {
			ls();
			input.val('');
		} else if (inputVal.startsWith("cd porn") === true) {
			Output('<span class="red">You dirty !#@%! </span>');
			input.val('');
		}else if (inputVal.startsWith("cd uni") === true) {
			Output('<span class="green">This folder is empty. Start studying</span>');
			input.val('');
		}else if (inputVal == "clear") {
			clearConsole();
			input.val('');
		} else if (inputVal.startsWith("vim") === true || inputVal.startsWith("nvim") === true) {
			Output('<span class="red">Alert! Medieval editor detected!</span><br><span class="green">I\'ll show you a proper editor.</span>');
			setTimeout(function() {
				window.open('https://atom.io');
			}, 2000);
			input.val('');
		} else if (inputVal.startsWith("exit") === true) {
			Output('<span class="green">Goodbye! Comeback soon.</span>');
			setTimeout(function() {
				window.open('https://github.com/ofietze');
			}, 1000);
		} else if (inputVal.startsWith("cd") === true) {
			Output('<span class="red">usage: cd [dir]</span>');
			input.val('');
		} else {
			Output('<span>command not found</span></br>');
			input.val('');
		}
	}
});

// functions related to the commands typed
// =======================================

//
function ls() {
	Output('<pre class="blue">porn		uni		games</pre><pre class="green">memes.txt</pre>');
}

//clears the screen
function clearConsole() {
	output.html("");
	Output('<span>clear</span></br>');
}

// prints out a list of "all" comands available
function help() {
	var commandsArray = ['BullshitBash, version 42.4.2.0', 'These shell commands are defined internally.  Type \'help \' to see this list.', 'help: List of available commands', '>cd [dir]', '>clear', '>help', '>ls', '>nvim', '>vim', '>exit'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span class="green">' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
}

// prints the result for the pong command
function pong() {
	Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}


// Prints out the result of the command into the output div
function Output(data) {
	$(data).appendTo(output);
}
