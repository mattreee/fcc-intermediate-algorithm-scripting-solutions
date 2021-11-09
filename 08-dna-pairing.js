function pairElement(str) {
  let array = Array.from(str);

  let pairA = ['A', 'T']
  let pairT = ['T', 'A']
  let pairG = ['G', 'C']
  let pairC = ['C', 'G']

  const pairing = array.map(elem => {
    if(elem === 'A') return pairA;
    if(elem === 'T') return pairT;
    if(elem === 'G') return pairG;
    if(elem === 'C') return pairC;
  })
  return pairing;
}

pairElement("GCG");