function dropElements(arr, func) {
  let find = arr.findIndex(func);
  if(find === -1){
    return []
  }
  return arr.slice(find);
}

dropElements([1, 2, 3], function(n) {return n < 3; });