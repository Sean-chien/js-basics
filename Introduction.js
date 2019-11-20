// First
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;
function getware(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// Second
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getware: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
employee.getware();