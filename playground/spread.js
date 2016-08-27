// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  return "Hi " + name + ", you are " + age;
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['James', 'Adelta'];
var final = [...names, 'Andre'];

final.forEach((name)=>{
  return console.log("Hi " + name);
})
