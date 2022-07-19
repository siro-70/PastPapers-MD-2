require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = ElisaBotMd = async (ElisaBotMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ElisaBotMd.decodeJid(ElisaBotMd.user.id)
    	const nimanumber = "94719574492"
        const isCreator = [botNumber,nimanumber ,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isNima = m.sender == "94715166712@s.whatsapp.net" ? true : false
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await ElisaBotMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    	
	    
        //member\\
        	
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `ᴏᴡɴᴇʀ ʙᴏᴛ ʙᴏᴛ ɢʀᴏᴜᴘ 😉\n☃⛓️Ոɿɱค ૦ԲԲɿ८ɿคՆ ᶜᴿᴱᵂ 🕯️❖`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://chat.whatsapp.com/Fs5ZpTLA3u64JN5a6K3a44"}}}, { quoted: m})
                          }
                          
                          const replay = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `ʙᴏᴛ ᴏᴡɴᴇʀ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇᴛ sᴜʙsᴄʀɪʙᴇ ᴘʟᴇᴀsᴇ !♥️ `, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q"}}}, { quoted: m})
                          }
                          const sendlogo = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `${global.ownernma}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://wa.me/94715166712?text=contact+get+from+Queen+elisa+logomaker+💃"}}}, { quoted: m})
                          }
	

        
        //Public & Self\\
        if (!ElisaBotMd.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            ElisaBotMd.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await ElisaBotMd.setStatus(`${ElisaBotMd.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await ElisaBotMd.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐦`)
        ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
       

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
					ElisaBotMd.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./Media/vn/${anju}.mp3`)
					ElisaBotMd.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/image/${anjh}.jpg`)
					ElisaBotMd.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/vid/${anjh}.mp4`)
					ElisaBotMd.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }
				  
				  if (!m.isGroup) {
				  let a = 'a'
				  if (isCreator) throw `*💀 ɪɴʙᴏx ʙʟᴏᴄᴋ ᴀᴄᴛɪᴠᴀᴛᴇ ʙʏ ᴏᴡɴᴇʀ 💀*`
				  if (budy === a) 
				  throw  '*💀 inbox not alowd*'
				  
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ElisaBotMd.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ElisaBotMd.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ElisaBotMd.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ElisaBotMd.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ElisaBotMd.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ElisaBotMd.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    ElisaBotMd.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ElisaBotMd.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ElisaBotMd.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) ElisaBotMd.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ElisaBotMd.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ElisaBotMd.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) ElisaBotMd.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) ElisaBotMd.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ElisaBotMd.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
        
        case 'MR NIMA' : {
        reply (' *QUEEN ELISA BOT DEVOLOPER* ')
        }
        break
        
        
case 'start':{
    const menu=`Past-Papers-OL-bot🎓 
    By Pasindu Sandaruwan
    
    Thank you for using This bot🎓
    This is the one and Only Past papers Whatsapp bot🎓
    
    මෙම බොට්ව භාවිතා කිරීම පිළිබදව ස්තූතිය..!
    මෙය වට්සැප් හරහා ධාවනය වන එකම පාස්ට්පේපර් බොට් වේ..!
    
    Do you want to use this bot?
    send me *'menu'* command..!💓
    
    ඔබට පසුගිය සාමාන්‍යපෙල විභාග ප්‍රශ්නපත්‍ර ලබාගැනීමට අවශ්‍ය නම්
    *'menu'* යන විධානය භාවිත කරන්න..! 💓
    
    About Us...!✊
    අප ගැන...!
    *'about_us'*
    
    My youtube Channel💞
    යූටියුබ් නාලිකාව...!
    *'youtube'*
    
    Group Links...!🎲
    සමූහ වල Links..!
    *'g_links'*
    
    Credits..!♣
    *'credits'*
    
    
    Owner Pasindu Sandaruwan🎁
    wa.me/94716338723
    @pastpapersolbot 👈On Telegram`


    ElisaBotMd.sendText(m.chat,menu)

 }

 break


 
