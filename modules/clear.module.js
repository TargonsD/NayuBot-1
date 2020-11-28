module.exports = {
  name: 'clear',
  description: 'clear messages',
  execute (message, args, client) {
    message.channel
      .bulkDelete(args[0] + 1)
      .then(console.log(args[0] + ' messages deleted'))
      .catch(err => {
        message.channel.send('Error: ' + err.message)
      })
  }
}
