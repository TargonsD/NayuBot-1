const Nayu = require('./Nayu')
Nayu.parseMessage = message => {
  const command = message.content.split(' ')[0].substring(1)
  const args = message.content.split(' ').slice(1)

  if (message.content.startsWith(Nayu.prefix)) {
    if (Nayu.commands.get(command)) {
      Nayu.reload()
      Nayu.commands.get(command).execute(Nayu, message, args)
    } else {
      message.channel.send(`Error: Unknown command ${command}`)
    }
  }
}
Nayu.on('ready', () => {
  console.log(`Hi! Nayubot instance running as ${Nayu.user.tag}`)
})
Nayu.on('message', message => {
  if (message.author.bot) {
    return
  }
  Nayu.parseMessage(message)
})
Nayu.login('token')
