const Discord = require('discord.js');

exports.run = async (client, message, tools) => {
  // Emojis
  // 0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 9⃣ 🔟
  const backEmoji = "0⃣";
  const cheeseEmoji = "1⃣";
  const derpyEmoji = "2⃣";
  const rowanEmoji = "3⃣";
  const stalinEmoji = "4⃣";
  const pontusEmoji = "5⃣";
  const mitchEmoji= "6⃣";
  
  // Start
  let partnerEmbed = new Discord.RichEmbed()
    .setTitle('AngelicGaming\'s Partners')
    .setColor(0xF0FBAC)
    .addField('1⃣ Cheese\'s Semi-RP', 'Semi-RP Server with currently over 240 members')
    .addField('2⃣ Derpy\'s RP', 'RP Server with currently over 300 members')
    .addField('3⃣ Unturned Squad', 'Server with currently over 65 members')
    .addField('4⃣ WWII RP', 'WWII RP server with currently over 60 members')
    .addField('5⃣ Pontus Community', 'Discord server with currently over 75 members')
    .addField('6⃣ WaterHosting', 'Website Hosting server with currently over 40 members')
    .setFooter('React with 0⃣ to delete this message.')
  
  // Cheese's Ad
  let cheeseServer = new Discord.RichEmbed()
    .setTitle('Cheese\'s Semi-RP')
    .setDescription
      ('```Dear Unturned player, \nIf you are bored and what something fun to do in Unturned, Why don’t you try Cheese’s Semi-RP! We currently have 240+ members on our discord server and are looking for more players to make our server grow. We have lots to offer when you join. There is a lot of jobs that you can apply for and potential friends or foes! We have a discord server where you can apply for the jobs that are mentioned above. It is also a great place to stay up-to-date on all the information regarding the server. Here is a glimpse on what the server is all about. We hope you enjoy playing with us! \n\nValot Is A Safezone (KOS+Raiding Everywhere Else) \nActive and friendly admins \nOvergrown 3+ map\nLots of cool jobs to choose from\nGreat role-playing experience\nHelpful and friendly community \nWide variety of plugins\nGreat server shop system with multiple player owned shops\nGiveaways & Events Everyday (You could win big :) ) \n\nHere are some commands that can help you:\n/balance = States The Money In Your Account\n/pay = Used To Pay A Player\n/vote= Vote for the server and get rewards! \n/tell <player> <message> = A good way to communicate privately in-game\n/cvote = For voting for events in-game\n\nSo what are you waiting for? Join it! \n\nIP: 192.154.226.200\nPORT: 27020``` \nDISCORD: https://discord.gg/XexHED9\nSTEAM: http://steamcommunity.com/groups/cheeserp')
    .setImage('https://cdn.discordapp.com/attachments/380850124777062402/417829148652863489/JPEG_20180226_210312.jpg')
    .setColor(0xFFFF00)
    .setFooter('Ad brought to you by: Cheese#6241')

  // Derpy's Ad
  let derpyServer = new Discord.RichEmbed()
    .setTitle('Derpy\'s Network™')
    .setDescription
      ('```24/7 Unturned server \nNice staff   \n\nFriendly and Active Community \n\n24 Slots \n\nDonations \n\nJobs  \n\nAtlantis\n\nIP: 89.35.29.25\nPort: 27020   ```DISCORD: https://discord.gg/MbTfhm2')
    .setColor(0x00FF0F)
    .setFooter('Ad brought to you by: Derpy Potato#6666')
  
  // Rowan's Ad
  let rowanServer = new Discord.RichEmbed()
    .setTitle('Unturned Squad')
    .setDescription
      ('```UNTURNED SQUAD\n⭐ Unturned\n⭐ Gmod\n⭐ Rainbow Six Siege\n⭐ Deceit\n⭐ Scrap Mechanic\n⭐ GTA 5\n⭐ FiveM\n⭐ H1Z1\n⭐ Many More\n\nWe here at Unturned Squad despite its name has a range of games up to play with others. You can also get premium help for your discord and unturned servers here as i am more active here. Have fun!\n\n✅ Active Members\n✅ Many Chats\n✅ Custom Ranks That You Can Get\n\n🚫 No Spam\n🚫 No Mass Mention\n🚫 Abuse```DISCORD: https://discord.gg/wsAC6tn \nOUR BOT: https://discordapp.com/oauth2/authorize?client_id=404758289650417685&scope=bot&permissions=66186303')
    .setColor(0xF0F0F0)
    .setFooter('Ad brought to you by: [USO/MSO] rowansc1✅ᵛᵉʳᶦᶠᶦᵉᵈ#4054')
  
  // Stalin's Ad
  let stalinServer = new Discord.RichEmbed()
    .setTitle('WWII RP')
    .setDescription
      ('```IP 46.4.21.28 \nPort is 27013 ```DISCORD: https://discord.gg/SwVSkc \nU-S: https://unturned-servers.net/server/160077/')
    .setFooter('Ad brought to you by: Joseph Stalin#8945')
  
  // Pontus' Ad
  let pontusServer = new Discord.RichEmbed()
    .setTitle('Pontus Community')
    .setDescription
      ('```:stuck_out_tongue_winking_eye:  Bots :stuck_out_tongue_winking_eye: \n\n💸 Active Owner 💸\n\nActive Staff Members\n\n😜 Ask Staff to get help 😜 \n\nNo advertisement \n\nPartner with us Today!!\n\n📷 Content Creators 📷 like MrSpaml,Kolide,Itzeleozz and Me``` DISCORD: https://discord.gg/VAMh6yv')
    .setFooter('Ad brought to you by: Pontus Forsman 330+ YT#1218')
  
  // Mitch's Ad
  let mitchServer = new Discord.RichEmbed()
    .setTitle('WaterHosting')
    .setDescription
      ('**Hello** 👋 \nHey! Welcome to WaterHosting. As it says, we are a hosting company and we are hosting at low cost. But you get the high performance.\n\n**Plans**\nAll our plans are based on low-price, we will also try to provide you with best support too.\n\n\n**Support**\nOur support team is online most time, try opening a ticket with -new command in the discord.\n#support \n\n**What do we host?**\n • Web Hosting 🎛\n\n\n**Our Website** 🔐 \nhttp://waterhosts.org/\n\n**Our Invite** ⛓\nhttps://discord.gg/ujJ8b3s')
    .setFooter('Ad brought to you by: Mitch#0647')
  
  message.channel.send(partnerEmbed).then(msg => {
    msg.react(backEmoji).then(r => {
      msg.react(cheeseEmoji)
      .then( msg.react(derpyEmoji) )
      .then( msg.react(rowanEmoji) )
      .then( msg.react(stalinEmoji) )
      .then( msg.react(pontusEmoji) )
      .then( msg.react(mitchEmoji) )
      .catch(() => message.channel.send('**One of the emojis failed to react.**'));
      
      // Delete Such
      const backVote = (reaction, user) => reaction.emoji.name === backEmoji && user.id === message.author.id;
      const backVoteYes = msg.createReactionCollector(backVote, {
        time: 1000000
      });
      backVoteYes.on('collect', r => {
        msg.delete();
      });
      
      // Cheese Such
      const cheeseVote = (reaction, user) => reaction.emoji.name === cheeseEmoji && user.id === message.author.id;
      const cheeseVoteYes = msg.createReactionCollector(cheeseVote, {
        time: 1000000
      });
      cheeseVoteYes.on('collect', r => {
        msg.delete();
        message.channel.send(cheeseServer)
      });
      
      // Derpy Such
      const derpyVote = (reaction, user) => reaction.emoji.name === derpyEmoji && user.id === message.author.id;
      const derpyVoteYes = msg.createReactionCollector(derpyVote, {
        time: 1000000
      });
      derpyVoteYes.on('collect', r => {
        msg.delete();
        message.channel.send(derpyServer)
      });
      
      // Rowan Such
      const rowanVote = (reaction, user) => reaction.emoji.name === rowanEmoji && user.id === message.author.id;
      const rowanVoteYes = msg.createReactionCollector(rowanVote, {
        time: 1000000
      });
      rowanVoteYes.on('collect', r => {
        msg.delete();
        message.channel.send(rowanServer)
      });
      
      // Stalin Such
      const stalinVote = (reaction, user) => reaction.emoji.name === stalinEmoji && user.id === message.author.id;
      const stalinVoteYes = msg.createReactionCollector(stalinVote, {
        time: 1000000
      });
      stalinVoteYes.on('collect', r => {
        msg.delete();
        message.channel.send(stalinServer)
      });
      
      // Pontus Such
      const pontusVote = (reaction, user) => reaction.emoji.name === pontusEmoji && user.id === message.author.id;
      const pontusVoteYes = msg.createReactionCollector(pontusVote, {
        time: 1000000
      });
      pontusVoteYes.on('collect', r => {
        msg.delete();
        message.channel.send(pontusServer)
      });
      
      // Mitch Such
      const mitchVote = (reaction, user) => reaction.emoji.name === mitchEmoji && user.id === message.author.id;
      const mitchVoteYes = msg.createReactionCollector(mitchVote, {
        time: 1000000
      });
      mitchVoteYes.on('collect', r => {
        msg.delete();
        message.channel.send(mitchServer)
      });
    });
  });
}