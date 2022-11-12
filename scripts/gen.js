#!/usr/bin/env node

import meow from 'meow'

function foo(a, b) {
  console.log({ a, b })
}

const cli = meow(
  `
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`,
  {
    flags: {
      rainbow: {
        alias: 'r',
        type: 'boolean',
      },
    },
    importMeta: import.meta,
  }
)
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/

foo(cli.input[0], cli.flags)
