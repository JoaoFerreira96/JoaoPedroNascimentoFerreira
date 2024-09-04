function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sum_to_n_b(n) {
    var sum = 0;
    var i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
function sum_to_n_c(n) {
    return (n * (n + 1)) / 2;
}
console.log(sum_to_n_a(5));
console.log(sum_to_n_b(8));
console.log(sum_to_n_c(10));
