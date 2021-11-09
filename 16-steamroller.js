function steamrollArray(arr) {
  const arrLength = arr.length;
  const result = [];

  for (let i = 0; i < arrLength; i++){
    if(Array.isArray(arr[i]) === false){
      result.push(arr[i])
    } else {
      result.push(nested(arr[i], arr[i].length));
    }
  }

  function nested(arr, length){
    for (let i = 0; i < length; i++){
      if(Array.isArray(arr[i]) === false){
        result.push(arr[i])
      } else {
        result.push(nested(arr[i], arr[i].length))
      }
    }
  }

  return result.filter(elem => { if(elem !== undefined) return elem});
}

steamrollArray([1, [2], [3, [[4]]]]);