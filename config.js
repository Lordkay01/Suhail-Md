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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_21_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDkyLFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUjNhYmpvVTYyR29xSUZTelhnSGR2Ykg3b1U2a09lL2FXT1Y3Yk1Scktlcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVNCSzYwTjhTay1zel9DczA5S0xDd1wiLFxuICBcInBob25lSWRcIjogXCI5OWNkZDI0MC1mMTY5LTQ4ZjctOGRhMC1kNjg1YWI0MGE2ZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAxNzMsXG4gICAgICAxMSxcbiAgICAgIDQwLFxuICAgICAgNyxcbiAgICAgIDM3LFxuICAgICAgMTg5LFxuICAgICAgMTc1LFxuICAgICAgMTMyLFxuICAgICAgMjA1LFxuICAgICAgMTA1LFxuICAgICAgMjE4LFxuICAgICAgOTYsXG4gICAgICAxNzIsXG4gICAgICAyNDAsXG4gICAgICAyMTQsXG4gICAgICAxMTQsXG4gICAgICAxNzYsXG4gICAgICA3MyxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDE1MCxcbiAgICAgIDU2LFxuICAgICAgNDksXG4gICAgICAxMjAsXG4gICAgICA5MyxcbiAgICAgIDE0MixcbiAgICAgIDI0MyxcbiAgICAgIDIwMSxcbiAgICAgIDE5OCxcbiAgICAgIDEyNCxcbiAgICAgIDYsXG4gICAgICAxOSxcbiAgICAgIDIxNCxcbiAgICAgIDExMixcbiAgICAgIDE1NSxcbiAgICAgIDI0MixcbiAgICAgIDUyLFxuICAgICAgOTEsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFo1OE1ONTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDU1MDUwOTY6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTczMDYyMDk2MDg2Nzo4MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZlo0ckVGRUtyOXdMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpjT0ZZQk04NHQyUng3c0tQRnZjSHQ4ZlNSUXZBc0ZpMWw1OXdvTDB1bFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRXJRekVBZUhRZWIxSklTcld4VnEzb2VncjAwclFZNTg3VjNvR3NHcG1NdC83MXlRUlZBbllqWEwvdTNmY2FDVHZpdkZub2lKU1hOcE5QbXZwck9EREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVnFIV2toK2t0MHJPT3hhUHNYRnlJUzNSVWNRSnRneFptS3FJVUpJY2EwcWFLdTlJbmJZVnAzK3BYeE5NSVNTSDVXcHhNeTB6eWk3U2xQU1lhWlVLQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NTUwNTA5Njo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzI5MjYyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
