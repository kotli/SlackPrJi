const express = require('express');
const router = express.Router();

const { createEventAdapter } = require('@slack/events-api');
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const slackEvents = createEventAdapter(slackSigningSecret);

const { getAPullRequest } = require('../lib/github/get-pr');


// slackEvents.on('message', (event) => {
//   console.log(
//     `Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`
//   );
// });
slackEvents.on('link_shared', async (event) => {
  await getAPullRequest(event.links[0].url);
  console.log(event);
});

router.use('/', slackEvents.requestListener());

router.get('/', (req, res) => {
  res.json({
    message: 'Event API - 👋🌎🌍🌏',
  });
});

module.exports = router;
