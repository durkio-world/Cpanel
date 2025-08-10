/*
Official Script Recode By Yuss
Credit : [ SazxOfficial ] - [ ErizaOffc ]
*/

module.exports = async (riza, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========== DATABASE ===========//
const antibot = JSON.parse(fs.readFileSync('./all/database/antibot.json'))
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const owner2 = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const isPremium = premium.includes(m.sender)

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
var { post } = (await import("axios")), search = (await import("yt-search"));
let { randomBytes } = require("crypto")
const yts = require("yt-search")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const axios = require("axios");
const { Client } = require('ssh2');
const text = q = args.join(" ")
const botNumber = await riza.decodeJid(riza.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await riza.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { generateWAMessageFromContent, prepareWAMessageMedia, proto, delay } = require("@whiskeysockets/baileys");
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")

//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

//========= FAKE QUOTED =========//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
viewOnceMessage: {
message: {
listResponseMessage: {title: `https://SazxOficial .dev`, text: "Hellooo", "buttonText": "Open list button text here", "sections": [{ "title": "Section 1", "rows": [{ "title": "Option1", "rowId": "s1r1", "description": "some description (optional)" }]}]
}
}}
}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "© SkyBotz Version 4"}}}

const qcall = {
key: {
participant: "0@s.whatsapp.net",
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": `${namabot} Project`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "IDR",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363418998493764@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner2}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `${namaowner2} - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999999999",
"retailerId": `Powered By Yuss Official`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await alicia.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
alreply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await alicia.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
alreply(`${err}`)
}
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./erizaCase.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

//========== FUNCTION ===========//
let ppuser
try {
ppuser = await riza.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ81';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

//========= SETTING EVENT ========//

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await riza.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await riza.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
await riza.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}


switch (command) {
case "menu": {
    let simbol = global.simbol // Atau sesuaikan jika ingin diubah dari luar

    let menuV1 = `╭──〔 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 〕
│ Selamat : *${ucapan()}*
│ Haii Kak : @${m.sender.split("@")[0]}!
│ Botname : *${global.namabot}*
│ Uptime : *${runtime(process.uptime())}*
│ Version : *${global.version}*
│ Total Fitur : *${totalFitur()}*
╰─────────────────

╭──〔 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〕
│ ${simbol} .addowner
│ ${simbol} .delowner
│ ${simbol} .addprem
│ ${simbol} .delprem
│ ${simbol} .kick
│ ${simbol} .promote
│ ${simbol} .demote
│ ${simbol} .hidetag
╰─────────────────

╭──〔 𝗖𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 〕
│ ${simbol} .1gb user,628xxx
│ ${simbol} .2gb user,628xxx
│ ${simbol} .3gb user,628xxx
│ ${simbol} .4gb user,628xxx
│ ${simbol} .5gb user,628xxx
│ ${simbol} .6gb user,628xxx
│ ${simbol} .7gb user,628xxx
│ ${simbol} .8gb user,628xxx
│ ${simbol} .9gb user,628xxx
│ ${simbol} .10gb user,628xxx
│ ${simbol} .unli user,628xxx
│ ${simbol} .cadmin user,628xxx
│ ${simbol} .listadmin
│ ${simbol} .listusr
│ ${simbol} .delusr
│ ${simbol} .listsrv
│ ${simbol} .delsrv
╰─────────────────

╭──〔 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 〕
│ ${simbol} .tiktok
│ ${simbol} .igmp4
│ ${simbol} .tourl
│ ${simbol} .infogempa
│ ${simbol} .cekkodepos
│ ${simbol} .ceknik
╰─────────────────`

    let menuV2 = `*──⌕ 𝙱𝚘𝚝 𝙸𝚗𝚏𝚘 ──*
▢ Selamat : *${ucapan()}*
▢ Haii Kak : @${m.sender.split("@")[0]}!
▢ Botname : *${global.namabot}*
▢ Uptime : *${runtime(process.uptime())}*
▢ Version : *${global.version}*
▢ Total Fitur : *${totalFitur()}*

\`ᜃ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ᜃ\`
- ${simbol} .addowner
- ${simbol} .delowner
- ${simbol} .addprem
- ${simbol} .delprem
- ${simbol} .kick
- ${simbol} .promote
- ${simbol} .demote
- ${simbol} .hidetag
╰──────────────◉

\`ᜃ 𝗖𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 ᜃ\`
- ${simbol} .1gb user,628xxx
- ${simbol} .2gb user,628xxx
- ${simbol} .3gb user,628xxx
- ${simbol} .4gb user,628xxx
- ${simbol} .5gb user,628xxx
- ${simbol} .6gb user,628xxx
- ${simbol} .7gb user,628xxx
- ${simbol} .8gb user,628xxx
- ${simbol} .9gb user,628xxx
- ${simbol} .10gb user,628xxx
- ${simbol} .unli user,628xxx
- ${simbol} .cadmin user,628xxx
- ${simbol} .listadmin
- ${simbol} .listusr
- ${simbol} .delusr
- ${simbol} .listsrv
- ${simbol} .delsrv
╰──────────────◉

\`ᜃ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 ᜃ\`
- ${simbol} .tiktok
- ${simbol} .igmp4
- ${simbol} .tourl
- ${simbol} .infogempa
- ${simbol} .cekkodepos
- ${simbol} .ceknik
╰──────────────◉`

    let menuV3 = `──「 *${global.namabot} MENU* 」──
> Selamat : *${ucapan()}*
> Haii Kak : @${m.sender.split("@")[0]}!
> Botname : *${global.namabot}*
> Uptime : *${runtime(process.uptime())}*
> Version : *${global.version}*
> Total Fitur : *${totalFitur()}*

── ᐔ *Owner Menu*
⩽⩾ ${simbol} .addowner
⩽⩾ ${simbol} .delowner
⩽⩾ ${simbol} .addprem
⩽⩾ ${simbol} .delprem
⩽⩾ ${simbol} .kick
⩽⩾ ${simbol} .promote
⩽⩾ ${simbol} .demote
⩽⩾ ${simbol} .hidetag
──────────────

── ᐔ *Cpanel Menu*
⩽⩾ ${simbol} .1gb user,628xxx
⩽⩾ ${simbol} .2gb user,628xxx
⩽⩾ ${simbol} .3gb user,628xxx
⩽⩾ ${simbol} .4gb user,628xxx
⩽⩾ ${simbol} .5gb user,628xxx
⩽⩾ ${simbol} .6gb user,628xxx
⩽⩾ ${simbol} .7gb user,628xxx
⩽⩾ ${simbol} .8gb user,628xxx
⩽⩾ ${simbol} .9gb user,628xxx
⩽⩾ ${simbol} .10gb user,628xxx
⩽⩾ ${simbol} .unli user,628xxx
⩽⩾ ${simbol} .cadmin user,628xxx
⩽⩾ ${simbol} .listadmin
⩽⩾ ${simbol} .listusr
⩽⩾ ${simbol} .delusr
⩽⩾ ${simbol} .listsrv
⩽⩾ ${simbol} .delsrv
──────────────

── ᐔ *Main Menu*
⩽⩾ ${simbol} .tiktok
⩽⩾ ${simbol} .igmp4
⩽⩾ ${simbol} .tourl
⩽⩾ ${simbol} .infogempa
⩽⩾ ${simbol} .cekkodepos
⩽⩾ ${simbol} .ceknik
──────────────`

    let hasilMenu = global.tampilanMenu === 'v2' ? menuV2 :
                    global.tampilanMenu === 'v3' ? menuV3 :
                    menuV1

    riza.sendMessage(m.chat, {text: hasilMenu, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
        thumbnail: fs.readFileSync("./media/Menu.jpg"), 
        title: `© ${global.namabot} - ${global.version}`, 
        body: `Runtime : ${runtime(process.uptime())}`,  
        sourceUrl: global.linkyt, 
        previewType: "PHOTO"
    }}}, {quoted: qchanel})
}
break

