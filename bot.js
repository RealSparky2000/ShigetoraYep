const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setPresence({ game: { name: 'cookies', type: 0 } });
    console.log('I am ready');
});
var prefix = '&';
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return;
    switch(args[0].toLowerCase()) {
        case "ping":
        message.reply('PONG!');
        break;
        case "bing":
        message.reply('BONG!');
        break;
        case "play":
        var gamestr = args.join(" ").replace("play ", "");
        if(message.author.id==="378998523028307973" || message.author.id==="353271087758573578") {
            client.user.setPresence({ game: { name: gamestr, type: 0 } });
            message.reply("The game was set to " + gamestr);
        }
        else {
            message.reply("Access deniied.");
        }
        break;
        case "how are you":
        message.reply('Nice!');
        break;
        case "cookie":
        message.reply('COOOOOKIESS!!!!');
        break;
        case "8ball":
        var responses = [
        'Agreed!',
        'Of Course!',
        'Disagree.',
        'No',
        'Maybe',
        'Really?',
        'Cannot predict now.',
        'Yes!'
        ];
        var fetched = responses[Math.floor(Math.#ffffff() * responses.length)];
        var embed = new Discord.RichEmbed()
            .setColor('#ffffff')
            .setFooter(fetched);
        message.channel.send({embed});
        break;
        case "avatar":
        if(message.mentions.users.first == undefined || message.mentions.users.first == null) {
            var user = message.author;
        }
        else {
            var user = message.mentions.members.first;
        }
        var embed = new Discord.RichEmbed()
            .setAuthor('CookieYep', client.user.avatarURL)
            .setTitle('The cookie steals avatars')
            .setDescription('[Avatar Link](' + user.avatarURL + ')')
            .setImage(message.author.avatarURL)
            .setColor('#ffffff');
            message.channel.send({embed});
        break;
        case "help":
            switch(args[1]) {
                case "avatar":
                message.channel.send('Displays your pfp.');
                break;
                default:
                message.channel.send('**All comands**: cookie, bing, ping, avatar, 8ball');
                break;
            }
            break;
        case  "info":
        if(message.mentions.users.first == undefined || message.mentions.users.first == null) {
            var user = message.author;
        }
        else {
            var user = message.mentions.members.first;
        }
        var embed = new Discord.RichEmbed()
        .setThumbnail(user.displayAvatarURL)
        .setColor('#ffffff')
        .addField('ID', user.id, true)
        .addField('Username', user.username, true)
        .addField('Discriminator', user.discriminator, true)
        .addField('Bot?', user.bot, true);
        message.channel.send({embed});
        break;
        default:
        break; 
    }
});
client.login(process.argv[2]);
