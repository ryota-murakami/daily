#!/usr/bin/env node

import meow from 'meow'

const cli = meow(
  `
  Usage
    $ gen

  Options
    --help

  Examples
    $ gen
    generate js file whix named like 2022_Fri_Nov_11.js
`,
  {
    flags: {},
    importMeta: import.meta,
  }
)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function genTodayFile(input, flags) {
  // @TODO set project root path in variable
  // @TODO get Local Time
  // @TODO format datetime style
  // @TODO create year(2022) directory if it is not exist
  // @TODO create month(11) directory if it is not exist
  // @TODO write file that named 2022_Fri_Nov_11.js
}

genTodayFile(cli.input, cli.flags)
