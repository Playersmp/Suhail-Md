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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_55_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICA1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJHRy8xUmE2bUlxdVJBNnlUVzIwMWQ2NjgxZ0NraCt4SlB3cWg2R1VMMkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlKcFgwUXozU25taHFtbHVRd2t1RVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2NjM2IxOTktOWQ4MS00Y2I5LWIxYzItZGVlNTliZTQ1MmM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDExOSxcbiAgICAgIDgyLFxuICAgICAgMTc5LFxuICAgICAgMTMyLFxuICAgICAgMTU1LFxuICAgICAgNzksXG4gICAgICAxOTUsXG4gICAgICAyNTQsXG4gICAgICAyMDcsXG4gICAgICA3NyxcbiAgICAgIDEwOSxcbiAgICAgIDE5MSxcbiAgICAgIDIzMSxcbiAgICAgIDEzMSxcbiAgICAgIDE5NixcbiAgICAgIDE2OSxcbiAgICAgIDE4LFxuICAgICAgMjQwLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAxODEsXG4gICAgICA5MixcbiAgICAgIDcyLFxuICAgICAgMjUsXG4gICAgICAxNSxcbiAgICAgIDg3LFxuICAgICAgODQsXG4gICAgICA4NSxcbiAgICAgIDE4NCxcbiAgICAgIDE2NyxcbiAgICAgIDE4OCxcbiAgICAgIDI4LFxuICAgICAgNTQsXG4gICAgICA5MyxcbiAgICAgIDIwNixcbiAgICAgIDMsXG4gICAgICAyMDAsXG4gICAgICAxNTUsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0OTkxMlFCS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTg3NjgzNzUyNTQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODYxMjc1MzI4Njc3NDQ6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwko2c4pynxLvDlsWFxLvFuCDFucOExLbinKfwko2cXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm1TdkxvR0VNYTQ4ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPdHVkS2JKbU9PVUNnSXQwbi9SNWJhZTJnY09wVGxIMEhINldJSGZldzJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInUyS282ZTBCdzNOS2hMVnd1dE91RlNzRVc2ZnFheU81WEt6VnJKQXZkdXl4ZE9SSFVDMHlBNWNrb3hTUUtRcDJnTlNEMm81WDIwM1RMckNJR1VZeEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldLdW9LOXc5NVZjVmR6N3l3SGZzSzllV1dEelI5RWQyMk5XbjRBMmFFVEdMcEhEcUFOUkkwQUNPdjBIUEFoanRkQkZOYmFqcWZ2eG1wMjRIS3hPUUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4NzY4Mzc1MjU0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0NDI1MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFENXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ1cy5qc29uIjogIntcImtleURhdGFcIjpcIjQ4SGlkRzRRb1JjWmxrMUN6VDRxRG12MkVHOHA4SndPSmdnb3RrVFBsb0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTczMzIzMjk4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
