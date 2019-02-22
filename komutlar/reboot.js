const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

exports.run = function(client, message) {

    message.channel.send("[SUNUCU BOTU] Bot Yeniden Başlatılıyor").then(msg => {
        console.log("[SUNUCU BOTU] Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu Yeniden Başlatır. [YETKİLİYE ÖZELDİR]',
  usage: 'reboot'
};
