const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
  console.log(paths)
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