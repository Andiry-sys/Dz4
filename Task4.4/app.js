let _key = +prompt(`Chooce what you do\n1-Calculates the area of ​​a rectangle\n2-Calculates the area of ​​a square`)

function check(a, b = 0) {
    if (b == 0) {
        return a ** 2;
    }
    else {
        return a * b;
    }
}

switch (_key) {
    case 1:
        let _widht = parseInt(prompt(`Enter widht`))
        let _lenght = parseInt(prompt(`Enter lenght `))
        alert(check(_widht, _lenght))
        break;
    case 2:
        let widht = parseInt(prompt(`Enter widht`))
        alert(check(widht, 0))
        break;

}