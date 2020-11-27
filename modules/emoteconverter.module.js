/* ========== Emote converter Module ========== 
# Allows users to upload an image which will be converted into a discord emote.
# Author: Shiroraven
*/

module.exports = {
  name: 'addEmote',
  description:
    'Allows users to transform images of any size into discord Emotes',
  execute (message, args, client) {
    if (message.attachments.array()[0]) {
      let file = message.attachments.array()[0]
      if (file.width) {
        switch (args.length) {
          case 2:
            message.guild.emojis
              .create(
                `${message.attachments.array()[0].proxyURL}?width=${
                  args[1]
                }&height=${args[1]}`,
                args[0]
              )
              .then(emoji =>
                message.reply(`Created new emoji with name ${emoji.name}!`)
              )
              .catch(console.error)
            break
          case 3:
            message.guild.emojis
              .create(
                `${message.attachments.array()[0].proxyURL}?width=${
                  args[1]
                }&height=${args[2]}`,
                args[0]
              )
              .then(emoji =>
                message.reply(`Created new emoji with name ${emoji.name}!`)
              )
              .catch(console.error)
          default:
            message.guild.emojis
              .create(
                `${message.attachments.array()[0].proxyURL}?width=96&height=96`,
                args[0]
              )
              .then(emoji =>
                message.reply(`Created new emoji with name ${emoji.name}!`)
              )
              .catch(console.error)
            break
        }
      } else {
        message.reply('Error: no image file attached to command!')
      }
    } else {
      message.reply('Error: no attachment found with command: AddEmote!')
    }
  }
}
