/*let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let user = global.db.data.users[m.sender]
	if (!user.autolevelup) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
	if (before !== user.level) {
            m.reply(`
Selamat, anda telah naik level!
*${before}* -> *${user.level}*
gunakan *.profile* untuk mengecek
	`.trim())
        }
}

module.exports = handler*/

const { color } = require('../lib/color')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
module.exports = {
	before(m) {
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

		if (before !== user.level) {
			let chating = `sᴇʟᴀᴍᴀᴛ ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ɴᴀɪᴋ ʟᴇᴠᴇʟ
*${before}* ᴋᴇ *${user.level}*
ɢᴜɴᴀᴋᴀɴ *.profile* ᴜɴᴛᴜᴋ ᴄᴇᴋ`.trim()
			m.reply(chating)
			console.log(color(chating, 'pink'))
		}
	}
}
