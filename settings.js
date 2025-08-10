require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6285157605950"
global.namaowner = "rap rup"
global.namaowner2 = "rap rup"
//======== Setting Bot & Link ========//
global.namabot = "CPANEL " 
global.namabot2 = "CPANEL"
global.version = "V15 GEN 17 FASE 6"
global.foother = "CPANEL"
global.packname = "Created By"
global.author = "CPANEL"
//========== Setting Foto ===========//
global.imgreply = "https://f.top4top.io/p_3410bfqe91.jpg"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = "https://f.top4top.io/p_3410bfqe91.jpg"
global.imgpanel = fs.readFileSync("./media/Panel.jpg")
global.tampilanMenu = "v1"
global.simbol = "⬡"
//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://rapzhosting.cloudnet.biz.id"
global.apikey = "ptla_Y27Nw2HcToTBnRwy57Vu9XbdZhUfk9OYNEYZ92WszOw" //ptla
global.capikey = "ptlc_q9xnejWe58mlWwXRwrqy6zQgHu4tlHNILu32gLykM7b" //ptlc
//========== Setting Api ==========//
global.apimaulana = "CF625a9U"
//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})