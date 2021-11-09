function binaryAgent(str) {
  const strArr = str.split(' ');
  const decimalValue = strArr.map(toDecimal);
  const characters = decimalValue.map(toCharat);

  function toDecimal(binary){
    let count = 0;
    let splitBinary = binary.split('').reverse();
    
    splitBinary.forEach((elem, index) => {
      if (elem == true){
        count += 2 ** index
      }
    })
    return count;
  }

  function toCharat(value){
    return String.fromCharCode(value);
  }

  return characters.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");