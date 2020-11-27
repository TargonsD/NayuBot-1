export default function ping() {
    client.on('message', msg => {
        if (msg.content === 'ping') {
          msg.reply('Pong!');
        }
      });
      
}