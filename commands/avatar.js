const Discord = require('discord.js');
    
exports.run = (client, message, args) => {
  var msg = message.channel.send("Generating avatar...");
  var target = message.mentions.users.first() || message.author;
  var embed = new Discord.RichEmbed()
    .setAuthor(target.tag)
    .setFooter(message.author.tag)
    .setImage(target.displayAvatarURL)
  message.channel.send(embed);
}