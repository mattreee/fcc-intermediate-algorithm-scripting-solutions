function diffArray(arr1, arr2) {
  const newArr = [];
  arr2.forEach(elem => {
    if(arr1.indexOf(elem) === -1){
      newArr.push(elem);
    }
  })
  arr1.forEach(elem => {
    if(arr2.indexOf(elem) === -1){
      newArr.push(elem);
    }
  })
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);