const Discord = require("discord.js")
const dbutton = require("discord-buttons")
const client = new Discord.Client();
dbutton(client)

let button = new dbutton.MessageButton().setLabel("Kayıt ol").setStyle("grey").setID("kayit")
let embed = new Discord.MessageEmbed().setDescription(`Kayıt olman gerek, aşağıdaki tuşa tıkla!`).setColor("RANDOM")
client.on("message",async(msg) => {
    if(msg.channel.id == "kayıtkanalid" && !msg.author.bot && msg.author.id == "bot owner id"){
msg.channel.send({embed: embed, buttons:[button]})
    }
})

client.on("clickButton", async(button) =>{
    await button.reply.think(true)
    let member = button.clicker.user.id
    member = button.guild.members.cache.get(member)
    member.roles.add("678168496621748244");
    await button.reply.edit(new Discord.MessageEmbed().setDescription("Kayıt başarılı").setColor("RANDOM"))
})

client.on("ready",async() => {

console.log("-Aktif-")
})

client.login("")
