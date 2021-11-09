function addTogether() {
  const x = arguments[0];
  const y = arguments[1];

  if(typeof(x) !== 'number'){
    return undefined;
  }
  if (y === undefined){
    return (y) => addTogether(x, y)
  }
  if(typeof(y) !== 'number'){
    return undefined;
  }
  return x + y;
}

addTogether(2,3);