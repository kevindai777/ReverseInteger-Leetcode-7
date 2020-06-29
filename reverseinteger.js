//Objective is to reverse an integer. If the integer is negative, reverse
//and make it negative.

let num = -321


//O(n) solution where n is the number of digits in the number.

let temp = Math.abs(num)
let value = 0

//Similar to 'Happy Number'
while (temp > 0) {
    value = value * 10 + temp % 10
    temp = Math.floor(temp / 10)
}

if (value > Math.pow(2, 31) || value < Math.pow(-2, 31)) {
    return 0
} else if (num < 0) {
    return -value
} else {
    return value
}