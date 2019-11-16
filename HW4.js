function initGreeting(greeting, name){
let message = (greeting + ' ' + name);
return message
}



const morningMartin = initGreeting('Good Morning', 'Martin');
console.log(morningMartin);
  // 'Good Morning, Martin!'
