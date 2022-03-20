class Calculadora {
    constructor() {
    }
    
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num, exp) {
        let numero = num;
        for (var i = 1; i < exp; i++) {
            numero = numero * num;
        }
        return numero;
    }
}