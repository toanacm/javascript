function factorialize(num) {
    var i = 1;
    for (i; num >= 1; num--) {
        i = i * num;
    }
    return i;
}
factorialize(5);
