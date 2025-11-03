function iterativeFibonacci(num) {
    if (num === 0)
        return 0;
    if (num === 1)
        return [0, 1];
    var result = [0, 1];
    for (var i = 1; i < num - 1; i++) {
        result.push(result[i - 1] + result[i]);
    }
    return result;
}
function recursiveFibonacci(num, arr) {
    if (arr === void 0) { arr = [0, 1]; }
    if (num === 0)
        return 0;
    if (num === 1)
        return [0, 1];
    if (arr.length >= num)
        return arr;
    var fibResult = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(fibResult);
    return recursiveFibonacci(num, arr);
}
console.log(recursiveFibonacci(10));
