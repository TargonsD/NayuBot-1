const discord = require('discord.js')
const client = new discord.Client()
const fs = require('fs')

client.commands = new discord.Collection()

// load modules
const loadModules = path => {
  let modules = fs.readdirSync(path).filter(file => file.endsWith('module.js'))
  for (const file of modules) {
    delete require.cache[require.resolve(`${path}/${file}`)]
    const command = require(`${path}/${file}`)
    client.commands.set(command.name, command)
  }
  return client.commands // Map (ping ...)
}
const parseCommand = (prefix, message) => {
  if (message.content.startsWith(prefix)) {
    let command = message.content.split(' ')[0].substring(1)
    if (!message.author.bot) {
      client.commands
        .get(command)
        .execute(message, message.content.split(' ').slice(1), client)
    }
  }
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  loadModules('./modules')
})
client.on('message', message => {
  if (message.content == '!reload') {
    loadModules('./modules')
    message.reply('modules reloaded!')
  } else {
    parseCommand('!', message)
  }
})
client.login('token')
