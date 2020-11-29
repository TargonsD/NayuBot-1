const discord = require('discord.js')
const client = new discord.Client()
const fs = require('fs')

client.commands = new discord.Collection()
client.modulePath = './modules'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  loadModules()
})
// load modules
const loadModules = () => {
  const modules = fs.readdirSync(client.modulePath)
  console.log(`loaded modules: ${modules}`)
  for (const m of modules) {
    delete require.cache[require.resolve(`${client.modulePath}/${m}/index.js`)]
    const module = require(`${client.modulePath}/${m}/index.js`)
    const files = fs.readdirSync(`${client.modulePath}/${m}`)
    for (const file of files) {
      delete require.cache[require.resolve(`${client.modulePath}/${m}/${file}`)]
    }
    for (const command of module) {
      client.commands.set(command.name, command)
    }
  }
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
client.on('message', message => {
  if (message.content == '!reload') {
    loadModules()
  } else {
    parseCommand('!', message)
  }
})
client.login('token')
