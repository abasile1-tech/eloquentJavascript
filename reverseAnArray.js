/* 
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*/

function reverseArray (array) {
	let reversed = [];
	for (let i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	}
	return reversed;
}

function reverseArrayInPlace (array) {
	array = reverseArray (array);
	return array;
}

let array1 = [1,2,3,4,5];
let array2 = reverseArray(array1);
console.log("array1: ", array1);
console.log("array2: ", array2);
let array3 = [1,2,3,4,5,6,7,8,9,10];
let array4 = reverseArrayInPlace(array3);
console.log("array3: ", array3);
console.log("array4: ", array4);
