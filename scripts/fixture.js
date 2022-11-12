import fs from 'fs'
import os from 'os'

import faker from 'faker'

function writeJson(fileName, object) {
  if (Array.isArray(object)) {
    const obj = { [fileName]: object }
    fs.writeFileSync(
      fileName + '.json',
      JSON.stringify(obj, null, 2).replace(/\n/g, os.EOL) + os.EOL
    )
    return
  }

  RegExp.prototype.toJSON = RegExp.prototype.toString
  fs.writeFileSync(
    fileName + '.json',
    JSON.stringify(object, null, 2).replace(/\n/g, os.EOL) + os.EOL
  )
}

var userList = []

// @TODO take from parameter
for (let i = 0; i <= 1; i++) {
  userList.push({
    card: faker.helpers.createCard(),
    email: faker.internet.email(),
    name: faker.name.findName(),
  })
}
// @TODO take from parameter
writeJson('userList', userList)

process.exit(0)
