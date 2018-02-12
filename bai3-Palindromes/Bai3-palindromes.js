function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var newStr = str.split('').reverse().join('');
    if (str === newStr) {
        return true;
    }
    return false;
}
palindrome("eye");
