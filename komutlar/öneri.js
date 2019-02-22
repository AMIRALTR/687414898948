const Discord = require('discord.js');
const client = new Discord.Client();

//################
//#CODE BY AMIRAL#
//################

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`öneri` Adlı Komutu Özel Mesajlarda Kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', '📜-öneri-takip-listesi');
  if (!modlog) return message.reply('`📜-öneri-takip-listesi` Kanalı Yok Açmalısın.');

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField("Eylem:", "Öneri")
		.addField("Kullanıcı:", message.author.tag)
		.addField("ID", message.author.id)
    .addField('Kullanıcının Önerisi:', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: 'Sunucu Veya Bot Hakkında Önerilerinizi Belirtiniz.',
  usage: 'öneri [Kullanıcı Adı] [öneriniz]'
};
