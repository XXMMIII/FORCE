const Discord = require("discord.js");
const Client = new Discord.Client();
const Token = require("./utilities.js");

Client.on("ready", () => {
    Client.user.setStatus('invisible');
    console.log(Client.user.username);
    document.getElementById("usersNumber").innerHTML = `<i class="fas fa-check-square"></i> ${Client.users.size} users... and counting!`;
    document.getElementById("serversNumber").innerHTML = `<i class="fas fa-check-square"></i> ${Client.guilds.size} guilds... and counting!`;
    document.getElementById("channelsNumber").innerHTML = `<i class="fas fa-check-square"></i> ${Client.channels.size} channels... and counting!`;
    document.getElementById("emojisNumber").innerHTML = `<i class="fas fa-check-square"></i> ${Client.emojis.size} emojis... and counting!`;
});

Client.login(Token.token);
