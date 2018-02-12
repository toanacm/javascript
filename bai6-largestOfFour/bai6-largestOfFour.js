function largestOfFour(arr) {
    var i = 0;
    var j = 0;
    var largest;
    for (i; i < arr.length; i++) {
        var max = 0;
        for (j = 0; j < arr[i].length; j++) {
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
        }
        largest.push(max);
    }
    return largest;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
