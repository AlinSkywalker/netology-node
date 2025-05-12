#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .option('current', {
        alias: 'current',
        type: 'string',
        description: 'описание param1'
    })
    .option('year', {
        alias: 'y',
        type: 'number',
        description: 'year',
    })
    .option('month', {
        alias: 'm',
        type: 'number',
        description: 'month',
    })
    .option('date', {
        alias: 'd',
        type: 'number',
        description: 'date',
    })
    .option('add', {
        alias: 'current',
        type: 'boolean',
        description: 'описание param1'
    })
    .option('sub', {
        alias: 'current',
        type: 'boolean',
        description: 'описание param1'
    })
    .argv

console.log(argv)
const command = argv['_'][0]
if (command == 'current') {
    const date = new Date()
    // console.log('current',)
    if ('year' in argv) {
        console.log(date.getFullYear())
    }
    else if ('month' in argv) {
        console.log(date.getMonth() + 1)
    }
    else if ('date' in argv) {
        console.log(date.getDate())
    }
}
else if (command === 'add' || command === 'sub') {
    const isAddCommand = command === 'add'
    const currentDate = new Date()

    if ('y' in argv || 'year' in argv) {
        const currentYear = currentDate.getFullYear()
        const newYear = isAddCommand ? currentYear + argv['year'] : currentYear - argv['year']
        currentDate.setFullYear(newYear)

    }
    else if ('m' in argv || 'month' in argv) {
        const currentMonth = currentDate.getMonth()
        const newMonth = isAddCommand ? currentMonth + argv['month'] : currentMonth - argv['month']
        currentDate.setMonth(newMonth)
    }
    else if ('d' in argv || 'date' in argv) {
        const currentDay = currentDate.getDate()
        const newDay = isAddCommand ? currentDay + argv['date'] : currentDay + argv['date']
        currentDate.setDate(newDay)
    }
    console.log(currentDate)
}