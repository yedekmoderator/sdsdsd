      
const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
    
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
  if(!message.channel.nsfw) {return message.channel.send(`:underage: **This channel is not marked as NSFW!** :angry: `)}
  
  let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai is art.")
    .setImage(body.url)
    .setColor("RANDOM")

  message.channel.send(hentaiEmbed);
}