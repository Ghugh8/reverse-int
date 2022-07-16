module.exports = function reverse(n) {
    a = String(Math.abs(n));
    return Number(a.split("").reverse().join(""));
}