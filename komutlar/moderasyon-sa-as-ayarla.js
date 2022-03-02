const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {


let saas = db.fetch(`saas_${message.guild.id}`)


if(!saas) {
db.set(`saas_${message.guild.id}`, true)
message.reply(`<a:tik:937787016769314836> | SA-AS Sistemi Başarılı Bir Şekilde Aktif Edildi.`)
return;
}
db.delete(`saas_${message.guild.id}`)

message.reply(`<a:tik:937787016769314836> | SA-AS sistemi başarılı bir şekilde kapatıldı.`)




},

name: "sa-as",
description: "SA-AS sistemini açarsın/kapatırsın",
aliases: ["saas"],
kategori: "moderasyon",
usage: "",
}
