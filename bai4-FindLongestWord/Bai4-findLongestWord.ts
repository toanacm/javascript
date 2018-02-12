function findLongestWord(str: string): number {
  let nStr = str.split(' ');
  let i = 0 ;
  let max = 0 ;
  for(i ; i < nStr.length  ; i ++) {
    if (nStr[i].length > max) {
      max = nStr[i].length ;
    }
  }
  return max ;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
