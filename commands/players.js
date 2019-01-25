const request = require('request');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
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
      
      
      // Vanilla 1
      const vanilla1Vote = (reaction ,user) => reaction.emoji.name === vanilla1Emoji && user.id === message.author.id;
      const vanilla1VoteYes = msg.createReactionCollector(vanilla1Vote, {
        time: 60000
      });
      
      vanilla1VoteYes.on('collect', r => {
        msg.delete();
        
        let api1 = "http://unturnedsl.com/api/dedicated/16749/players.json";

        function callback(e, res, data) {
        if (!e) {
          if (res && res.statusCode === 200) {
            var data = JSON.parse(data);
            
            const playerArray = data.players.map((player) => {
              return `${player.name} : ${player.time_played}`
            });
        
            message.channel.send(`AngelicGaming Survival PvE [Full Vanilla]\`\`\`${(playerArray.join("\n"))}\`\`\``);

          }
        } else {
          // No response or wasn't a successful request (not code 200), so log it to the console
          console.error("Response error: " + res.toString());
        }
      }  
      request(api1, callback);
      });
      
      // Vanilla 2
      const vanilla2Vote = (reaction ,user) => reaction.emoji.name === vanilla2Emoji && user.id === message.author.id;
      const vanilla2VoteYes = msg.createReactionCollector(vanilla2Vote, {
        time: 60000
      });
      
      vanilla2VoteYes.on('collect', r => {
        msg.delete();
        
        let api2 = "http://unturnedsl.com/api/dedicated/16785/players.json";

        function callback(e, res, data) {
        if (!e) {
          if (res && res.statusCode === 200) {
            var data = JSON.parse(data);
        
            const playerArray = data.players.map((player) => {
              return `${player.name} : ${player.time_played}`
            });
        
            message.channel.send(`AngelicGaming Survival PvP [Full Vanilla]\`\`\`${(playerArray.join("\n"))}\`\`\``);
            
          }
        } else {
          // No response or wasn't a successful request (not code 200), so log it to the console
          console.error("Response error: " + res.toString());
        }
      }  
      request(api2, callback);
      });
    });
  });

}