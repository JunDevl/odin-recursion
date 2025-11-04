import prompt from "./prompt";

function mergeSort(unsorted: number[]): number[] {
  if (unsorted.length <= 1) return unsorted;

  const left = mergeSort(unsorted.slice(0, (unsorted.length) / 2));
  const right = mergeSort(unsorted.slice((unsorted.length) / 2, unsorted.length));

  const sorted = [] 

  let leftIndex = 0;
  let rightIndex = leftIndex;
  for (;leftIndex <= left.length; leftIndex++) {
    sorted.push(left[i] < right[i])
  }

  return sorted;
}

prompt("Enter an array:\n")
  .then((value) => console.log(mergeSort(JSON.parse(value as string))))