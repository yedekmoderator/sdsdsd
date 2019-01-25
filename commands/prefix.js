const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let prefixes = JSON.parse(fs.readFileSync("./cfg/prefixes.json", "utf8"));
  
  if(!message.member.hasPermission("ADMINISTRATOR") && message.member.id !== "76063689064583168") return message.channel.send(":x: You do not have sufficient permissions to use this command.");
  if(!args[0]) return message.channel.send("**Please specify a new prefix.**");

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./cfg/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Customization")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Set to`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}