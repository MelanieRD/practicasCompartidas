console.log("Hola");

/**---------------------------------------------------------------- FIBONACCI BY MY OWN CRITERIA 02/10/2024 ------------------------------------------------------*/
//Asi hago Fibonacci sin leer la documentación de Estructura de datos

function FibonacciNotDoc(): void {
  let nums: number[] = [];

  for (let i = 0; i < 12; i++) {
    if (nums.length < 2) {
      nums.push(i);
    } else {
      nums.push(nums[i - 2] + nums[i - 1]);
    }
  }

  console.log(nums);
}

//FibonacciNotDoc();
/**-------------------------------------------------------------------- FIBONACCI CON PRACTICAS DE LA DOC------------------------------------------------------*/

// Aplicando la primera práctica de la doc usando loops
function Fibbonacci1(): void {
  let numPrev: number = 0; //creamos variables segun la doc para guardar los dos numeros pevios
  let numPrev2: number = 1;
  let newNum: number = 0;

  console.log(numPrev);
  console.log(numPrev2);
  for (let Fibonacci in [...Array(18).keys()]) {
    newNum = numPrev + numPrev2;
    console.log(newNum);

    numPrev = numPrev2;
    numPrev2 = newNum;
  }
}

/* 
console.log([...Array(18).keys()]); // el spread me confverte el objeto iteraror en un array.
- Array(18): crea un arreglo vacio de logintuf 18
- .keys(): metodo que devuelve los indices del arreglo (NO LO VALORES DEL ARREGLO).

let keys = Array(18).keys();
for (let key of keys) {
  console.log(key);
}
*/

/**------------------------------------------------------------ PRACTICANDO EL SPEAD ... OH YEAH, OH YEAH, OH YEAAAAAAH!!--------------------------------------*/
//prueba del array spread
const numbers: number[] = [1, 2, 3, 4, 5];
const [one, two, ...rest] =
  numbers; /* aqui estamos desestructurando el array, es una caracteristica
de Js y Ts, que nos permite extraer valores de arreglos o objetos en variables indivudales
Podemos ver como se utiliza el array spread, le estamos diciendo que tome el resto de los valores.
*/

// console.log(one);
// console.log(two);
// console.log(rest);
/**-------------------------------------------------------------------------- FIBONACCI CON RECURSION SIN VER LA DOCUMENTACION------------------------------------------------------ */

let count = 0;
let numPrev = 0;
let numPrev1 = 1;
let current = 0;

// console.log(numPrev);
// console.log(numPrev1);

function FibonacciRECURSION(): void {
  count += 1;

  if (count < 19) {
    current = numPrev + numPrev1;
    console.log(current);
    numPrev = numPrev1;
    numPrev1 = current;
    FibonacciRECURSION();
  }
}

// FibonacciRECURSION();
/**-------------------------------------------------------------------------- FIBONACCI FIND NTH NUMBER CON RECURSION VIENDO LA DOCUMENTACIÓN ------------------------------------------------------ */

//finding The nth Fibbonacci Number using Recursion
// ESTE CODIGO ES LENTO PORQUE LLAMA DOS VECES LA FUNCION, LO QUE LA HACE HACER MUCHOS CALCULOS, LO QUE EMPEORA SI EL VALOR PASADO COMO ARGUMENTO ES UN NUMERO GRANDE.
function FConDoc(n: number): any {
  if (n <= 1) {
    return n;
  } else {
    return FConDoc(n - 1) + FConDoc(n - 2);
  }
}

// console.log(FConDoc(4));

/**--------------------------------------- COMANDOS QUE SIEMPRE UTILIZO Y A VECES OLVIDO JHAJAJAJAJAJA ------------------------------------------------------*/
//npx tsc -> genera archivo js de archivo ts
//npx tsc init -> tscongig generator
//ts-node -> ejecutar archivo ts
