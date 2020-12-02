class Command {
  constructor (name, desc, prefix = undefined, execute) {
    this.name = name
    this.description = desc
    this.execute = execute // function execute(client, message, args[])
  }
}
module.exports = Command