case "addowner": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return m.reply(`Nomor ${orang.split("@")[0]} Sudah Ada Di Database Owner`)
if (orang == botNumber) return m.reply("Tidak Bisa Menambahkan Nomor Bot Kedalam Database Owner Tambahan!")
let check = await riza.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return m.reply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
await owner2.push(orang)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
m.reply(`*Berhasil Menambah Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Ditambahkan Kedalam Database Owner`)
} else {
m.reply("@tag/6283XXX")
}
}
break
case "delowner": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./all/database/owner.json", "[]")
return m.reply(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return m.reply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return m.reply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
m.reply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
} else {
m.reply("@tag/6283XXX")
}
}
break
case "addprem": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return m.reply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
m.reply(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return m.reply("@tag/62838XXX")
}}
break
case "delprem": {
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return m.reply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
m.reply(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return m.reply("@tag/62838XXX")
}}
break
case "kick": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riza.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => riza.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply('nomornya/@tag')
}
break
case "hidetag": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply("teksnya/replyteks")
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
riza.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "demote": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riza.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply('62838XXX')
}
break
case "promote": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riza.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply('6283XXX/@tag')
}
//================ Main Menu ================//
case 'ceknik':{
if (!q) return reply(`*Example : Nomor Nik Ktp`)
let ana = await fetchJson(`https://api.maulanaa.xyz/tools/ceknik?apikey=${apimaulana}&text=${q}`)
let caption = `Status: *${ana.status}*
Pesan : ${ana.pesan}

Nik : *${ana.data.nik}*
Kelamin : *${ana.data.kelamin}*
Lahir : *${ana.data.lahir}*
Provinsi : *${ana.data.provinsi}*
Kota/Kabupaten : *${ana.data.kotakab}*
Kecamatan : *${ana.data.kecamatan}*
Uniqcode : *${ana.data.uniqcode}*
Kodepos : *${ana.data.tambahan.kodepos}*
Pasaran : *${ana.data.tambahan.pasaran}*
Umur : *${ana.data.tambahan.usia}*
Ultah : *${ana.data.tambahan.ultah}*
Zodiak : *${ana.data.tambahan.zodiak}*
 `
riza.sendMessage(m.chat, { text: caption},{quoted:m})
}
break
case "tourl": {
  const request = require("request");
  const cheerio = require("cheerio");
  const { fromBuffer } = require("file-type");

  async function top4top(buffer) {
    return new Promise(async (resolve, reject) => {
      const { ext } = await fromBuffer(buffer) || {};
      const req = request({
        url: "https://top4top.io/index.php",
        method: "POST",
        headers: {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9,id;q=0.8",
          "cache-control": "max-age=0",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA",
          "User-Agent": "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+"
        }
      }, function (error, response, body) {
        if (error) return resolve({ status: "error", result: error.message });

        const $ = cheerio.load(body);
        const result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href');

        if (!result) {
          return resolve({
            status: "error",
            result: "Mungkin file tidak didukung, coba file lain."
          });
        }

        resolve({
          status: "sukses",
          result
        });
      });

      let form = req.form();
      form.append("file_1_", buffer, {
        filename: `${Math.floor(Math.random() * 10000)}.${ext}`
      });
      form.append("submitr", "[ رفع الملفات ]");
    });
  }

  let target = m.quoted ? m.quoted : m;
  let mime = (target.msg || target).mimetype || '';

  if (!/image/.test(mime)) return m.reply("Reply gambar yang ingin diubah ke URL.");

  let media = await target.download();
  if (!media) return m.reply("Gagal mengunduh media.");

  let link = await top4top(media);
  let { result, status } = link;

  let caption = `*[ ${status.toUpperCase()} ]*

📮 *L I N K :*
${result}

📊 *S I Z E :* ${media.length} Byte`;

  m.reply(caption);
}
break;
case 'igvid': case 'igmp4': {
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await riza.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break
case 'tiktokv2': {
  if (!text) return m.reply ("Example : Link Video ")
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    //jangan hapus wm, ini hann
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			//jangan hapus wm, ini hann
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			//jangan hapus wm, ini hannn
			let domain = 'https://www.tikwm.com/api/';
			//jangan hapus wm, ini hann
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			//jangan hapus wm, ini han
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
			  //jangan hapus wm, ini hann
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				//jangan hapus wm, ini hannn
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				//jangan hapus wm, ini hannn
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			//jangan hapus wm, ini han
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
${down.title}
${down.region}
${down.id}
${down.duration}
${down.size_nowm_hd}

Music Info:
${down.music_info.id}
${down.music_info.title}
${down.music_info.author}

Stats: 
${down.stats.views}
${down.stats.likes}
${down.stats.comment}
${down.stats.share}
${down.stats.download}

Author: 
${down.author.id}
${down.author.fullname}
${down.author.nickname}
${down.author.avatar}
`
await riza.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await riza.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
case "kodepos": {
    if (!text) return m.reply(`Masukan Nama Kota Kamu`)
    let res = await postid(text)
    if (!res.length) return m.reply(`Kota ${text} Tidak Ditemukan!`)

async function postid(post) {
    return new Promise(async (resolve, reject) => {
        try {
            const s = await fetch("https://kodeposku.com/cari?" + new URLSearchParams({ 
            q: String(post),
            _rsc: "1mart"
              }), {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    rsc: 1,
                    "next-url": "/cari",
                    "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22(application)%22%2C%7B%22children%22%3A%5B%22cari%22%2C%7B%22children%22%3A%5B%22__PAGE__%3F%7B%5C%22q%5C%22%3A%5C%227371%5C%22%7D%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D"
                }
            })
            let dataMatch = /{"villages":(\[(?:{"id":.*?,"kode_kemendagri":".*?,"kode_pos":.*?,"kelurahan":".*?,"kecamatan":".*?,"kota":".*?,"provinsi":".*?,"zona_waktu":".*?,"lintang":.*?,"bujur":.*?,"elevasi":.*?},?)\])/g.exec(await s.text())
            resolve(JSON.parse(dataMatch ? dataMatch[1] : "[]"))
        } catch (e) {
            reject(e)
        }
    })
}
    
    let cap = `KODEPOS CHECKER\n\n` + res.map(data => `
> Id: ${data.id}
> Kode kemendagri: ${data.kode_kemendagri}
> Kode Pos: ${data.kode_pos}
> Kelurahan: ${data.kelurahan}
> Kecamatan: ${data.kecamatan}
> Kota: ${data.kota}
> Provinsi: ${data.provinsi}
> Zona Waktu: ${data.zona_waktu}
> Lintang: ${data.lintang}
> Bujur: ${data.bujur}
> Elevasi: ${data.elevasi}
`).join('\n\n').trim()
    await m.reply(cap)
}
break
case 'info-gempa': {
  let res = await(await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')).json()
  let data = res.Infogempa.gempa
  var riza_result = `乂 *Info Gempa*
  
❃ *Waktu:* ${data.DateTime}
❃ *Coordinates:* ${data.Coordinates}
❃ *Magnitude:* ${data.Magnitude}
❃ *Kedalaman:* ${data.Kedalaman}
❃ *Wilayah:* ${data.Wilayah}
❃ *Potensi:* ${data.Potensi}`;

m.reply(riza_result);
}
//================ Cpanel Menu ================//
break
case "1gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 1GB"
let egg = global.egg
let loc = global.loc
let memo = "1125"
let cpu = "30"
let disk = "1125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 2GB"
let egg = global.egg
let loc = global.loc
let memo = "2125"
let cpu = "60"
let disk = "2125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 3GB"
let egg = global.egg
let loc = global.loc
let memo = "3125"
let cpu = "80"
let disk = "3125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "4gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 4GB"
let egg = global.egg
let loc = global.loc
let memo = "4125"
let cpu = "100"
let disk = "4125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 5GB"
let egg = global.egg
let loc = global.loc
let memo = "5125"
let cpu = "120"
let disk = "5125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 6GB"
let egg = global.egg
let loc = global.loc
let memo = "6125"
let cpu = "140"
let disk = "6125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 7GB"
let egg = global.egg
let loc = global.loc
let memo = "7125"
let cpu = "160"
let disk = "7125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 8GB"
let egg = global.egg
let loc = global.loc
let memo = "8125"
let cpu = "180"
let disk = "8125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 9GB"
let egg = global.egg
let loc = global.loc
let memo = "9125"
let cpu = "200"
let disk = "9125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "10gb": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " 10GB"
let egg = global.egg
let loc = global.loc
let memo = "10125"
let cpu = "220"
let disk = "10125"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "unli": {
if (!isPremium && !isOwner) return m.reply(msg.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + " UNLI"
let egg = global.egg
let loc = global.loc
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg" 
if (!u) return
let d = (await riza.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`Succes Create Username Dan Server ID : ${user.id}`)
ctf = `*Berikut Data Panel Anda :*

👤 Username : ${user.username}
🔐 Password : ${password}
🌐 Link Login : ${global.domain} 

*NOTE PANEL :*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI`
riza.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: riza.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
✅ *Panel Terkirim Ke Tujuan*
> Silahkan cek di nomor yang diberikan untuk menerima data terkait panel yang dibuat.

© ${global.namaowner}
`)

}

