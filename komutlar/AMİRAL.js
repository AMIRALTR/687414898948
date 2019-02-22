const Discord = require('discord.js');

//################
//#CODE BY AMIRAL#
//################

exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Sunucu Ve Bot Bigileri**")
        .setImage("https://resmim.net/f/djvWKz.png")
        .setThumbnail("https://resmim.net/f/djvWKz.png")
        .setColor(0x00AE86)
        .addField("**Telegram**", "@Amiralx", true)
        .addField("**Twitter**", "@Armaan27439155", true)
        .addField("**İnstagram**", "@Ankebutr", true)
        .addField("**Bende Sunucuma Özel Bir Bot Sahibi Olmak İstiyorum**", `
        https://t.me/discordbotyardim
   **AMIRAL#9999**
`, true)
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'amıral', 
  description: 'AMIRAL#9999 İle İletişime Geçebilrisiniz.',
  usage: 'amıral'
};
