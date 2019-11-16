//console.log(math.pow(2,3));
// 2 * 2 *2;

function myPow(num, exp){
  let ret = num;

  for(let i = 1; i <= exp; i += 1){
    console.log(`ret =:, ${ret}`);
    ret *= num;
  }
  return ret

};
console.log(myPow(9,4));
