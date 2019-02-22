const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('**Doğru Kullanım**: /yaz <mesaj>.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz Mesajı Bot Mesajı İle Yazdırı.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
