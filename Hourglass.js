// This challenge, hourglass, presents you with a 2d array, with each inner array as long as there are number of inner arrays,
// Making it a square. 
// Each hour glass originates from any of the central squares. Central in this context is not one on the outer perimeter.
// Assuming the Width (length of inner arrays) and Length (number of inner arrays) were not equal,
// The amount of central squares would be: (width-2)*(length-2)
// An hourglass looks like the following with the middle X being the origin or centre of each hourglass.
// x x x 
//   x
// x x x 
// The goal is to find the hourglass with the largest sum of x's.
// The below solution works and I have created my own array to test for it.
// The specifications said that the array was a perfect square, but I have coded for it not to have to be.
// Source: https://www.hackerrank.com/challenges/2d-array/problem

// An array might look like this: [[1,2,5,8],[7,1,3,4],[3,-3,4,2],[1,3,1,3],[2,-1,3,4]]

const biggestHourglass = (arr) => {
    const length = arr.length-1 
    const width = arr[0].length-1
    if (length > 2 && width > 2) {
      let highest = 0
      let biggest = [0,0]
      
      for (i = 1; i < length; i++) {
          for (j = 1; j < width; j++) {
              hourglass = 
              arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]
                          +arr[i][j]+
              arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]
                  if (hourglass > highest) {
                      highest = hourglass
                      biggest = [i,j]
                  } // End of if statement
          } // End of innder loop
      } // Outside of whole loop
      return `The largest sum is ${highest} originating at the point ${biggest}`
    } else {
      return "There are no hourglass'"
    }
}
