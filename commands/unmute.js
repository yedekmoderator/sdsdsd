const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You do not have sufficient permissions to use this command.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!tomute) return message.reply("Couldn't find user.");
  if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: The user you are trying to mute is either the same, or higher role than you.");
  let muterole = message.guild.roles.find(`name`, "Muted");

  let embed = new Discord.RichEmbed()
      .setTitle('Incoming Report!')
      .setColor(0x00FF00)
      .addField('Unmuted User', `${tomute}`, true)
      .addField('Unmuted By', `${message.author}`, true)
      .addField('Unmuted in Channel', message.channel, true)
      .addField('More info:', '**Manual Unmute**', true)
      .setTimestamp();
  
  
    await (tomute.removeRole(muterole.id));
    let reportschannel = message.guild.channels.find('name', 'bot-logs');
    if (!reportschannel) return message.channel.send('**There is no channel with the name `bot-logs`**');
    message.delete().catch(O_o=>{});
    reportschannel.send(embed);

}