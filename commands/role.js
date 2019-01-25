      const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let rMember = message.guild.members.get(args[0]) || message.member;
    let role = args.join(" ");

    if (!role) return message.reply("**Please provide a role name, if role name is correct, make sure the case is correct.**");
    let aRole = message.guild.roles.find(`name`, role);
    if (!aRole) return message.reply(`**I can't find the role.:** \`${role}\``);

    if (rMember.roles.has(aRole.id)) {
      rMember.removeRole(aRole.id);
      message.channel.send(`**You have removed the role:** \`${aRole}\``);
    } else if (!rMember.roles.has(aRole.id)) {
      rMember.addRole(aRole.id).then(message.channel.send(`**You have recieved the role:** \`${aRole}\``));
    }
}