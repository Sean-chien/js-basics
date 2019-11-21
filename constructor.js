console.log('Hello World');

function person(name, height) {
    this.name = name;
    this.height = height;
}
// (1) about boy
return {
    height: 200
}
// (2)
return 200

// (1) about girl
return {
    height: 170
}
return 175

var boy = new person('Keit', 180);
console.log(name); // Keit
console.log(height); // 180 -> second height will be 200
                    // Second return will skip, and return 180
var girl = new person('Candy', 160);
console.log(name); // Candy
console.log(height); // 160 -> 170                

                    

// Object
// let, var, const
// can use same method, but there are different value
// const circle = {
//     radius: 2,
//     location: {
//         x: 2,
//         y: 2
//     }
    
// };

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };    
}
// First function 
function createJelly() {
    return {
        type: 'jelly',
        color: 'red',
        scoops: 3
    };
}
// Second function
function createIceCream() {
    return {
        type: 'IceCream',
        color: 'green',
        scoops: 3,
        flavour
    };
}
// new function include first and second
function createDessert() {
    return {
        type: 'Dessert',
        bowl: [createJelly(), createIceCream()]
    };
}
// extend -> A trifle is a dessert.
// (1)
function Trifle() {
    Dessert.apply(this, arguments);
}

Trifle.prototype = Dessert.prototype;

// (2)
class Trifle extends Dessert {
    constructor() {
        super();
    }
}

// A trifle *has* layers of jelly, custard and cream. It also *has a* topping.
function createTrifle() {
    return {
        type: 'trifle',
        layers: [createIceCream(), createJelly()],
        topping: createAlmonds()
    };
}
// Constructor function -> 
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}