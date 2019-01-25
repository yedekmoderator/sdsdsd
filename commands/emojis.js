  const Discord = require('discord.js');

  exports.run = async (client, message, args) => {
    const List = message.guild.emojis.map(e => e.toString()).join(" ");
    const EmojiList = new Discord.RichEmbed() 
      .setTitle('➠ Emojis') //Title
      .setAuthor(message.guild.name, message.guild.iconURL) 
      .setDescription(List) 
      .setTimestamp()
      .setFooter('All Emojis');
    message.channel.send(EmojiList)
  }