for (let number = 250; number <= 255; number++) {
    let buzzy = ""
    let i = 0
    let divisibility = [number%3+(1-Math.min(1,number%11)),number%13,number%5+(1-Math.min(1,number%11)),number%7+(1-Math.min(1,number%11)),number%11,Math.min(number%17,1)] // Fizz,Fezz,Buzz,Bang,Bong,Reverse
    if (divisibility[5] === 0) {
        divisibility[5] = 4
        i = 4
    }
    let fizz = ["Fizz","Fezz","Buzz","Bang","Bong"]
    for (let j = 0; j <= 4; j++) {
        if (divisibility[i]==0) {
            buzzy += fizz[i]
        }
        i = (i+divisibility[5])%5
    }
    if (buzzy === "") {
        buzzy += number
    }
    console.log(buzzy)
}

