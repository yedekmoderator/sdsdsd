const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR") && message.member.id !== "76063689064583168") return message.channel.send(":x: You do not have sufficient permissions to use this command.");
  if(!args[0]) return message.channel.send("**Please specify a new channel.**")

  let welcomes = JSON.parse(fs.readFileSync("./cfg/welcome_leave.json", "utf8"));

  welcomes[message.guild.id] = {
    welcomes: args[0]
  };

  fs.writeFile("./cfg/welcome_leave.json", JSON.stringify(welcomes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Welcome/Leave Channel Customization")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Set to`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}