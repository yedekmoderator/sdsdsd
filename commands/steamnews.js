const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let appID = args[0];
  if(!appID) return message.channel.send('**Please provide a valid Steam App ID**');
  
  const api = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=${appID}&count=1`;
    
  function callback(e, res, data) {
    if (!e) {
      if (res && res.statusCode === 200) {
        var data = JSON.parse(data);
          
        let news = data.appnews.newsitems[0];
        
        let newsEmbed = new Discord.RichEmbed()
          .setTitle(news.title)
          .setURL(news.url)
          .setDescription('See More Update News Here')
          .setFooter(`App ID: ${appID} | ${data.appnews.newsitems[0].author}`)
          .addField('Content', data.appnews.newsitems[0].contents)
        
        message.channel.send(newsEmbed);
        
        console.log(data.appnews.newsitems[0].contents);
      }
    } else {
      console.error("Response error: " + res.toString());
    }
  }  
  request(api, callback);
}