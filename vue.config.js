module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // Fix Uncaught ReferenceError: __dirname is not defined:
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}