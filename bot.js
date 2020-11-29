const discord = require('discord.js')
const client = new discord.Client()
const fs = require('fs')
const Loader = require('./loader')

client.commands = new discord.Collection()
client.modulePath = './modules'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  Loader.loadAll(client.modulePath, client)
})
const parseCommand = (prefix, message) => {
  if (message.content.startsWith(prefix)) {
    const command = message.content.split(' ')[0].slice(1)
    let discordCommand = client.commands.get(command) || 0
    if (discordCommand) {
      // check if command exists
      // reload the command
      Loader.loadCommands(
        `${client.modulePath}/${discordCommand.module}`,
        client
      )
      discordCommand = client.commands.get(command) || 0
      // execute!
      discordCommand.execute(
        message,
        message.content.split(' ').slice(1),
        client
      )
    } else {
      message.reply('Error: Command not found!')
    }
  }
}
client.on('message', message => {
  parseCommand('!', message)
})
client.login('Mzk4MDcwNDIzODEzNzUwNzg0.Wky5-A.8jtKDccala5IcFWoxehDg0xHVXo')
