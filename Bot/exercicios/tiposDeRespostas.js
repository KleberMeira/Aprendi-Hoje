const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja Bem vindo, ${ctx.update.message.from.first_name} ! 😎`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
    <i>de varias</i> <code>formas</code> <pre>possíveis</pre>
    <a href="https://www.google.com.br">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
    + ' _de várias_ `formas` ```possíveis``` '
    + '[Google](http://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/cat.jpeg`})
    await ctx.replyWithPhoto('https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS-868x644.jpg',
    {caption: 'Olha o estilo!'})
    await ctx.replyWithPhoto({url:'https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS-868x644.jpg' })
    await ctx.replyWithLocation(29.9773008, 31.1203068)
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')




})

bot.startPolling()