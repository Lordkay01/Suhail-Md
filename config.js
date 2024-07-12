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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_41_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmhoT2lEcHNJU1FxZktTQmVCc3hxVG1lYWVYWnV3L1hlV2g3ak1VV20wOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSVdxTmNodXlRdzZjUGpOakw1N2lmZ1wiLFxuICBcInBob25lSWRcIjogXCI0MTQ4OGM5Ny01MmM4LTQyNjQtOGE0My01ZTUwNGI5ZmE1OGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAxMixcbiAgICAgIDE0MyxcbiAgICAgIDI0OCxcbiAgICAgIDE4OCxcbiAgICAgIDI4LFxuICAgICAgMTkwLFxuICAgICAgMjA0LFxuICAgICAgNzgsXG4gICAgICAxMTgsXG4gICAgICA2MyxcbiAgICAgIDE5MSxcbiAgICAgIDI1MCxcbiAgICAgIDI0NyxcbiAgICAgIDI0OSxcbiAgICAgIDE2NCxcbiAgICAgIDEzOSxcbiAgICAgIDI0MCxcbiAgICAgIDE2NCxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAyLFxuICAgICAgNDksXG4gICAgICAyNDgsXG4gICAgICAyMTMsXG4gICAgICAyMjUsXG4gICAgICA3OCxcbiAgICAgIDIwOSxcbiAgICAgIDE0NSxcbiAgICAgIDM0LFxuICAgICAgMjM1LFxuICAgICAgMTYzLFxuICAgICAgMjQ2LFxuICAgICAgODgsXG4gICAgICAxNzMsXG4gICAgICA2MixcbiAgICAgIDEwMSxcbiAgICAgIDE3NixcbiAgICAgIDEzMSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODZBNDg4RVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDU1MDUwOTY6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTczMDYyMDk2MDg2Nzo4N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMalo0ckVGRVBIRnhyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpjT0ZZQk04NHQyUng3c0tQRnZjSHQ4ZlNSUXZBc0ZpMWw1OXdvTDB1bFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiajRmamV4dThYTnlZOXk0c0FtUmQraHQ3N3pGMnhJdkgvMkErRFpCaSszRUtmUXMxdDFISlFidm9yeDBrajgrTTh0Z0JDdENXWDF0MlpSUnFtZzRNQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicm05UTRjalIwQlpVTG4vYmQ1ck8ydlNMNWhHQmRYOHRGdENka1A4Ny9NQ0xlVTdRUXZMUkJtYThEY1VSTmFlRUZsa3lsK1prVitod0JMWmM1YlRxaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NTUwNTA5Njo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODIwNDcwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
