let { getBuffer } = require('../lib/functions')
let fetch = require('node-fetch')

let handler = async(m, { conn }) => {

 let thumb = await getBuffer(`http://docs-jojo.herokuapp.com/api/ssweb_full?url=https://saweria.co/overlays/leaderboard?streamKey=69c43072a25f6bf41f1f127f040afeeb&noBorder=true&noAmount=true&titleFont=Play&bodyFont=Poppins&backgroundColor=%23000000FF&color=%23ffd500FF&fontWeight=500&title=LIST+DONASI&mode=all&device=phone`)
 let caption = 'Ingin donasi klik link ini https://saweria.co/syditzzy'

  conn.sendFile(m.chat, thumb, 'gambar.jpg', caption, m)
}
handler.help = ['listdonasi']
handler.tags = ['info']
handler.command = /^(listdona(te|si)|ld)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100
handler.limit = false

module.exports = handler
