/*eslint-disable @typescript-eslint/no-var-requires*/
const chalk = require('chalk');

module.exports = e => {
  console.error(chalk.bold.black.bgRed('[!]') + chalk.red(` An error occured: ${e}`));
};
