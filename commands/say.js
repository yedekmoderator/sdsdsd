const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  message.delete();
  if(message.author.id !== '76063689064583168') return message.channel.send(":x: You do not have sufficient permissions to use this command.");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}