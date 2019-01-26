const Discord = require( 'discord.js' );
const fs = require('fs');
const db = require('quick.db');
const client = new Discord.Client();

// Bot 
client.login('NTM4NDYzMzM0Njg1NjA1OTE4.Dy28Rg.EnEE80aIOqsAOkIzwn7UVrE6GOk');
const botconfig = require("./cfg/botconfig.json");
let owners = ["76063689064583168"];
//            papershredder432  

//const active = new Map();

// Client join and leave Discord
client.on("guildCreate", async guild => {
  client.user.setActivity(`??help | ${client.guilds.size} Guilds | ${client.users.size} Members`, { type: 'Playing' });
  
  let guildCreateChannel = client.channels.get("457461221885476865");
  
  let general = guild.channels.find('name', 'general');
  guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setTitle('Guild Joined')
      .setThumbnail(guild.iconURL)
      .setURL(invite.url)
      .setDescription('Join the new Guild')
      .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
      
    guildCreateChannel.send(joinEmbed);
  });
}); 

client.on("guildDelete", async guild => {
  client.user.setActivity(`??help | ${client.guilds.size} Guilds | ${client.users.size} Members`, { type: 'Playing' });
  
  let guildCreateDelete = client.channels.get("457461221885476865");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Guild Left')
    .setThumbnail(guild.iconURL)
    .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  
  guildCreateDelete.send(leaveEmbed);
});



// Auto-Role on Join
client.on("guildMemberAdd", function(member) {
  // Custom Role
  let autoroles = JSON.parse(fs.readFileSync("./cfg/autorole.json", "utf8"));
  if (!autoroles[member.guild.id]) {
    return;
  };
  let role = autoroles[member.guild.id].autorole;
  
  if (!role) return;
  member.addRole(role).catch(console.error);
  
  // Custom Channel
  let welcomes = JSON.parse(fs.readFileSync("./cfg/welcome_leave.json", "utf8"));
  if(!welcomes[member.guild.id]) {
    return;
  };
	let welcomeC = welcomes[member.guild.id].welcomes;

  let welcomeChannel = welcomeC;
  
  var welcomeMessages = [
    `Welcome to the server ***${member.user.tag}***.`,
    `Oh no! ***${member.user.tag}*** has found us!`,
    `Hello there ***${member.user.tag}***!`,
    `What is love? ***${member.user.tag}*** is!`,
    `oWo, what's this? ***${member.user.tag}*** is it.`,
    `It's a bird... It's a plane... No, it's ***${member.user.tag}***!`
  ];
  let result = Math.floor((Math.random() * welcomeMessages.length));
  
  let newWelcome = client.channels.get(welcomeChannel);
  if (!newWelcome) return;
  newWelcome.send(welcomeMessages[result]);
});

client.on("guildMemberRemove", function(member) {
  // Custom Channel
  let welcomes = JSON.parse(fs.readFileSync("./cfg/welcome_leave.json", "utf8"));
  if(!welcomes[member.guild.id]) {
    return;
  };
	let welcomeC = welcomes[member.guild.id].welcomes;
  
  let newLeave = client.channels.get(welcomeC);
  if (!newLeave) return;
  newLeave.send(`***${member.user.tag}*** has just left the server!`);
});



/* Start-up message */
client.on('ready', () => {
  client.user.setActivity(`??help | ${client.guilds.size} Guilds | ${client.users.size} Members`, { type: 'Playing' });
  console.log ('------------------------------------');
  console.log (`Username           : ${client.user.username}`);
  console.log (`Guilds             : ${client.guilds.size}`);
  console.log (`Users              : ${client.users.size}`);
  console.log (`Default prefix     : ${botconfig.prefix}`);
  console.log (`Status             : Ready! :)`);
  console.log ('------------------------------------');
});

/* Listener Events */
client.on('message', async message => {
  
  // Variables
  let msg = message.content.toUpperCase();
  let sender = message.author;
  
  // Custom Prefix
  let prefixes = JSON.parse(fs.readFileSync("./cfg/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  };
	let prefix = prefixes[message.guild.id].prefixes;

  // Vars cont
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  
  // Return Statements
  if (!msg.startsWith(prefix)) return;
  if (message.author.bot) return;
  
  // Command Handler
  try {
    let userCommandFile = require(`./commands/${cmd}.js`);
    userCommandFile.run(client, message, args);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(`${message.author.tag} ran the command ${cmd}`);
  }
});

// Website
var http = require('http');
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.ejs');
});

// listen for requests :)
var listener = app.listen(/*process.env.PORT*/ 8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
