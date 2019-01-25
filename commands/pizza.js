const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, tools) => {
  let TotalPizza;
  let pizza = await db.fetch(`pizza_${message.author.id}`)
    
  if (pizza === null) db.set(`pizza_${message.author.id}`, 0);
  else TotalPizza = pizza;
  
  if (TotalPizza === undefined) TotalPizza = 1;
  
  db.add(`pizza_${message.author.id}`, 1).then(i => {
    const emb = new Discord.RichEmbed()
      .setTitle('Nom!')
      .setThumbnail('https://banner2.kisspng.com/20180301/jkw/kisspng-pizza-fast-food-italian-cuisine-vector-pizza-5a9816cc382506.40531292151991674823.jpg')
      .setColor(0x00FFBF)
      .setDescription(`You have eaten another pizza!\nYou have totally eaten: **${TotalPizza + 1}** pizzas!`)
    message.channel.send(emb)
  })
  
    // Levels
  if (pizza === 1) return message.channel.send(`${message.author} has leveled up to level: **1**`);
  if (pizza === 5) return message.channel.send(`${message.author} has leveled up to level: **2**`);
  if (pizza === 25) return message.channel.send(`${message.author} has leveled up to level: **3**`);
  if (pizza === 50) return message.channel.send(`${message.author} has leveled up to level: **4**`);
  if (pizza === 125) return message.channel.send(`${message.author} has leveled up to level: **5**`);
  if (pizza === 250) return message.channel.send(`${message.author} has leveled up to level: **6**`);
  if (pizza === 425) return message.channel.send(`${message.author} has leveled up to level: **7**`);
  if (pizza === 750) return message.channel.send(`${message.author} has leveled up to level: **8**`);
  if (pizza === 825) return message.channel.send(`${message.author} has leveled up to level: **9**`);
  if (pizza === 1000) return message.channel.send(`${message.author} has leveled up to level: **10**`);
}