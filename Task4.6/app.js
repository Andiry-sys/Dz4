let _min = parseInt(prompt(`Enter start range `))
let _max = parseInt(prompt(`Enter end range `))



function getPerfect(min, max) {
    let result = 0
    for (let i = min; i < max; i++) {

        for (var j = 1; j < i; j++) {
            if (i % j == 0) {
                result = result + j;

            }

        }
        if (result == i) {
            console.log(i);
        }
    }
}
getPerfect(_min, _max)