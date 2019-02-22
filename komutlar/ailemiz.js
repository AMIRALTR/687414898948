const Discord = require("discord.js")

//################
//#CODE BY AMIRAL#
//################

exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Ailemiz')
      embed.setDescription(`Büyük bir ailedeyiz !. Ailemde **${bot.guilds.size}** kadar sunucu var !`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: "ailemiz",
  description: "Botumuzun Kaç Adet Sunucuya Hizmet Verdiğini Gösterir Ve Hizmet Verdiğimiz Sunucularda Kaç Adet Üye Olduğunu Gösterir.",
  usage: "ailemiz"
};