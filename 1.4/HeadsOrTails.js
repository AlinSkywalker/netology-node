const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const fs = require('fs')

const argv = yargs(hideBin(process.argv))
    .option('fileName', {
        alias: 'f',
        type: 'string',
        description: 'имя файла'
    }).argv
const fileName = argv.fileName

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 2) + 1
    return randomNumber
}
console.log('Загадано число 1 или 2')
let answerNumber = getRandomNumber()
let batchNumber = 1
fs.writeFile(fileName, ``, function (err) {
    if (err) throw err;
})
rl.on('line', (line) => {
    const answer = line.trim()
    let result = ''
    if (+answer === answerNumber) {
        console.log(`Верно`)
        console.log('Загадано новое число 1 или 2')
        answerNumber = getRandomNumber()
        result = 'Победа'
    }
    else {
        console.log('Неверно')
        console.log('Загадано новое число 1 или 2')
        answerNumber = getRandomNumber()
        result = 'Проигрыш'
    }
    fs.appendFile(fileName, `Партия ${batchNumber}\r\n${result}\r\n\r\n`, function (err) {
        if (err) throw err;
    })
    batchNumber++
}).on('close', () => {
    process.exit(0);
});