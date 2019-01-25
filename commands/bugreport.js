
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let bug = args.join(" ").slice(0);
  let user = message.author;
  let guild = message.guild;
  let channel = client.channels.get("456099904964657154")
  let embed = new Discord.RichEmbed()
    .setTitle("Bug Report")
    .setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
    .addField("Bug", bug)
    .addField("Reported By", `${user.tag} (${user.id})`)
    .addField("Reported in", `${guild.name} (${guild.id})`)
    .setColor("#f49542")

  message.channel.send("✅ **| Your bug has been reported in the official server. It will be reviewed so please be patient.**")
  channel.send(embed).then(i => i.react("⏳"))

}