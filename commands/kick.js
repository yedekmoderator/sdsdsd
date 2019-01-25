const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send('**Please specify a valid user**');

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: You do not have sufficient permissions to use this command.");
  if (user.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: The user you are trying to kick is either the same, or higher role than you.");

  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send('**Please have a reason**');

  let embed = new Discord.RichEmbed()
  .setTitle('Incoming Report!')
  .setColor(0xEEEE00)
  .addField('Kicked User', `${user}`, true)
  .addField('Kicked By', `${message.author}`, true)
  .addField('Kicked in Channel', message.channel, true)
  .addField('Reason', reason)
  .setTimestamp();

  
  let logging = JSON.parse(fs.readFileSync("./cfg/logging.json", "utf8"));

	let logC = logging[message.guild.id].logging;
  let rChan = client.channels.get(logC);

  if (!rChan) return message.channel.send('**There is no logging channel**');

  await user.kick(reason)
  rChan.send(embed);
  return;
}