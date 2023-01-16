const { request } = require("https");
const config = require("./config");

module.exports = (t) => {
  request("https://" + config.instance + "/api/notes/create", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  }).end(JSON.stringify({
    visibility: config.visibility || "public",
    text: t,
    i: config.access_token
  }));
}
