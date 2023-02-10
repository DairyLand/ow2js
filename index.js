require("dotenv").config(); 
const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types");
const { Client, Intents, Collection } = require('discord.js');

const fs = require('fs');
const path = require('path');



const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith("$ow")) return;
  reddit("overwatchporn").random(10).then((posts) => {
    posts.forEach((post) => {
      message.channel.send(post.url);
    });
  });
});

const playTime = {};

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!playTime[message.author.id]) {
    playTime[message.author.id] = {
      time: Date.now(),
      count: 0,
    };
  } else {
    playTime[message.author.id].count += 1;
    if (playTime[message.author.id].count === 10) {
      const timeDiff = Date.now() - playTime[message.author.id].time;
      if (timeDiff > 600000) {
        message.channel.send("imagine playing Overwatch lmao");
        playTime[message.author.id].time = Date.now();
        playTime[message.author.id].count = 0;
      }
    }
  }
});

client.login(MTA3MTE4NDk0NjA3NDQ5NzEzNQ.GEnWzy.lTQ0zVCPGIbiXq8F280HynHvvSx_oN11yK4HJk);
