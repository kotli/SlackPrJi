# SlackPrJi

## Todo

### Slack

- [x] create a connection with slack
- [x] add an emoji to a message
- [ ] receive event for new message in the channel
  - [ ] see that message includes a PR-like url [link_shared event](https://api.slack.com/events/link_shared)

### Github

- [ ] check if a given PR has assignee
  - [ ] see if those assignees made a review (comment/approved/blocked) [Get a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request)/[(might be less relevant) list-assignees](https://developer.github.com/v3/issues/assignees/#list-assignees)
- [ ] create a github flow on changes in a PR that updates the message in selected slack channel (if PR's url exist in that channel)
- [ ] create a github flow that fetches from our app
