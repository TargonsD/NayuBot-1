module.exports = {
	name: 'debug',
	description: 'shows args',
	execute(message, args, client) {
		message.reply(`command: ${message.content.split(' ')[0]}, args: ${args}, client: ${client.user.tag}`);
	},
};
