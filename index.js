const myName = "Billy Ray"
console.log(`Hello World! this is ${myName}`)

const me = {
  name: "Billy Ray",
  age : 54,
  heightIn : 68,
  weight : 200
};
console.log(me.name)
console.log(me['name'])
me.health = 'good'
console.log(me.health)
let myProfile = me;
console.log(myProfile)
console.log(me)
me.myFunc = function(){
  console.log(`Hello my name is ${myProfile.name}.`)};
me.myFunc()
//console.log(me)
/** everything in JS is an object except primitives
dot notation**/
console.log(global.console);
console.log(Window);
