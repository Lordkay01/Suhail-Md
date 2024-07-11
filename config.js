const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_39_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcyLFxuICAgICAgICA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9LSEhOTlcwN2RIMThyb284MjNNYnZ2NDFuV2VtRDNaRlplRFFjYlJyWlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl85Y1o5dWNmUTdLR0dPaUkxSjhkUHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWU0OTY4MzktNzVkZC00NGZiLWEzYzItZGI4Njk4N2I2ZmY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTQ5LFxuICAgICAgMjQ1LFxuICAgICAgMjMyLFxuICAgICAgMjEsXG4gICAgICAxOTQsXG4gICAgICAxMTQsXG4gICAgICAxODcsXG4gICAgICAxNzksXG4gICAgICAxMjgsXG4gICAgICAyMTcsXG4gICAgICAxMjQsXG4gICAgICAxODQsXG4gICAgICAyNixcbiAgICAgIDIwOSxcbiAgICAgIDc3LFxuICAgICAgMjAxLFxuICAgICAgMTExLFxuICAgICAgODEsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDY4LFxuICAgICAgNDQsXG4gICAgICAyNDMsXG4gICAgICA3MyxcbiAgICAgIDMzLFxuICAgICAgMTY0LFxuICAgICAgMTMxLFxuICAgICAgMjUsXG4gICAgICAxNjgsXG4gICAgICA4NCxcbiAgICAgIDExMSxcbiAgICAgIDMwLFxuICAgICAgMTcyLFxuICAgICAgMjM1LFxuICAgICAgMTQ0LFxuICAgICAgMTE0LFxuICAgICAgMTY0LFxuICAgICAgOTQsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUpIN0tUWFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDU1MDUwOTY6ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTczMDYyMDk2MDg2Nzo4MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUEc4cUlGRU9ucHdMUUdHQlFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRnNjloQXlNWXFZTlNwZVMrU0xESjhUNXE1QjVYcVM3Z0xzRnpLc1RrMDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejE3b2l5NG9sWUdOUktBUUxvbURQVlRpbVRSWXBHd1N1eW9IaElxSGtUY3YrVlhobUFhdk9EbFNEQ1B6cU1HWGlwUmlPSTBGd1JCaGRMdzhzNVg4RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ0JMaEtmZkJ3NHREVG9QZnNvbGxNdGdCSTRsRmlPRXpCbzY0N2llenJIV1BMaUFMUGtycTNxcG0wLzlNd1IwekRVb1JmL2VZbklzQTNSNHRZZ0VUQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NTUwNTA5Njo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcyNjc2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
