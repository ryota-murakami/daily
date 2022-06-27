import chalk from 'chalk'
let hook = {
  capcom: 'monster hunter',
  nintendo: 'kirby',
  squeaEnix: 'final fantasy 16',
}
for (const key in hook) {
  console.log(chalk.green.bold(key + ': ') , chalk.cyanBright.bold(hook[key]))
}
