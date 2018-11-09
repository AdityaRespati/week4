
function sqr(x, y) {
    if (y === 1) {
        return x
    } else {
        return x * sqr(x, y - 1);
    }
}

console.log(sqr(2, 3));

//square
function sqr(x, y) {
    return (y === 1) ? x : x * sqr(x, y - 1)
}
console.log(sqr(2, 3));

//Sum up to

function sumTo(n) {
    if (n === 1) {
        return n
    } else {
        return n + sumTo(n - 1)
    }
}
console.log(sumTo(4))

//faktorial

function factorial(n) {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))

//fibonaci

function fib(n) {
    if (n == 1 || n == 2) {
        return n
    } else {    
        return fib(n-1)+fib(n-2)
    }
}

console.log(fib(5));

// swap

var input = [2, 8, 3, 9, 5, 6] ;

for (i = 0; i <= input.length-1; i++) {
    if (input[i] > input[i + 1]) {
        [input[i], input[i + 1]] = [input[i + 1], input[i]]
    }
}

console.log(input);

sortup

var input = [2, 81, 3, 9, 5, 6, 7, 8, 1, 4] ;

for(j= input.length; j>=1; j--){
    for (i = 0; i <= j-1; i++) {
        if (input[i] > input[i + 1]) {
            [input[i], input[i + 1]] = [input[i + 1], input[i]]
        }
    }
}

console.log(input);

