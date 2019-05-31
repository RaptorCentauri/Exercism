export const encode = (str, encodedString=``) => {
  if(str.length == 0){
    return encodedString
  }

  let encodedSubString;
  let count;

  for (let i = 0; i < str.length; i++) {
    if(str[i] != str[i+1]){
      encodedSubString = `${i+1 > 1 ? i+1 : ''}${str[i]}`;
      count = i+1;
      break;
    }
  }

  encodedString += encodedSubString;

  let newString = str.substring(count);

  return encode(newString, encodedString)

}


export const decode = (str, decodedString=``) => {
  if(str.length == 0){
    return decodedString
  }

  // let decodedSubString;
  let multiplier = ``;
  let subLetter;
  let count;

  for (let i = 0; i < str.length; i++) {
    if(isNaN(+str[i]) || str[i] === ' '){
      subLetter = str[i];
      count = i+1;
      break;
    }
    else{
      multiplier += str[i];
    }
  }


  decodedString += subLetter.repeat(+multiplier || 1);

  let newString = str.substring(count);
  return decode(newString, decodedString)


// return decodedString

}
