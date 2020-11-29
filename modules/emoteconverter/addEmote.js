const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'addEmote',
    description: 'clear messages',
    module: 'emoteconverter',
    execute (message, args, client) {
      const image = message.attachments.array()[0]
      if (image) {
        if (image.hasOwnProperty('width')) {
          if (args[0].length > 2) {
            this.addEmote(message, image, args[0])
          } else {
            message.reply('Error: emote name missing, or too short')
          }
        } else {
          message.reply('Error: attachment provided for command: addEmote, needs to be an Image')
        }
      } else {
        message.reply('Error: no attachment sent for command: addEmote')
      }
    },
    addEmote(message, file, name) {
      message.guild.emojis
              .create(`${file.proxyURL}?width=80&height=80`, name)
              .then(emoji =>
                message.reply(`Created new emoji with name ${emoji.name}!`)
              )
              .catch(console.error)
    }
  }
  