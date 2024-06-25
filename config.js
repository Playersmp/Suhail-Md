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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18768375254";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_57_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiME5wS1J5OWdsV2gyWEJnVXdtK3lKVDBBblBkcWgwc0VvSnJVZlNKQngwTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVFJvcUlGTk5ScC1jTWVidDI1ZWoxQVwiLFxuICBcInBob25lSWRcIjogXCI3YTgxYjAzZC0yOWEwLTQyZjQtYmFlZi0yZDYzYTQ3ZTgwMDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTgsXG4gICAgICA1NCxcbiAgICAgIDE0NCxcbiAgICAgIDEzNCxcbiAgICAgIDQ3LFxuICAgICAgMjUzLFxuICAgICAgMjIzLFxuICAgICAgMTE4LFxuICAgICAgODQsXG4gICAgICAxNjEsXG4gICAgICA3OCxcbiAgICAgIDEyNixcbiAgICAgIDkyLFxuICAgICAgMTYzLFxuICAgICAgMjAxLFxuICAgICAgMzMsXG4gICAgICAxNDcsXG4gICAgICAxNTAsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTQ5LFxuICAgICAgMjM2LFxuICAgICAgMTA1LFxuICAgICAgNTUsXG4gICAgICA4OSxcbiAgICAgIDY4LFxuICAgICAgMTgwLFxuICAgICAgMjQyLFxuICAgICAgODEsXG4gICAgICAxMTQsXG4gICAgICAxNDYsXG4gICAgICA0NCxcbiAgICAgIDEwNCxcbiAgICAgIDIwNCxcbiAgICAgIDIwMyxcbiAgICAgIDEzOSxcbiAgICAgIDE0MixcbiAgICAgIDQ2LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFQUFNYM0JKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODc2ODM3NTI1NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjEyNzUzMjg2Nzc0NDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05hU3ZMb0dFTm42N0xNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT3R1ZEtiSm1PT1VDZ0l0MG4vUjViYWUyZ2NPcFRsSDBISDZXSUhmZXcyUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWaTFXUUFMbzhYU0JyMGVlcGVCdlJVS0tWWGhuQlcxeW1BNmFWUWV4MGxtSHBnb0N1R2IvSmxxTi8rVVZkOGFPeDY4bW9yS1ZoSDRBbC94bEdNbE9DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxaWF0aVpyRHdiNVMvWTZYMUpzWDhlYkFjL3paNmZXb2N3V2FSMDl0NmV2TlkyMm9jZ1FnNjFTeW9FUWxOUlZxRzNEclFYaUJCZzZZNTJmVWNkeFJpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODc2ODM3NTI1NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzUyNjY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDVzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFENXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0OEhpZEc0UW9SY1psazFDelQ0cURtdjJFRzhwOEp3T0pnZ290a1RQbG9JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzMyMzI5ODIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTM1MTA4NTYzOVwifSIKfQ=="  // PUT your SESSION_ID 


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
