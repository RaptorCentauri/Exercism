export const validate = (num) => {
  let total = 0;
  let numLength = Math.floor(Math.log10(num))+1;

  for (let i = 0; i < numLength; i++) {
     let digit = Math.floor(num/Math.pow(10,i) % 10);
     total += Math.pow(digit,numLength)
  }

  return total === num ? true : false;
}
