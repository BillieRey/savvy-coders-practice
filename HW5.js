const beginIterate = function(num1,num2){
  beginIter= (num1*num2)
  return beginIter};

  const SortFizz = function(begin,end,num1,num2){
  for (let i = 0; i <= end; i += 1) {
    if (i % begin === 0) {
      console.log("Fizzbuzz!");
    } else if (i % num2 === 0) {
      console.log("buzz");
    } else if (i % num1 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }}

const initfizzbuzz = function(end,num1,num2){
 let begin = beginIterate(num1,num2);
 let sort = SortFizz(begin,end,num1,num2);
}

initfizzbuzz(10,5,6);
