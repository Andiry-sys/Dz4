let _hour = parseInt(prompt(`Enter hour`))
let _mint = parseInt(prompt(`Enter minutes`))
let _second = parseInt(prompt(`Enter seconds`))

function GetTime(hours, minutes, seconds) {
    let str = ''
    if (minutes == 00 && seconds == 00) {
        return str += hours + ":00" + ":00"
    }
    else if (seconds == 00) {
        return str += hours + ":" + minutes + ":00"
    }
    else {
        return str += hours + ":" + minutes + ":" + seconds
    }

}

alert(GetTime(_hour, _mint, _second))