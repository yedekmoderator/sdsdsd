const Discord = require('discord.js');

exports.run = (client, message, tools) => {
  let role = message.guild.roles.find("name", "Notify");
  let member = message.member;
  
  if (!member.roles.has(role.id)) {
    member.addRole(role).catch(console.error);
    message.channel.send(`You are now being notified, ${message.author.tag}!`);
  } else if (member.roles.has(role.id)) {
    member.removeRole(role).catch(console.error);
    message.channel.send(`You are no longer being notified, ${message.author.tag}!`);
  }
  
}