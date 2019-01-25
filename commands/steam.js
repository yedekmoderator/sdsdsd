const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let steamID = args[0];
  
  const api = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=52794D3EE3A6C95B856A1C64638CE73C&steamids=${steamID}`;
  const api2 = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=52794D3EE3A6C95B856A1C64638CE73C&steamids=${steamID}`;
  
  if(!steamID) return message.channel.send('**Please provide a valid Steam ID64**');
  
  function callback(e, res, data) {
    if (!e) {
      if (res && res.statusCode === 200) {
        var data = JSON.parse(data);
          
        function callback(e, res, data2) {
          if (!e) {
            if (res && res.statusCode === 200) {
              var data2 = JSON.parse(data2);
              
              console.log(data2);
              
              let userData = data2.response.players[0];
              let banD = data.players[0];
        
              if (banD.CommunityBanned === false) { banD.CommunityBanned = 'None' } 
                else { banD.CommunityBanned = 'Yes' };
              if (banD.VACBanned === false) { banD.VACBanned = 'None' } 
                else { banD.VACBanned = 'Yes' };
        
              if (userData.personastate === 0) { userData.personastate = 'Offline' } 
                else if (userData.personastate === 1) { userData.personastate = 'Online' }
                else if (userData.personastate === 2) { userData.personastate = 'Busy' }
                else if (userData.personastate === 3) { userData.personastate = 'Away' }
                else if (userData.personastate === 4) { userData.personastate = 'Snooze' }
                else if (userData.personastate === 5) { userData.personastate = 'Looking to Trade' }
                else if (userData.personastate === 6) { userData.personastate = 'Looking to Play' };
              if (userData.personastateflags === 1) { userData.personastateflags = 'Private or Friends Only' }
                else { userData.personastateflags = 'Public' };
              
              let statsEmbed = new Discord.RichEmbed()
                .setTitle(userData.steamid)
                .setDescription(userData.personaname)
                .setURL(`http://steamcommunity.com/profiles/${steamID}`)
                .setThumbnail(userData.avatarfull)
                .addField('Persona State', userData.personastate)
                .addField('Persona Flag', userData.personastateflags)
                .addField('Bans', `**Community:** ${banD.CommunityBanned} \n**VAC:** ${banD.VACBanned} \n**Economy:** ${banD.EconomyBan} \n**VAC Bans:** ${banD.NumberOfVACBans} \n**Game Bans:** ${banD.NumberOfGameBans} \n**Days Since Last Ban:** ${banD.DaysSinceLastBan}`)
      
              message.channel.send(statsEmbed)
            }
          } else {
            console.error("Response error: " + res.toString());
          }
        }
        request(api2, callback);
        }
    } else {
      console.error("Response error: " + res.toString());
    }
  }  
  request(api, callback);
}