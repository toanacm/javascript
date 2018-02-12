function titleCase(str: string): string {
  let nStr = str.toLowerCase().split(' ').map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  }).join('');
  return nStr;
}

titleCase("I'm a little tea pot");