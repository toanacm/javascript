function largestOfFour(arr: number[][]): number[] {
let i: number = 0 ;
  let j: number = 0 ;
  let largest :number[];
  for(i ; i< arr.length ; i ++) {
    let max:number = 0 ; 
    for( j = 0 ; j < arr[i].length ; j++) {
      if (max < arr[i][j]) {
        max = arr[i][j];
      }
    }
    largest.push(max);
  }
  return largest ;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);