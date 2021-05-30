const { prefix } = require('../config/config.json');
const Discord = require('discord.js');
const { embedColor } = require('../config/config.json');
module.exports = {
    name: 'systeminfo',
    description: 'Shows an embed explaining systems and how they work!',
    aliases: ['si'],
    execute(message) {
        const systeminfoEmbed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .addFields(
            {name: '**System Information 1**', value: `**Why does it say BOT beside someone’s name?**e
            I can assure you they aren’t a bot. PluralKit and Tupperbox will help systems switch between alters, and due to Discord’s limitations, it must have BOT beside their name since the bots are editing the message to say which alter is sending the message.
   
           **Why does one alter not remember something another does?**
           For some systems, when an alter is in headspace/inner world they may not have the memories of an alter who fronted while they were in headspace/inner world. It’s not the same for all systems.
   
           **Two systems are different from each other, why is that?**
           Not all systems work the same, some function different and do things differently. Some systems need to switch, and some just think “Who am I?” figure it out, then move on. It is never the same for all systems.`},
        )
        .setFooter("Made by Cryptic#0001 | © Vibe Market")

      const systeminfo2Embed = new Discord.MessageEmbed()
      .setColor('#9da9f0')
      .addFields(
         {name: '**System Information 2**', value: `
         **Why do some alters in the same system use different voices when they’re in the same body?**
         Since all alters are different from each other, their voices may also be different. Some may have the same voice as the body, and some may be higher or lower pitched.
    
         **The internet is telling me DID and OSDD is rare, is that true?**
         No! Neither are rare, it is just very under-diagnosed. Some systems don’t feel comfortable being diagnosed, some don’t have the resources to get diagnosed, and some don’t even realize they’re part of systems. If everyone with DID and OSDD was diagnosed, it wouldn’t be nearly as rare as it’s said to be.`},
     )
     .setFooter("Made by Cryptic#0001 | © Vibe Market")

     const systeminfo3Embed = new Discord.MessageEmbed()
     .setColor('#9da9f0')
     .addFields(
         {name: '**System Information 3**', value: `**Can I ask an alter to front to talk to me?**
         You can ask whoever is fronting if the other alter is comfortable fronting or wants to talk, but don’t force it. Alters need their own space sometimes, and some don’t come and go easily.

         **Why do you use the bot if you can change your nickname?**
         Although we could change our nicknames, it’s really difficult to do that every time someone fronts, especially if alters are rapid switching.`},
     )
     .setFooter("Made by Cryptic#0001 | © Vibe Market")

     message.channel.send(systeminfoEmbed);
     message.channel.send(systeminfo2Embed);
     message.channel.send(systeminfo3Embed);
    }
        

}