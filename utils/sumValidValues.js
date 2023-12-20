const sumValidValues = (arr, callback) => {
    let sum = 0
    for (let x of arr) sum += parseInt(callback(x))
    return sum
}

module.exports = sumValidValues