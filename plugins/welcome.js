import config from '../../set.cjs';

const gcEvent = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  // Check for valid group command
  if (cmd === 'welcome1') {
    if (!m.isGroup) {
      return m.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }

    try {
      // Get group metadata and participants
      const groupMetadata = await Matrix.groupMetadata(m.from);
      const participants = groupMetadata.participants;
      const botNumber = await Matrix.decodeJid(Matrix.user.id);
      const botAdmin = participants.find(p => p.id === botNumber)?.admin;
      const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

      // Ensure bot and user are admins
      if (!botAdmin) {
        return m.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
      }
      if (!senderAdmin) {
        return m.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
      }

      let responseMessage;
      
      // Enable or disable welcome message
      if (text === 'on') {
        config.WELCOME = true;
        responseMessage = "WELCOME & LEFT message has been enabled.";
      } else if (text === 'off') {
        config.WELCOME = false;
        responseMessage = "WELCOME & LEFT message has been disabled.";
      } else {
        responseMessage = "Usage:\n- `WELCOME on`: Enable WELCOME & LEFT message\n- `WELCOME off`: Disable WELCOME & LEFT message";
      }

      // Send response to user
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });

    } catch (error) {
      console.error("Error processing your request:", error);
      await Matrix.sendMessage(m.from, { text: 'Error processing your request. Please try again later.' }, { quoted: m });
    }
  }
};

export default gcEvent;
