#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const meow = require('meow')

const cli = meow(
  `
  Usage
    $ gen

  Options
    --help

  Examples
    $ gen
    generate js file that named like 2022_Fri_Nov_11.js
`,
  {
    flags: {},
  }
)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function genTodaysFile(input, flags) {
  const currentDir = process.cwd()
  const date = new Date()
  const year = date.toLocaleDateString(undefined, { year: 'numeric' })
  const month = {
    number: date
      .toLocaleDateString(undefined, { month: 'numeric' })
      .toString()
      .padStart('2', '0'),
    string: date.toLocaleDateString(undefined, { month: 'short' }),
  }
  const day = date
    .toLocaleDateString(undefined, { day: 'numeric' })
    .toString()
    .padStart('2', '0')
  const weekday = date.toLocaleDateString(undefined, { weekday: 'short' })
  const sourceDir = path.join(currentDir, year, month.number)
  // create 2040/04 folder
  fs.mkdirSync(sourceDir, { recursive: true })

  const fileName = `${year}_${weekday}_${month.string}_${day}.js`
  const filePath = path.join(sourceDir, fileName)

  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '')
}

genTodaysFile(cli.input, cli.flags)
