const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("This is the user's info!")
    .setColor("#9B59B6")
    .addField("Full Username", message.author.tag)
    .addField("ID", message.author.id)
    .addField("Created at", message.author.createdAt)
  
  message.channel.send({ embed: embed });
}

exports.help = {
  name: 'userinfo'
}