const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

//################
//#CODE BY AMIRAL#
//################

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= D A R K SPECIALS V4.0 Yeni Eklenen Komutlar =
- V3.0 Eski Surumde Gelmis Olanlar.
 ${prefix}kayitol
 ${prefix}sunucuvebot
 ${prefix}öneri Geliştirilidi
 ${prefix}şikayet Geliştirildi

- V3.0.1 Yeni Surumde Gelmis Olanlar.
 ${prefix}sigara
 ${prefix}ailemiz
 ${prefix}partner
 ${prefix}amiralx

- V4.0 Yeni Surumde Gelmis Olanlar.
 ${prefix}öneri Tum Sunucularda Kullanılabilir Hale Getirildi.
 ${prefix}kur Sunucu Botu Icın Gerekli Seyleri Kurar.
 ${prefix}kayitol Sistemi Duzeltildi Calisabilir Haldedir.
 ${prefix}kulbil Kullanıcı Bilgilerini Gösterir.
 Botumuzun Oynuyor Kısmı Guzellestirildi.

# Detaylı Bilgi Icin  ${prefix}yardım`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkýnda  </Y\> ${command.help.description}
Kullaným  </Y\> ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota Ekledigimiz Yenilikleri Gosterir.',
  usage: '/yenilikler'
}; 
