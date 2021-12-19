let handler = async (m, { conn, text, participants }) => {
conn.reply(m.chat, `Ya ${conn.getName(conn.user.jid)} Di Sini Ketik #menu untuk melihat menu bot`, 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://wa.me/628988293493?text=Hallo bang',
mediaType: 2,
title: `Hai Kak 👋`,
body: 'Ayane Shirakawa By Ditzzy',
thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Nz6mLBldfOlkBxWEzp8fMtZmwn9AvGlG9A&usqp=CAU',
}}}) 
}

handler.customPrefix = /^(bot|Bot)?$/i
handler.command = new RegExp

module.exports = handler