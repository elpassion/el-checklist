const fs = require('fs');

module.exports = (content, fileName, path) => {
  fs.writeFile(__dirname + `${path}/${fileName}`, content, function(err) {
    if (err) {
      console.error(`Something went wrong writing file '${fileName}': ${err}`);
    } else {
      console.error(`File '${fileName}' saved.`);
    }
  });
};
