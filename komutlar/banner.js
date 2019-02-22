const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Banner İçin Lütfen Yazı Yazınız!");
  
  let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor("Banner Sistemi | D A R K SPECİALS")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Banner Oluşturuldu!");
  
  message.channel.send(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banneryazı","yazıbanner","banneryaz"],
  permLevel: 0
};

module.exports.help = {
  name: 'banner',
  description: 'Yazdığınız yazıyı banner olarak atar',
  usage: '/banner <yazdırmak istediğiniz yazı>'
};