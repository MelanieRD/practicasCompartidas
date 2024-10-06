/**----------------------------------------------------------------  SELECTION SORT BY MY OWN CRITERIA 05/10/2024 ------------------------------------------------------*/
let arr = [9, 8, 10, 2, 4, 5, 6, 7, 1, 20, 3];
let newArr: number[] = [];
let countY = arr.length - 1;

function SelectionSortNoDoc() {
  const smallest = Math.min(...arr);
  newArr.push(
    arr.splice(
      arr.findIndex((num) => num === smallest),
      1
    )[0]
  );
  countY--;
  if (countY >= 0) {
    SelectionSortNoDoc();
  } else {
    console.log(newArr);
  }
}

SelectionSortNoDoc();
