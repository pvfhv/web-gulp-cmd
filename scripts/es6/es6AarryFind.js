/**
 * Created by anchao on 2016/1/13.
 */
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        //先计算++后计算%
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 5, 8, 12].find(isPrime));