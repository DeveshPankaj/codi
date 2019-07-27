const path = require('path')
const fs = require('fs')

function ls (folder, callback) {
  let directoryPath = folder;
  // directoryPath = path.join(__dirname, folder)
  // console.log(directoryPath)

  if (!fs.existsSync(directoryPath)) {
    callback({error: true, data: [], msg: `${directoryPath} dose not exist!`})
    return
  } else {
    if (fs.lstatSync(directoryPath).isDirectory()) {
      let result = []
      let files = fs.readdirSync(directoryPath)
      for (let i = 0; i < files.length; i++) {

        let filepath = path.join(directoryPath, files[i])
        let stat = fs.lstatSync(filepath)
        result.push({name: files[i], path: filepath, stat: stat, folder: stat.isDirectory()})
      }

      callback({error: false, data: result})
    } else {
      callback({error: true, data: [], msg: `${directoryPath} is not a directory!`})
    }
  }

}

module.exports = ls
