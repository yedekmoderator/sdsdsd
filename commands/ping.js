exports.run = (client, message, args) => {
  const then = Date.now();
  message.channel.send("Pinging...").then(m => {
    const time = Date.now() - then; 
    m.edit(`Pong! It took ${time}ms to send that message! \nDiscord Heartbeat: ${Math.round(client.ping)}ms`)
  });
}