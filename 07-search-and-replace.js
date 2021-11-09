function myReplace(str, before, after) {
  let beforeCase = before.charAt(0);
  let afterCase = after.charAt(0).toUpperCase() + after.slice(1)
  if(beforeCase === beforeCase.toUpperCase()){
    return str.replace(before, afterCase);
  } else {
    return str.replace(before, after.toLowerCase());
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");