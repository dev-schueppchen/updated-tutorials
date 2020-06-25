# Imports
import discord
from discord.ext import commands


# Defining what Prefix we want
bot = commands.Bot(command_prefix="~")

# This will show the Bot name in the Console
@bot.event
async def on_ready():
    print("I have logged in as {0.user}".format(bot))

# Commands
@bot.command()
async def ping(ctx):
    await ctx.send('Pong! {0}'.format(round(bot.latency, 1)))


# Enter here the Token which you have copied before
bot.run("Your Token")
