let handler = m => m
handler.before = async (m, { conn, isPrems, owner }) => {
	if (isPrems) {
    if (new Date() * 1 >= global.db.data.users[m.sender].premiumDate) {
      conn.reply(m.chat, "*ᴍᴀᴀғ ᴡᴀᴋᴛᴜ ᴘʀᴇᴍɪᴜᴍ ᴀɴᴅᴀ ᴛᴇʟᴀʜ ʜᴀʙɪs*\n*ᴄʜᴀᴛ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴜᴘɢʀᴀᴅᴇ ᴋᴇ ᴘʀᴇᴍɪᴜᴍ*", m).then(() => {
        global.db.data.users[m.sender].premium = false
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
         this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m).then(() => {
    //       this.sendContact(m.chat, owner[0], this.getName(owner[0] + '@s.whatsapp.net'), m).then(() => {
           })
        })
      }
    }
 }
module.exports = handler