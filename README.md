## misskey rss poster bot
A simple [Misskey](https://github.com/misskey-dev/misskey) bot that post new RSS feed update.

## Setting up
You need to have [Node.JS](https://nodejs.org) installed in your system.

- In your (bot) account, Go to **Settings** > **API** then click **Generate access Token**, Enable **Compose or delete notes**, And finally, Click ✔️
- **Please keep your access token secret**. Once your access token generated, Copy `config.base.json` to `config.json`, Then edit `config.json` and fill required parameters.
- Install bot dependencies, By running `npm install`

## Running the bot
Once everything setted up, Start the bot by running `node index.js`. Or, if you want to make it run at background, Install `tmux`, then `tmux new -d "node index.js"`

## License
ISC License

Copyright 2023 Yonle <yonle@lecturify.net>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
