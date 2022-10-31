
//Should this work if the character at index 0 is equal to a space? It looks like that it's not supposed to add the target string to the end of the string, only if the space occurs between letters / words. 

//First, create the method
function replaceSpaces(string){
  //solve this if it was just one space
  let str = '';
  
  for (let x = 0; x < string.length; x++){
    if (string[x] === ' ' && string[x+1] !== ' ' && string[x+1] !== undefined){
      str += '%20';
    } else {
      if (string[x] === ' '){
        continue;
      }
      str += string[x];
    }
  }
  return str;
}

console.log(replaceSpaces("Mr John Smith     "));
