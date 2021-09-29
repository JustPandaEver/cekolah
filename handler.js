/*Elios and Ben*/

const { GroupSettingChange, WAMessageProto, MessageType, prepareMessageFromContent, relayWAMessage, mentionedJid } = require('@adiwajshing/baileys')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, extendedTextMessage } = MessageType
const { exec } = require('child_process');
const axios = require('axios')
const fs = require('fs')
const hx = require('hxz-api')
const speed = require('performance-now')
let FormData = require('form-data')
const imgbb = require('imgbb-uploader')
let fetch = require('node-fetch')
const afkJs = require('./lib/afk')
const moment = require('moment-timezone');
const simple = require("./lib/simple.js");
const { mess, menu, ingfo, listCode, gc } = require('./lib/text')
const { color, getBuffer, convertMp3, kyun } = require('./lib/func')
const { simih, getRandom } = require('./lib/functions')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const tpengguna = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
fake = 'Dans'
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const _samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const yts = require( 'yt-search')
const brainly = require('brainly-scraper')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const ig = require('insta-fetcher')
let antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
let antivo = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const Exif = require('./lib/exif')
const exif = new Exif()
const ttkx = require('tiktok-scraper')
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
//const isUser = user.includes(sender)

moment.tz.setDefault('Asia/Jakarta').locale('id');
module.exports = handle = (client, Client, baterai) => {


    try {
      //dev = Client.messages
		
      //const type = Object.keys(message.message)[0]
      //budy = (type === 'conversation') ? Client.message.conversation : (type === 'extendedTextMessage') ? Client.message.extendedTextMessage.text : ''
           //AUTO RESPON
      //for (let i = 0; i < commandsDB.length ; i++) {
      //if (budy == commandsDB[i].pesan) {
      //client.sendMessage(from, commandsDB[i].balasan, text, {quoted: message})
      //data.reply(commandsDB[i].balasan)
      //console.log(commandsDB[i].balasan)
      //}
     // }
    
        
        /*DOWNLOADER*/
        Client.cmd.on('ytmp42', async (data) => {
            try {
                //if (!isUser) return data.reply(`Sepertinya Kamu Belum Terdaftar Di Database Bot.\nKetik "!daftar" Untuk Mendaftar.`)
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp4 [ link ]*\nContoh : ${data.prefix}ytmp4 https://www.youtube.com/watch?v=0maWbr0FHKY`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp4/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp4`, `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        Client.cmd.on('ytmp32', async (data) => {
            try {
                //if (!isUser) return data.reply(`Sepertinya Kamu Belum Terdaftar Di Database Bot.\nKetik "!daftar" Untuk Mendaftar.`)
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp3 [ link ]*\nContoh : ${data.prefix}ytmp3 https://www.youtube.com/watch?v=0maWbr0FHKY`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp3/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        Client.cmd.on('playvid', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playvid [ query ]*\nContoh : ${data.prefix}playvid amv`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp4/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, 'video.mp4', `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch (e) {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
		Client.cmd.on('Playyy', async (data) => {
			 {
		const buttons = [{buttonId: "id1", buttonText: {displayText: "menu"}, type: 1}]

const buttonMessages = {
    contentText: 'Yang Mau Didownload',
				  footerText: 'Powered By AFS Team',
                              buttons: [
                                {
                                 buttonId: `${data.prefix}audio`,
                                 buttonText: {
                                    displayText: `Audio`
                                  },
                                  "type": "RESPONSE"
                                },
                                {
                                 buttonId: `${data.prefix}playvid)`,
                                 buttonText: {
                                    displayText: `Video`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 1,
}
client.sendMessage(data.from, buttonMessages, MessageType.buttonsMessage, )
}
		})
        Client.cmd.on('plays', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}play [ link ]*\nContoh : ${data.prefix}play alone`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp3/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, ytm.thumb, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, ytm.link, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        Client.cmd.on('tiktok', async (data) => {
          try{
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}tiktok [ link ]*`)
            data.reply(mess.wait)
            getresult = await axios.get(`https://api.xteam.xyz/dl/tiktok?url=${data.body}&APIKEY=c99982f1181c8b79`)
            //if(getresult.data.status == false) return data.reply(getresult.data.message)
			const tikmbuh = getresult.data.info[0]
			console.log(tikmbuh)
			const teks = `「 *TIKTOK DOWNLOADER* 」\n\n*Username :* ${tikmbuh.authorMeta.name}\n*Judul :* ${tikmbuh.text}`
      console.log(`=======`)
      console.log(getresult.data.server_1)
            Client.sendFileFromUrl(data.from, getresult.data.server_1, ` `, `${teks}`, data.message)
           } catch {
             try{
                data.reply('Server 1 Gagal Mendownload, Mencoba Menggunakan Server ke 2...')
		hx.ttdownloader(`${data.body}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
			console.log(result)
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `Nih kak *${data.pushname}*`
		client.sendMessage(data.from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:message,caption:me})
		})
		})
             } catch {
               data.reply('Maaf kak ${data.pushname}, Sudah Mencoba dikedua Server Ternyata gagal.')
           }
           }
                
         
        })
        
        Client.cmd.on('ig2', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ig [ link ]*\nContoh : ${data.prefix}ig https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
            data.reply(mess.wait)
            getresult = await axios.get(`${configs.apiUrl}/api/ig?apikey=${configs.zeksKey}&url=${data.body}`)
            if(getresult.data.status == false) return data.reply(getresult.data.message)
            for(let i = 0; i < getresult.data.result.length; i++) {
                Client.sendFileFromUrl(data.from, getresult.data.result[i].url, `ig.${getresult.data.result[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${getresult.data.owner}\n*Caption*: ${getresult.data.caption}`, data.message);
            }
        })
        
        Client.cmd.on('igstory2', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstory [ username ]*\nContoh : ${data.prefix}igstory jessnolimit`)
                data.reply(mess.wait)
                stomr = await axios.get(`${configs.apiUrl}/api/igs?apikey=${configs.zeksKey}&username=${data.body}`)
                if(stomr.data.status == false) return data.reply(stomr.data.message)
                for(let i = 0; i < stomr.data.data.length; i++) {
                    Client.sendFileFromUrl(data.from, stomr.data.data[i].url, `ig.${stomr.data.data[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${stomr.data.username}\n*Type*: ${stomr.data.data[i].type}`, data.message);
                }
            } catch {
                data.reply('Username tidak ditemukan')
            }
        })
        Client.cmd.on('joox', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}joox [ lagu ]*\nContoh : ${data.prefix}joox bad liar`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/joox?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(jox.data.message)
                jox = res.data.data[0]
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${jox.judul}\n*Artis* : ${jox.artist}\n*Album* : ${jox.album}\n*Ukuran* : ${jox.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                Client.sendFileFromUrl(data.from, `${jox.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${jox.audio}`, 'audio.mp3', ``, data.message)
            } catch {
                data.reply('Maaf lagu tidak ditemukan')
            }
        })
        /*RANDOM*/
        Client.cmd.on('fml', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/fml?apikey=${configs.zeksKey}`)
            data.reply(res.data.result)
        })
        Client.cmd.on('randomquran', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/randomquran?apikey=${configs.zeksKey}`)
            rquran = res.data.result
            teks = `*Surah* : ${rquran.nama}\n*Arti* : ${rquran.arti}\n*Ayat* : ${rquran.asma}\n*Keterangan* : ${rquran.keterangan}`
            data.reply(teks)
            Client.sendFileFromUrl(data.from, rquran.audio, 'quran.mp3', ``, data.message)
        })
        Client.cmd.on('estetikpic', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/estetikpic?apikey=${configs.zeksKey}`, 'estetik.jpg', ``, data.message)
        })
        Client.cmd.on('meme', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/memeindo?apikey=${configs.zeksKey}`)
            Client.sendFileFromUrl(data.from, res.data.result, 'p.jpg', ``, data.message)
        })
        Client.cmd.on('darkjoke', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/darkjokes?apikey=${configs.zeksKey}`)
            Client.sendFileFromUrl(data.from, res.data.result, 'p.jpg', ``, data.message)
        })
        Client.cmd.on('nickepep', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/nickepep?apikey=${configs.zeksKey}`)
            n = res.data.result
            nick = n[Math.floor(Math.random() * n.length)]
            data.reply(nick)
        })
        Client.cmd.on('quotes', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/quote?apikey=${configs.zeksKey}`)
            que = res.data.result
            teks = `*Author* : ${que.author}\n*Quotes* : ${que.quotes}`
            data.reply(teks)
        })
        Client.cmd.on('!', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/simi?apikey=${configs.zeksKey}&text=${data.body}`)
            que = res.data.result
            teks = `Simi Berkata : ${que}`
            data.reply(teks)
        })
        Client.cmd.on('pantun', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/pantun?apikey=${configs.zeksKey}`)
            data.reply(res.data.result.pantun)
        })
        Client.cmd.on('limit', async (data) => {
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            if(dataUser[data.sender].premium) return data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\nAnda adalah user premium yang memiliki akses tanpa batas limit!`)
            limits = configs.maxLimit - dataUser[data.sender].limit
            if(limits <= 0) return data.reply("```" + `Limit anda sudah habis` + "```")
            data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\n Limit anda tersisa ${limits || 30}\nLimit setiap hari di reset jam 00.00\nJika anda ingin mendapatkan unlimited limit silahkan chat owner bot ketik !owner`)
        })
		Client.cmd.on('gc', async (data) => {   
		data.reply(gc)
		})
		 Client.cmd.on('info', async (data) => {
			 {
		const buttons = [{buttonId: "id1", buttonText: {displayText: "menu"}, type: 1}]

const buttonMessages = {
    contentText: 'Hai aku dans bot , yang dibuat menggunakan bahasa pemrograman node.js/javascript.\n\nAda error?lapor owner, klik menu dibawah.\n\nMau gabung GC bot? Klik juga menu dibawah ',
				  footerText: '\nSc : justpiple/whatsapp-bot\n\nPowered By AFS Team',
                              buttons: [
                                {
                                 buttonId: `${data.prefix}owner`,
                                 buttonText: {
                                    displayText: `Owner Dans`
                                  },
                                  "type": "RESPONSE"
                                },
                                {
                                 buttonId: `${data.prefix}gc`,
                                 buttonText: {
                                    displayText: `GC AFS BOT`
                                  },
                                  "type": "RESPONSE"
                                },
                                
                               
								  {
                                  buttonId: `${data.prefix}afk`,
                                       buttonText: {
                                          displayText: "========"
                                        },
                                         "type": "RESPONSE"
                                     },
                                  ],
                                   headerType: 1,
}
client.sendMessage(data.from, buttonMessages, MessageType.buttonsMessage, )
}
		})
        
		/*ANIME*/
        Client.cmd.on('waifux', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/sfw/waifu`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Waifu',
				  footerText: 'Press the button below to get a random waifu image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}waifu`,
                                 buttonText: {
                                    displayText: `⏯️ Get again`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
        Client.cmd.on('anime', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}anime [ query ]*\nContoh : ${data.prefix}anime naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${data.body}`)
			const damta = await res.json()
			const { title, synopsis, episodes, url, rated, score, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Anime found!*\n\n*Title:* ${title}\n*Episodes:* ${episodes}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`, data.message)
            } catch {
                data.reply('Anime not found')
            }
		})
        Client.cmd.on('manga', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}manga [ query ]*\nContoh : ${data.prefix}manga naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${data.body}`)
			const damta = await res.json()
			const { title, synopsis, chapters, url, rated, score, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Manga found!*\n\n*Title:* ${title}\n*Chapters:* ${chapters}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`, data.message)
            } catch {
                data.reply('Manga not found')
            }
		})
        Client.cmd.on('chara', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}chara [ query ]*\nContoh : ${data.prefix}manga naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/character?q=${data.body}`)
			const damta = await res.json()
			const { name, alternative_names, url, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Character found!*\n\n*Name:* ${name}\n*Alternative names:* ${alternative_names}\n*URL*: ${url}`, data.message)
            } catch {
                data.reply('Character not found')
            }
		})
        /*OWNER*/
        Client.cmd.on('setpp', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, please send image with caption ${data.prefix}setgroupicon, or reply image with ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(client.user.jid, dlfile)
            data.reply(`success!, profile picture has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('block', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "add"))
            data.reply(`Succecs block @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        })
        Client.cmd.on('unblock', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "remove"))
            data.reply(`Succecs unblock @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        })
        Client.cmd.on('addvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedAudio) return data.reply('Reply vn/audio!')
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addvn [ nama ]\nContoh ${data.command}addvn hai`)
            if(vn.includes(data.body)) return data.reply('Nama vn sudah ada, harap gunakan nama lain')
            nv = await data.downloadMediaQuotedMessage()
            fs.writeFileSync(`./lib/vn/${data.body}.mp3`, nv)
            global.vn.push(data.body)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn))
            data.reply(`Berhasil menambahkan vn ${data.body} dari database`)
        })
        Client.cmd.on('delvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addvn [ nama ]\nContoh ${data.command}addvn hai`)
            if(!vn.includes(data.body)) return data.reply('vn tidak ditemukan!')
            global.vn.splice(vn.indexOf(data.body), 1)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn, null, 2))
            fs.unlinkSync(`./lib/vn/${data.body}.mp3`)
            data.reply(`Berhasil mengahpus vn ${data.body} dari database`)
        })
        Client.cmd.on('listvn', async (data) => {
            let listvn = 'Ketik nama vn untuk mendownload vn\n\n*List vn*:\n\n'
            vn.forEach((vnn, i) => listvn += `*${i+1}*. ${vnn}\n`)
            data.reply(listvn)
        })
        Client.cmd.on('tebakgambar', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			if (global.tebakgambar[data.from] && global.tebakgambar[data.from].id) return data.reply("Masih ada soal yang berjalan")
            const getSoal = await axios.get(`${configs.apiUrl}/api/tebakgambar?apikey=${configs.zeksKey}`)
			ses = Date.now()
			send = await Client.sendFileFromUrl(data.from, getSoal.data.result.soal, "soal.jpg", "Waktu menjawab 30 detik!", data.message)
			global.tebakgambar[data.from] = {jawaban: getSoal.data.result.jawaban, id: ses}
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 20 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 10 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from, "Waktu habis", send)
			Client.reply(data.from,`Jawabannya adalah: ${getSoal.data.result.jawaban}`, send)
			global.tebakgambar[data.from] = {}
			
        })
        Client.cmd.on('clearall', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const getAll = await client.chats.all()
            getAll.forEach(async chats => {
                if(chats.jid.endsWith('@g.us')) await client.modifyChat(chats.jid, 'clear')
                else await client.modifyChat(chats.jid, 'delete')
            })
            data.reply('OkE')
        })
        Client.cmd.on('resetlimit', async (data) => {
            if(!data.isOwner) return data.reply('Owner only!')
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            for(users in dataUser) {
                dataUser[users].limit = 0
            }
            fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            console.log(color('[ INFO ]', 'cyan'), 'LIMIT RESETED!')
            data.reply('Sukses!')
        })
        Client.cmd.on('bc', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == '') return
            var list = await client.chats.all()
            mediaBuffer = data.type == 'extendedTextMessage' ? await data.downloadMediaQuotedMessage() : data.type == 'imageMessage' || data.type == 'videoMessage' ? await data.downloadMediaMessage() : null
            var ext = data.isQuotedImage ? 'jpg' : 'mp4'
            list.forEach(async dataC => {
                if(mediaBuffer) Client.sendFileFromBase64(dataC.jid, mediaBuffer.toString('base64'), `bc.${ext}`, `*BOT BROADCAST*\n\n${data.body} ${dataC.jid.endsWith('@g.us') ?'\n\n_#izin admin grup _*'+dataC.name+'*_' : ''}`)
                else Client.sendText(dataC.jid, `*BOT BROADCAST*\n\n${data.body}\n\n_#izin admin grup *${dataC.name}*_`)
            })
        })
        Client.cmd.on('join', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Link nya?`)
            Client.acceptInviteLink(data.body).then(() => data.reply('ok')).catch(() => data.reply('failed'))
        })
        Client.cmd.on('owner', async (data) => {
            Client.sendContact(data.from, { number: configs.ownerList[0].split('@')[0], name: 'owner' }, data.message)
        })
        Client.cmd.on('premium', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            dataToPr = data.mentionedJidList.length ? data.mentionedJidList : [data.args[1] + "@s.whatsapp.net"] || null

            if(data.args[0].toLowerCase() == 'add') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums]) dataUser[nums] = {
                        limit: 0
                    }
                    dataUser[nums].premium = true
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
                data.reply(`Berhasil menambahkan user premium @${dataToPr.join(' @').replace(/@s.whatsapp.net/g, '')}`)
            } else if(data.args[0].toLowerCase() == 'del') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums] || !dataUser[nums].premium) return data.reply(`User @${nums.split('@')[0]} not premium!`)
                    dataUser[nums].premium = false
                    data.reply(`berasil menghapus user premium @${nums.split('@')[0]}`)
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            } else if(data.args[0].toLowerCase() == 'list') {
                strings = `LIST PREMIUM\n\n`
                for(var [num, val] of Object.entries(dataUser))
                    if(val.premium) strings += `~> @${num.split('@')[0]}\n`
                data.reply(strings)
            } else data.reply(`do u need example?\n\nExample:\n${data.prefix}premium add @0 \nor\n${data.prefix}premium add 62xxxx`)
        })
        /*NEWS*/
        Client.cmd.on('tribunnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/tribunews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 TRIBUNNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Link*: ${ttt[i].url}\n\n`
            }
            await data.reply(teks)
        })
        Client.cmd.on('liputannews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/liputan6?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 LIPUTANNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Kategori*: ${ttt[i].category}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        Client.cmd.on('foxnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/foxnews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 FOXNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].content}\n*Negara*: ${ttt[i].country}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        /*GROUP*/
        Client.cmd.on('afk', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            timesNow = moment(data.t * 1000).format('YYYY-MM-DD HH:mm:ss')
            afkJs.addAfk(data.from, data.sender, data.body, timesNow)
            Client.sendText(data.from, "```" + `${data.pushname} [@${data.sender.split('@')[0]}] sedang AFK\n\nAlasan: ${data.body}\nTime: ${timesNow}` + "```")
        })
	     Client.cmd.on('welcome', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].welcome) return data.reply('Already on!')
                dataGc[data.from].welcome = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].welcome) return data.reply('Already off!')
                dataGc[data.from].welcome = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
            //client.sendMessage(data.from, po, MessageType.buttonsMessage, )
			}
        })
	    Client.cmd.on('youtubedl', async (data) =>{
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}youtubedl [ query ]*\nContoh : ${data.prefix}youtubedl Alan walker`)
            data.reply(mess.wait)
			axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`).then((xres) =>{
			if (!xres.data.status || !xres.data.result) return data.reply(xres.data.message)
			secs = []
			xres.data.result.splice(5, xres.data.result.length)
			xres.data.result.forEach((xres, i) =>{
				secs.push({
                        "rows": [
                           {
                              "title": "MP3",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp3 ${xres.video.url}`
                           },
						   {
                              "title": "MP4",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp4 ${xres.video.url}`
                           }
                        ], title: i+1})
			})
			let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": "*YOUTUBE DOWNLOAD*",
                  "description": `*Result for : ${data.body}*\n*Download video by click button bellow*`,
                  "buttonText": "Result",
                  "listType": "SINGLE_SELECT",
                  "sections": secs}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
			})
        })
        Client.cmd.on('leave', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].leave) return data.reply('Already on!')
                dataGc[data.from].leave = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].leave) return data.reply('Already off!')
                dataGc[data.from].leave = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antiviewonce', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antiviewonce) return data.reply('Already on!')
                dataGc[data.from].antiviewonce = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antiviewonce) return data.reply('Already off!')
                dataGc[data.from].antiviewonce = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antitagall', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antitagall) return data.reply('Already on!')
                dataGc[data.from].antitagall = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antitagall) return data.reply('Already off!')
                dataGc[data.from].antitagall = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antilink', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antilink) return data.reply('Already on!')
                dataGc[data.from].antilink = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antilink) return data.reply('Already off!')
                dataGc[data.from].antilink = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('revoke', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.revokeInvite(data.from)
            data.reply(`Linkgroup berhasil di reset oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('group', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.args[0] && data.args[0].toLowerCase() == 'open') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, false)
                data.reply(`Group telah dibuka oleh admin @${data.sender.split('@')[0]}`)
            } else if(data.args[0] && data.args[0].toLowerCase() == 'close') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, true)
                data.reply(`Group telah ditutup oleh admin @${data.sender.split('@')[0]}`)
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh open/close",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "open",
                              "rowId": `${data.prefix}${data.command} open`
                           },
						   {
                              "title": "close",
                              "rowId": `${data.prefix}${data.command} close`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('bye', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.groupLeave(data.from)
        })
        Client.cmd.on('tagall', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            text = `『 *_TAG ALL_* 』\n\n*Total member*: ${data.groupMetadata.participants.length}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
`
            data.groupMetadata.participants.forEach((member, i) => {
                text += `${i+1}. ⤷@${member.jid.split('@')[0]}\n`
            })
            Client.sendText(data.from, text)
        })
        Client.cmd.on('setgroupicon', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, please send image with caption ${data.prefix}setgroupicon, or reply image with ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(data.from, dlfile)
            data.reply(`success!, group icon has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupname', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} Elios`)
            client.groupUpdateSubject(data.from, `${data.body}`)
            data.reply(`Nama group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupdesc', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} Elios`)
            client.groupUpdateDescription(data.from, `${data.body}`)
            data.reply(`Deskripsi group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('promote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupMakeAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menambahkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')} sebagai admin.`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('demote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupDemoteAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menghapus admin @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('kick', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupRemove(data.from, data.mentionedJidList).then(() => data.reply(`Berhasil mengeluarkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('add', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ nomor ]*\nContoh : ${data.prefix}${data.command} 6285736996646`)
            args = data.args.map(mp => mp + "@s.whatsapp.net")
            client.groupAdd(data.from, args).then(() => data.reply(`Berhasil menambahkan @${data.args.join(' @')}`)).catch(() => data.reply('Unable to invite'))
        })
        Client.cmd.on('testing', async (data) => {
            console.log(client)
        })
        /*IMAGE MAKER*/
        Client.cmd.on('missing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'missing.jpeg')
                text = data.body.split('|')
                const getAxios = await axios(`${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                text = data.body.split('|')
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, Example: tag someone or reply image\n${data.prefix}missing lost|idk|call xxxxx|@${client.user.jid.split('@')[0]}`)

        })
        Client.cmd.on('calender', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('removebg', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('drawing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        Client.cmd.on('sketch', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        //If you want case method
        Client.cmd.on('*', async (data) => {
        const {
                args,
                body,
                message,
                prefix,
                from,
                sender,
                command,
                isOwner,
                type,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = data  
const ucapanWaktu = 'dan'
const isUser = user.includes(sender)
const m = simple.smsg(client, Client);
const date = new Date().toLocaleDateString()
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const isGroup = from.endsWith('@g.us')
const isSimi = isGroup ? _samih.includes(from) : false 
var Simihh = 'OFF'
			if(isSimi) {
			Simihh = 'ON'
			}
const groupMembers = isGroup ? groupMetadata.participants : ''
const isMedia = (type === 'imageMessage' || type === 'videoMessage')


const query = data.body
const q = data.body
 



const optionsx = {
    // Number of posts to scrape: {int default: 20}
    number: 50,

    // Scrape posts published since this date: { int default: 0}
    since: 0,

    // Set session: {string[] default: ['']}
    // Authenticated session cookie value is required to scrape user/trending/music/hashtag feed
    // You can put here any number of sessions, each request will select random session from the list
    sessionList: ['sid_tt=21312213'],

    // Set proxy {string[] | string default: ''}
    // http proxy: 127.0.0.1:8080
    // socks proxy: socks5://127.0.0.1:8080
    // You can pass proxies as an array and scraper will randomly select a proxy from the array to execute the requests
    proxy: '',

    // Set to {true} to search by user id: {boolean default: false}
    by_user_id: false,

    // How many post should be downloaded asynchronously. Only if {download:true}: {int default: 5}
    asyncDownload: 5,

    // How many post should be scraped asynchronously: {int default: 3}
    // Current option will be applied only with current types: music and hashtag
    // With other types it is always 1 because every request response to the TikTok API is providing the "maxCursor" value
    // that is required to send the next request
    asyncScraping: 3,

    // File path where all files will be saved: {string default: 'CURRENT_DIR'}
    filepath: `CURRENT_DIR`,

    // Custom file name for the output files: {string default: ''}
    fileName: `CURRENT_DIR`,

    // Output with information can be saved to a CSV or JSON files: {string default: 'na'}
    // 'csv' to save in csv
    // 'json' to save in json
    // 'all' to save in json and csv
    // 'na' to skip this step
    filetype: `na`,

    // Set custom headers: user-agent, cookie and etc
    // NOTE: When you parse video feed or single video metadata then in return you will receive {headers} object
    // that was used to extract the information and in order to access and download video through received {videoUrl} value you need to use same headers
    headers: {
        'user-agent': "BLAH",
        referer: 'https://www.tiktok.com/',
        cookie: `tt_webid_v2=68dssds`,
    },

    // Download video without the watermark: {boolean default: false}
    // Set to true to download without the watermark
    // This option will affect the execution speed
    noWaterMark: false,

    // Create link to HD video: {boolean default: false}
    // This option will only work if {noWaterMark} is set to {true}
    hdVideo: false,

    // verifyFp is used to verify the request and avoid captcha
    // When you are using proxy then there are high chances that the request will be
    // blocked with captcha
    // You can set your own verifyFp value or default(hardcoded) will be used
    verifyFp: '',

    // Switch main host to Tiktok test enpoint.
    // When your requests are blocked by captcha you can try to use Tiktok test endpoints.
    useTestEndpoints: false
};


hit_today = [];
let _chats =
      type === "conversation" && message.message.conversation
        ? message.message.conversation
        : type == "imageMessage" && message.message.imageMessage.caption
        ? message.message.imageMessage.caption
        : type == "videoMessage" && message.message.videoMessage.caption
        ? message.message.videoMessage.caption
        : type == "extendedTextMessage" && message.message.extendedTextMessage.text
        ? message.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && message.message[type].selectedButtonId
        ? message.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(message.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(message.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(message.message[type].fileSha256.toString("base64"))
        : "";  

var prefixRegEx = /^[!&z?=#.+\/]/gi; 
// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
    console.log(position)
  });
  if (position !== null) {
    return position;
    console.log(position)
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
  console.log(chats)
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
  console.log(status)
}; 


let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
  
    hit_today.push(command);
const isCmd = _chats.match(prefixRegEx)
const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./zilong.jpg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
            
const fakestatuss = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zilong.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
const fakeitem = (teks) => {
            client.sendMessage(data.from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./zilong.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`Dans`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})} 
      const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `ngab`, //Kasih namalu
                            orderTitle: `cok jaran`,
                            thumbnail: fs.readFileSync('./zilong.jpg'),
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
jpegThumbnail = gam1
mhan = await client.prepareMessage(from, jpegThumbnail, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}


///loca function
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
Imgl = gam1
dans = await client.prepareMessage(from, Imgl, location)
const buttonMessages = {
locationMessage: dans.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: Client, contextInfo: { "mentionedJid": memberr } })
        }


            switch(command.toLowerCase()) {
                case 'command2':
                case 'cmd2':
                case 'menu2':
                case 'help2':
                case 'list2':
 	                 const mediaMsg = await client.prepareMessageMedia(await getBuffer(configs.imgUrl), 'imageMessage')
                    koped = await axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
                    positifped = koped.data.positif
                    dirawatped = koped.data.dirawat
                    sembuhped = koped.data.sembuh
                    meninggalped = koped.data.meninggal
                    updateped = koped.data.lastUpdate
                    runx = process.uptime() 
                      teksx = `${kyun(runx)}`
                      dft = user.length
                      

                     const buttonMessage = {
                           contentText: menu(data.prefix, data.pushname, teksx, dft ),
                           footerText: `\n=======================\nKasus Covid-19 Indonesia\n*Positif :* ${positifped}\n*Dirawat :* ${dirawatped}\n*Sembuh :* ${sembuhped}\n*Meninggal :* ${meninggalped}\n*Update :* ${updateped}\n=======================\n\n\n*©_AFS Team*`,
                                "contextInfo": {
									  mentionedJid: [configs.ownerList[0]],
                                      participant: sender,
                                      stanzaId: message.key.id,
                                      quotedMessage: message.message,
                                     },
                                     buttons: [
                                     {
                                       buttonId: `${data.prefix}inpho`,
                                       buttonText: {
                                          displayText: "Info bot"
                                        },
                                         "type": "RESPONSE"
                                     },
                                     {
                                       buttonId: `${data.prefix}limit`,
                                       buttonText: {
                                          displayText: "Iimit"
                                        },
                                         "type": "RESPONSE"
                                     },
                                     //{
                                       //buttonId: `${data.prefix}owner`,
                                       //buttonText: {
                                          //displayText: "Owner bot"
                                        //},
                                         //"type": "RESPONSE"
                                     //},
                                        ],
                                         headerType: 4,
                                     ...mediaMsg 
                                     }
                    let zz = await client.prepareMessageFromContent(from, {buttonsMessage: buttonMessage}, {})
                	client.relayWAMessage(zz, {waitForAck: true})     
                    break
                case "menhu":{
                 runx = process.uptime() 
teksx = `${kyun(runx)}`
dft = user.length
var jpegThumbnails =fs.readFileSync('./zilong.jpg')			
sendButLocation(from, `${menu(data.prefix, data.pushname, teksx, dft )}`, "_© Dans Bot", {jpegThumbnail:`${jpegThumbnails}`}, [{buttonId:`${prefix}inpho`,buttonText:{displayText:'Info Bot'},type:1},
{buttonId:`${prefix}limit`,buttonText:{displayText:'limit'},type:1},
{buttonId:`${prefix}owner`,buttonText:{displayText:'👨‍💻  OWNER'},type:1}])





                }
                break
                case 'command':
                case 'cmd':
                case 'help':
                case 'list':
                case 'menu':{
                    koped = await axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
                    positifped = koped.data.positif
                    dirawatped = koped.data.dirawat
                    sembuhped = koped.data.sembuh
                    meninggalped = koped.data.meninggal
                    updateped = koped.data.lastUpdate
                    runx = process.uptime() 
                      teksx = `${kyun(runx)}`
                      dft = user.length
                 var dns = await getBuffer("https://i.ibb.co/X5g7sjX/1d7f4254b5d0.jpg")
sendButLocation(
          from,
          `${menu(data.prefix, data.pushname, teksx, dft)}`,
          `\n=======================\nKasus Covid-19 Indonesia\n*Positif :* ${positifped}\n*Dirawat :* ${dirawatped}\n*Sembuh :* ${sembuhped}\n*Meninggal :* ${meninggalped}\n*Update :* ${updateped}\n=======================\n\n\n*©_AFS Team*`,
          {jpegThumbnail:dns},
          [
            {
              buttonId: `${prefix}info`,
              buttonText: {
                displayText: `INFO BOT`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `LIMIT`,
              },
              type: 1,
            },
          ]
        );
                }
		break
                case 'tes2':
                 ftrol(data.body)
                 break
case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!data.body)
            return data.reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, data.body);
          data.reply("Done!");
        } else {
          data.reply("tag stickenya");
        }
        break;
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        data.reply(teksnyee, cemde, true);
        break;
        
        case 'botstat':{
          runx = process.uptime() 
                      teksx = `${kyun(runx)}`
                let totalchat = await client.chats.all()
				let i = []
				let giid = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
                let anu = process.uptime()
                let teskny = `*V. Whatsapp :* ${wa_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${teksx}`
				data.reply(teskny)
            }
				break
case 'unpin':
                //if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
                client.modifyChat(from, ChatModification.unpin)
                data.reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                //if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
                client.modifyChat(from, ChatModification.pin)
               data.reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(client.chats.get(id).presences),
            client.user.jid,
          ];
          console.log(online)
          client.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }

          );
        } catch (e) {
          m.reply("");
        }
        break;
