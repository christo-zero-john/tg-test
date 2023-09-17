const {Telegraf} = require('telegraf');      
const fs = require('fs');
var user = 0;
const bot = new Telegraf ('6571991794:AAFScohMfwF2y7_1wCuEGFbWf15yaXt6P_8');

bot.use((ctx, next)=>{
    
    if(ctx.message.text != "/user"){
        addUser(ctx);
    }

    next(ctx);
})


bot.command(["user"],(ctx, next)=>{
    ctx.reply("Add User\nSent me a user name ");
    user = 1;
    next(ctx);
});

function addUser(ctx){
    var data = fs.readFileSync("data.json");
    data = JSON.parse(data);
    Total = data.total;
    data.users[Total] = {
        "uid":Total + 1,
        "uname":ctx.message.text
    }
    Total++;
    data.total = Total;
    data = JSON.stringify(data);
    fs.writeFileSync("data.json",data);
}




bot.launch();