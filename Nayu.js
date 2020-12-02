const Discord = require('discord.js')
const Loader = require('./Loader')
class Nayu extends Discord.Client {
  constructor () {
    super()
    this.modules = Loader.loadModules('./modules')
    let commands = new Discord.Collection()
    for (const _module of this.modules) {
      _module.commands.forEach(command => {
        commands.set(command.name, command)
      })
    }
    this.commands = commands
    this.prefix = '!'
  }
  reload () {
    this.modules = Loader.loadModules('./modules')
    let commands = new Discord.Collection()
    for (const _module of this.modules) {
      _module.commands.forEach(command => {
        commands.set(command.name, command)
      })
    }
    this.commands = commands
  }
}

module.exports = new Nayu()
