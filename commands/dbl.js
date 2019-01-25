const Discord= require('discord.js');
const DBL = require('dblapi.js');

exports.run = (client, message, args) => {
  let botID = args[0] || "346472377359794176";
  
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0NjQ3MjM3NzM1OTc5NDE3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTMwNzI2MTYzfQ.L_G8UoX7RyBQBTvKvvO6lujewVL0ItUdI9pNbkTgG_I', client);
  
  dbl.getBot(botID).then(bot => {
    
    let test = bot.owners.map(owner => owner);
    let test2 = JSON.stringify(test);
    console.log(test2);
    
    let dblEmbed = new Discord.RichEmbed()
      .setTitle(`${bot.username}#${bot.discriminator} | ${bot.id}`)
      .setDescription(bot.shortdesc)
      .setImage("https://discordbots.org/api/widget/" + bot.id + ".svg")
      .setURL("https://discordbots.org/bot/" + bot.id)
      .addField('Prefix', `\`${bot.prefix}\``)
      .addField('Library', `\`${bot.lib}\``)
      .addField('Featured Guilds', `\`${bot.guilds}\``)
      .addField('Monthly Points', bot.monthlyPoints)
      .addField('Points', bot.points)
      .addField('Owners', `\`${bot.owners}\``)
      .addField('Tags', `\`${bot.tags}\``);
    
    if (bot.longdesc.length < 1024) {
      dblEmbed.addField('Full Description', bot.longdesc);
    } else if(bot.longdesc.length >= 1024) {
      dblEmbed.addField('Full Description', 'Full description too long, please go to the page by clicking the link provided at the top of this embed.');
    }
    
    message.channel.send(dblEmbed)
  });

}