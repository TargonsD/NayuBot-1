const fs = require('fs');
module.exports = {
    name: 'modules',
    description: 'show installed and loaded modules',
    module: 'core',
    execute (message, args, client) {
       const modules = fs.readdirSync(client.modulePath)
       message.reply(`Currently loaded modules: ${modules}`)
    }
  }
  