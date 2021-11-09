function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  return collection.filter(elem => {
    for (let i = 0; i < Object.keys(source).length; i++){
      if(!elem.hasOwnProperty(Object.keys(source)[i]) ||
      elem[Object.keys(source)[i]] !== source[Object.keys(source)[i]]){
        return false;
      }
    }
    return true;
  })
  // Only change code above this line
  return arr;
}
whatIsInAName([ { first: "Romeo", last: "Montague" },
                { first: "Mercutio", last: null },
                { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


