function Calculator() {
    this.operations = {
      "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = function (expression) {
        ar = expression.split(' ')
        return this.operations[ar[1]](+ar[0], +ar[2])
    }
    this.addMethod = function (sign, f) {
        this.operations[sign] = f;
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 3");
console.log( result );


