function destroyer(arr) {
  const coordinates = Array.from(arguments).slice((arguments.length - 1) * -1);
  const remains = [];
  arguments[0].filter((elem) => {
    if(coordinates.indexOf(elem) === -1){
      remains.push(elem);
    }
  })
  return remains;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([2, 3, 2, 3], 2, 3);