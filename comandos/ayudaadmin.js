const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "ayudaadmin",
    alias: ["ayudaadmin"],
 
run (client, message, args){

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No tienes permisos para utilizar este comando.")

  const embed = new Discord.MessageEmbed()

  .setTitle("MI LISTA DE COMANDOS")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription("Prefix: t! \n :face_with_monocle: Moderacion: \n invite \n borrar \n lock \n unlock \n ticket \n close (ticket) \n ban \n kick \n hackban \n mute \n tempmute \n nuke \n private \n say \n ticket \n close \n translator \n list-languaje (translator) \n warn \n warns \n unwarn \n snipe (view deleted messages)\n bot: anti-links, anti-badwords, anti-spam \n :tada: Fun: \n say \n music \n hack \n text-fortnite <color> <texto> \n addmoney \n afk \n work \n with \n shop \n buy \n confess \n crime \n dep \n fish \n rob \n bal \n say \n rank \n si tienes una idea para mas comandos puedes decirle a Toma awa#7593 para que me agregue mas comandos")
  .setColor("RANDOM")
  .setFooter("Toma awa v35")

  message.channel.send(embed)

 }

}