const Parser = require('rss-parser');
const poster = require("./poster.js");
const config = require("./config");
const parser = new Parser();

let lastPosts = [];

async function fetch() {
  console.log("-- Take your time, Fetching RSS feeds....");

  try {
    let rss = await parser.parseURL(config.rss_url);
    console.log(`-  Received ${rss.items.length} feeds.`);

    let posts = rss.items.filter(post => !lastPosts.includes(post.url));

    console.log(`-  There are ${posts.length} new feeds.`);

    posts.reverse().forEach(post => {
      console.log("   Posting", post.link);
      poster(post.title + "\n" + post.link);
    });

    lastPosts = rss.items.map(post => post.url);
  } catch (error) {
    console.error("-  Failed to fetch", config.rss_url);
    console.error(error);

    console.log("-  Trying again in 5 seconds....");
    return setTimeout(fetch, 5000);
  }

  console.log("-  Done. Waiting for the next call....");
}

setInterval(fetch, (config.checkinterval || 5 * 60 * 1000));

fetch();
