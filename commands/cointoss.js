const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let replies = [
        'Heads',
        'Tails'
    ]
    var result = Math.floor(Math.random() * replies.length)
    message.channel.send(replies[result])
}