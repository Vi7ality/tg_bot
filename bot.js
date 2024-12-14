const { Telegraf } = require("telegraf");
require("dotenv").config();
const { APP_TOKEN } = process.env;
const bot = new Telegraf(APP_TOKEN);

bot.telegram.setMyCommands([
  { command: "openapp", description: "Launch the web app" },
  { command: "help", description: "Get help information" },
]);

bot.telegram.setChatMenuButton({
  menu_button: {
    type: "web_app",
    text: "Open Web App",
    web_app: { url: "https://tg-react-app-kappa.vercel.app/" },
  },
});

bot.start((ctx) => ctx.reply("Привет! Я ваш бот!"));
bot.help((ctx) => ctx.reply("Напишите мне что-нибудь, и я повторю."));
// bot.on("text", (ctx) => ctx.reply(`Вы сказали: ${ctx.message.text}`));
bot.command("openapp", (ctx) => {
  ctx.reply("Click the button below to open the web app:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Web App",
            web_app: { url: "https://tg-react-app-kappa.vercel.app/" },
          },
        ],
      ],
    },
  });
});

bot.launch().then(() => console.log("Бот запущен!"));
