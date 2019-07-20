arr = [[1,2,5,8],[7,1,3,4],[3,-3,4,2],[1,3,1,3]]

const biggestHourglass = (arr) => {
    length = arr.length-1
    highest = 0
    biggest = [0,0]
    for (i = 1; i < length; i++) {
        for (j = 1; j < length; j++) {
            hourglass = 
            arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i][j]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]
                if (hourglass > highest) {
                    highest = hourglass
                    biggest = [i,j]
                } // end of if statement
        } // end of innder loop
    } // outside of whole loop
    return `The largest sum is ${highest} originating at the point ${biggest}`
}

biggestHourglass(arr)
