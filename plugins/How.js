let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Who is *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `
how ${command.replace('how', '').toUpperCase()} *${text}* ❓\n
*${text}* is *${Math.floor(Math.random() * 101)}%* ${command.replace('how', '').toUpperCase()} 👽
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['zaml', 'm9hbn', 'zwin', 'mc', 'crazy', 'lesbian', 'pagal', 'simp', 'bhadwa', 'chutiya'].map(v => 'how' + v + ' @user')
handler.tags = ['fun']
handler.command = /^ch7al(zaml|m9hbn|zwin|handsome|mc|crazy|lesbian|pagal|simp|bhadwa|chutiya)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
