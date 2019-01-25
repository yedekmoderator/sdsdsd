const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send('**Please specify a valid user**');

  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send('**Please have a reason');

  let embed = new Discord.RichEmbed()
  .setTitle('Incoming Report!')
  .setColor(0xEEEE00)
  .addField('Reported User', `${user}`, true)
  .addField('Reported By', `${message.author}`, true)
  .addField('Reported in Channel', message.channel, true)
  .addField('Reason', reason)
  .setTimestamp();

  
  let logging = JSON.parse(fs.readFileSync("./cfg/logging.json", "utf8"));

	let logC = logging[message.guild.id].logging;
  let rChan = client.channels.get(logC);
  
  if (!rChan) return message.channel.send('**There is no logging channel**');

  rChan.send(embed);
  return;
}