case 'sider':{
  if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
                shape = '✓ '
infom = await client.messageInfo(from, message.message.extendedTextMessage.contextInfo.stanzaId)
keselcok = infom.reads
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i = 0; i < keselcok.length; i++) {
teks += shape+' ' + '@' + `${keselcok[i].jid.split('@')[0]}` + '\n'
teks += `> Waktu : ` + moment(`${keselcok[i].t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(keselcok[i].jid)
}
data.reply(teks)
}
break

case "linkwa":
        if (!data.body) return data.reply("cari group apa?");
        hx.linkwa(data.body).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i = 0; i <  result.length; i++) {
            res += `*Nama*: *${result[i].nama}\n*Link*: ${result[i].link}\n\n`;
          }
          data.reply(res);
        });
        break;

case 'igstory':  
    try{
        if (!data.body) return fakegroup('Linknya?')
        data.reply("tunggu sebentar...")
	    hx.igstory(data.body)
	    .then(async(result) => {
        console.log(result)
        doi = result.user
        const teksx = `Mendownload Story Dari\n\n*Username :* ${doi.username}\n*Fullname :* ${doi.fullName}\n*Bio :* ${doi.biography}\n*Followers :* ${doi.followers}\n*Username :* ${doi.following}\n\n\n@dans_bot`
        data.reply(teksx)
            for(let i of result.medias){
                    let link = await getBuffer(i.url)
                    console.log(i.url)
					Client.sendFileFromUrl(data.from, i.url, ` `, `${i.fileType}`, data.message);
                    
               
                
            }
            });
             } catch {
                data.reply('Ups maaf server sedang error, Harap Ulangi Beberapa Saat Lagi...')
             }
	    break

      case 'simih':  
       if(!data.isGroup) return data.reply(mess.group)
       if(!data.isAdmin) return data.reply('Hanya YTH.Admin Yang Baik Dan Tidak Somboh , Yang bisa Mengaktifkan...  ')
        if(!botIsAdmin) return data.reply(mess.botAdmin)
				
			    
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return data.reply('Mode simi sudah aktif')
						_samih.push(from)
						fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
						data.reply(`\`\`\`✓Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isSimi) return data.reply('Mode simi Sudah Off sebelumnya')
						_samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(_samih))
						data.reply(`\`\`\`✓Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						data.reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break


















//////////////////menu baru ardan///////////////////////////////////////////
case "waifu":{
if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/sfw/waifu`)
			const tamnel = await getBuffer(res.data.url)
            
          sendButImage(
          from,
          `*Waifu*`,
          `Press the button below to get a random waifu image`,
          tamnel,
          [
            {
              buttonId: `${prefix}waifu`,
              buttonText: {
                displayText: `⏯️ LAGI DONG`,
              },
              type: 1,
            },
           
          ]
        );
        }
        break

        case 'daftar':
					if (isUser) return data.reply('Nomer Kamu Sudah Terdaftar Di Data Base BOT')
					user.push(sender)
					fs.writeFileSync('./database/user.json', JSON.stringify(user))
					try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╭─「 *PENDAFTARAN USER* 」\n│\n│ *Pada ${date} ${time}* \n│[ *Nama* ]: *${pushname}*\n│[ *Nomor* ]: *wa.me/${sender.split("@")[0]}*\n│\n│ *Total Pengguna* :  *${user.length} Orang* \n╰────────────────────`
					tamnel = await getBuffer(ppimg)
          sendButImage(
          from,
          `${captionnya}`,
          `➥AFS TEAM`,
          tamnel,
          [
            {
              buttonId: `${prefix}menu`,
              buttonText: {
                displayText: `MENU`,
              },
              type: 1,
            },
           
          ]
        );
					break 

        case 'infogempa':
        case 'gempa':{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    data.reply("Mendapatkan Informasi Gempa Terkini...")
                    res = await axios.get(`https://docs-jojo.herokuapp.com/api/infogempa`)
                    if(res.data.status == false) data.reply(res.data.message)
                    p = res.data
                    //console.log(p)
                    teks = `*Waktu :* ${p.waktu}\n*Magnitudo :* ${p.magnitude}SR\n*Kedalaman :* ${p.kedalaman}\n*Lokasi :* ${p.lokasi}\n*Koordinat :* ${p.koordinat}\n*Potensi :* ${p.potensi}`
                    pp = await getBuffer(p.map)
                    sendButImage(
                    from,
                    `${teks}`,
                    `➥Informasi Dari *BMKG*`,
                    pp,
                    [
                      {
                        buttonId: `${prefix}gempa`,
                        buttonText: {
                          displayText: ` `,
                        },
                        type: 1,
                      },
                    
                    ]
                  );
                    }
					break
        case "katabucin":{

					if(isLimit(data.sender)) return data.reply(mess.limit)
                    res = await axios.get(`https://pecundang.herokuapp.com/api/bucin`)
					hsl = res.data.result
					const buttons = [{buttonId: "id1", buttonText: {displayText: "menu"}, type: 1}]
					const buttonMessages = {
					contentText: `${hsl}`,
					footerText: '➥ Kata Bucin',
                              buttons: [
                                {
                                 buttonId: `${data.prefix}katabucin`,
                                 buttonText: {
                                    displayText: `𝐿𝒜𝒢𝐼 𝒟𝒪𝒩𝒢`
                                  },
                                  "type": "RESPONSE"
                                },
                                
                                  ],
                                   headerType: 1,
}
client.sendMessage(data.from, buttonMessages, MessageType.buttonsMessage, )
}
break
        
