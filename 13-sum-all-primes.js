function sumPrimes(num) {
  //by trial division
  //https://en.wikipedia.org/wiki/Prime_number#Trial_division
  const numArr = makeArray(num);

  const primeArr = numArr.map(elem => {
    return isPrime(elem);
  }).filter(elem => {
    if(elem != undefined){
      return elem;
    }
  })

  function makeArray(num){
    let arr = [];
    for (let i = 2; i <= num; i++){
      arr.push(i);
    }
    return arr;
  }

  function isPrime(number){
    let numberRootFloor = Math.floor(Math.sqrt(number));
    let upToRootArr = [];

    for( let i = 2; i <= numberRootFloor; i++){
      upToRootArr.push(i);
    }

    let p = upToRootArr.map(elem => {
      return number / elem;
    }).every(elem => {
      if(Number.isInteger(elem)){
        return false;
      } else {
        return true;
      }
    })

    if(p === true){
      return number;
    }
  }

  return primeArr.reduce((a, b) => a + b);
}

sumPrimes(10);