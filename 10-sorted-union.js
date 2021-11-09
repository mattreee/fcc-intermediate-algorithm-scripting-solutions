function uniteUnique(...arr) {
  let result = [];
  arr.forEach(elem => {
    pushNumbers(elem);
  })
  function pushNumbers(array){
    array.forEach(elem => {
      if(result.indexOf(elem) === -1){
        result.push(elem);
      }
    })
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);