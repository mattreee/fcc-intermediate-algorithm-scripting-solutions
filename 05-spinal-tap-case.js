function spinalCase(str) {
  const arr = Array.from(str.split(/\s|_?(?=[A-Z])/g));
  console.log(arr);
  return arr.join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("thisIsSpinalTap");
spinalCase("AllThe-small Things");