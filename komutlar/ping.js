const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

exports.run = function(client, message) {

    message.channel.send("Botun Pingi **" + client.ping + "** ms!");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'D A R K Botunun Pingini Gösterir.',
  usage: 'ping'
};