break
case "cadmin": {
if (!isOwner) return m.reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isOwner) return m.reply(msg.owner)
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username+crypto.randomBytes(2).toString('hex')
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `*BERIKUT DETAIL SERVER ADMIN PANEL :*

* ID Server : ${user.id}
* Username : ${user.username}
* Email : ${user.email}
* Name : ${user.first_name} ${user.last_name}
* Admin : ${user.root_admin}
* Create Admin Panel : ${user.created_at}

*Silahkan Cek Data Admin Panel Yang Sudah Di Kirim Bot 🙏*`
const listMessage = {
text: tks,
}	
await riza.sendMessage(m.chat, listMessage)
await riza.sendMessage(nomornya, {
text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${global.domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`,
})
}
break
case "listadmin": {
if (!isOwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list admin:\n\n";

for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
}
messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Admin: ${res.meta.pagination.count}`;
await riza.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break
case "listsrv": {
if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut adalah daftar server:\n\n";
  
for (let server of servers) {
let s = server.attributes;    
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});    
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;    
messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}  
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;  
await riza.sendMessage(m.chat, { text: messageText }, { quoted: m });  
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break
case "listusr": {
if (!isOwner) return m.reply(msg.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user:\n\n";
  
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}  
messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Users: ${res.meta.pagination.count}`;  
await riza.sendMessage(m.chat, { text: messageText }, { quoted: m }); 
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break
case "delsrv": {
if (!isOwner) return m.reply(`Khusus Sazx  Official Aja`)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "delusr": {
if (!isOwner) return m.reply(`Khusus Qiuu Official Aja`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return riza.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return riza.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
riza.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
riza.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return riza.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return riza.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
riza.sendMessage(`${global.owner}@s.whatsapp.net`, {text:`${util.format(e)}

Command From : ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})