const Discord = require("discord.js");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
 name: "members",
 aliases: ["users"],
 description: "How many members are in the current server",
 category: "Utility",
 usage: "members",
 run: async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
   .setAuthor("Total members", message.guild.iconURL)
   .setColor("RANDOM")
   .addField("Overall Members: ", message.guild.memberCount)
  message.channel.send(embed);
 }
}
