import prompt from "./prompt";

function iterativeFibonacci(num: number): number | number[] {
  if (num === 0) return 0;
  if (num === 1) return [0, 1];

  let result = [0, 1];

  for (let i = 1; i < num-1; i++) {
    result.push(result[i-1] + result[i]);
  }

  return result;
}

function recursiveFibonacci(num: number, arr = [0, 1]): number | number[] {
  if (num === 0) return 0;
  if (num === 1) return [0, 1];
  if (arr.length >= num) return arr;

  const fibResult = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(fibResult);
  return recursiveFibonacci(num, arr);
}
    
prompt("Enter a number:\n")
  .then((value) => console.log(recursiveFibonacci(Number(value))))


