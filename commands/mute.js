const Discord = require("discord.js");
const ms = require("ms");
const fs = require('fs');

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You do not have sufficient permissions to use this command.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: The user you are trying to mute is either the same, or higher role than you.");
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#ff0000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specify a time!");
  
    let embed = new Discord.RichEmbed()
      .setTitle('Incoming Report!')
      .setColor(0xEEEE00)
      .addField('Muted User', `${tomute}`, true)
      .addField('Muted By', `${message.author}`, true)
      .addField('Muted in Channel', message.channel, true)
      .addField('Length', ms(ms(mutetime)))
      .setTimestamp();
  
  
    let logging = JSON.parse(fs.readFileSync("./cfg/logging.json", "utf8"));

	  let logC = logging[message.guild.id].logging;
    let rChan = client.channels.get(logC);
  
    if (!rChan) return message.channel.send('**There is no logging channel**');
  
    await (tomute.addRole(muterole.id));
    message.delete().catch(O_o=>{});
    rChan.send(embed);

    setTimeout(function() {
      let unmuteEmbed = new Discord.RichEmbed()
        .setTitle('Incoming Report!')
        .setColor(0x00FF00)
        .addField('Unmuted User', `${tomute}`, true)
        .addField('Unmuted in Channel', message.channel, true)
        .addField('More info:', '**Automatic Unmute**', true)
      tomute.removeRole(muterole.id)
        .then (rChan.send(unmuteEmbed));
    }, ms(mutetime));

}