const { getAndFormatInput, sumValidValues } = require('../utils')

const stringNumbers = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 }

const deduceCalibrationValue = (str) => {
    // use lookahead while consuming only one character to get all valid string and digit numbers
    const lookaheadPattern = /(?=(one|two|three|four|five|six|seven|eight|nine|[\d]))./g
    let match
    const digitsOnly = []
    while ((match = lookaheadPattern.exec(str)) != null) digitsOnly.push(match[1])

    // return first and last digit if at least 1 number is found
    // if value at either index is not a number, replace with digit value from stringNumbers
    if (digitsOnly.length > 0) {
        const firstDigit = isNaN(digitsOnly[0]) ? stringNumbers[digitsOnly[0]] : digitsOnly[0]
        const lastDigit = isNaN(digitsOnly.at(-1)) ? stringNumbers[digitsOnly.at(-1)] : digitsOnly.at(-1)
        return parseInt(`${firstDigit}${lastDigit}`)
    }
    // return 0 if no valid digit
    return 0
}

// pass in the third argument from command as custom input file
const input = getAndFormatInput(process.argv[2] || 'solutions/day1Input.txt')
console.log(sumValidValues(input, deduceCalibrationValue))

module.exports = deduceCalibrationValue