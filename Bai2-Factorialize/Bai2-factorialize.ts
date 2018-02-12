function factorialize(num: number): number {
 let i = 1 ;
for(i ; num >= 1 ; num --) {
  i = i* num ;
}
  return i ;
}

factorialize(5);
