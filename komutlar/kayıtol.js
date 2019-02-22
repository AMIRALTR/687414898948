const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {

  let kayıt = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
          
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("📥 Kendini Etiketlemelisin!")
        }
    })
  
    let role = msg.guild.roles.find(r => r.name === "Üye");
    
      if (!role) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("📥 **Üye** Rolü Bulunamadı.")
        }
    })

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" 💡 Zaten Önceden Kayıt Olmuşsun! ")
        }
    });

    await kayıt.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("🔑 Tebrikler Kayıt Oldunuz!")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kayitol',
    description: 'Sunucuya Kayıt Olursunuz!',
    usage: 'kayitol'
};
