const Module = require('../../Module')
const Command = require('../../Command')

class Core extends Module {
  constructor () {
    super()
    this.name = 'core'
    this.author = '@Shiroraven <me@shiro.dev>'
    this.description = 'offcial Nayubot core module'
    this.commands = [new Ping(), new Clear()]
  }
}
class Ping extends Command {
  constructor () {
    super()
    this.name = 'ping'
    this.description = 'pong!'
    this.execute = (client, message, args) => {
      message.reply('pong!')
    }
  }
}

class Clear extends Command {
  constructor () {
    super()
    this.name = 'clear'
    this.description = 'clear x messages'
    this.execute = (client, message, args) => {
      message.channel
        .bulkDelete(parseInt(args[0]) + 1)
        .then(() => {
          console.log(`Deleted ${parseInt(args[0])} messages`)
        })
        .catch(err => {
          message.channel.send(err.message)
        })
    }
  }
}

module.exports = new Core()
