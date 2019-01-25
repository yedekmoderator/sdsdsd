const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send('**Please specify a valid user**');
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You do not have sufficient permissions to use this command.");
  if (user.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: The user you are trying to mute is either the same, or higher role than you.");

  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send('**Please have a reason**');

  let embed = new Discord.RichEmbed()
  .setTitle('Incoming Report!')
  .setColor(0xEEEE00)
  .addField('Reported User', `${user}`, true)
  .addField('Reported By', `${message.author}`, true)
  .addField('Reported in Channel', message.channel, true)
  .addField('Reason', reason)
  .setTimestamp();

  let reportschannel = message.guild.channels.find('name', 'bot-logs');
  if (!reportschannel) return message.channel.send('**There is no channel with the name `bot-logs`**');

  reportschannel.send(embed);
  return;
}