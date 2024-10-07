/**
 * @success Embed author field testing.
 * @success embed title field testing.
 * @success embed description field testing.
 * 
 */

console.time('Embed-Tests');

const { EmbedBuilder } = require('../src/Embed/EmbedBuilder');
const embed = new EmbedBuilder()
.setAuthor({ name: '@username', iconURL: 'https://discord.com/cdn/avatars/0.png' })
.setTitle('Title of this nice embed!')
.setDescription("Description of this embed, contains alot of imformation!")
.setImage('https://discord.com/cdn/avatars/0.png')
.setFooter({ text: 'wow', iconURL: 'https://discord.com/' })
.setTimestamp()
.setColor('Blue')

console.timeLog('Embed-Tests', embed);

console.timeEnd('Embed-Tests');
