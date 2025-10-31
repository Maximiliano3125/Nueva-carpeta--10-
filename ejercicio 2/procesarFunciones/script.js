
/*
a=()=> {
console.log("eje A")
}

b=()=>{
console.log("eje B")
}

function empaquetar(x,y){

    return ()=>{
        x()
        y()
    }
}

*/

function procesarFunciones(...funciones) {
    let suma = 0;
    let cantidad = funciones.length;

    for (let f of funciones) {
        suma += f();
    }

    let promedio;
    if (cantidad === 0) {
        promedio = 0;
    } else {
        promedio = suma / cantidad;
    }

    return {
        suma: suma,
        cantidad: cantidad,
        promedio: promedio
    };
}

a=()=>{
    return 10;
}
b=()=>{
    return 5;
}
c=()=>{
    return 100;
}
console.log(procesarFunciones(a,b));
console.log(procesarFunciones(b,a,c));
console.log(procesarFunciones(a,a,a,a,a,a,a,a,a));