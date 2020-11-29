module.exports = {
  name: 'clear',
  description: 'clear messages',
  module: 'core',
  execute (message, args, client) {
    message.channel
      .bulkDelete(parseInt(args[0])+1)
      .then(() => {
        console.log(`Deleted ${parseInt(args[0])} messages`)
      })
      .catch(err => {
        message.channel.send(err.message)
      })
  }
}