case "inpho":{
		const buttons = [{buttonId: "id1", buttonText: {displayText: "menu"}, type: 1}]

const buttonMessages = {
    contentText: 'Hai aku dans bot , yang dibuat menggunakan bahasa pemrograman node.js/javascript.\n\nAda error?lapor owner, klik menu dibawah.\n\nMau gabung GC bot? Klik juga menu dibawah ',
				  footerText: '\nSc : justpiple/whatsapp-bot\n\nPowered By AFS Team',
                              buttons: [
                                {
                                 buttonId: `${data.prefix}owner`,
                                 buttonText: {
                                    displayText: `Owner Dans`
                                  },
                                  "type": "RESPONSE"
                                },
                                {
                                 buttonId: `${data.prefix}gc`,
                                 buttonText: {
                                    displayText: `GC AFS BOT`
                                  },
                                  "type": "RESPONSE"
                                },
                                
                               
								  {
                                  buttonId: `${data.prefix}afk`,
                                       buttonText: {
                                          displayText: "========"
                                        },
                                         "type": "RESPONSE"
                                     },
                                  ],
                                   headerType: 1,
}
client.sendMessage(data.from, buttonMessages, MessageType.buttonsMessage, )
}
break

case "quotesislami":{

					if(isLimit(data.sender)) return data.reply(mess.limit)
                    res = await axios.get(`https://pecundang.herokuapp.com/api/randomquote/muslim`)
					hsl = res.data.result.text_id
					const buttons = [{buttonId: "id1", buttonText: {displayText: "menu"}, type: 1}]
					const buttonMessages = {
					contentText: `${hsl}`,
					footerText: '➥ Quotes Islami',
                              buttons: [
                                {
                                 buttonId: `${data.prefix}quotesislami`,
                                 buttonText: {
                                    displayText: `𝐿𝒜𝒢𝐼 𝒟𝒪𝒩𝒢`
                                  },
                                  "type": "RESPONSE"
                                },
                                
                                  ],
                                   headerType: 1,
}
client.sendMessage(data.from, buttonMessages, MessageType.buttonsMessage, )
}
break

