const Discord = require('discord.js');
const { version } = require('discord.js');
const fs = require('fs');
const si = require('systeminformation');
const commandsDir = "./commands"

exports.run = (client, message, args) => {
  fs.readdir(commandsDir, async (error, files) => {
    
    let totalSeconds = (Math.round(client.uptime / 1000));
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;  
    
    let uptime = `${days}:${hours}:${minutes}:${seconds}`;
    
    
    si.cpu(function(data) {
    
      const InfoEmbed = new Discord.RichEmbed()
        .setAuthor(`${client.user.tag}`)
        .setThumbnail(`${client.user.avatarURL}`)
        .addField("Version", "2.0.0", true)
        .addField("Number of Commands", `**${files.length}**`, true)
        .addField("Memory Usage", `Heap Used: **\`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}\`** MB \nHeap Total: **\`${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}\`**`, true)
        .addField("CPU Usage", `**${Math.round(process.cpuUsage().system / 1000000)}**%`, true)
        .addField("CPU Info", `Brand: \`${data.brand}\` \nSpeed: \`${data.speed}\`GHz \nCores: \`${data.cores}\``, true)
        .addField("Servers", `**${client.guilds.size}**`, true)
        .addField("Users", `**${client.users.size}**`, true)
        .addField("Uptime", `${uptime}`, true)
        .addField("Discord.js Version:", `v${version}`, true)
        .addField("Node.js Version", `${process.version}`, true)
        .addField("Developers", "*papershredder432#0883*", false)
        .addField("Donate to papershredder!", 'Steam Trade: https://bit.ly/2IBLmtt \nPayPal: https://bit.ly/2Ih9UeK', true)
        .addField("Upvote this Bot on Discordbots.org", 'https://discordbots.org/bot/346472377359794176', true)
      message.channel.send(InfoEmbed);
    });
    });
}