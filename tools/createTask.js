/*eslint-disable @typescript-eslint/no-var-requires*/
const readline = require('readline');

const _ = require('lodash');
const chalk = require('chalk');

const storeFile = require('./storeFile');
const logError = require('./logError');
const objectToJson = require('./objectToJson');

const stringToArray = str =>
  str.split(',').reduce((acc, s) => {
    const text = s.trim();
    return text ? [...acc, text] : acc;
  }, []);
const slugify = str => _.kebabCase(str).toLowerCase();

const TASKS_CONTENT_TARGET_PATH = '/../content/tasks';
const TAGS_CONTENT_TARGET_PATH = '/../content/tags';
const SEVERITIES_LIST = [1, 2, 3];

const createTaskFile = task => {
  storeFile(objectToJson(task), `${slugify(task.name)}.json`, TASKS_CONTENT_TARGET_PATH);
};

const createTagFile = tagName => {
  const data = {
    layout: 'tag',
    name: tagName,
  };

  const fileName = `${slugify(tagName)}.json`;

  storeFile(objectToJson(data), fileName, TAGS_CONTENT_TARGET_PATH);
};

const createTask = async () => {
  const task = {};

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (text, onAnswer, useColor = true) =>
    new Promise(resolve => {
      const questionText = text + ' ';
      const questionContent = useColor ? chalk.blue(questionText) : questionText;

      rl.question(questionContent, answer => {
        onAnswer(answer);
        resolve();
      });
    });

  await askQuestion('What is the task name?', input => (task.name = input));
  await askQuestion('What are the task tags? (comma separated)', input => (task.tags = stringToArray(input)));
  await askQuestion(
    `What’s the task severity? (${SEVERITIES_LIST.join(', ')})`,
    input => (task.severity = parseInt(input)),
  );
  await askQuestion('What’s the task description? (markdown, optional)', input => (task.description = input));
  await askQuestion('What’s the task solution? (markdown, optional)', input => (task.solution = input));

  await askQuestion(
    chalk.blue('Does this seem correct?') +
      chalk.blueBright(`
      name: ${task.name}
      tags: ${task.tags.join(', ')}
      severity: ${task.severity}
      description: ${task.description || '[none provided]'}
      solution: ${task.solution || '[none provided]'}
      `) +
      chalk.blue('("y" for "yes", anything else for "no")'),
    input => {
      try {
        if (input.toLowerCase() !== 'y') {
          throw new Error('No user confirmation');
        }
        if (!task.name || !SEVERITIES_LIST.includes(task.severity) || !task.tags.length) {
          throw new Error('Missing data');
        }

        createTaskFile(task);
        task.tags.forEach(createTagFile);

        console.info(chalk.green(`task "${task.name}" was created.`)); //eslint-disable-line no-console
      } catch (e) {
        logError(e);
        console.error(chalk.red(`task was NOT created.`));
      }

      rl.close();
    },
  );
};

module.exports = createTask;
