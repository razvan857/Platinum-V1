const fs = require('fs');
const path = require('path');
const os = require('os');
const Config = require('../config');
const { fancytext, tiny, runtime, formatp, prefix } = require("../lib");
const { sendButtonMessage } = require('../lib/messageHelper'); // Import from lib
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);
const astro_patch = require("../lib/plugins");

let currentDesignIndex = 0;

function getNextMenuDesign() {
  const designs = [
    {
      header: "✦✧━━━⟪ *{botname}* ⟫━━━✧✦\n",
      lineSeparator: "◆ ",
      commandPrefix: " ",
      footer: "✦✧━━━━━━━━━━━━━✧✦",
      emoji: "🌠",
      greetingText: "Step into the realm of unlimited power!",
      categorySeparator: "✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦\n",
    },
    // Add other designs here
  ];

  const design = designs[currentDesignIndex];
  currentDesignIndex = (currentDesignIndex + 1) % designs.length;
  return design;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

astro_patch.smd({
  'cmdname': "menu",
  'desc': "Displays a calm, readable command list",
  'react': '💮',
  'type': 'user',
  'filename': __filename
}, async (context, message) => {
  try {
    const loadingMessages = ["The one above all is king y'all bow your heads 🙇"];
    for (const msg of loadingMessages) {
      await context.sendMessage(context.chat, { text: msg });
      await sleep(1000);
    }

    const { commands } = require("../lib");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const currentDate = currentTime.toLocaleDateString();
    const currentTimeString = `${hours}:${minutes}`;
    let greeting = "";

    if (hours >= 5 && hours < 9) {
      greeting = "🌸 *Good Morning* 🌸 - Time for a fresh start!";
    } else if (hours >= 9 && hours < 12) {
      greeting = "🌞 *It's still morning* 🌞 - You should get to work!";
    } else if (hours >= 12 && hours < 15) {
      greeting = "🌞 *Good Afternoon* 🌞 - Keep up the great work!";
    } else if (hours >= 15 && hours < 18) {
      greeting = "🌆 *Good Evening* 🌆 - Unwind and relax!";
    } else if (hours >= 18 && hours < 21) {
      greeting = "🌝 *Still night* 🌝 - Reflect on your day!";
    } else {
      greeting = "🌙 *Good Night* 🌙 - Try dey sleep you no be winch!";
    }

    const design = getNextMenuDesign();
    const header = design.header.replace("{botname}", Config.botname);
    const lineSeparator = design.lineSeparator;
    const footer = design.footer;

    let menuContent = `${header}`;
    menuContent += `${lineSeparator}${greeting}\n`;
    menuContent += `${lineSeparator}🦁 *Owner:* ${Config.ownername}\n`;
    menuContent += `${lineSeparator}📆 *Date:* ${currentDate}\n`;
    menuContent += `${lineSeparator}🕰️ *Time:* ${currentTimeString}\n`;
    menuContent += `${lineSeparator}⏲️ *Uptime:* ${runtime(process.uptime())}\n`;
    menuContent += `${lineSeparator}💽 *RAM Usage:* ${formatp(os.totalmem() - os.freemem())}\n`;
    menuContent += `${lineSeparator}📊 *Total Commands:* ${commands.length}\n\n`;

    let buttons = [];
    for (const category in commandCategories) {
      buttons.push({
        buttonId: `menu_${category}`,
        buttonText: { displayText: `${design.emoji} ${tiny(category)}` },
        type: 1
      });
    }

    const menuOptions = {
      caption: menuContent,
      buttons: buttons,
      footer: footer,
      contextInfo: {
        forwardingScore: 100,
        isForwarded: true,
        externalAdReply: {
          title: 'Pʟᴀᴛɪɴᴜᴍ-V1',
          sourceUrl: 'https://whatsapp.com/channel/0029Vas9N7MBA1f0yw8dZ515'
        }
      },
      ephemeralExpiration: 3000
    };

    // Use the helper function to send the menu with buttons
    await sendButtonMessage(context, context.chat, menuContent, buttons, footer);

  } catch (error) {
    await context.error(`Error: ${error.message}`, error);
  }
});
