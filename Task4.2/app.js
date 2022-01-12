let _num = +prompt(`Enter number `)

function Factorial(n) {
    return n ? n * Factorial(n - 1) : 1;
}

alert(Factorial(_num))