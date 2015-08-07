/*
*  Write a function that takes an array
*  and returns 1 if the mean is equal to the mode
*  or a 0 if they're not equal
*/

function MeanMode(arr) { 
  
  var sortedArr = arr.sort(function(a,b){ return a-b; })
  var sum = 0;
  var count = 0;
  var longest = [0,0];
  
  // Getting info that I need to calculate Mean and Mode
  for (var i=0; i<sortedArr.length; i++) {
    sum += sortedArr[i];
    if (sortedArr[i] === sortedArr[i-1]) {
      count++;
      if (count>longest[0]) {
        longest = [count, sortedArr[i]];
      }
    } else {
      count = 0;
    }
  }
  
  // Calculate Mean and Mode
  var mean = sum/(sortedArr.length);
  var mode = longest[1];

  // Run a comparison
  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }
}

