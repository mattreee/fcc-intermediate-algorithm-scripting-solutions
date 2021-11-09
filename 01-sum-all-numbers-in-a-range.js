function sumAll(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let forHolder = [];
  for (let i = 0; i <= sorted[sorted.length - 1]; i++){
    forHolder.push(i);
  }
  let toSum = forHolder.slice(sorted[0]).reduce((total, curr) => total + curr);
  return toSum;
}

sumAll([10, 5]);