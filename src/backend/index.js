const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')

ipcMain.on('process-subtitles', (event, paths) => {

  pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => console.log(words))
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