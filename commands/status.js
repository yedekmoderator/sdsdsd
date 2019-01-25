const request = require('request');
const Discord = require('discord.js');

// papershredder432#0883 made the base command 
// Thanks to "MrMcShroom#1337" for helping me with this command
// I made the base of it, it just wouldn't work
// He made it request instead of snekfetch the data
// Fixed what I could not fix.

exports.run = (client, message, args) => {
  
  const vanilla1Emoji = "1⃣";
  const vanilla2Emoji = "2⃣";
  
  let serverEmbed = new Discord.RichEmbed()
    .setTitle('AngelicGaming\'s Servers')
    .setColor(0xF0FBAC)
    .addField('1⃣ AngelicGaming Survival PvP [Full Vanilla]', 'Vanilla Server')
    .addField('2⃣ AngelicGaming Survival PvE [Full Vanilla]', 'Vanilla Server');

  
  message.channel.send(serverEmbed).then(msg => {
    msg.react(vanilla1Emoji).then(r => {
      msg.react(vanilla2Emoji)
        .catch(() => message.channel.send('Unexpected Error'));
      
      
      // Rocket 1 Such
      const vanilla1Vote = (reaction ,user) => reaction.emoji.name === vanilla1Emoji && user.id === message.author.id;
      const vanilla1VoteYes = msg.createReactionCollector(vanilla1Vote, {
        time: 60000
      });
      vanilla1VoteYes.on('collect', r => {
        msg.delete();
        
        const api = "https://unturned-servers.net/api/?object=servers&element=detail&key=GygaOf3mF8CPir3j5TlxmevJWB23gN5241";

        function callback(e, res, data) {
        if (!e) {
          if (res && res.statusCode === 200) {
            var data = JSON.parse(data);
        
            let sStatus = data.is_online;
            let sPrivate = data.private;
            let sPass = data.password;
        
            // Tells if the server is online or offline, 1 being online, 0 being offline
            if (sStatus === '1') { sStatus = 'Online' } else { sStatus = 'Offline'};
        
            // Tells if the server is public or private, 1 being private, 0 being public
            if (sPrivate === '0') { sPrivate = 'Public' } else { sPrivate = 'Private'};
        
            // Tells if the server is password protect or not, 1 being yes, 0 being no
            if (sPass === '0') { sPass = 'No' } else { sPass = 'Yes'};
        
            // Makes the embed
            let embed = new Discord.RichEmbed()
        
              // Server Stats
              .setTitle('Server Status')
              .setDescription(`${data.url}`)
              .addField('Server Name', `${data.hostname}`, true)
              .addField('Name from USL', `${data.name}`, true)
              .addField('IP', `${data.address}`, true)
              .addField('Port', `${data.port}`, true)
              .addField('Status', `${sStatus}`, true)
              .addField('Players', `${data.players} / ${data.maxplayers}`, true)
              .addField('Version', `${data.version}`, true)
              .addField('Map', `${data.map}`, true)
              .addField('Public or Private', `${sPrivate}`, true)
              .addField('Password', `${sPass}`, true)
        
              // Misc Stats
              .addField('Uptime', `${data.uptime}%`, true)
              .addField('Host Location', `${data.location}`, true)
              .addField('Host Platform', `${data.platform}`, true)
              .addField('Favorites', `${data.favorited}`, true)
              .addField('Score', `${data.score}`, true)
              .addField('Rank', `${data.rank}`, true)
              .addField('Votes', `${data.votes}`, true)
              .addField('Last Online', `${data.last_online}`, false)
              .setFooter(`Last Checked:  ${data.last_check}`);
        
            // Color for Status
            // If the server is online, it is green. If offline, red.
            if (data.is_online === '1') { embed.setColor(0x00FF00) } else { embed.setColor(0xFF0000) };
        
            // Sends the message
            message.channel.send(embed);
          }
        } else {
          // No response or wasn't a successful request (not code 200), so log it to the console
          console.error("Response error: " + res.toString());
        }
      }  
      request(api, callback);
      });
      
      // Vanilla 1
      // Rocket 1 Such
      const vanilla2Vote = (reaction ,user) => reaction.emoji.name === vanilla2Emoji && user.id === message.author.id;
      const vanilla2VoteYes = msg.createReactionCollector(vanilla2Vote, {
        time: 60000
      });
      vanilla2VoteYes.on('collect', r => {
        msg.delete();
        
        const api = "https://unturned-servers.net/api/?object=servers&element=detail&key=rr4kr55yQzNtj8nGtFPXOOdAhChfdtmSWQd";

        function callback(e, res, data) {
        if (!e) {
          if (res && res.statusCode === 200) {
            var data = JSON.parse(data);
        
            let sStatus = data.is_online;
            let sPrivate = data.private;
            let sPass = data.password;
        
            // Tells if the server is online or offline, 1 being online, 0 being offline
            if (sStatus === '1') { sStatus = 'Online' } else { sStatus = 'Offline'};
        
            // Tells if the server is public or private, 1 being private, 0 being public
            if (sPrivate === '0') { sPrivate = 'Public' } else { sPrivate = 'Private'};
        
            // Tells if the server is password protect or not, 1 being yes, 0 being no
            if (sPass === '0') { sPass = 'No' } else { sPass = 'Yes'};
        
            // Makes the embed
            let embed = new Discord.RichEmbed()
        
              // Server Stats
              .setTitle('Server Status')
              .setDescription(`${data.url}`)
              .addField('Server Name', `${data.hostname}`, true)
              .addField('Name from USL', `${data.name}`, true)
              .addField('IP', `${data.address}`, true)
              .addField('Port', `${data.port}`, true)
              .addField('Status', `${sStatus}`, true)
              .addField('Players', `${data.players} / ${data.maxplayers}`, true)
              .addField('Version', `${data.version}`, true)
              .addField('Map', `${data.map}`, true)
              .addField('Public or Private', `${sPrivate}`, true)
              .addField('Password', `${sPass}`, true)
        
              // Misc Stats
              .addField('Uptime', `${data.uptime}%`, true)
              .addField('Host Location', `${data.location}`, true)
              .addField('Host Platform', `${data.platform}`, true)
              .addField('Favorites', `${data.favorited}`, true)
              .addField('Score', `${data.score}`, true)
              .addField('Rank', `${data.rank}`, true)
              .addField('Votes', `${data.votes}`, true)
              .addField('Last Online', `${data.last_online}`, false)
              .setFooter(`Last Checked:  ${data.last_check}`);
        
            // Color for Status
            // If the server is online, it is green. If offline, red.
            if (data.is_online === '1') { embed.setColor(0x00FF00) } else { embed.setColor(0xFF0000) };
        
            // Sends the message
            message.channel.send(embed);
          }
        } else {
          // No response or wasn't a successful request (not code 200), so log it to the console
          console.error("Response error: " + res.toString());
        }
      }  
      request(api, callback);
      });
    });
  });
  

}