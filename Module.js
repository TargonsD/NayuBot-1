const Command = require("./Command")

/**
 * Represents a Nayubot Module, a collection of related Nayubot Commands
 * @constructor
 * @param {string} name  - The name of the Module.
 * @param {string} description - The description of the Module and it's use-case.
 * @param {string} author - The author of the module.
 * @param {Array<Command>} commands - An Array, representing all commands that are part of this module
 */
class Module {
  constructor (name, desc, author = 'unknown', commandsArray) {
    this.name = name
    this.description = desc
    this.author = author
    this.commands = commandsArray
  }
}
module.exports = Module
