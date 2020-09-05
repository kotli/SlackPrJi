require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const web = new WebClient();

let conversationHistory;

// Fetch conversation history using ID from last example
async function fetchHistory(id) {
  try {
    // Call the conversations.history method using the built-in WebClient
    const result = await web.conversations.history({
      // The token you used to initialize your app
      token: process.env.SLACK_ACCESS_TOKEN,
      channel: id
    });

    conversationHistory = result.messages;

    // if (conversationHistory.length === 1) {
    await web.reactions.add({
      token: process.env.SLACK_ACCESS_TOKEN,
      channel: id,
      name: 'thumbsup',
      timestamp: conversationHistory[0].ts
    })
    // }

    // Print results
    console.log(conversationHistory.length + ' messages found in ' + id);
  }
  catch (error) {
    console.error(error);
  }
}



fetchHistory(process.env.SLACK_CHANNEL_ID);
