let handler = async (m, { conn, text, participants }) => {
	conn.reply(m.chat, `
*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _5k/grup (1 Bulan)_
❒ Sewa = _7k/grup (1 Tahun)_
❒ Sewa = _10k/group (Permanen)
❒ Free = _30 menit Bot Masuk Ke Group Kalian Setelah Itu Bot Akan Keluar_

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _GOPAY_
❒ _DANA_

◪ 𝙆𝙀𝙐𝙉𝙏𝙐𝙉𝙂𝘼𝙉 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏

❒ *Bisa Menyuruh Bot Buka/Tutup Group*
❒ *Kick Orang*
❒ *Add Orang*
❒ *Anti Link On*
❒ *Fitur Game Lumayan*

◪ *Jika Minat Hubungi owner kami @628988293493*

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`, 'conversation', { quoted: m, contextInfo: { mentionedJid: ['628988293493@s.whatsapp.net'], externalAdReply :{
sourceUrl: 'http://wa.me/+628988293493?text=Kak+Sewa+Bot+Nya',
mediaType: 2,
title: 'Hai Kak 👋',
body: 'Mau Sewa Bot?',
thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Nz6mLBldfOlkBxWEzp8fMtZmwn9AvGlG9A&usqp=CAU',
}}})

}
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(sewabot)$/i

module.exports = handler