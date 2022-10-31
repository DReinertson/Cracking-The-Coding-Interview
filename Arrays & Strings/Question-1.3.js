
//Should this work if the character at index 0 is equal to a space? It looks like that it's not supposed to add the target string to the end of the string, only if the space occurs between letters / words. 

//First, create the method
function replaceSpaces(string){
  //solve this if it was just one space
  console.log(string);
  
  for (let x = 0; x < string.length; x++){
    console.log("string[x]: ", string[x]);
    if (string[x] === " "){
      console.log('matches: ');
      string.setCharAt(x, 0, '%$20');
    }
    console.log("string in loop: ", string);
  }
}

console.log(replaceSpaces("Mr John Smith     "));
