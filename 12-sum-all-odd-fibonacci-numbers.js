function sumFibs(num) {
  let result = 0;
  let prev = 0;
  let curr = 1;
  while(curr <= num){
    if(curr % 2 !== 0){
      result += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
  return result;
}

sumFibs(4);