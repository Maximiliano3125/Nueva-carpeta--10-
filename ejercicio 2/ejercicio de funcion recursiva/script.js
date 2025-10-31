// función recursiva para calcular factorial
/*function factorial(n) {

    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


resultado=factorial(4)
console.log(resultado); 
*/

function factorial(n) {
    resultado = 1; 
    for (i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

resultado=factorial(4)
console.log(resultado);
resultado=factorial(5)
console.log(resultado);  