function findLongestWord(str) {
    var nStr = str.split(' ');
    var i = 0;
    var max = 0;
    for (i; i < nStr.length; i++) {
        if (nStr[i].length > max) {
            max = nStr[i].length;
        }
    }
    return max;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
