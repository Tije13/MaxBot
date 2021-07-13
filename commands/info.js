const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var infoEmbed = new discord.MessageEmbed()
        .setTitle("Informatie")
        .setColor("#3d5eb9")
        .addFields(
            {name: 'Max', value: "----------------------------------------------------------"},
            {name: 'Leeftijd', value: '17', inline: true},
            {name: 'Games', value: 'Roblox en Minecraft', inline: true},
            
        )
        .setImage("https://cdn.discordapp.com/attachments/795247450318831636/864572191316115516/Logo_Maxjeee.png")
        .setFooter("Max Assistent", "https://cdn.discordapp.com/attachments/795247450318831636/864572191316115516/Logo_Maxjeee.png");
        
        
    

    return message.channel.send(infoEmbed);
}

module.exports.help = {
    name: "info"
}