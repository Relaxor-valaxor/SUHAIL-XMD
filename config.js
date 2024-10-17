const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "14753371580";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_21_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZUZOL1R4UUNZRWR3dWRGQXhwUWhvYzdhUzEzTkpYZEdrL09MNFdvNnY0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN3VjcXpDWS1UUlNRRmRyWUg1eDVmZ1wiLFxuICBcInBob25lSWRcIjogXCI2YzFmYWJkNC0zZjg0LTQzODMtODBiNC05ODliN2EzYmMxYjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgNCxcbiAgICAgIDEzLFxuICAgICAgMTM0LFxuICAgICAgMzQsXG4gICAgICA5NCxcbiAgICAgIDI4LFxuICAgICAgMzcsXG4gICAgICAyMjcsXG4gICAgICA1NCxcbiAgICAgIDAsXG4gICAgICAzMyxcbiAgICAgIDM5LFxuICAgICAgMTY0LFxuICAgICAgMjQzLFxuICAgICAgMTU5LFxuICAgICAgNDUsXG4gICAgICA2LFxuICAgICAgMjQzLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjIxLFxuICAgICAgODUsXG4gICAgICA3LFxuICAgICAgNixcbiAgICAgIDE1NyxcbiAgICAgIDQ5LFxuICAgICAgMjksXG4gICAgICA4MixcbiAgICAgIDk5LFxuICAgICAgMyxcbiAgICAgIDExMSxcbiAgICAgIDE4NSxcbiAgICAgIDE0MixcbiAgICAgIDE5NCxcbiAgICAgIDEzMyxcbiAgICAgIDIyOSxcbiAgICAgIDIwMSxcbiAgICAgIDEwMSxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRRVdRTkQ3TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTQ3NTMzNzE1ODA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYwMjE5NzM3MjIzMzc5OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFIc0w4SkVOWFd4TGdHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJVFdTWDFvODRNU3ZzVWF4cTZkK1B2MytpOExIQ1BzT3V4a213SHJEclNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhlS09EQUVOMnk2VnBZMDlBc0FtYkJ2YTNKVU1GWGM3L0w4YTMrSnN0T3Y0MU9VYUNUam1vYjdIRExhT0R2ekY4bkxudFh2RUpKeXhvdUNNSmtMY2h3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpBQ2s2TjBoZFJhejUzUG9PdDNJV0dlUDIvSFFGQWd3MVkzeGY3dlZDYmZsZGlFa0NBWWROZzBZaTNEcVZQQUdTYWJKY3hPUW03L2czdHA4SzdvR2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0NzUzMzcxNTgwOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTc4NDU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWJ1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJYnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDZHFMczNjU1NXcVYxb0Flai9mbGNmSHA3azBIZjFqVFZZeDh5UmgxOEljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1NDg4MjcxMzAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTE1NjgxOTcyMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "?",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
