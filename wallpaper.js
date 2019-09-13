const wallpaper = require('wallpaper');
const axios = require('axios');
const download = require('download-file');

(async () => {
    await wallpaper.set('unicorn.jpg');

    await wallpaper.get();
    //=> '/Users/sindresorhus/unicorn.jpg'
})();