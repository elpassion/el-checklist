/*eslint-disable @typescript-eslint/no-var-requires*/
const fs = require('fs');
const getDirName = require('path').dirname;

const mkdirp = require('mkdirp');

const onError = (fileName, err) => {
  console.error(`Something went wrong writing file '${fileName}': ${err}`);
};

module.exports = (content, fileName, path) => {
  const fullPath = __dirname + `${path}/${fileName}`;

  mkdirp(getDirName(fullPath), function(err) {
    if (err) {
      return onError(fileName, err);
    }

    fs.writeFile(fullPath, content, function(err) {
      if (err) {
        onError(fileName, err);
      } else {
        console.error(`File '${fileName}' saved.`);
      }
    });
  });
};
