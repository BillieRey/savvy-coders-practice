/**const numberSummerMachine = {
startingNumber: 1,
endingNumber: 10,
sumDaNumbers(){
  let total = 0;
  for (let i = this.startingNumber; i <= this.endingNumber; i+= 1){
    total += i
  }
  return total;
}
};
console.log(numberSummerMachine.sumDaNumbers())*/

function doMath(x,y, mathFxn){
return mathFxn(x,y);
}

//Function add(x, + y){
  //return x + y;
//}
//console.log(doMath(add))*//
//doMath(5,9,operation)
//Function doMath(x,y,operation){
 // console.trace()
  // the function will recieve x and y
  //return operation(x,y);
 // }

 //

  function subtract(x,y) {
  return y - x;
}
console.log(doMath(10,5,subtract));
console.log(doMath(10,5,add ))

