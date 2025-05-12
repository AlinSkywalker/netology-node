#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const http = require('http')
const WEATHER_API_KEY = require('./config').WEATHER_API_KEY

const argv = yargs(hideBin(process.argv))
    .option('city', {
        alias: 'c',
        type: 'string',
        description: 'город'
    })
    .argv

console.log(argv)
const myAPIKey = process.env.WEATHER_API_KEY || WEATHER_API_KEY

const { city } = argv
if (city) {
    const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${city}`
    console.log('url', url)
    http.get(url, (res) => {
        const { statusCode } = res
        if (statusCode !== 200) {
            console.log(`statusCode: ${statusCode}`)
            return
        }

        res.setEncoding('utf8')
        let rowData = ''
        res.on('data', (chunk) => rowData += chunk)
        res.on('end', () => {
            let parseData = JSON.parse(rowData)
            console.log(`Текущая температура: ${parseData.current.temperature}`)
        })
    }).on('error', (err) => {
        console.error(err)
    })
}
else {
    console.error('Не указан город')
}