// Basic Const

const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const bot = new discord.Client();

//Command Handler



const fs = require("fs");

bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.length <=0){
        console.log("Er zijn geen commando's gevonden");
        return;
    }
    jsfiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`${f} is gereed`)

        //commando's
        bot.commands.set(fileGet.help.name, fileGet);

    });

});


//Opstarten

bot.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1);
    var commands = bot.commands.get(command.slice(prefix.length));
    
    if(commands) commands.run(bot, message, args);

});

bot.on("ready", async () =>{

    console.log(`${bot.user.username} Is Opgestart`)
    bot.user.setActivity("Op Maxje's server", {type: "PLAYING"});

});

bot.login(process.env.token);