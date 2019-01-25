const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let msg =  client.guilds.map(guild => `**${guild.name}** Members: ${guild.memberCount}`).join('\n');
    let embed = new Discord.RichEmbed()
        .setTitle(`I am in ${client.guilds.size} guilds!`)
        .setDescription(`${msg}`)
        .setFooter(client.users.size + ' Members!')
        .setColor("#ebf442");

    message.channel.send(embed);
}