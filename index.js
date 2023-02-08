require("dotenv").config(); 
const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types");
const { Client, Intents, Collection } = require('discord.js');

const fs = require('fs');
const path = require('path');

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