case "fakta":{

					if(isLimit(data.sender)) return data.reply(mess.limit)
                    res = await axios.get(`https://ardans-api.herokuapp.com/api/fakta?apikey=free`)
					hsl = res.data.result
					const buttons = [{buttonId: "id1", buttonText: {displayText: "menu"}, type: 1}]
					const buttonMessages = {
					contentText: `${hsl}`,
					footerText: '➥ Fakta',
                              buttons: [
                                {
                                 buttonId: `${data.prefix}fakta`,
                                 buttonText: {
                                    displayText: `𝐿𝒜𝒢𝐼 𝒟𝒪𝒩𝒢`
                                  },
                                  "type": "RESPONSE"
                                },
                                
                                  ],
                                   headerType: 1,
}
client.sendMessage(data.from, buttonMessages, MessageType.buttonsMessage, )
}
break

 case 'fakeloc':
               var dans = data.body
			   var nama = dans.split("|")[0];
			   var botsss = dans.split("|")[1];
			   var dans2 = fs.readFileSync(`./zilong.jpg`)
               client.sendMessage(from, { name: `Dans`,address: `${menu(configs.prefix == 'multi' ? '/' : configs.prefix)}`,jpegThumbnail: dans2 }, MessageType.location)
                 
		    break
case 'fitnah':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = message.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
case 'tomp3':
		            if (!data.isQuotedVideo) return data.reply('```Reply videonya!```')
		            data.reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await client.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return data.reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: message })
		            fs.unlinkSync(ran)
		            })
		            break
