const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{

    if(ctx.update.message.from.id === 123){
        ctx.reply('Ao seu dispor')
    }else{
        ctx.reply('Sinto Muito')
    }
})

bot.startPolling()