case 'menu':{
    const menu=`ඔබට අවශ්‍ය විශයය තෝරන්න..!😇

    🔴බුද්ධ_ධර්මය *buddhism*
    🔴සිංහල *sinhala*
    🔴English *english*
    🔴ගණිතය *maths*
    🔴විද්‍යාව *science*
    🔴ඉතිහාසය *history*
    🔴පළමු_කාණ්ඩය *bas1*
    🔴දෙවන_කාණ්ඩය *bas2*
    🔴තෙවන_කාණ්ඩය *bas3*
    
    
    Past-Papers-OL-bot🎓 By Pasindu Sandaruwan
    t.me/pastpapersolbot 👈On Telegram`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 
 
 
 case 'about_us':{
    const menu=`අප ගැන...!😁

    අපි ගැන හැදින්වීමක් කලොත් 
    මේ Botව හදන මම පසිදු සදරුවන්.😉
    
    මම 2K21 වල O/L කලා..😁. මගේ සහෝදර සහෝදරියන්ට 
    O/L Past-Papers ටික ගොඩක් වැදගත් සාමාන්‍යපෙළ විභාගෙට
    ඒ නිසා ඔයාලටත් හෙල්ප් එකක් දෙන්න තමා මේ Bot හැදුවේ..!☺️
    (සෙට් එකම ගොඩයන්න ඕනේ😎 තනියෙන් ගොඩගියත් වැඩක් නෑ..😍)
    
    මම තාක්ෂණික පැතිකඩ ගැන YouTube Channel එකකුත් කරනවා😁
    youtube.com/slrealtech
    කැමතිනම් ඒකත් Subscribe කරගෙන යන්න🥰)
    
    
    ඉතින් තව අපේ Admin Crew එකක් ඉන්නවා..!👊
    
    ⭕️Pasindu Sandaruwan(මම🙃)
    
    ⭕️Nimesh Madushanka [Dark_maker] (හැමදේම කියල දීපු එකා😎)
    
    ⭕️Thasini Himanga (Adminතුමී😎 Shortnotes_lk)
    
    ⭕️Ashen Fdo (Admin OL_edu)
    
    ⭕️Mahesh Kavinda (අපේ ඉංග්‍රීසි සර්🙏😎)
    
    ⭕️Vidusha Hirushan (ඕනිම දේකට උදව්වට ඉන්න එකෙක්😎)
    
    ⭕️Nisinu Bhanula(Creative Ideas මොලේට දාන එකාහ්🤩)
    
    ⭕️Nirasha Prabodani (Bot Deploy කරන්න උදව් කරපු එකී😎)
    
    ⭕️Hirusha Dilshan(Motivation එක දීපු එකා😎)
    
    ⭕️Lahiru Madushan (Admin OL_Edu)
    
    ⭕️Sahani Sooriyarachchi(පේපර්ස් හොයන්න)
    
    
    මෙයාලගෙ උදව්වෙන් තමා මේ වැඩ ඔක්කොම කරගෙන යන්නේ..!🥳
    Whatsapp වගේම Telegram මේ බොට් ක්‍රියාත්මක වෙනවා..!
    
    ඉතින් යාලුවනේ තව යාලුවෙක්ට උදව්වක් විදියට මේ Botව share කරන්න❤️.
    
    (මේ botව පාවිච්චි කලා share කලා කියලා අපිට සල්ලි ලැබෙන්නෙ නෑ.🥲
     සහෝදර සහෝදරියන්ට උදව්වක් විදියට තමා මේ වැඩේ කලේ😊)
    
    O/L සුපිරි ගේමක් ගහන්න ඒනම්. සුභ දවසක්!✌️💪`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 case 'youtube':{
    const menu=`youtube.com/slrealtech
    👆මේ තියෙන්නෙ අපේ YouTube Channel එක... මේකෙන් ඔයාලට ගොඩක්
    තාක්ෂණික තොරතුරු දැනගන්න පුලුවන්.
    Subscribe කරන්න  ❤️
    `
    ElisaBotMd.sendText(m.chat,menu)

 }

 break


 case 'g_links':{
    const menu=`Road to Dream
    🎓Telegram https://t.me/Road_to_Dream_OL
    
    Road to Dream 2K22🎓
    🎓Group 1 https://chat.whatsapp.com/BAiJUWShLauKPrTcTh67E7
    🎓Group 2 https://chat.whatsapp.com/CVlfofJoNVj5a5fNrbSSoC
    
    
    Shortnotes.lk 🌸🤗
    https://chat.whatsapp.com/EetKz1F8sv69wNZfmxHMvv
    
    
    2022 O/L EDUCATION
    📚 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍  𝐆𝐑𝐎𝐔𝐏  🖊📚 
    
    https://chat.whatsapp.com/FFLe8EyUoCNDyshTjkEtOI
    
    https://chat.whatsapp.com/HnQ9esyEp3G83vYBi55daG
    
    https://chat.whatsapp.com/KcLli2il5rDHdysvGqL8Jz
    
    https://chat.whatsapp.com/Jer5E8ufjRTDstwK1y954W
    
    https://chat.whatsapp.com/BTVXzA790WVCLhMKiU68ov
    
    https://chat.whatsapp.com/Gdo23mtDjMuG75Z3RWm6cT
    
    https://chat.whatsapp.com/D8ExK9jL30eC31ZAeUk6CH
    
    https://chat.whatsapp.com/LpQEHiMJs3H5QHAMYrYODo`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 case 'credits':{
    const menu=`⭕️මේ පේපර්ස් වලින් ගොඩක් ටිකක් ගත්තෙ Internet එකෙන්
    ඒත් හැම පේපරයක්ම එක වෙබ්සයිට් එකක නෑ.🤯
    එක එක ඒවා තියෙන්නෙ එක එක වෙබ් සයිට් වල.😑
    සමහර පේපර්ස් හොයාගන්නත් නැතිවුනා...☹️
    ඒව ටික හොයාගන්න  කලින් අවුරුදු වල අයියල අක්කල ටිකක් මේ වැඩේට ගොඩක් උදව් උනා.🤩🥰
    ඒ පේපර් Cam scanner එකකින් ස්කෑන් කරලා සමහර පේපර් හැදුවේ.☺️
    ඉතින් දැන් ඔයාට මේ Botව පාවිච්චි කරලා සියලුම OL පේපර්ස් ගැනීමේ හැකියාව ලබාදීලා තියනවා..😍
    ඉතින් යාලුවනේ ඔයාලා ඔයාගෙ යාලුවො ඔක්කොටම මේක Share කරලා එයාලට හෙල්ප් එකක් දෙන්න.👽
    මෙන්න මේ Website වලින් තමා ගොඩක් පේපර්ස් ගත්තේ..🙃(වෙන සයිට්වලින් ගත්තු ඒවත් ඇති😬)
    
    
    pastpapers.wiki
    pastpapers.lk
    olevelapi.com
    paperslanka.com
    agaram.lk
    e-thaksalawa.moe.gov.lk
    tamil.agaram.lk
    teachmore.lk
    
    
    මේටික ඔක්කොම ඩවුන්ලෝඩ් කරලා එකතැනකට අරගෙන Bot කෙනෙක් Program කරන්න ගොඩක් මහන්සි උනා.🤯🥵
    ඒ මහන්සියෙන් ඔයාලා ලොකු ප්‍රයෝජනයක් ගනීවි කියලා හිතනවා...!😊🥰
    එහෙනම් කොල්ලනේ කෙල්ලනේ  OL සුපිරි ගේමක් ගහපල්ලා🤟💪
    මම පසිදු සදරුවන්.🤗
    

    *අන්තිමටත් කියන්න තියෙන්නෙ හැමෝටම Share කරලා එයාලටත් Help එකක් දෙන්න.!
(තනියෙන් ගොඩ ගිහින් වැඩක් නෑ. සෙට් එකත් එක්ක ගොඩ යමු)💪*

SL Real Tech (http://youtube.com/slrealtech) ඉදිරිපත් කිරීමක්!
    
    `
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 //buddhism


 case 'buddhism':{
   const menu=`වර්ෂය තෝරන්න..!😎

   2015 *bud_2015*
   2016 *bud_2016*
   2017 *bud_2017*
   2018 *bud_2018*
   2019 *bud_2019*
   2020 *bud_2020*
   
   Past-Papers-OL-bot🎓 By Pasindu Sandaruwan
   @pastpapersolbot 👈On Telegram`
   ElisaBotMd.sendText(m.chat,menu)

}

break

//

case 'bud_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2.pdf'}, { quoted: m })

}
break

case 'bud_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2016-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2016-OL-BUDDHISM-PART-II.pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_part1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'bud_Part2.pdf'}, { quoted: m })

}
break



