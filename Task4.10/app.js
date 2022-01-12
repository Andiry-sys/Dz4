function GetTime(secs) {
    let sec_num = parseInt(secs, 10)
    let hours = Math.floor(sec_num / 3600) % 24
    let minutes = Math.floor(sec_num / 60) % 60
    let seconds = sec_num % 60
    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}

function GetSecond(hour, minutes, seconds) {
    let sec = ""

    if (hour > 0 & minutes > 0) {
        return sec = (hour * 3600) + (minutes * 60) + seconds
    }
}

let _hour1 = +prompt(`Enter first hour `)
let _minutes1 = +prompt(`Enter first minutes`)
let _second1 = +prompt(`Enter first seconds`)

let _hour2 = +prompt(`Enter second hour `)
let _minutes2 = +prompt(`Enter second minutes`)
let _second2 = +prompt(`Enter second seconds`)

let riz = GetSecond(_hour1, _minutes1, _second1) - GetSecond(_hour2, _minutes2, _second2)

alert(GetTime(riz));









