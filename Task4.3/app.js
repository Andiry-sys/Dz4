let _num1 = prompt(`Enter number`)
let _num2 = prompt(`Enter number `)
let _num3 = prompt(`Enter number `)

function GetNum(n1, n2, n3) {

    let str = + n1 + n2 + n3

    return parseInt(str)
}

alert(GetNum(_num1, _num2, _num3))