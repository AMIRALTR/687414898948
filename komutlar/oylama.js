const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x:Yazı Yazman Gerek :x:`)).then(m => m.delete(5000));

     console.log("Oylama Komutu " + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('D A R K SPECİALS', client.user.avatarURL)

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Yapmanızı Sağlar. [YETKİLİYE ÖZELDİR]',
  usage: 'o!oylama <oylamaismi>'
};
