const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (args == 0) return message.channel.send('Missing arguments!')

  let embed = new Discord.RichEmbed()
    .setTitle(`Poll by ${message.author.username}`)
    .setDescription(`${args}`.split(',').join(' '));

  return message.channel.send(embed)
    .then(function (message, str) {
       message.react("👍")
       message.react("👎")
     }).catch(function() {
  });
};
