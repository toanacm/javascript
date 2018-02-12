function confirmEnding(str: string, target: string): boolean {
	if(str.substring(  str.length - target.length , str.length) === target) {
      return true ;
    } else {
      return false ;
    }
}

confirmEnding('Bastian', 'n');
