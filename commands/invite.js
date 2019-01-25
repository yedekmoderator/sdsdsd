const Discord = require('discord.js');

exports.run = (client, message) => {
  let embed = new Discord.RichEmbed()
    .setTitle(`Invite ${client.user.tag}`)
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=346472377359794176&permissions=1383197911&scope=bot')
    .setThumbnail(client.user.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription(`Thank you for thinking about inviting me to your Discord server **${message.author.username}**! \nI hope you will invite me. \nNow I might be in **${(client.guilds.size) + 1}** servers! \n\nHere, haz cat! :cat2:`);
  
  message.channel.send(embed);
}