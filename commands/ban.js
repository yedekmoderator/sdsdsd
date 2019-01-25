const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send('**Please specify a valid user**');

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: You do not have sufficient permissions to use this command.");
  if (user.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: The user you are trying to ban is either the same, or higher role than you.");

  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send('**Please have a reason**');

  let embed = new Discord.RichEmbed()
  .setTitle('Incoming Report!')
  .setColor(0xEE0000)
  .addField('Banned User', `${user}`, true)
  .addField('Banned By', `${message.author}`, true)
  .addField('Banned in Channel', message.channel, true)
  .addField('Reason', reason)
  .setTimestamp();

  await user.ban(reason);
  
  let logging = JSON.parse(fs.readFileSync("./cfg/logging.json", "utf8"));

	let logC = logging[message.guild.id].logging;
  let rChan = client.channels.get(logC);
  
  if (!rChan) return message.channel.send('**There is no logging channel**');

  rChan.send(embed);
  return;
}