function palindrome(str: string): boolean {
 str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
 let newStr = str.split('').reverse().join('');
 if (str === newStr) {
   return true ;
 }
  return false ;
}



palindrome("eye");
