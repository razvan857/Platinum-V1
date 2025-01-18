//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349071978357";
global.owner = process.env.OWNER_NUMBER || "2348084644182";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5IUGVIRHprNzRsNlJmb0FNMU1rMU14UWkwemc2Snc5djc3SGJqcXlWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemtmMTJ6VEo4MGptSVNkQ08wNkhQNVpybGRvVVp5Nkt6b2QwR2FDMHlDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSndObGhFQzRQZE5zbU5ab1VocWFXc1gxQjFpYVB3Q3F2bWVSdURVeTJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwMmR0WmxYUXhFR3ZXQmViOEZqWGZKZmU3Zm16WHUxcDgwcXB4QUtwN0JzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKVFJGNnFmWW9VQ21MbWRzKzJhY0xMRk9rWGk0VE5ZeUR5azkxU3ZzMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFzOGtjTEdsNUxUU3c4ZFFYak9ZTVpGblprVjkwTFVYUFNIdFA2clVnaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpKTklDZWk1aVRJYlNOcGNmU3VFK2NCNjJzLzlUQnN5cVBvYUh4enNtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1oyTHlRTnA1R1c4eTVyOG1udXhCRlMvOEllc1YxQ3VDT0w3UVBxRlpnMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJkcC8zd0hkbGVPTHVjdXpCMUQ0Y0VJK0xYOW8wakVDTkVCUzh3ejNzMGxDakRtQy9FemVZQWxaZ1hCTWdmWVU4ai9EOGxUckthZE9iMll0VktwRUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJLK2VGWE9YQS9TYjJkbXpoWkZ2dHFhS3hnL0dpY2R3Y0xsQS9EdSt4d0ZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYyODIxMjA0NjA2MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FBNzEzRERGM0Q1QjRCOERFMTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzIwNTkxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4MjEyMDQ2MDYyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTMyOUU1NEIzRTRBM0YyMTBFRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3MjA1OTE5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhQnRYTW1zVlFxUzh3Tk5EazNOeEdnIiwicGhvbmVJZCI6IjRjNWVjMjc5LTM4MTItNGM0Mi1hMDQ3LTI0NjkzMmUwYjQxZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYjJBSnJ1dEc0NTh1YXBmMldkNU5QRzdBYXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3AwZytidlFqM0pZZGVFOUM3ZDdWTG5BZ253PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlExUzVYS01WIiwibWUiOnsiaWQiOiI2MjgyMTIwNDYwNjIzOjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlpleUNoaW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09iVCs5TVBFSTNScnJ3R0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpJcHdhOGV4dEhOWnRiM2ZRSFJmZHdSdzVVN21wVkpEcDRCTWVwTGtra3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVvSDUzUkJxVHFuVG9TSDBTK0V1ZzE2RGtiekhHUXBSNlJYeGVURlhhdHhuNE04SnY5WlBpMHBDVWdObGV4bWVncTdsVDNqZ3c5MWNQdkRoN3A0QkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwVWNzRDVNV0FpMTNZWHVvSWJqWllxSmIyN0tqOC9HTHVtTWxySkgvbHljeEZTc3g2aVFTb0hOdFoydkYvdWJjeHdKNVhIQVZSSU9UdWpnVUtBbDdDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODIxMjA0NjA2MjM6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXlLY0d2SHNiUnpXYlc5MzBCMFgzY0VjT1ZPNXFWU1E2ZUFUSHFTNUpKTSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzIwNTkxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIQXMifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "ᴀʙᴏᴠᴇ ᴀʟʟ ☠️👑🌍",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
