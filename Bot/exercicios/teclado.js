const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const Markup = require('telegraf/markup')

const tecladoCarne = Markup.keyboard([

    ['😀 Teste 1', '😂 Teste 2', '😥 Teste 3'],
    ['😨 Teste 1', '😕 Teste 2', '😑 Teste 3'],
    ['🙅 Teste 1', '😏 Teste 2'],
    ['Eu sou teste unico']

]).resize().extra()  ///resize pegar a largura inteira da tela
                    /// extra para renderizar o teclado  


bot.start(async ctx => {

    await ctx.reply(`Seja Bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.reply(`Qual bebida prefere?`,
        Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())

})

bot.hears(['Coca', 'Pepsi'], async ctx => {

    await ctx.reply(`Isso ai! Eu também gosto de ${ctx.match}`)
    await ctx.reply(`Qual a sua carne predileta?`, tecladoCarne)


})

bot.hears('😂 Teste 2', ctx => {
    ctx.reply(`Boa escolha`)
})

bot.hears('Eu sou teste unico', ctx => {
    ctx.reply('É isso ai!')
})

bot.on('text', ctx => ctx.reply('Legal!'))

bot.startPolling()