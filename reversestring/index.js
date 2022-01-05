// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//let arr = str.split('');
	//arr = arr.reverse(); //only works on arrays. not strings. This is the easy way. or you can do this:
	let reversed = '';
	for(let character of str){ //es6. only used if every character needs to be addressed. go back to classic for loop or while loop if need to skip characters.
		reversed = character + reversed;
	}
	return reversed; //arr.join();
}

module.exports = reverse;