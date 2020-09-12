const express = require('express');
const { createEventAdapter } = require('@slack/events-api');
// const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const slackSigningSecret = process.env.SLACK_TOKEN;
const slackEvents = createEventAdapter(slackSigningSecret);

const router = express.Router();

slackEvents.on('message', (event) => {
  console.log(
    `Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`
  );
});

router.use('/slack/event', slackEvents.requestListener());

router.get('/', (req, res) => {
  res.json({
    message: 'Event API - 👋🌎🌍🌏',
  });
});

module.exports = router;
