const Discord = require('discord.js');


exports.run = function(client, message) {
 
 const embed = new Discord.RichEmbed()
        .setDescription("**Sunucu Partnerleri**")
        .setImage("https://resmim.net/f/djvWKz.png")
        .setThumbnail("https://resmim.net/f/djvWKz.png")
        .setColor(0x00AE86)
        .addField("**V I C T O R Y**", "https://discord.gg/9BWuAp9", true)
        .addField("**Göłgê İçiňđě**", `
        https://discord.gg/cTKE7zZ
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
  name: 'partner', 
  description: 'Sunucu Partnerlerini Gösterir.',
  usage: 'partner'
};
