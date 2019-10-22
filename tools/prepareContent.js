const fs = require('fs');

const storeFile = require("../tools/storeFile");

const COLLECTIONS = [ 'checklists', 'tags', 'tasks' ];
const CONTENT_SOURCE_DIR = 'content';
const CONTENT_TARGET_FILENAME = '_prepared_content.json';

const data = {};

COLLECTIONS.forEach(collection => {
  try {
    const directory = `${CONTENT_SOURCE_DIR}/${collection}`;
    fs.readdirSync(directory).forEach(filename => {
      const item = require(`../${directory}/${filename}`);
      data[collection] ? data[collection].push(item) : data[collection] = [item];
    });
  } catch (e) {
    console.error(`Error while preparing collections: ${e}`);
  }
});

const fileContent = JSON.stringify(data, null, 2);

storeFile(`${fileContent}\n`, CONTENT_TARGET_FILENAME, `/../src`);
