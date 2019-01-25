const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  let helpEmbed = new Discord.RichEmbed()
    .setTitle('All Commands')
    .setURL('https://sites.google.com/view/angelicgaming/home/bot?authuser=0')
    .setColor('RANDOM')
    .addField('Chance Commands', '8Ball <Question> \nCointoss \nRTD [Number]')
    .addField('Fun Commands', 'Bubbles \nCat \nClapify <Words> \nDog \nReverse <Text> \nMeme \nPizza')
    .addField('Sound Commands', 'Play \nSkip \nStop')
    .addField('Tools', 'Avatar [Mention] \nBans \nCSGO-Stats <SteamID64> \nEmojis \nFortnite <User> [Platform (PC by Default)] \nGuildInfo \nHelp \nIP <IP> \nMembers \nNotifyMe \nOverwatch <Battletag> <Region [us | eu | asia]> <Gamemode [quickplay | competitive]> <Platform [pc | etc]> \nPoll <Question> \nReport <Mention> <Reason> \nSteamUser <Steam ID64> \nTimer <Time> \nUnstats <SteamID64> \nUserInfo [Mention] \nWebsite')
    .addField('NSFW', 'Ass \nBoobs \nEcchi \nNeko \nHentai \nNSFW')
    .addField('Bot Such', 'BugReport <Bug> \nCmdSuggest <Command Suggestion> \nDBL [Bot ID] \nInvite \nPing \nStats')
    .addField('Staff Commands', 'AutoRole <Role ID> \nBan <Mention> <Reason> \nKick <Mention> <Reason> \nLogs <Channel ID> \nMute <Mention> <Duration> \nPrefix <New Prefix> \nPurge <1-100> \nUnMute <Mention> \nWarn <Mention> <Reason> \nWelcome <Channel ID>')
    .addField('AG Server Specific', 'MapChange \nPartners \nPlayers \nStatus \nVote \nWebsite')
    .addField('Owner', 'Eval <Code> \nRestart \nSay <Words>')
  
  message.channel.send(helpEmbed);
}