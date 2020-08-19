const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths) => {

  pathsToRows(paths)
    .then(rows => console.log(rows))
    .then(() => {
      event.reply('process-subtitles', [
        {
          name: "you",
          amount: 900,
        },
        {
          name: "he",
          amount: 488,
        },
        {
          name: "i",
          amount: 938,
        },
        {
          name: "love",
          amount: 302,
        },
        {
          name: "she",
          amount: 478,
        },
        {
          name: "they",
          amount: 123,
        },
      ])
  })

})