const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');
const send = require("quick.hook");

exports.run = async (bot, message, args) => {

  let ban = await message.guild.fetchBans().catch(error => {
    return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
  });

  ban = ban.array();
  let users = message.guild.fetchBans().id;

  arraySort(ban, 'size', {
    reverse: true
  });

  let possibleBans = [
    ['Users', 'ID']
  ];
  ban.forEach(function(ban) {
    possibleBans.push([ban.username, ban.id]);
  })

  const embed = new Discord.RichEmbed()
    .setColor(0xCB5A5E)
    .setThumbnail('http://gaia.adage.com/images/bin/image/x-large/iStock47643841422.jpg')
    .addField('Bans', `\`\`\`${table.table(possibleBans)}\`\`\``);
  message.channel.send(embed);
};
