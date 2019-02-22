const Discord = require('discord.js');
const client = new Discord.Client();

//################
//#CODE BY AMIRAL#
//################

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Davet Linkimi Özelden Attım. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('İşte Davet Linkim : https://discordapp.com/oauth2/authorize?client_id=478276970736648203&scope=bot&permissions=2146958847')
    .addField('AMIRAL#9999');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Özel Mesajdan Yollar.',
  usage: 'davet'
};