case 'imgtolink':
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message
			var media = await  client.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 *IMGBB TO URL* 」\n│\n*│• ID :* ${data.id}\n*│• MimeType :* ${data.image.mime}\n*│• Extension :* ${data.image.extension}\n│\n*│• URL :* ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(media)
			client.sendMessage(from, ibb, image, { quoted: message, caption: caps })
			})
			.catch(err => {
			throw err 
			})
			break
case 'cantik':
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					console.log(siaps)
          //data.reply(siaps)
				  //const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					//mentions(teks, membr, true)
					data.reply(teks)
          break
case 'ganteng':{
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					console.log(siaps)
          //data.reply(siaps)
				  //const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Ganteng Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					//mentions(teks, membr, true)
					data.reply(teks)		
}			
break
case 'beban':{
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					console.log(siaps)
          //data.reply(siaps)
				  //const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Beban Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					//mentions(teks, membr, true)
					data.reply(teks)		
}			
break

case 'tourl':
            //if ((isMedia && !message.message.videoMessage || data.isQuotedImage || data.isQuotedVideo ) && args.length == 0) {
            boij = data.isQuotedImage || data.isQuotedVideo ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message
            owgi = await client.downloadMediaMessage(boij)
            res = await upload(owgi)
            donengab = `*Nih Kak...*\n\n${res}`
            var options = {
         contextInfo: {
               participant: '0@s.whatsapp.net',
               quotedMessage: {
                     extendedTextMessage: {
                              text: 'Berhasil Upload Ke Server telegra.ph'
                     }
                }
         }
  }

client.sendMessage(from, donengab, text, options)
            //} else {
            //data.reply('kirim/reply gambar/video')
            //}
            break

case 'inspect':{
            //try {
            //if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!data.body) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return data.reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await client.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             client.sendMessage(from,par,text,{quoted:message,contextInfo:{mentionedJid:jids}})
             //} catch {
            // data.reply('Link error')
            // }
}
             break
 case 'brainly':
			if (args.length < 1) return data.reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			client.sendMessage(from, teks, text,{quoted:message,detectLinks: false})                        
            })              
			break

case 'emoji':
			if (!data.body) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		//sendStickerFromUrl(from,`${teks}`)	
        Client.sendStickerFromUrl(from, teks, message, { pack: `${configs.pack}`, author: `${configs.author}` })
    		console.log(teks)
   			})
    		break

case 'igstalk':
            if (!data.body) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            //sendMediaURL(from,ten,teks) 
			client.sendMessage(from, ten, image, { quoted: message, caption: teks })
            })   
break

case 'glass':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break

case 'passed':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break

case 'jail':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
		case 'comrade':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
////////////////////////////////////////

case 'hijau':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
		case 'biru':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
		case 'greyscale':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
		case 'invert':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
				 break 
		case 'invert_greyscale':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
		case 'red':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
         case 'blurple':
         
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
		case 'blurple2':
		
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break
		case 'wasted':
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break 
		case 'pelangi':
		case 'rainbow':
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break 
		case 'sepia':
					var imgbb = require('imgbb-uploader')
					 if(data.isQuotedImage || data.type == 'imageMessage') {
					ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return data.reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: message})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					data.reply("Reply foto...")
					}
					break

 case 'ssweb':
            case 'ss':{
                if (args.length < 1) return data.reply('Urlnya mana om')
					teks = q
					anu = await axios.get(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					sse = await getBuffer(anu.data.gambar)
					client.sendMessage(from, sse, image, {quoted: message, caption : teks})
            }
					break

case 'ttp':  
                    if (args.length < 1) return data.reply("Teks?")
                    hhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${hhh}`)
                    //client.sendMessage(from, anu1, image, {quoted: message, caption : '.sticker'})
                    Client.sendImageAsSticker(from, anu1, message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    break
         case 'attp':  
                    if (args.length < 1) return data.reply("Teks?")
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    client.sendMessage(from, anu1, sticker, {quoted: message})
                    break

case "antiviewoncex":
if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
if (args[0] == "on") {
if (isAntiVO) return data.reply("Sudah aktif!!");
antivo.push(from);
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
data.reply("Sukses mengaktifkan antiviewonce!");
} else if (args[0] == "off") {
antivo.splice(from, 1);
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
data.reply("Sukses mematikan antiviewonce!");
} else if (!q) {
sendButMessage(
from,
`MODE ANTIVIEWONCE`,
`Silahkan pilih salah satu`,
[
{
buttonId: `${prefix}antiviewonce on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `${prefix}antiviewonce off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]
);
}
break;	

case 'stikernobg':
                case 'stickernobg':
                case 'snobg':{
            //if(data.isQuotedImage || data.type == 'imageMessage') {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            ger = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message 
					data.reply("Tunggu Sebentar...")
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
			//const sbg = await axios.get(`https://docs-jojo.herokuapp.com/api/remove-bg?url=${teks}`)
            Client.sendFileFromUrl(data.from, `https://docs-jojo.herokuapp.com/api/remove-bg?url=${res}`, 'thumb.jpg', `*_Berhasil Diproses..._*`, data.message )
           // } else {
					//data.reply("Reply foto...")
				//	}
					}
            break	

