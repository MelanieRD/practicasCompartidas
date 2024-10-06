let arr = [9, 8, 10, 2, 4, 5, 6, 7, 1, 20, 3];

/**----------------------------------------------------------------  SELECTION SORT BY MY OWN CRITERIA 05/10/2024 ------------------------------------------------------*/
// let newArr: number[] = [];
// let countY = arr.length - 1;

// function SelectionSortNoDoc() {
//   const smallest = Math.min(...arr);
//   newArr.push(
//     arr.splice(
//       arr.findIndex((num) => num === smallest),
//       1
//     )[0]
//   );
//   countY--;
//   if (countY >= 0) {
//     SelectionSortNoDoc();
//   } else {
//     console.log(newArr);
//   }
// }

// SelectionSortNoDoc();

/**----------------------------------------------------------------  SELECTION SORT USING FOR IN 06/10/2024 ------------------------------------------------------*/
// ta como rara esa de la doc
function SelectionSortDocForIn() {
  let min_index: any;
  let min_value: any;
  for (let i in arr) {
    min_index = i;

    for (let numIndex in arr) {
      if (arr[numIndex] < arr[min_index]) {
        min_index = numIndex;
        min_value = arr.splice(arr[min_index], 1)[0];
        arr.splice(parseInt(i), 0, min_value);
        console.log(arr);
        //  arr.push(arr.splice(arr[min_index], 1)[0]);
      }
    }
  }
}
SelectionSortDocForIn();
