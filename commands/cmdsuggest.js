
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let suggestion = args.join(" ").slice(0);
  let user = message.author;
  let guild = message.guild;
  let channel = client.channels.get("456137574457802782")
  let embed = new Discord.RichEmbed()
    .setTitle("Command Suggestion")
    .setThumbnail("https://www.snapsuggest.com/images/app-icon-512x512.png")
    .addField("Suggestion", suggestion)
    .addField("Suggested By", `${user.tag} (${user.id})`)
    .addField("Suggested in", `${guild.name} (${guild.id})`)
    .setColor("#f49542")

  message.channel.send("✅ **| Your command suggestion has been sent in the official server. It will be reviewed so please be patient.**")
  channel.send(embed).then(i => i.react("⏳"))

}