let _num1 = +prompt(`Enter number`)
let _num2 = +prompt(`Enter number `)

function GetNumber(number, number1) {
    if (number < number1) {
        return -1
    }
    else if (number > number1) {
        return 1
    }
    else if (number == number1) {
        return 0
    }
}

alert(GetNumber(_num1, _num2))