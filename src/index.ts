#!/usr/bin/env node
const { dotenv } = require('dotenv').config();
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
import type { Context } from 'telegraf/typings/context';
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx: Context) => ctx.reply('Welcome'));
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});
