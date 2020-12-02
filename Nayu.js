const Discord = require('discord.js')
const Command = require('./Command')
const Loader = require('./Loader')
const Module = require('./Module')

/**
 * Represents a Nayubot, a collection of Modules and their Commands
 * @extends {Discord} Client  - This class extends the discord.js Client() class
 * @property {Array<Module>} modules - an Array containing all loaded modules. @see Module.js
 * @property {Map<Command>} commands - a Map containing all commands loaded from their parent modules mapped to their trigger name @see Command.js
 */
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
 /**
 * Reloads all Modules and their Commands.
 * @return {void}
 * @example
 *     new Nayubot().reload()
 */
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
