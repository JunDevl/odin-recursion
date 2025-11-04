import prompt from "./prompt";

function mergeSort(unsorted: number[]): number[] {
  if (unsorted.length <= 1) return unsorted;

  const left = mergeSort(unsorted.slice(0, (unsorted.length) / 2));
  const right = mergeSort(unsorted.slice((unsorted.length) / 2, unsorted.length));

  const sorted = [] 

  let i = 0;
  let j = 0;

  while (i <= left.length && j <= right.length && (left[i] !== undefined || right[j] !== undefined)) {
    if (left[i] <= right[j] || right[j] === undefined) {
      sorted.push(left[i])
      i++;
      continue;
    }

    if (right[j] <= left[i] || left[i] === undefined) {
      sorted.push(right[j])
      j++;
      continue;
    }
  }

  return sorted;
}

prompt("Enter an array:\n")
  .then((value) => console.log(mergeSort(JSON.parse(value as string))))