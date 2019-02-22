const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

exports.run = function(client, message) {
message.channel.bulkDelete(100);
message.channel.send("Sohbetten 100 Adet Mesaj Silinmiştir.").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sohbetitemizle', 
  description: '100 Adet Mesaj Siler. [YETKİLİYE ÖZELDİR]',
  usage: 'temizle <miktar>'
};
