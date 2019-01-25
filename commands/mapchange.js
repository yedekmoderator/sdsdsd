const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  // Emojis
  // 0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 9⃣ 🔟
  let embed = new Discord.RichEmbed()
    .setTitle('🗺 Map Change 🗺')
    .setDescription('1⃣ - Germany \n2⃣ - Greece \n3⃣ - Hawaii \n4⃣ - Ireland \n5⃣ - PEI \n6⃣ - Russia \n7⃣ - Washington \n8⃣ - Yukon');

  message.channel.send(embed).then(async function (message, str) {
    await message.react("1⃣")
    await message.react("2⃣")
    await message.react("3⃣")
    await message.react("4⃣")
    await message.react("5⃣")
    await message.react("6⃣")
    await message.react("7⃣")
    await message.react("8⃣")
  }).catch();
  
  var reacts = ["1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣"];
};
