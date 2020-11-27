const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '!'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.commands = new Discord.Collection();
const modules = fs.readdirSync('./modules').filter(file => file.endsWith('module.js'));

for (const file of modules) {
	const command = require(`./modules/${file}`);
	client.commands.set(command.name, command);
}
client.on('message', message => {
    if(message.content.startsWith(prefix) 
    && client.commands.has(message.content.substring(1)) 
    && !(message.author.bot)){
        client.commands.get(message.content.substring(1)).execute(message, 'args');
    }
})

client.login('Mzk4MDcwNDIzODEzNzUwNzg0.Wky5-A.sq8FMh8KC3AmsB9O4u3lSblCgEs');