case 'tstick':{
                //if (args.length < 2) return data.reply(`Penggunaan ${command} nama|author`)
                let packname1 = q.split('|')[0] ? q.split('|')[0] : q
                let author1 = q.split('|')[1] ? q.split('|')[1] : ''
                if (data.isImage || data.isQuotedImage) {
                    let encmedia = data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                    let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								data.reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return data.reply(mess.error.api)
									client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: message})
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((data.isVideo && message.message.videoMessage.fileLength < 10000000 || data.isQuotedVideo && message.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = data.isQuotedVideo ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                    let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    data.reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								data.reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return data.reply(mess.error.api)
									client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: message})
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    exif.create(packname1, author1, `takestick_${sender}`)
                    exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                        //if (error) return data.reply(mess.error.api)
                        client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: message})
                        fs.unlinkSync(media)
                        fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
                    })
                }else {
                    data.reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break

case 'tiktok2':
 		//if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return data.reply(mess.Iv)
 		if (!q) return data.reply('Linknya?')
 		data.reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
			console.log(result)
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `Nih kak *${pushname}*`
		client.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:message,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break

case 'nyobax':		
try {
        const videoMeta = await ttkx.getVideoMeta(`${q}`, optionsx);
        console.log(videoMeta);
    } catch (error) {
        console.log(error);
    }	
    break	

case 'infoalll':
case 'tagalll':
if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
var nom = Client.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
text = `*From :@${nom.split("@s.whatsapp.net")[0]}*\n\n*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${fake1} 」* `+teks+`┗━ *「 ${fake1} 」* `
Client.sendText(data.from, text)
//mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}*\n\n*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${fake1} 」* `+teks+`┗━ *「 ${fake1} 」* `, members_id, false)
break	

case 'menuxx':
{
let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*XXXXXXXX*",
                  "description": "NYOBA | NYOBA",
                  "buttonText": "COK",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "owner",
                              "rowId": `${data.prefix}owner`
                           },
						   {
                              "title": "ping",
                              "rowId": `${data.prefix}ping`
                           },
						   {
                              "title": "Runtime",
                              "rowId": `${data.prefix}owner`
                           },
						   {
                              "title": "Botstat",
                              "rowId": `${data.prefix}botstat`
                           },
						   {
                              "title": "menu",
                              "rowId": `${data.prefix}menu`
                           },
						   {
                              "title": "hidetag",
                              "rowId": `${data.prefix}hidetag`
                           },
						   {
                              "title": "AFK",
                              "rowId": `${data.prefix}afs${data.command} sibuk`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
			break

case 'hack':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return data.reply (fde)
            const dipes = data.isQuotedSticker || data.isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message
            const tipes = await client.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await client.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		client.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case 'addrespon':{
          if(!data.isOwner) return data.reply(mess.ownerOnly)
          if (args.length < 1) return data.reply(`Penggunaan !addrespon key|respon\n\nContoh : !addrespon hai|juga`)
          let input1 = data.body
          if (!input1.includes('|')) return data.reply(`Penggunaan !addrespon key|respon\n\nContoh : !addrespon hai|jugaa`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return data.reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          data.reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if(!data.isOwner) return data.reply(mess.ownerOnly)
            if (args.length < 1) return data.reply(`Penggunaan !delrespon key\n\nContoh : !delrespon hai`)
          if (!checkCommands(data.body, commandsDB)) return data.reply(`Key tersebut tidak ada di database`)
          deleteCommands(data.body, commandsDB)
          data.reply(`Berhasil menghapus respon dengan key ${data.body}`)
          }
      break
case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          data.reply(txt)
          }
        break

case 'sticktag':
            if(!isAdmin) return data.reply('only be used by admin!')
            //if ((data.isQuotedSticker && !message.message.videoMessage || data.isQuotedSticker) && args.length == 0) {
            encmedia = data.isQuotedSticker ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: message
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
           // } else {
            //data.reply(`*Reply sticker yang sudah dikirim*`)
           // }
            break


















////////////ytdl////////////////////////
case 'ytmp3':
			if (args.length === 0) return data.reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
				try {
				data.reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
        if (Number(filesize) >= 90000) return Client.sendFileFromUrl(data.from, thumb, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Dikarenakan Ukuran File Melebihi Batas Yang Ditentukan, Harap Download Melalui Link Diatas_`, data.message )
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				//sendMediaURL(from, thumb, captions)
				//sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				Client.sendFileFromUrl(data.from, `${thumb}`, 'thumb.jpg', captions, data.message)
				Client.sendFileFromUrl(data.from, `${dl_link}`, `${title} - Download.mp3`, ``, data.message)
				})
				})
				} catch (err) {
				data.reply("Tidak Bisa Mendownload...")
				}
				break

case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
				try {
				data.reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 90000) return Client.sendFileFromUrl(data.from, thumb, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Dikarenakan Ukuran File Melebihi Batas Yang Ditentukan, Harap Download Melalui Link Diatas_`, data.message )
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				Client.sendFileFromUrl(data.from, `${thumb}`, 'thumb.jpg', captionsYtmp4, data.message)
				Client.sendFileFromUrl(data.from, `${dl_link}`, `${title} - Download.mp4`, `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
				})		
				})
				} catch (err) {
			    datareply("Tidak Bisa Mendownload...")
				}
				break

case "play":{
          if (!isUser) return data.reply(`Sepertinya Kamu Belum Terdaftar Di Database Bot.\nKetik "!daftar" Untuk Mendaftar.`)
        //if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          //return reply(mess.Iv);
		aramas = await yts(data.body);
    	aramat = aramas.all 
   		var mulaikah = aramat[0].url
        var ba = await yta(mulaikah)
        var bv = await ytv(mulaikah)
        var dv = bv.dl_link
        var da = ba.dl_link
        var b = bv
        		linkda = await axios.get(`https://tinyurl.com/api-create.php?url=${da}`)
		linkdv = await axios.get(`https://tinyurl.com/api-create.php?url=${dv}`)
        var linkda2 = linkda.data
        var linkdv2 = linkdv.data
        var tamnel = await getBuffer(bv.thumb);
        sendButImage(
          from,
          `*Judul*: ${b.title}\n*Source*: ${aramat[0].url}`,
          `===============\n\nPowered By AFS Team\n\n*Silahkan pilih salah satu format yg mau didownload*`,
          tamnel,
          [
            {
              buttonId: `${prefix}playsdl ${linkdv2}|${linkda2}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}playsdl ${linkdv2}|${linkda2}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
		}
        break;
/////////////end ytdl/////////////////
























///////////////////////////end///////////////////////////
        case "play2":{
          if (!isUser) return data.reply(`Sepertinya Kamu Belum Terdaftar Di Database Bot.\nKetik "!daftar" Untuk Mendaftar.`)
        //if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          //return reply(mess.Iv);
        var bv = await axios.get(`https://api.zeks.me/api/ytplaymp4/2?apikey=ardanfajars&q=${data.body}`)
        var ba = await axios.get(`https://api.zeks.me/api/ytplaymp3/2?apikey=ardanfajars&q=${data.body}`);
        var dv = bv.data.result.link
        var da = ba.data.result.link
        var b = bv.data.result;
        var tamnel = await getBuffer(bv.data.result.thumb);
        sendButImage(
          from,
          `*Judul*: ${b.title}\n*Durasi*: ${b.duration}\n*Source*: ${b.source}`,
          `===============\n\nPowered By AFS Team\n\n*Silahkan pilih salah satu format yg mau didownload*`,
          tamnel,
          [
            {
              buttonId: `${prefix}playsdl ${dv}|${da}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}playsdl ${dv}|${da}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
		}
        break;
        case "playsdl":{
          try{
        var gh = args.join("");
        console.log(gh)
        var dv = gh.split("|")[0];
        var da = gh.split("|")[1];
        var tipe = gh.split("|")[2];
        //var bv = await axios.get(`https://api.zeks.me/api/ytplaymp4/2?apikey=ardanfajars&q=${link}`);
		//var ba = await axios.get(`https://api.zeks.me/api/ytplaymp3/2?apikey=ardanfajars&q=${link}`);
        if (tipe == "audio") {
          Client.sendFileFromUrl(data.from, da, `dans.mp3`, ``, data.message);
        }
        if (tipe == "video") {
          Client.sendFileFromUrl(data.from, dv, `dans.mp4`, ``, data.message);
        } 
        } catch { 
                data.reply('Ups maaf ,File Kamu Terlalu besar atau saat ini server sedang error')
             }
        }
        break
		
                case "tiktokss":
        //if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          //return reply(mess.Iv);
        var bv = await axios.get(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}&apikey=df843260d3d390`
        );
        console.log(bv.data)
        var b = bv.data.result.author_metadata;
        console.log(bv.data.result.author_metadata)
        var tamnel = await getBuffer(
          bv.data.result.media_resources.image.contentUrl
        );
        var a = bv.data.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Komentar*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
        case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await axios.get(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}&apikey=df843260d3d390`
        );
        if (tipe == "audio") {
          //sendMediaURL(from, bv.data.result.media_resources.music.playUrl, "");
          Client.sendFileFromUrl(data.from, bv.data.result.media_resources.music.playUrl, `dans.mp4`, ``, data.message);
        }
        if (tipe == "video") {
          //sendMediaURL(from, bv.data.result.media_resources.video.videoUrl, "");
          Client.sendFileFromUrl(data.from, bv.data.result.media_resources.video.videoUrl, `dans.mp4`, ``, data.message);
        }
        break;
                    /*STICKER*/
                case 'sgif':
                case 'sticker':
                case 's':
                case 'stiker':
                case 'stickergif':
                case 'stikergif':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    const getbuff = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    else Client.sendImageAsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    break
                case 'tomp32':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
					data.reply(mess.wait)
                    if(type != 'videoMessage' && !isQuotedVideo) return data.reply('Wrong format!')
					const getbuffz = data.isQuotedVideo ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : data.message	
				    const dlfilez = await client.downloadMediaMessage(getbuffz)
                    convertMp3(dlfilez).then(data =>Client.sendFileFromUrl(from, data, 'p.mp3', '', message)).catch(er => Client.reply(from, 'Unexpected error!', message))
					break
                case 'stikerwm':
                case 'stickerwm':
                case 'swm':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|elios`)
                    data.reply(mess.wait)
                    const getbuffs = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfiles = await client.downloadMediaMessage(getbuffs)
                    text = data.body.split('|')
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfiles.toString('base64'), message, { crop: false, pack: `${text[0]}`, author: `${text[1]}` })
                    else Client.sendImageAsSticker(from, dlfiles.toString('base64'), message, { pack: `${text[0]}`, author: `${text[1]}` })
                    break
                case 'stikeremojii':
                case 'stickeremojii':
                case 'semojii':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ emoji ]*\nContoh : ${data.prefix}${data.command} 😃`)
                        Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/emoji-image?apikey=${configs.zeksKey}&emoji=${encodeURIComponent(data.body)}`, message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    } catch {
                        data.reply('error')
                    }
                    break
                case 'takestick':
                case 'takestik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(!data.isQuotedSticker) return data.reply('Reply sticker!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    const buff = await client.downloadMediaMessage(JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                    Client.sendWebpAsSticker(data.from, buff.toString('base64'), data.message, {
                        pack: `${text[0]}`,
                        author: `${text[1]}`
                    })
                    break
                case 'stikerfire':
                case 'stickerfire':
                case 'sfire':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                case 'stikernobg2':
                case 'stickernobg2':
                case 'snobg2':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                    /*TEXT MAKER*/
                case 'qrencode':
                case 'barcode':
                case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'gneon':
                case 'dropwater':
                case 'tfire':
                case 'sandw':
                case 'epep':
                case 'gplaybutton':
                case 'splaybutton':
                case 'text3dbox':
                case 'text3d':
                case 'logobp':
                case 'leavest':
                case 'thundertext':
                case 'tlight':
                case 'naruto':
                case 'crosslogo':
                case 'cslogo':
                case 'crismes':
                case 'flametext':
                case 'glowtext':
                case 'smoketext':
                case 'flowertext':
                case 'lithgtext':
                case 'nulis':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?text=${data.body}&apikey=${configs.zeksKey}`, 'gambar.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
                    break
                case 'wolflogo':
                case 'logoaveng':
                case 'phlogo':
                case 'marvellogo':
                case 'gtext':
                case 'pubglogo':
                case 'snowwrite':
                case 'watercolour':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks1|teks2 ]*\nContoh : ${data.prefix}${data.command} shiro|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}`, 'p.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
					break
                case 'tahta':
                case 'harta':
                case 'hartatahta':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, 'harta.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, message, {
                        crop: false,
                        pack: 'Pack',
                        author: 'AUTHOR'
                    })
                    break
                    /*SEARCHING*/
                case 'playstore':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playstore [ apk ]*\nContoh : ${data.prefix}playstore pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/sgplay?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 PLAYSTORE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Harga* : ${ttt[i].price}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi ${data.body} tidak ditemukan`)
                    }
                    break
                case 'wiki':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wiki [ query ]*\nContoh : ${data.prefix}wiki manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/wiki?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result.result}`
                        data.reply(te)
                    } catch {
                        data.reply(`Maaf wiki ${data.body} tidak ditemukan`)
                    }
                    break	
                    case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			data.reply(pingnya)
			})
			break  
                 case 'get':
            if(!data.body) return reply('linknya?')
            fetch(`${data.body}`).then(res => res.text())  
            .then(bu =>{
            data.reply(bu)
            })  
            break
             case 'runtime':
              case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            data.reply(teks)
             
            break
             case 'jadibottt':
    //if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(data.reply,client,from)
    break
    case 'stopjadibottt':
    //if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(data.reply)
    break
    case 'listbotttt':
    let tekssx = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekssx += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    data.reply(tekssx)
    break
//============================================
case 'jadibot':
    if(message.key.fromMe) return data.reply('Tidak bisa jadibot di dalam bot')
    jadibot(data.reply,client,from)
    break
    case 'stopjadibot':
    if(message.key.fromMe)return data.reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(data.reply)
    break
    case 'listbot':{
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    data.reply(tekss)
    }
    break


    case 'ig':
    case 'igdl':
    case 'instagram':
    
    try{
        if (!data.body) return fakegroup('Linknya?')
        data.reply("tunggu sebentar...")
	    hx.igdl(data.body)
	    .then(async(result) => {
        console.log(result)
        //const teksx = `Mendownload File Dari Instagram `
        //data.reply(teksx)
            for(let i of result.medias){
                
                    let link = await getBuffer(i.url)
                    console.log(i.url)
					Client.sendFileFromUrl(data.from, i.url, `dans.mp4`, `Type :${i.type}\n\n*${result.user.username} (${result.user.fullName})*`, data.message);
                    
               
                
            }
            });
             } catch {
                data.reply('Ups maaf server sedang error, Harap Ulangi Beberapa Saat Lagi...')
             }
	    break
      case 'fb':
            if (!data.body) return data.reply('Linknya?')
            data.reply('Tunggu Sebentar...')
            hx.fbdown(data.body)
            .then(G => {
            ten = `${G.HD}`
            //sendMediaURL(from,ten,)
			Client.sendFileFromUrl(data.from, ten, ``, `*Link video_normal* : ${G.Normal_video}`, data.message);
            })
            break 
                case 'coba':
                const captionss = 'coba'
                client.sendMessage(from, { degressLongitude: 97, degressLatitude: 04, jpegThumbnail: await getBuffer('https://2.bp.blogspot.com/-2VLyR-xxyIE/U-WHKA5ag4I/AAAAAAAAFPg/8eFtnB7k37o/s1600/berawan+com+hore+ora+duwe+duit.jpg') ,name: "fake location" , comment: "${captionss}" }, MessageType.location)
                break                   
                case 'kbbi':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}kbbi [ query ]*\nContoh : ${data.prefix}kbbi manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/kbbi?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result}\n*Source* : ${res.data.source}`
                        data.reply(te)

                    } catch {
                        data.reply(`Maaf kbbi ${data.body} tidak ditemukan`)
                   }
                    break
                case 'film':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}film [ film ]*\nContoh : ${data.prefix}film doraemon`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/film?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 FILM 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf film ${data.body} tidak ditemukan`)
                    }
                    break
                case 'happymod':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}happymod [ apk ]*\nContoh : ${data.prefix}happymod pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/happymod?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 HAPPYMOD 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi MOD ${data.body} tidak ditemukan`)
                    }
                    break
                case 'iguser':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}iguser [ username ]*\nContoh : ${data.prefix}iguser jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/iguser?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Username* : ${ttt[i].username}\n*Full name*: ${ttt[i].full_name}\n*Akun private* : ${ttt[i].private_user}\n*Verified*: ${ttt[i].verified_user}\n*Link*: https://instagram.com/${ttt[i].username}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].profile_pic, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytsearch':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytsearch [ query ]*\nContoh : ${data.prefix}ytsearch jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 YOUTUBE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].video.title}\n*Durasi*: ${ttt[i].video.duration}\n*Upload* : ${ttt[i].video.upload_date}\n*View*: ${ttt[i].video.views}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].video.url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].video.thumbnail_src, 'axis.jpg', teks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytplaylist':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytplaylist[ channel ]*\nContoh : ${data.prefix}ytplaylist jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytplaylist?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var tekss = `*「 YOUTUBE PLAYLIST 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            tekss += `*Nama* : ${ttt[i].title}\n*Jumlah video*: ${ttt[i].video_count}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', tekss, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytchannel':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytchannel [ channel ]*\nContoh : ${data.prefix}ytchannel jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytchannel?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var eks = `*「 YOUTUBE CHANNEL 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Deskripsi*: ${ttt[i].description}\n*Verified* : ${ttt[i].verified}\n*Jumlah video*: ${ttt[i].video_count}\n*Subcriber*: ${ttt[i].subscriber_count}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', eks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'shopee':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}shopee [ query ]*\nContoh : ${data.prefix}shopee sepatu`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/shopee?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Nama* : ${ttt[i].name}\n*Harga*: ${ttt[i].harga}\n*Terjual* : ${ttt[i].terjual}\n*Lokasi*: ${ttt[i].location}\n*Deskripsi*: ${ttt[i].desc}\n*Stok*: ${ttt[i].stock}\n*Informasi*: ${ttt[i].information}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].img_detail[0], 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf produk ${data.body} tidak ditemukan`)
                    }
                    break
                case 'igstalkk':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstalk [ query ]*\nContoh : ${data.prefix}igstalk elios_xyz`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/igstalk?apikey=${configs.zeksKey}&username=${data.body}`)
                        pe = res.data
                        tek = `*「 INSTAGRAM PROFILE 」*	
					
*Username:* @${pe.username}
*Nama:* ${pe.fullname}
*Pengikut:* ${pe.follower}
*Mengikuti*: ${pe.following}
*Deskripsi:* ${pe.bio}
*Link:* https://instagram.com/${pe.username}
`
                        Client.sendFileFromUrl(from, pe.profile_pic, 'p.jpg', tek, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'brainly2':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}brainly [ query ]*\nContoh : ${data.prefix}brainly siapa penemu lampu`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/brainly?apikey=${configs.zeksKey}&q=${data.body}&count=3`)
                        for(let i = 0; i < res.data.data.length; i++) {
                            await Client.reply(from, `Pertanyaan : ${res.data.data[i].question}\n\nJawaban : ${res.data.data[i].answer[0].text}`, message)
                        }
                    } catch {
                        data.reply(`Maaf jawaban tidak ditemukan`)
                    }
                    break
                case 'spotify':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}spotify [ lagu ]*\nContoh : ${data.prefix}spotify melukis senja`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/spotify?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SPOTIFY 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Judul* : ${ttt[i].title}\n*Artis*: ${ttt[i].artists}\n*Album* : ${ttt[i].album}\n*Link*: ${ttt[i].url}\n*Preview*: ${ttt[i].preview_mp3}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf lagu ${data.body} tidak ditemukan`)
                    }
                    break
                case 'gsmarena':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}gsmarena [ hp ]*\nContoh : ${data.prefix}gsmarena asus rog phone 3`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/gsmArena?apikey=${configs.zeksKey}&q=${data.body}`)
                        captions = `*HP* : ${res.data.data.title}\n\n${res.data.data.full_desc.string}\n${res.data.data.link}`
                        Client.sendFileFromUrl(from, res.data.data.thumb, 'p.jpg', captions, message)
                    } catch (e) {
                        data.reply(`Maaf hp ${data.body} tidak ditemukan`)
                    }
                    break
                case 'searchmusic':
                case 'searchmusik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedAudio) {
                        files = await client.downloadMediaMessage(JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                        bodyForm = new FormData()
                        bodyForm.append('audio', files, 'music.mp3')
                        axios(`${configs.apiUrl}/api/searchmusic?apikey=${configs.zeksKey}`, {
                                method: 'POST',
                                headers: {
                                    ...bodyForm.getHeaders()
                                },
                                data: bodyForm.getBuffer()
                            })
                            .then(({
                                data
                            }) => {
                                if(data.status) {
                                    Client.reply(from, `_[ *Search Music* ]_\n\n*Title*: ${data.data.title}\n*Artists*: ${data.data.artists}\n*Genre*: ${data.data.genre}\n*Album*: ${data.data.album}\n*Release date*: ${data.data.release_date}`, message)
                                } else Client.reply(from, data.message, message)
                            }).catch(() => Client.reply(from, 'Internal server error!, try again later', message))
                    } else Client.reply(from, 'Wrong format!', message)
                    break
                case 'wallpaper':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wallpaper [ query ]*\nContoh : ${data.prefix}wallpaper kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/unsplash?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    n = res.data.result
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image.img_hd, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'pinterest':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}pinterest [ query ]*\nContoh : ${data.prefix}pinterest kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/pinimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'googleimage':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}googleimage [ query ]*\nContoh : ${data.prefix}googleimage kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/gimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'jagokata':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}jagokata [ apk ]*\nContoh : ${data.prefix}jagokata bersyukurlah`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jagokata?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    ttt = res.data.result
                    var teks = `*「 JAGOKATA 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                    ttt.forEach(tt1 => teks += `*Kata* : ${tt1.kata}\n*Author* : ${tt1.author}\n*Info*: ${tt1.author_info}\n*Link*: ${tt1.author_url}\n\n` )
                    await data.reply(teks)
                    break
                    /*PRIMBON*/
                case 'jodoh':
                case 'ramalpasangan':
                case 'pasangan':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ kamu|dia ]*\nContoh : ${data.prefix}${data.command} shiro|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    res = await axios.get(`${configs.apiUrl}/api/primbonjodoh?apikey=${configs.zeksKey}&nama1=${text[0]}&nama2=${text[1]}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    p = res.data.result
                    tek = `*Nama kamu* : ${p.nama1}\n*Nama dia* : ${p.nama2}\n\n*Hasil positif* : ${p.positif}\n*Hasil negatif* : ${p.negatif}`
                    Client.sendFileFromUrl(from, p.thumb, 'p.jpg', tek, message)
                    break
                case 'artinama':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artinama [ nama ]*\nContoh : ${data.prefix}artinama elios`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artinama?apikey=${configs.zeksKey}&nama=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result)
                    break
                case 'artimimpi':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artimimpi[ mimpi ]*\nContoh : ${data.prefix}artimimpi ular`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artimimpi?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result.string)
                    break
                    /*OTHER*/
                case 'jsholat':
                case 'jadwalsholat':
                case 'jadwalshalat':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} jakarta`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwalsholat?apikey=${configs.zeksKey}&daerah=${data.body}`)
                    data.reply(res.data.data.string)
                    break
                case 'jadwaltv':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} antv`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwaltv?apikey=${configs.zeksKey}&channel=${data.body}`)
                    data.reply(res.data.result)
                    break
                case 'tts':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ code|teks ]*\nContoh : ${data.prefix}${data.command} id|hello world`)
                    p = data.body
                    text = p.split('|')
			        Client.sendFileFromUrl(from, `${configs.apiUrl}/api/tts?apikey=${configs.zeksKey}&code=${text[0]}&text=${text[1]}`, 'p.mp3', '', message, {ptt: true}).catch(er => data.reply(listCode))
					break
                    /*GROUP*/
                case 'hidetag':
                case 'everyone':
                    if(!isAdmin) return data.reply('only be used by admin!')
                    var mention = []
                    data.groupMetadata.participants.forEach((member, i) => {
                        mention.push(member.jid)
                    })
                    data.reply(`${data.body}`, {
                        contextInfo: {
                            "mentionedJid": mention
                        }
                    })
                    break
                case 'delete':
					case 'del':
					case 'd':
				
					client.deleteMessage(from, { id: message.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					
					break
                case 'linkgroup':
                    if(!data.isGroup) return data.reply(mess.group)
                    if(!data.botIsAdmin) return data.reply(mess.botAdmin)
                    linkgc = await client.groupInviteCode(data.from)
                    data.reply(`https://chat.whatsapp.com/${linkgc}`)
                    break
                    /*DLL*/
                case 'stickermenu':
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/menus.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menampilkan menu!', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/sticks.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuat sticker dengan cara reply image/video dengan sticker ini', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/open.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuka group', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/close.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menutup group', {
                        quoted: resData
                    }))
                    break
                case 'tes':
                    data.reply('auto upt')
                    break
                case 'return':
		        case 'eval':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
                    try {
                        data.reply(JSON.stringify(eval(body), null, 3))
                    } catch (ers) {
                        data.reply(ers.toString())
                    }
                    break
		        case 'term':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
					exec(data.body, (err, stdout) => {	
				    if (err) return data.reply(err.toString())
					if (stdout) return data.reply(stdout)
					})
				    break
                case 'getquoted':
                    data.reply(JSON.stringify(message.message.extendedTextMessage.contextInfo, null, 3))
                    break
                case 'toimg':
                case 'togif':
                case 'tomedia':
                case 'toimage':
                    if(!data.isQuotedSticker) return data.reply('reply sticker!')
                    const mtdt = await data.downloadMediaQuotedMessage()
                    if(message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) {
                        axios(`https://serv-api.zeks.xyz/sticker/togif`, { method: "post", headers: { "content-type": 'application/json' }, data: {base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.gif', 'nih', message)
			})
                    } else {
                        axios(`https://serv-api.zeks.xyz/sticker/png`, { method: "post", headers: { "content-type": 'application/json' }, data: { base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.png', 'nih', message)
                        })
                    }
                    break
                   
            }
            
        })
        //Handler Sticker Command
        Client.handlerStick.on("*", async (datas) => {
            const {
                idStick,
                message,
                from,
                sender,
                isOwner,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = datas
            //console.log(`ID STICKER: ${idStick}`) //digunakan untuk mendapatkan id sticker
            /*	Cara bikin stickercmd 
                -ambil id sticker lewat console.log
            	-id sticker nya dibuat case 
                -case 'idnya': contoh ada dibawah
            	*/
            switch(idStick) {
                case '2.453746655066493e+123':
                    datas.reply(menu(configs.prefix == 'multi' ? '/' : configs.prefix))
                    break
                case '1.415045466145215e+123':
                    if(datas.isQuotedImage || datas.isQuotedVideo) {
                        const getBuffs = await client.downloadMediaMessage(JSON.parse(JSON.stringify(datas.message.message.stickerMessage.contextInfo).replace('quotedMessage', 'message')))
					if(isQuotedVideo) Client.sendMp4AsSticker(from, getBuffs.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                   	else Client.sendImageAsSticker(from, getBuffs.toString('base64'), message, {  pack: `${configs.pack}`, author: `${configs.author}` })    
                    }
                    break
			    case '1.4129505721465047e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    datas.reply(`Group telah dibuka oleh admin @${datas.sender.split('@')[0]}`)
				    break
			    case '1.3049292658533466e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    datas.reply(`Group telah ditutup oleh admin @${datas.sender.split('@')[0]}`)
				    break



            
            
            }
        })
        
          
     } catch (e) {
        console.log(e)
    }
}


function isLimit(sender, count) {
    const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
    if(dataUser[sender].premium) return false
    if(dataUser[sender].limit >= configs.maxLimit) return true
    dataUser[sender].limit += count || 1
    fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
    return false
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
