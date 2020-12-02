/**
 * Represents a Nayubot Command
 * @constructor
 * @param {string} name  - The name of the command, used as a trigger together with the prefix @see Nayubot.prefix.
 * @param {string} description - The description of the command, used together with the help command to generate documentation.
 * @param {string} execute - The function executed upon running the command.
 */
class Command {
  constructor (name, desc, prefix = undefined, execute) {
    this.name = name
    this.description = desc
    this.execute = execute // function execute(client, message, args[])
  }
}
module.exports = Command
