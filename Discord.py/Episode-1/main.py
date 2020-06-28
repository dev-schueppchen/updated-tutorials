# Imports
import discord
from discord.ext import commands


# Defining what prefix we want
bot = commands.Bot(command_prefix="~")

# This will show the bot's name in the console
@bot.event
async def on_ready():
    print("I have logged in as {0.user}".format(bot))

# Commands
@bot.command()
async def ping(ctx):
    await ctx.send('Pong! {0}'.format(round(bot.latency, 1)))


# Enter here the token which you have copied before
bot.run("Your Token")
