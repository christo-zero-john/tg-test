const {Telegraf} = require('telegraf');                                                    
const bot = new Telegraf ('6571991794:AAFScohMfwF2y7_1wCuEGFbWf15yaXt6P_8');
bot.command(["start"],(ctx, next)=>{
    ctx.reply("Bot started!!");

    next(ctx);
});
bot.launch();