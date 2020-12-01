const discord = require('discord.js')
const Nayubot = new discord.Client()

Nayubot.commands = new discord.Collection()
Nayubot.commandPrefix = '!'
Nayubot.modules = new discord.Collection()

Nayubot.on('ready', () => {
  console.log(`Hi! Nayubot is running as ${Nayubot.user.tag}`)
})
Nayubot.login('token')