function palindrome(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  console.log(reverseStr);
  if(reverseStr === lowRegStr){
      return "palindrome";
  }return "not palindrome";;
}
console.log(palindrome("ibu bob ubi"));