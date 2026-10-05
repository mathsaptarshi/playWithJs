function anagram1(str1,str2){
  return str1.split('').sort().join('') == str2.split('').sort().join('')
}

function anagram(str1,str2){
  console.warn(str1,str2)
  // if(str1.length !== str2.length) return false;
  let strObj = {};
  for(ch of str1){
    strObj[ch]=(strObj[ch]||0)+1
  }
  console.log(111,strObj)
}
console.log(anagram1("anil","qwqwqw"));