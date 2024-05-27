#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
// console.log(userInputs)
switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'del':
    await commands.delTodo(Number(userInputs[3]))
    break
  case 'update':
    await commands.upTask(Number(userInputs[3]), userInputs[4])
    break

  case 'search':
    await commands.search(userInputs[3])
    break
  case 'complete':
    await commands.complete(Number(userInputs[3]))
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
