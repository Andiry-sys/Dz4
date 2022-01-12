let _hours = parseInt(prompt(`Enter hours`))
let _minutes = parseInt(prompt(`Enter minutes`))
let _seconds = parseInt(prompt(`Enter seconds`))

function GetSecond(hour, minutes, seconds) {
    let sec = ""

    if (hour > 0 & minutes > 0) {
        return sec = (hour * 3600) + (minutes * 60) + seconds
    }
}

alert(`Seconds ${GetSecond(_hours, _minutes, _seconds)}`)
