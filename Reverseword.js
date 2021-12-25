function reverseInPlace(str) {
  let lower = str.toLowerCase();
  let words = [];
  words = lower.match(/\S+/g);
  let result = "";
  for (let i = 0; i < words.length; i++) {
      console.log(result)
     result += words[i].split('').reverse().join('') + " ";
  }
  return result
}
console.log(reverseInPlace("I am A Great human"))