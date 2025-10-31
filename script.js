
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
/*
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



*/

/*

function funcionesIngresadas(...funciones) {
    return funciones;
}


function f1() { return 1; }
function f2() { return 2; }
function f3() { return 3; }

let lista = funcionesIngresadas(f1, f2, f3);

console.log(lista);
*/
/*
function contarErrores(...funciones) {
    let errores = 0;
    let total = funciones.length;

    for (let f of funciones) {
        try {
            f();
        } catch (err) {
            errores++;
        }
    }

    let ratio;
    if (total > 0) {
        ratio = (errores / total) * 100 + "%";
    } else {
        ratio = "0%";
    }

    return {
        errores: errores,
        total: total,
        ratio: ratio
    };
}


function f1() { return 10; }
function f2() { throw new Error("falló"); }
function f3() { return 20; }
function f4() { throw new Error("otro error"); }
function f5() {throw new Error("Error")}
function f6() {throw new Error("Error")}

let cantidadErrores = contarErrores(f1, f2, f3, f4, f5, f6);
console.log("Errores encontrados:", cantidadErrores);

*/
/*
class Puerta {
    constructor(color, material, ancho, alto, grosor) {
        this.color = color;
        this.material = material;
        this.ancho = ancho;
        this.alto = alto;
        this.grosor = grosor;
        this.abierta = false;
        this.durabilidad = this.definirDurabilidad(material);
        this.rota = false;
    }

    definirDurabilidad(material) {
        switch (material) {
            case "madera": return 100;
            case "metal": return 200;
            case "vidrio": return 50;
            default: return 80;
        }
    }

    abrir() {
        if (this.rota) return console.log("La puerta está rota.");
        if (!this.abierta) {
            this.abierta = true;
            console.log("La puerta se abrió.");
        } else {
            console.log("La puerta ya estaba abierta.");
        }
    }

    cerrar() {
        if (this.rota) return console.log("La puerta está rota.");
        if (this.abierta) {
            this.abierta = false;
            console.log("La puerta se cerró.");
        } else {
            console.log("La puerta ya estaba cerrada.");
        }
    }

    pegarPortazo() {
        if (this.rota) return console.log("La puerta ya está rota.");
        console.log("¡Pegaste un portazo!");
        this.durabilidad -= 20;
        if (this.durabilidad <= 0) {
            this.rota = true;
            this.durabilidad = 0;
            console.log("¡La puerta se rompió por el portazo!");
        } else {
            console.log(`Durabilidad restante: ${this.durabilidad}`);
        }
    }
}

class PuertaBlindada extends Puerta {
    constructor(color, material, ancho, alto, grosor, nivelBlindaje) {
        super(color, material, ancho, alto, grosor);
        this.nivelBlindaje = nivelBlindaje;
        this.durabilidad *= nivelBlindaje;
        this.bloqueada = false;
    }
    
    abrir() {
        if (this.bloqueada) return console.log("No se puede abrir: la puerta está bloqueada.");
        super.abrir();
    }

    bloquear() {
        if (this.bloqueada){ 
           return console.log("La puerta ya está bloqueada.");
        }
        if (this.abierta) {
            console.log("No podés bloquear una puerta abierta. Cerrándola primero");
            super.cerrar();
        }
        this.bloqueada = true;
        console.log("Puerta bloqueada.");
    }

    desbloquear() {
        if (!this.bloqueada) {
            return console.log("La puerta ya está desbloqueada.");
        }
        this.bloqueada = false;
        console.log("La puerta blindada ha sido desbloqueada.");
    }
}


let puertaNormal = new Puerta("marrón", "madera", 90, 210, 4);
let puertaFuerte = new PuertaBlindada("gris", "metal", 100, 220, 5, 2);

puertaFuerte.abrir();
puertaFuerte.bloquear();
puertaFuerte.abrir();
puertaFuerte.cerrar();
puertaFuerte.desbloquear();
puertaFuerte.abrir();

*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
/*
function crearCirculo(x,y,r=50,color = "blue"){
ctx.beginPath();
ctx.arc(x, y, radio, 0, Math.PI * 2);
ctx.fillStyle = color; 
ctx.fill();
ctx.stroke();

}
*//*
function crear_Circulo_Aleatorio() {

  const radio = Math.floor(Math.random() * 50) + 10;

  const x = Math.random() * (canvas.width - 2 * radio) + radio;
  const y = Math.random() * (canvas.height - 2 * radio) + radio;

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;

  ctx.beginPath();
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
  
}

function crearCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const inputColor = document.getElementById("inputColor");
  const inputCantidad = document.getElementById("inputCantidad");

  const cantidad = parseInt(inputCantidad.value) || 1;

  for (let i = 0; i < cantidad; i++) {
    const radio = inputRadio.value
      ? parseInt(inputRadio.value)
      : Math.floor(Math.random() * 50) + 10;

    const x = Math.random() * (canvas.width - 2 * radio) + radio;
    const y = Math.random() * (canvas.height - 2 * radio) + radio;

    const color = inputColor.value;

    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}
*/
/*
function obtenerDatos() {
  const color = document.getElementById("inputColor").value;
  const cantidad = parseInt(document.getElementById("inputCantidad").value) || 1;
  const radio = document.getElementById("inputRadio").value
    ? parseInt(document.getElementById("inputRadio").value)
    : Math.floor(Math.random() * 50) + 10;

  return { color, cantidad, radio };
}

function crearCirculo() {
  const { color, cantidad, radio } = obtenerDatos();

  for (let i = 0; i < cantidad; i++) {
    const x = Math.random() * (canvas.width - 2 * radio) + radio;
    const y = Math.random() * (canvas.height - 2 * radio) + radio;

    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}
function crearCuadrado() {
  const { color, cantidad, radio } = obtenerDatos();

  for (let i = 0; i < cantidad; i++) {
    const x = Math.random() * (canvas.width - 2 * radio) + radio;
    const y = Math.random() * (canvas.height - 2 * radio) + radio;

    ctx.fillStyle = color;
    ctx.fillRect(x - radio, y - radio, radio * 2, radio * 2);
  }
}
function crearTriangulo() {
  const { color, cantidad, radio } = obtenerDatos();

  for (let i = 0; i < cantidad; i++) {
    const x = Math.random() * (canvas.width - 2 * radio) + radio;
    const y = Math.random() * (canvas.height - 2 * radio) + radio;

    ctx.beginPath();
    ctx.moveTo(x, y - radio);
    ctx.lineTo(x - radio, y + radio);
    ctx.lineTo(x + radio, y + radio);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function crearPoligono() {
  const { color, cantidad, radio } = obtenerDatos();

  for (let i = 0; i < cantidad; i++) {
    const x = Math.random() * (canvas.width - 2 * radio) + radio;
    const y = Math.random() * (canvas.height - 2 * radio) + radio;

    const lados = Math.floor(Math.random() * 5) + 3;
    ctx.beginPath();
    for (let j = 0; j < lados; j++) {
      const angulo = (j / lados) * 2 * Math.PI;
      const px = x + radio * Math.cos(angulo);
      const py = y + radio * Math.sin(angulo);
      if (j === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function crearFigura() {
  const figura = document.getElementById("figura").value;

  switch (figura) {
    case "circulo":
      crearCirculo();
      break;
    case "cuadrado":
      crearCuadrado();
      break;
    case "triangulo":
      crearTriangulo();
      break;
    case "poligono":
      crearPoligono();
      break;
    default:
  }
}

<label>Radio:</label>
    <input type="number" id="inputRadio" placeholder="aleatorio">

    <label>Color:</label>
    <input type="color" id="inputColor">

    <label>Cantidad:</label>
    <input type="number" id="inputCantidad" value="1">

    <select id="figura">
    <option value="">Elegir figura</option>
    <option value="cuadrado">Cuadrado</option>
    <option value="circulo">Círculo</option>
    <option value="triangulo">Triángulo</option>
    <option value="poligono">Polígono aleatorio</option>
    </select>

    <input type="button" value="Crear figura" onclick="crearFigura()">

*/
let modoOscuro = document.querySelector("button");

modoOscuro.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");
});