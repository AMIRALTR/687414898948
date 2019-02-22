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
        .addField("**Sınırsız Davet Linkimiz**", "https://discord.gg/gemNKZM", true)
        .addField("**Bot Davet Link**", `
        https://discordapp.com/oauth2/authorize?client_id=478276970736648203&scope=bot&permissions=2146958847
   **AMİRAL#9999**
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
  name: 'sunucuvebot', 
  description: 'Sunucunun Ve Botun Kalıcı Davet Linkini Gösterir.',
  usage: 'sunucuvebot'
};
