const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message) => {
  let botconfig = JSON.parse(fs.readFileSync("./cfg/botconfig.json", "utf8"));
  let prefixes = JSON.parse(fs.readFileSync("./cfg/prefixes.json", "utf8"));
  let welcomes = JSON.parse(fs.readFileSync("./cfg/welcome_leave.json", "utf8"));
  let autorole = JSON.parse(fs.readFileSync("./cfg/autorole.json", "utf8"));
  let logging = JSON.parse(fs.readFileSync("./cfg/logging.json", "utf8"));
  
  let Prefix;
  if(!prefixes[message.guild.id]) { Prefix = '??'} else { Prefix = prefixes[message.guild.id].prefixes };

  let Autorole;
  if(!autorole[message.guild.id]) { Autorole = 'None' } else { Autorole = `<@&${autorole[message.guild.id].autorole}>` }
  
  let Welcome;
  if(!welcomes[message.guild.id]) { Welcome = 'None' } else { Welcome = `<#${welcomes[message.guild.id].welcomes}>` }
  
  let Logging;
  if(!logging[message.guild.id]) { Logging = 'None' } else { Logging = `<#${logging[message.guild.id].logging}>` }
  
  let setEmbed = new Discord.RichEmbed()
    .setTitle(`Settings for ${message.guild.name}`)
    .setThumbnail(message.guild.iconURL)
    .addField('Prefix', `\`${Prefix}\``)
    .addField('Join/Leave Channel', Welcome)
    .addField('Logging Channel', Logging)
    .addField('Auto-Role Role', Autorole)
  
  message.channel.send(setEmbed)
}