const Discord = require('discord.js');
// uses destructuring to extract the prefix and token from your config file.
const { token, prefix } = require('./config.json');

const client = new Discord.Client();

// Gets called when the bot is ready
client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}...`);
});

// Stores the command name: function name which allows us to drop long if/else statements
const cmdmap = {
	say: cmdSay,
	test: cmdTest
};

function cmdSay(msg, args) {
	msg.channel.send(args.join(' '));
}

function cmdTest(msg, args) {
	console.log('test');
}

// Gets called when the bot receives a message.
// The msg Object is given to us by the discord.js libary.
// When you want to know what you can do with the msg Object
// look in the docs here: https://discord.js.org/#/docs/main/stable/class/Message
client.on('message', (msg) => {
	// if the author of the message is a bot
	// and if the message doesn't start with the prefix in your config.json the bot returns.
	if (msg.author.bot || !msg.content.startsWith(prefix)) return;

	// removes the first x letters and splits the message by every space
	const args = msg.content.slice(prefix.length).split(/ +/);
	// gets the first argument from args and transforms it to lower case (e.g. PiNG => ping)
	const invoke = args.shift().toLowerCase();

	if (invoke in cmdmap) {
		cmdmap[invoke](msg, args);
	}
});

// uses the token in your config.json to login to your bot
client.login(token);
