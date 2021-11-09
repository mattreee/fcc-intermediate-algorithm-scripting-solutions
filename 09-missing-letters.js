function fearNotLetter(str) {
  const firstIndex = str.charCodeAt(0);
  const lastIndex = str.charCodeAt(str.length - 1);
  const all = [];

  const strArr = Array.from(str).map(elem => {
    return elem.charCodeAt();
  })

  for (let i = firstIndex; i <= lastIndex; i++){
    all.push(i);
  }
  const missing = all.reduce((tot, curr) => tot + curr) - strArr.reduce((tot, curr) => tot + curr);

  if(missing === 0){
    return undefined;
  } else {
    return String.fromCharCode(missing);
  }
}

fearNotLetter("abce");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");