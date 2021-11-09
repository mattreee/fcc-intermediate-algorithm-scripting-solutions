function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstVowel = str.search(/[aeiou]/)
  const consonant = 'ay';
  const vowel = 'way';
  let pigStr = '';

  for (let i = 0; i < vowels.length; i++){
    if(str.charAt(0) == vowels[i]){
      return str + vowel;
    }
  }
  if(firstVowel === -1){
    return str + consonant;
  } else{
    let cluster = str.slice(0, firstVowel);
    pigStr = str.slice(firstVowel) + cluster + consonant;
  }
  return pigStr;
}