const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

exports.run = (client, message, params) => {

        
        message.channel.send(':1234: **D A R K Botu İçin Gerekli Şeyler Kurluyor...**');
        
        message.guild.createChannel('📜-öneri-takip-listesi');
        message.guild.createChannel('📜-şikayet-takip-listesi');
        message.guild.createRole('Yeni Doğmuş');
        message.channel.send(':white_check_mark: **📜-öneri-takip-listesi**');
        message.channel.send(':white_check_mark: **📜-şikayet-takip-listesi**');
        message.channel.send(':white_check_mark: **Herşey Kuruldu**');
        
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'botkur',
  description: 'Bot İçin Gerekli Ayarları Kurar.',
  usage: 'kur'
};
