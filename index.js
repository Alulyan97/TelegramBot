const dotenv = require("dotenv");
dotenv.config();
const TelegramApi = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramApi(token, { polling: true });

const start = () => {
        bot.setMyCommands([
        {command: "/start", description: "Начальное преветствие"},
        {command: "/info", description: "Получить информацию о пользователе"},

    ])

        bot.on("message", async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if(text === "/start") {
            await bot.sendSticker(chatId, 'https://avatars.mds.yandex.net/i?id=dbf5b59b028c41e356b10470806be496c2960c86-17447740-images-thumbs&n=13')
            return bot.sendMessage(chatId, "Добро пожаловать в мой первый Telegram Bot")
        }

        if(text === "/info") {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.username}`)
        }

        return bot.sendMessage(chatId, "Я тебя не понимаю, попробуй еще раз!")
        
    })
}

start();