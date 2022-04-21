const { Client, Intents } = require("discord.js")
const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES]});
require("dotenv").config();


client.on("ready", ()=>{
    console.log('logged in as ', client.user.tag )
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;
 console.log('interaction.guild', interaction.guild)
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.login(process.env.CLIENT_TOKEN);