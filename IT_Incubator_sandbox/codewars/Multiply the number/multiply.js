function multiply(number){
  let numberToStr = String(Math.abs(number));
  let multiplexer = Math.pow(5, numberToStr.length);
  let multipliedNum = number * multiplexer;
  
  return multipliedNum;
}