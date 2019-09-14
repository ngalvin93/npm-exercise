const wallpaper = require('wallpaper');
const axios = require('axios');
const download = require('download-file');

var options = {
    directory: "./img/",
    filename: "dog.jpeg"
}

// Gets the dog image

axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        let url = response.data.message
        return url
    })
    .then(function (response) {
        console.log('This is the second then: ', response)
        download(response, options)
    })
    .catch(function (error) {
        console.error('There is an error! Here it is: ', error)
    })

// Downloads the dog image

// Sets the dog image as wallpaper

// (async () => {
//     await wallpaper.set('unicorn.jpg');

//     await wallpaper.get();
//     //=> '/Users/sindresorhus/unicorn.jpg'
// })();