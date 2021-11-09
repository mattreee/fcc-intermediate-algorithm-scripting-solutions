function convertHTML(str) {
  let specChar = ['&', '<', '>', '\"', "\'"];
  let htmlEnt = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
  
  let strArr = Array.from(str).map(elem => {
    if(specChar.indexOf(elem) !== -1){
      return htmlEnt[specChar.indexOf(elem)];
    }
    return elem;
  })
  return strArr.join('');
}

convertHTML("Dolce & Gabbana");