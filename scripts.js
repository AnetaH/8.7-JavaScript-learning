// plik scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log('wszystkie imiona: ' + allNames);

var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push(newName);
	console.log('wszytkie imiona po dodaniu nowego: ' + allNames);
} else {
	console.log('takie imię istnieje już w zbiorze');
}