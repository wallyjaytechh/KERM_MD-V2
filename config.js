//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wallyjay123@gmail.com";
global.location = "Osun, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Wallyjaytechh/WALLYJAYTECH-MD";
global.gurl = process.env.GURL || "https://wa.me/2348144317152";
global.website = process.env.GURL || "https://wa.me/2348144317152";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/Ujbwlbu.jpeg";
global.devs = "https://wa.me/2348155763709, https://wa.me/2348144317152";
global.sudo = process.env.SUDO || "2348144317152,2348155763709,2348054984935";
global.owner = process.env.OWNER_NUMBER || "2348144317152";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Ujbwlbu.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0l1dVUwdFFZRFlXeHgvYUtrZExPN1Q3bVVyOGlFVHdXam54NjJpTWNYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTVrM2VXOGVYaDhFazJkWEN4a2pTdllOU2xzSTNhOHMvME1sRWs1amVtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q0xVUXN1RGpCYWc2WmE2MWV4Zit5bE15ZGVES3J3VEZtMW9JSnFqK0hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMzdiWFk2V0FsZGhmcER2L2FCNW5hUjN5MWhSVlRwaXJpT1lEK0kvMUhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEcElESXpyUHpRTlJXTWpyTFZsWFBCbmF2TVVhRWVraWE1Uk5DcjlIRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNTdFdJSXNlWjBRVzRwL3plRHZnWEZhWnQ3OHYwdlIxbkpjdmcyTlFhVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0I1dHIxK2YyMXEyR3RXNUxIWEZ6L1I1bjFMUzJLZEcyQjMxVEVxMERFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnZJaGpsY09jMGFMZXNOQkgveksvcXdJbmI1SjNmbDRVZ1pEbkwxYnZGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjViR1VRVlk3WU5WRzA0QjVzSVNLcDBvT3c1WkhUR09tTmVtcGdvbVY3dlpaRWVTN040ZlR5NzQ1M0JZSnRPd3Q2U3J2SW92WUpETndwRkg2cWx2c2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJCZUJJaFlsQjNDemIwcVBvb2hlcmQxMGhaN2lJcmhaNi94NlhmenFxMG5rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNDQzMTcxNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUFBMEY4NzQ5NUY2RTI3QTI5OUQ1NDZBNTI3QkY4RjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzA5NTEyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMEFIV1NGQjVUQWFsVFNrOUdMN1hLUSIsInBob25lSWQiOiI3YTU0NDZmOC04N2M0LTQ1MjctYWRjZS0wZTIwZmRhZDI5MmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXhkVG9Gb09rNFNIK3lmSmkza05nU3pqWmJVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRvNlNscjBDNk9YZEFrQzFhS0VsazBrOUVPUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3RzhCQ1BOQSIsIm1lIjp7ImlkIjoiMjM0ODE0NDMxNzE1Mjo3NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS09Ib1BzQkVNUEN4YmNHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVHFuM0hxUEtpY3ZBRlpLcTZublhCVEhiSkNVczB5ci9VMVFXNkR3dWxUOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY09TcWJkemZaR0piZVpsMGtJTEVHS3AwR0V4UXkxUXF6bTZ5ampoTG5JM1pnRTdSZ1FGRGxsUGlQQkUwVWpQd0VEUTN3SnQwOXo0SDhyUlR1cGtTQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImQ5cGdDMjhMbWxZaGdRYlZESUNzSHRObjhuUUdTRHBvdWVsa09MTDNPQjFkRUlwOVVqUG02dmF1aSsrL0IyRGRpcHBpL1BIcHdXZWNqcExITnBhTGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE0NDMxNzE1Mjo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNnA5eDZqeW9uTHdCV1NxdXA1MXdVeDJ5UWxMTk1xLzFOVUZ1ZzhMcFUvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MDk1MTIxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdXNSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "WALLY JAY TECH",
  packname: process.env.PACK_NAME || "WALLYJAYTECH-MD",
  botname: process.env.BOT_NAME || "WALLYJAYTECH-MD 𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜Wally Jay⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WALLYJAYTECH-MD",
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
