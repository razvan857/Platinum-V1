const greetingsDB = new Map(); // In-memory store for demonstration

// Enable or disable greetings for a group
async function enableGreetings(groupId, type, status) {
  const group = greetingsDB.get(groupId) || {};
  group[type] = { ...group[type], enabled: status === "on" };
  greetingsDB.set(groupId, group);
}

// Set a message for greetings
async function setMessage(groupId, type, message) {
  const group = greetingsDB.get(groupId) || {};
  group[type] = { ...group[type], message };
  greetingsDB.set(groupId, group);
}

// Delete a greeting message
async function deleteMessage(groupId, type) {
  const group = greetingsDB.get(groupId) || {};
  delete group[type];
  greetingsDB.set(groupId, group);
}

// Retrieve a greeting message
async function getMessage(groupId, type) {
  const group = greetingsDB.get(groupId);
  return group && group[type] ? group[type].message : null;
}

// Generate and preview a greeting message
async function greetingsPreview(message, type) {
  const group = greetingsDB.get(message.jid);
  const msg = group && group[type] ? group[type].message : "Default Message";
  const options = { contextInfo: { mentionedJid: [message.sender] } };
  return { msg, options, type };
}

// Clear greetings data for a group
async function clearGreetings(groupId, type) {
  const group = greetingsDB.get(groupId) || {};
  if (group[type]) {
    group[type] = {};
    greetingsDB.set(groupId, group);
  }
}

module.exports = {
  enableGreetings,
  setMessage,
  deleteMessage,
  getMessage,
  greetingsPreview,
  clearGreetings,
};
