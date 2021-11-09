function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  arr.forEach(applyMathematics);

  function applyMathematics(obj){
    let t = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM);
    delete obj.avgAlt;
    obj.orbitalPeriod = Math.round(t);
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);