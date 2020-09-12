const { Octokit } = require('@octokit/rest');
const parseGithubUrl = require('parse-github-url');
const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

async function getAPullRequest(gitUrl) {
  const { owner, name: repo, branch, filepath: pull_number } = parseGithubUrl(gitUrl);
  if (branch === 'pull' && pull_number && owner && repo) {
    const pullRequest = await octokit.pulls.get({
      owner,
      repo,
      pull_number,
    });
    // see payload example https://developer.github.com/v3/pulls/#get-a-pull-request
  }

}

module.exports = { getAPullRequest }
