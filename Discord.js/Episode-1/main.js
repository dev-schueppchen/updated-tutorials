const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

// uses the token in your config.json to log into your Bot
client.login(config.token);
