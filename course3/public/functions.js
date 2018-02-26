// DOM handling functions
let getInputValue = function (button, selector = '.input') {
	let inputGroup = button.closest('.input-group');
	return inputGroup.querySelector(selector).value;
};

let setOutputValue = function (button, out, selector = '.output') {
	let inputGroup = button.closest('.input-group');
	inputGroup.querySelector(selector).value = out;
};

// algorithm functions
let leapYear = function () {
	let input = getInputValue(this);
	let output = "";

	if ((input % 100 === 0)) {
		output = (input % 400 === 0);
	} else {
		output = (input % 4 === 0)
	}
	
	// set the output value
	setOutputValue(this, output === false ? input + ' Not leap Year' : input + ' is/was a Leap Year');
};

let fibonacci = function () {
	let number = getInputValue(this);

	let getFibPriorTo = (value) =>{
		let mem = 1,
			fib = [0,1];

		while(mem <=value){
			mem += fib[fib.length-2];
			if(mem<=value){
				fib.push(mem);
			}
		}
		return fib;
	};

	setOutputValue(this, getFibPriorTo(number).join(','));
};

let reverseString = function(){
	let input = getInputValue(this);
	let reverseString = input.split('').reverse().join('')
	setOutputValue(this, reverseString);
};

let isPalindrom = function(){
	let compareletters = () => {

		//Create array from the given string
		let input = getInputValue(this);

		//and reverse it
		let reversedInput = input.split('').reverse().join('');

		//compare the letters from the first array with it's reversed array
		for(var i=0; i<reversedInput.length; i++){
			return true ? input[i] == reversedInput[i] : false;
		}
	};
	
	if (true === compareletters()) {
		setOutputValue(this, "Palindrom");
	} else {
		setOutputValue(this, "Not palindrom");
	}
};



// Register click handlers
document.getElementById('leapYearBtn').onclick = leapYear;
document.getElementById('fibonacciBtn').onclick = fibonacci;
document.getElementById('reverseBtn').onclick = reverseString;
document.getElementById('palindromeBtn').onclick = isPalindrom;
