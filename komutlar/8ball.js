const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Olabilir",
    "Sorunuzun Cevabı Bulunamıyor.",
    "İmkansız"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: /8ball <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: 'Sihirli 8ball Sorularınızı Cevaplar.',
  usage: '8ball <soru>'
};
