let handler = m => m

handler.before = function (m) {
let chat = global.db.data.users[m.sender]
let su = global.db.data.chats[m.chat]

if (chat.expiredgroup > 1) {
if ( new Date * 1 > chat.expiredgroup ) {
chat.expiredgroup = -1
console.log(`ᴍᴀsᴀ ɢʀᴜʙ ᴜᴅʜ ʜᴀʙɪs`) 
chat.group = false
conn.reply(m.chat, `ᴊᴀᴍ sᴇᴡᴀ ʙᴏᴛ ᴛᴇʟᴀʜ ʜᴀʙɪs`)
opts['restrict'] = false
conn.groupLeave(chat.id)

}}
}

module.exports = handler