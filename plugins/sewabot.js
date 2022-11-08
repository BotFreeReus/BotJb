import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Pemilik Bot`, 
                     "description": "Nomor Pemilik Bot (owner)", 
                     "rowId": `${usedPrefix}creator` 
                   }, { 
                     "title": "Syarat Ketentuan dan Peraturan", 
                     "description": "Harap membaca Peraturan demi kenyamanan kita bersama", 
                     "rowId": `${usedPrefix}donasi` 
                   }, { 
                     "title": `Group Official ${namebot} Bot`, 
                     "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan", 
                     "rowId": `${usedPrefix}gcbot` 
                   }], 
                   "title": "Informasi Bot" 
                 }, { 
                   "rows": [{ 
                     "title": `Free Trial 1 Hari`, 
                     "description": "Masukkan bot secara gratis selama 1 Hari", 
                     "rowId": `${usedPrefix}join` 
                     }], 
                   "title": "────────「 Trial 」" 
                 }, { 
                     "rows": [{ 
                       "title": `Permanent! Rp10.000`, 
                       "description": "Masukkan bot ke dalam group tanpa batasann waktu!", 
                       "rowId": ".masuk"
                   }], 
                     "title": "───────「 Permanent 」" 
                 } 
               ]
         const listMessage = {
      text: `「 ReusBotz 」

╭━━━━「 SEWA 」
┊⫹⫺  1k/grup ( 3 Hari)
┊⫹⫺  3k/grup ( 1 Minggu )
┊⫹⫺  5k/grup ( 2 Minggu )
┊⫹⫺  7k/grup ( 1 Bulan )
┊⫹⫺  10k/grup ( Permanen )                                                
╰═┅═━––––––๑

╭━━━━「 PREMIUM 」
┊⫹⫺  5K (15 HARI)
┊⫹⫺  7k ( 20 HARI )
┊⫹⫺  10k ( 25 HARI )   
┊⫹⫺   20k ( 2 BULAN)   
┊⫹⫺   30K ( PERMANEN )                             
╰═┅═━––––––๑

╭━━━━「 Fungsi Premium 」
┊⫺ Bisa Spam Virtex wa Ripper
┊⫺ Bisa Bug Wa Ripper
┊⫺ Buy Premium Di Atas 10k+ Bisa Open Sewa Bot Dengan Batas Waktu Yg Kalian Buy                                                           
╰═┅═━––––––๑

╭━━━━「 Keunggulan 」
┊⫹⫺ Fast Respon
┊⫹⫺ Fitur Welcome On/ Off
┊⫹⫺ Antilink On/Off
┊⫹⫺ Timer Sewa Grup                                               
┊⫹⫺ Murah
╰═┅═━––––––๑

╭━━━━「 Sistem 」
┊⫺ 1 Order
┊⫺ 2 BOT Masuk Grup
┊⫺ 3 Tf                 
┊⫺ 4 Done                                               
╰═┅═━––––––๑

⫹⫺ PAYMENT:
✅ QRIS All Payment
✅ Dana
✅ Gopay

PERMANEN BERARTI BERLAKU SAMPAI NOMOR BOT TERBLOKIR/GW PENSI`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}