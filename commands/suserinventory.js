const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');
const steaminventory = require('get-steam-inventory');

exports.run = (client, message, args) => {
  
  let steamID = args[0];//Set up a variable for the steam64 id.
  
  let gameID = args[1] || 440;
  
  if (!steamID) return message.channel.send('**Please provide a valid Steam ID64**');
  
  steaminventory.getinventory(gameID, steamID, function(err, data){//Making the request. 730 is the APPID, Steamid is already declared. Has a callback named 'data'
    if(err) throw err; //Display errors if we recieve them.
    var items = data.body.descriptions; //Sets up variable for all the information that we recieved.
    for (var i = 0; i < items.length; i++) { //Makes a loop for every index in 'items' variable.
      console.log(items[i].market_hash_name); //Logs it into the console.
      
      arraySort(items, 'size', {
        reverse: true
      });

      let possibleItems = [
        ['Item Name']
      ];
      
      items.forEach(function(items) {
        possibleItems.push([items])
      })  
      
      const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Items', `\`\`\`${table.table(items)}\`\`\``);
      message.channel.send(embed)
    }
  });
}