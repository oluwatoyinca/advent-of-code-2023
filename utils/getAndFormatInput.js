const fs = require('fs')

const getAndFormatInput = (inputFile) => {
    try {
        const input = fs.readFileSync(inputFile, "utf-8").trim()
        return input.split('\n')
    }
    catch (e) {
        return []
    }
}

module.exports = getAndFormatInput