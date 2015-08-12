function NumberAddition(str) { 
  
  // regex expression grabs all numbers
  var re = /([0-9])+/g;

  // this returns an array of matches
  var numArr = str.match(re)
  

  // use reduce to sum all values in the array
  return numArr.reduce(function(val, origVal){
  return parseInt(val) + parseInt(origVal);
  })
  
}