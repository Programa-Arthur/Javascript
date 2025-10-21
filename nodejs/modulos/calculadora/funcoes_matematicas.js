export function somar(num1,num2,num3) {
    return num1 + num2 + num3;
}

export function subtrair(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0){
        return "Erro: Divisão por zero!";
    } 
    return a / b;
}