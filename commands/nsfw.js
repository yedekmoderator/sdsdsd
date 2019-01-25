const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message) => {
  if(!message.channel.nsfw) {return message.channel.send(`:underage: **This channel is not marked as NSFW!** :angry: `)}

  var subreddits = [
    'NSFW_Wallpapers',
    'SexyWallpapers',
    'HighResNSFW',
    'nsfw_hd',
    'UHDnsfw'
  ]
  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

  randomPuppy(sub)
    .then(url => {
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("4k", client.user.avatarURL)
        .setImage(url);
      message.channel.send(embed);
    });
}