const Discord = require('discord.js');
const meme = require('memejs');

exports.run = async (client, message, args) => {
  let user = message.author;
  let nickname = user.nickname;
  if (nickname) {
    nickname = user.nickname;
  } else {
    nickname = message.author.username;
  };
  meme(function(data) {
    const embed = new Discord.RichEmbed()
      .setTitle(data.title[0])
      .setColor('RANDOM')
      .setFooter(`Meme requested by ${nickname}`)
      .setImage(data.url[0])
    message.channel.send(embed);
  })
}