import * as Discord from 'discord.js' 
const client = new Discord.Client();

import 'modules/ping.module.ts'

 // log bot login
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  // connect the bot
client.login('token')
