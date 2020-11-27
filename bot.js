const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs'); // file system module 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.commands = new Discord.Collection(); //create collection of bot commands 
const modules = fs.readdirSync('./modules').filter(file => file.endsWith('modules.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.login('token');
