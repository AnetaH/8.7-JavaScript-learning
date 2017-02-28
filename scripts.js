var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
var allNamesToString = allNames.join(', ');
console.log('wszystkie imiona: ' + allNamesToString);

var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
  var x = allNames.join(', ');
  console.log('wszystkie imiona po dodaniu nowego: ' + x);
} else {
  console.log('takie imię istnieje już w zbiorze');
}