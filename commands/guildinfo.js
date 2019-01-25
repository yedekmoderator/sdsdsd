const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    let large = message.guild.large ? "✅" : "❎";
    let icon = message.guild.iconURL;

    let createdAtRaw = guild.createdAt.toDateString();
    let createdAt = createdAtRaw.split(" ");

    let textChannels = 0;
    let voiceChannels = 0;
    guild.channels.forEach(channel => {
    channel.type === "text" ? textChannels++ : voiceChannels++;
    });

    let emojis = [];
    guild.emojis.forEach(emoji => {
    emojis.push(`\`${emoji.name}\``);
    });
    emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");
  
    let roles = [];
    guild.roles.forEach(role => {
      roles.push(`\`${role.name}\``);
    });
    roles = roles.join(", ");

    console.log(guild.verificationLevel);
  
    let vLevel = guild.verificationLevel;
    if ( vLevel === 0 ) { vLevel = "None \n***0***" };
    if ( vLevel === 1 ) { vLevel = "Low \n***1***" };
    if ( vLevel === 2 ) { vLevel = "Medium \n***2***" };
    if ( vLevel === 3 ) { vLevel = "(╯°□°）╯︵ ┻━┻ \n***3***" };
    if ( vLevel === 4 ) { vLevel = "┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻ \n***4***" };
  
    let serverEmbed = new Discord.RichEmbed()
        .setTitle(`Information about ${message.guild.name}`)
        .setColor(0x000000)
        .setThumbnail(icon)
        .addField('Guild Name', guild.name, true)
        .addField('Guild ID', guild.id, true)
        .addField('Guild Owner', guild.owner, true)
        .addField('Created At', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
        .addField('Server Region', guild.region.toUpperCase(), true)
        .addField('Total Members:', guild.memberCount, true)
        .addField('Large', large, true)
        .addField('Verification Level', vLevel, true)
        .addField('Text Channels', textChannels, true)
        .addField('Voice Channels', voiceChannels, true)
        .addField('Roles', `${guild.roles.size}`, true)
        .addField('Emojis', `${guild.emojis.size}`, true)
    message.channel.send(serverEmbed)
}