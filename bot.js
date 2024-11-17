const { Telegraf } = require("telegraf");
require("dotenv").config();
const { APP_TOKEN } = process.env;
const bot = new Telegraf(APP_TOKEN);

bot.start((ctx) => ctx.reply("Привет! Я ваш бот!"));
bot.help((ctx) => ctx.reply("Напишите мне что-нибудь, и я повторю."));
bot.on("text", (ctx) => ctx.reply(`Вы сказали: ${ctx.message.text}`));

bot.launch().then(() => console.log("Бот запущен!"));
