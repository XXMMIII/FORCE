document.getElementById("mangoEmoji").innerHTML = `Here are some stats about Mango... ${twemoji.parse("🥭")}`;

setTimeout(function () {
    document.getElementById("usersNumber").innerHTML = `<i class="fas fa-check-square"></i> More than <span class="counter">100 users ${twemoji.parse("😯")}`;
    document.getElementById("serversNumber").innerHTML = `<i class="fas fa-check-square"></i> 10 guilds! ${twemoji.parse("👌🏻")}`;
    document.getElementById("channelsNumber").innerHTML = `<i class="fas fa-check-square"></i> 300 channels... and counting! ${twemoji.parse("😄")}`;
    document.getElementById("emojisNumber").innerHTML = `<i class="fas fa-check-square"></i> 150 emojis ${twemoji.parse("❤")}`;
}, 1500);
