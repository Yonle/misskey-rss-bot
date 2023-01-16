const Parser = require('rss-parser');
const poster = require("./poster.js");
const config = require("./config");
const parser = new Parser();

let lastUpdated = null;

async function fetch() {
  let rss = await parser.parseURL(config.rss_url);
  if (rss.lastBuildDate == lastUpdated) return;
  lastUpdated = rss.lastBuildDate;

  // Send the first post
  let post = rss.items[0];
  poster(post.title + "\n" + post.link);
}

setInterval(fetch, (config.interval || 5 * 60 * 1000));

fetch();
