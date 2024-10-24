const { smd, bot_ } = require("../lib");
let bgmm = false;

smd(
  {
    cmdname: "antiviewonce",
    alias: ["antivv"],
    desc: "Turn On/Off auto ViewOnce Downloader",
    fromMe: true,
    type: "user",
    use: "<on/off>",
    filename: __filename,
  },
  async (msg, args) => {
    try {
      bgmm =
        (await bot_.findOne({ id: "bot_" + msg.user })) ||
        (await bot_.new({ id: "bot_" + msg.user }));

      let command = args.toLowerCase().split(" ")[0].trim();
      if (["on", "enable", "act"].includes(command)) {
        if (bgmm.antiviewonce === "true") {
          return await msg.reply("*AntiViewOnce already enabled!*");
        }
        await bot_.updateOne(
          { id: "bot_" + msg.user },
          { antiviewonce: "true" }
        );
        return await msg.reply("*AntiViewOnce successfully enabled*");
      } else if (["off", "disable", "deact"].includes(command)) {
        if (bgmm.antiviewonce === "false") {
          return await msg.reply("*AntiViewOnce already disabled*");
        }
        await bot_.updateOne(
          { id: "bot_" + msg.user },
          { antiviewonce: "false" }
        );
        return await msg.reply("*AntiViewOnce successfully deactivated*");
      } else {
        return await msg.send("*Use on/off to enable/disable AntiViewOnce!*");
      }
    } catch (error) {
      await msg.error("Error: " + error + "\n\nCommand: AntiViewOnce", error);
    }
  }
);

smd(
  { on: "viewonce" },
  async (msg, media) => {
    try {
      if (!bgmm) {
        bgmm = await bot_.findOne({ id: "bot_" + msg.user });
      }
      if (bgmm && bgmm.antiviewonce === "true") {
        let noticeMsg = {
          key: { ...msg.key },
          message: { conversation: "```[VIEWONCE DETECTED] downloading!```" },
        };
        let mediaPath = await msg.bot.downloadAndSaveMediaMessage(msg.msg);
        let userJid = msg.user;
        let userDetails = await msg.bot.getContact(userJid);
        let userName = userDetails.name || userJid;
        let chatDetails = `*From Chat:* ${msg.from}\n*Time:* ${new Date(msg.t * 1000).toLocaleString()}\n*User:* ${userName}`;
        
        await msg.bot.sendMessage(
          userJid,
          {
            [msg.mtype2.split("Message")[0]]: { url: mediaPath },
            caption: `${chatDetails}\n\n${msg.body}`
          },
          { quoted: noticeMsg }
        );
      }
    } catch (error) {
      console.log("Error while handling AntiViewOnce media:", error);
    }
  }
);
