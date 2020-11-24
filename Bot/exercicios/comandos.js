const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const nome = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${nome}!`)
})

bot.command('ajuda', ctx => ctx.reply('/ajuda: vou mostrar as opções'
        + '\n/ajuda2: para testar via hears'
        + '\n/op2: generica'
        + '\n/op3: generica qqr'))


bot.hears('/ajuda2', ctx => ctx.reply('EU também consigo capturar comando'
+ ', mas ultilizara /ajuda mesmo'))

bot.hears(/\/op(2|3)/i, ctx => ctx.reply('Resposta padrão para comandos genericos'))

bot.startPolling();