const initfizzbuzz = function(end,num1,num2){
  let begin = (num1 * num2);
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
    }

    return; // fizzbuzz46;
  }
  initfizzbuzz(24,6,4)
