const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const answerNumber = Math.floor(Math.random() * 100)
console.log(answerNumber)
console.log('Загадано число в диапазоне от 0 до 100 ')
// rl.prompt();

rl.on('line', (line) => {
    const answer = line.trim()
    if (isNaN(answer)) {
        console.log(`Введено не число`)
    }
    else if (+answer === answerNumber) {
        console.log(`Отгадано число ${answerNumber}`)
        rl.close();
    }
    else if (+answer < answerNumber) {
        console.log('Больше')
    }
    else {
        console.log('Меньше')
    }

}).on('close', () => {
    process.exit(0);
});