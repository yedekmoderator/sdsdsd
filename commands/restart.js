const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (message.author.id !== `76063689064583168`) return message.channel.send(":x: You do not have sufficient permissions to use this command.");


    message.channel.send('Restarting...')
      .then(message => client.destroy())
      .then(() => client.login('MzQ2NDcyMzc3MzU5Nzk0MTc2.DeG31w.P5kQfwpYyrbUGEX_1CsPAAtQYsE'))
      .then(message.channel.send('Successfully restarted!'));
}
