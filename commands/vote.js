const Discord = require('discord.js');

exports.run = (client, message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('Vote Links')
    .setColor('RANDOM')
    .setTimestamp()
    .addField('Unturned-Servers', 'https://unturned-servers.net/server/168416/')
    .addField('UnturnedSL', 'https://unturnedsl.com/dedicated/show/16719')
  message.channel.send(embed);
}