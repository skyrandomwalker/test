const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // This will create the w ebhook with the name "Example Webhook" and an example avatar.
  message.channel.createWebhook("Example Webhook", "https://i.imgur.com/p2qNFag.png")
  // This will actually set the webhooks avatar, as mentioned at the start of the guide.
  .then(webhook => webhook.edit("Example Webhook", "https://i.imgur.com/p2qNFag.png")
  // This will get the bot to DM you the webhook, if you use this in a selfbot,
  // change it to a console.log as you cannot DM yourself
  .then(wb => message.author.send(`Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`)).catch(console.error))

  //if (message.content.startsWith(config.prefix + "ping")) {
      //message.channel.send("pong!");}
  switch(command){
    case 'add':
      let [user, lang_from, lang_to] = args;
      message.reply('Roger! Transform ${user}\'s words from ${lang_from} to ${lang_to}.')
      break;
  }
});

client.login("config.token");