// This is my first JavaScript code.    
console.log('Hello World');
// let name = 'Mosh'; // String Literal
// let age = 30; // Number Literal
let isApproved = false; // or true Boolean Literal
let firstName = undefined;
let lastName = null;
let person = {
    name: 'Mosh',
    age: 30
};


// Objects
// Dot Notation
person.name = 'Mark';
person.age = 25;

// Bracket Notation
let selection = 'name';
person[selection] = 'John';
person['age'] = 35;

console.log(name);
console.log(person.name);

// Array
let selectedColors = ['red','blue','green'];
selectedColors[3] = 'white';
console.log(selectedColors);

// Function 
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');

function square(number) {
    return number * number;
}
console.log(square(2));