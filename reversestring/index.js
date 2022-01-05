// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION 1:
// function reverse(str){
// 	let arr = str.split('');
// 	arr.reverse();
// 	return arr.join('');
// }

//SOLUTION 2:
// function reverse(str) {
// 	let reversed = '';
// 	for(let character of str){ //es6. only used if every character needs to be addressed. go back to classic for loop or while loop if need to skip characters.
// 		reversed = character + reversed;
// 	}
// 	return reversed;
// }

//SOLUTION 3:
function reverse(str){
	debugger;
	return str.split('').reduce((reversed, elem) => {
		return reversed = elem + reversed;
	}, '');

	//this can be further simplified into the following:
	// return str.split('').reduce((reversed, elem) => reversed = elem + reversed, '');
}

// reverse("atlas"); //calling the function is necessary for debugger to properly debug function.

//STEPS TO DEBUG:
//1. Add 'debugger' statement to function.
//2. Call the function manually.
//3. In terminal, run 'node inspect index.js'
//4. To continue execution, press 'c' then 'enter'
//5. To see the value of variables, type 'repl' then 'enter'
//6. To exit 'repl', press 'Ctrl' + 'C'
//7. To exit debugger, press 'Ctrl' + 'C' x 2;

module.exports = reverse;