case 'bud_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2017-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2017.pdf'}, { quoted: m })

}
break




case 'bud_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2018-OL-BUDDHISM.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2018.pdf'}, { quoted: m })

}
break




case 'bud_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2019-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2019.pdf'}, { quoted: m })

}
break




case 'bud_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2020-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2020.pdf'}, { quoted: m })

}
break



//



case 'eng_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2015-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2015.pdf'}, { quoted: m })

}
break
   

case 'eng_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2016-OL-English(ii).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2016-OL-English-(i).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2016_2.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2016_1.pdf'}, { quoted: m })

}
break



case 'eng_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2017-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2017.pdf'}, { quoted: m })

}
break


case 'eng_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2018-OL-English(i).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2018-OL-English(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2018_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2018_2.pdf'}, { quoted: m })

}
break





case 'eng_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2019-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2019.pdf'}, { quoted: m })

}
break





case 'eng_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2020-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2020.pdf'}, { quoted: m })

}
break
   



//


case 'sin_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2015-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2015.pdf'}, { quoted: m })

}
break
   
   
case 'sin_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2016-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2016.pdf'}, { quoted: m })

}
break



case 'sin_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2017-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2017.pdf'}, { quoted: m })

}
break



case 'sin_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2018-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2018.pdf'}, { quoted: m })

}
break


case 'sin_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2019-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2019.pdf'}, { quoted: m })

}
break


case 'sin_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2020-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2020.pdf'}, { quoted: m })

}
break


//

case 'his_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2015-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2015.pdf'}, { quoted: m })

}
break



case 'his_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2016-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2016.pdf'}, { quoted: m })

}
break


case 'his_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2017-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2017-OL-History(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2017_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2017_2.pdf'}, { quoted: m })

}
break


case 'his_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2018-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2018.pdf'}, { quoted: m })

}
break



case 'his_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2019-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2019-OL-History(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2019_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2019_2.pdf'}, { quoted: m })

}
break



case 'his_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2020-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2020.pdf'}, { quoted: m })

}
                              default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ElisaBotMd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
