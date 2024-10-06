let array = [9, 8, 10, 2, 4, 5, 6, 7, 1, 20, 3];

/**----------------------------------------------------------------  BUBBLE SORT BY MY OWN CRITERIA 03/10/2024 ------------------------------------------------------*/
// let numIzq = 0;
// let numDer = 0;
// let arraylength = array.length;

// function bubbleSortOwnCriteria() {
//   for (let o = arraylength; o > 0; o--) {
//     for (let i = 0; i < arraylength; i++) {
//       numIzq = array[i];
//       numDer = array[i + 1];

//       if (numIzq > numDer) {
//         array.splice(i, 1, numDer);
//         array.splice(i + 1, 1, numIzq);
//       }
//     }
//   }

//   console.log(array);
// }
// bubbleSortOwnCriteria();
/**----------------------------------------------------------------  BUBBLE SORT AFTER READING THE DOC ------------------------------------------------------*/

// vamos a practicar el ciclo for in con este bubble sort
function BubbleAfterDoc() {
  // Ojito: num devuelve el index
  for (let i in array) {
    for (let num in array) {
      if (array[num] > array[parseInt(num) + 1]) {
        let num2 = array[parseInt(num) + 1];

        array[parseInt(num) + 1] = array[num];
        array[num] = num2;
      }
    }
  }
  console.log(array);
}

BubbleAfterDoc();

// me gusta el for in hshshs
// array[parseInt(num) + 1],  (array[num] = array[num]), array[parseInt(num) + 1];  | Esto es lo mismo que :  let num2 = array[parseInt(num) + 1]; array[parseInt(num) + 1] = array[num]; array[num] = num2; pero mas corto
// YAAAAAAAAAAAAAAAy hice el bubble Sort yo solita sin ayuda, ahora a leer la doc.
