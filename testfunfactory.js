/**
* This is a Function Factory that returns another Function
* This Function Factory uses the concept of a CLOSURE*/
//** initSportsScorer is the outer function.
//** */ it recieves pts, but then immediatley discards its reference to pts.but

function initSportsScorer(pts){
  console.trace
  return function(score){
    return score + pts;
  };
}
const threePointers = initSportsScorer(3);
const touchdown = initSportsScorer(7);
console.log(threePointers(3));

