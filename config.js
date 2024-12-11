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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923301378149";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_56_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmYmEzOVBmbzM2SG95eEFKWWdSRVB0Q1hpdkpkYStEcDdQYi9qQU5FUkxBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1QzVzOUE2RlN3Q0x4Y1BmbjVsT0ZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0MjYxNjA4LTQ0Y2UtNGI3OS04ZGM2LTAyMWEwYmQ1NWJiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAyMjIsXG4gICAgICA2OCxcbiAgICAgIDE3NCxcbiAgICAgIDE2MSxcbiAgICAgIDM3LFxuICAgICAgMTg5LFxuICAgICAgMjUwLFxuICAgICAgMjI1LFxuICAgICAgODksXG4gICAgICAxMDIsXG4gICAgICAyMDcsXG4gICAgICAyMDgsXG4gICAgICA4MyxcbiAgICAgIDI3LFxuICAgICAgMjIxLFxuICAgICAgMTE0LFxuICAgICAgMTg0LFxuICAgICAgNjEsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMjYsXG4gICAgICAxNDAsXG4gICAgICAxODgsXG4gICAgICAxMixcbiAgICAgIDEyNixcbiAgICAgIDEsXG4gICAgICAxMDYsXG4gICAgICA1NSxcbiAgICAgIDI0OSxcbiAgICAgIDEwNCxcbiAgICAgIDE0LFxuICAgICAgMTU4LFxuICAgICAgNDcsXG4gICAgICA5OSxcbiAgICAgIDE5NCxcbiAgICAgIDE2OSxcbiAgICAgIDMsXG4gICAgICAyMDIsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS04xQVpRQVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwMTM3ODE0OTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOCgfCdkIDVsuC5j9Wyw7/JseC5j8ayxqfwk4KEXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu6pWlXFxu8JOCgfCTg6zwk4KEXCIsXG4gICAgXCJsaWRcIjogXCIxMzIyMTI0NjQ4NDkwOTU6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVDEvK29FRUlidjVMb0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIng0cU5IaXQ4bTVqWFFmZnhvQmt3YW9ScHh4c0VGQ2ZweTZsY3prNi9EVUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLzJVOFhQc1B0Wm9abGxpV25jVlhjbVNDY1kyQ0xlRVNLenRteEZpN2YvOVBkYTZXaGV3aGZwNHhtSU96Yk81S01FVlM3akxLQit4WVB0UzJhZ2ZRQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiME1sT1VFZ2luZXRZWEtPTU9lVTh6dVFSaWR5K2lmMHp1ZlBzWHlRWDQrVkpmdU9GbWsvKzU5djVuU05RYytQaWdMdHB2S2VtRDdNVTdUZGhkd3AxQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzAxMzc4MTQ5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTAwMTcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFVzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIVXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSWmtLM2tKSmt5QmtyeWN4UHVSMVhZMGFtRTVCdmxpa0lodjVqYmpOZ0VvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTgxMzU3MzIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzg5OTc5NTQwNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
