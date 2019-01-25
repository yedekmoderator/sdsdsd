const db = require('discord.js');

exports.run = async (client, message, args) => {
  let member = message.mentions.first() || message.member;
  
  let global = await db.fetch(`globalMessages_${member.id}`);
  let guild = await db.fetch(`guildMessages_${member.guild.id}${member.id}`);
  
  message.channel.send(`**Global Messages: \`${global}\`\nGuild Messages: \`${guild}\``)
}