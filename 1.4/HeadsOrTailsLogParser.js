const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const fs = require('fs')

const argv = yargs(hideBin(process.argv))
    .option('fileName', {
        alias: 'f',
        type: 'string',
        description: 'имя файла'
    }).argv
const fileName = argv.fileName


const readerStream = fs.createReadStream(fileName)

let data
readerStream
    .setEncoding('UTF8')
    .on('data', (chank) => {
        data += chank
    })
    .on('end', () => {
        // console.log('end')
        // console.log(data)
        console.log('Статистика:')
        const totalCount = (data.match(/Партия/g) || []).length;
        console.log(`общее количество партий: ${totalCount}`)
        const winCount = (data.match(/Победа/g) || []).length;
        const faultCount = (data.match(/Проигрыш/g) || []).length;
        console.log(`количество выигранных/проигранных партий: ${winCount}/${faultCount}`)
        const percent = Math.floor((winCount / totalCount) * 100)
        console.log(`процентное соотношение выигранных партий: ${percent}%`)
    })