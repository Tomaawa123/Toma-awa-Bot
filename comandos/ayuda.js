const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "ayuda",
    alias: ["ayuda"],
 
run (client, message, args){


  const embed = new Discord.MessageEmbed()

  .setTitle("MI LISTA DE COMANDOS")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription("Prefix: t! Moderacion: \n invite \n ticket \n close (ticket) \n tranlator \n list-languaje \n :tada: Fun: \n music \n hack \n say \n  text-fortnite <color> <texto> \n addmoney \n afk \n work \n with \n shop \n buy \n confess \n crime \n dep \n pescar \n rob \n bal \n say \n rank \n si tienes ideas para mas comandos puedes decirle a Toma awa#7593 para que me agregue mas comandos")
  .setColor("RANDOM")
  .setFooter("Toma awa v35")

  message.channel.send(embed)

 }

}