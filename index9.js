function myPow(num, exp){

  if(exp === 0){
    return 1;
  }


  console.trace();
  return (num *= myPow(num, exp - 1))
}
console.log(myPow(2,3));


