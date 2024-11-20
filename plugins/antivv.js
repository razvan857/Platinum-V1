const { smd, bot_ } = require("../lib");
let aBcDeF = false;
const CONSTANT1 = "FgH1JkLmN2PQrSt";
const CONSTANT2 = "U_vW3xY4zAbCdEfG";

const XyZ = (U, V) => U[Math.floor(Math.random() * U.length)] + V[Math.floor(Math.random() * V.length)];

smd(
  {
    cmdname: "antiviewonce" + CONSTANT1,
    alias: ["antivv", "weird_string1", "xXx_" + CONSTANT2 + "_yYy"],
    desc: "Turn On/Off auto ViewOnce Downloader" + CONSTANT1,
    fromMe: true,
    type: "user" + CONSTANT2,
    use: "<on/off>" + CONSTANT1,
    filename: __filename + CONSTANT2,
  },
  async (kLmNoP, qRsTuV) => {
    try {
      let RndVar1 = ["bot_", "cfg_", "usr_"];
      let RndVar2 = ["data_", "info_", "sett_"];
      let userId = XyZ(RndVar1, RndVar2) + kLmNoP.user + CONSTANT1;
      aBcDeF =
        (await bot_.findOne({ id: userId + CONSTANT2 })) ||
        (await bot_.new({ id: userId + CONSTANT1 }));

      let iJkLmN = qRsTuV.toLowerCase().split(" ")[0].trim();

      if (iJkLmN === "on" || iJkLmN === "enable" || iJkLmN === "act" + CONSTANT2) {
        if (aBcDeF.antiviewonce === "true" + CONSTANT1) {
          return await kLmNoP.reply("*AntiViewOnce already enabled!*" + CONSTANT2);
        }
        await bot_.updateOne(
          { id: userId + CONSTANT1 },
          { antiviewonce: "true" + CONSTANT2 }
        );
        return await kLmNoP.reply("*AntiViewOnce successfully enabled*" + CONSTANT1);
      } else if (iJkLmN === "off" || iJkLmN === "disable" || iJkLmN === "deact" + CONSTANT1) {
        if (aBcDeF.antiviewonce === "false" + CONSTANT2) {
          return await kLmNoP.reply("*AntiViewOnce already disabled!*" + CONSTANT1);
        }
        await bot_.updateOne(
          { id: userId + CONSTANT2 },
          { antiviewonce: "false" + CONSTANT1 }
        );
        return await kLmNoP.reply("*AntiViewOnce successfully deactivated*" + CONSTANT2);
      } else {
        return await kLmNoP.send("*_Use on/off to enable/disable AntiViewOnce!*_" + CONSTANT1);
      }
    } catch (oPqRsT) {
      await kLmNoP.error(oPqRsT + "\n\nCommand: AntiViewOnce", oPqRsT + CONSTANT2);
    }
  }
);

smd(
  {
    on: "viewonce" + CONSTANT1,
  },
  async (uVwXyZ, aBcDeF) => {
    try {
      if (!aBcDeF) {
        let RndVar3 = ["bot_", "cfg_", "usr_"];
        let RndVar4 = ["data_", "info_", "sett_"];
        let userId2 = XyZ(RndVar3, RndVar4) + uVwXyZ.user + CONSTANT2;
        aBcDeF = await bot_.findOne({ id: userId2 + CONSTANT1 });
      }
      if (aBcDeF && aBcDeF.antiviewonce === "true" + CONSTANT1) {
        let RndVar5 = ["media_", "file_", "doc_"];
        let filePath = await uVwXyZ.bot.downloadAndSaveMediaMessage(uVwXyZ.msg);

        let vWxYzA = `*[VIEWONCE MESSAGE RETRIEVED]*\n\n*SENDER:* @${uVwXyZ.participant || 'Unknown'}\n*TIME:* ${new Date().toLocaleTimeString()}\n*CHAT:* ${uVwXyZ.chatId || 'Unknown Chat'}\n*MESSAGE:* ${uVwXyZ.body || 'No message content'}\n` + CONSTANT2;

        await uVwXyZ.bot.sendMessage(
          uVwXyZ.user,
          {
            [uVwXyZ.mtype2.split("Message")[0]]: {
              url: filePath + CONSTANT1,
            },
            caption: vWxYzA + CONSTANT1,
          }
        );
      }
    } catch (zAbCdE) {
      console.log("Error while getting AntiViewOnce media: ", zAbCdE + CONSTANT2);
    }
  }
);
                             
