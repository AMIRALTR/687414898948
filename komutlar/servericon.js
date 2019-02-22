const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("-- SUNUCU ICONU --")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'Discord Sunucusunun İconunu Gösterir.',
  usage: 'servericon'
};
