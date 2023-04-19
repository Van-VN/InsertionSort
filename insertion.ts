function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberToInsert;
    console.log(`Swap ${array[j]} with ${numberToInsert}`);
    console.log(`Current Array: ${array}\n`);
  }
  return array;
}

let testArray: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray.push(Math.round(Math.random() * 100));
}

console.log(`Starting Array: ${testArray}\n`);
console.log(insertionSort(testArray));
