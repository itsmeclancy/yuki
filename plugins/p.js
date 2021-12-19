let handler = async (m, { conn, text, participants }) => {
conn.reply(m.chat, 'Ketik #menu untuk melihat menu bot', 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://wa.me/628988293493?text=Hai.com',
mediaType: 2,
title: 'Hai Kak 👋',
body: 'Ayane Shirakawa By Ditzzy',
thumbnailUrl: 'https://i.ibb.co/TYBsTsV/1890eb474e10.jpg',
}}}) 
}

handler.customPrefix = /^(p|P)?$/i
handler.command = new RegExp

module.exports = handler