const { getAndFormatInput, sumValidValues } = require('../utils')

const deduceCalibrationValue = (str) => {
    // remove all non-digit characters by replacing them with an empty string
    const digitsOnly = str.match(/[\d]/g) || []

    // return first and last digit if at least 1 number is found
    if (digitsOnly.length > 0) return `${digitsOnly[0]}${digitsOnly.at(-1)}`
    // return 0 if no valid digit
    return 0
}

// pass in the third argument from command as custom input file
const input = getAndFormatInput(process.argv[2] || 'solutions/day1Input.txt')
console.log(sumValidValues(input, deduceCalibrationValue))

module.exports = deduceCalibrationValue