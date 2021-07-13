const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botInfoEmbed = new discord.MessageEmbed()
    .setTitle("Botinfo")
    .setColor("#3d5eb9")
    .addFields(
        {name: "Bot Manager", value: "Tije Meijer#0013"},
        {name: "Datum Gemaakt:", value: "13-07-2021"},
    )
    .addField("Bot Commands", "Als u naar Bot commands zoekt, doe !commands")

    .setImage("https://cdn.discordapp.com/attachments/795247450318831636/864572191316115516/Logo_Maxjeee.png")
    .setFooter("Max Assistent", "https://cdn.discordapp.com/attachments/795247450318831636/864572191316115516/Logo_Maxjeee.png");
    
        return message.channel.send(botInfoEmbed);
}

module.exports.help = {
    name: "botinfo"
}