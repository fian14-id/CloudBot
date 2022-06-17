let handler =  m => m.reply(`
╭─「 Donasi 」
│ • ${global.donasi}
│ • *Rincian Fungsi Program* iki
│   />Stiker Maker
│   />Download video Fb, Yt , Tt
│  _Setidak e iku tok seng tak angget berguna *fitur* e_
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
