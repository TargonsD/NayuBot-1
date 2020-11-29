module.exports = {
    name: 'ping',
    description: 'pings the bot',
    module: 'core',
    execute (message, args, client) {
        message.channel.send('pong')
    }
  }