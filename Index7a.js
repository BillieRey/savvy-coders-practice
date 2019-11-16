function initgreeting(name, greeting){
    return function(time){
      return `${name} ${greeting}. The time is ${time}`;
    };
  }
  const eveningGeorge = initgreeting("George", "Evening");
  console.log(eveningGeorge(Date.now()));

const time = new Date(Date.now())

console.log(eveningGeorge(`{eveningGeorge(`${time.getHours(}:${time.getMinutes()})})}`))
