/*eslint-disable @typescript-eslint/no-var-requires*/
const fs = require('fs');

const _ = require('lodash');

const storeFile = require('../tools/storeFile');
const logError = require('../tools/logError');

const CONTENT_SOURCE_DIR = 'content';
const CONTENT_TARGET_FILENAME = '_prepared_content.json';

const getCollection = collectionName => {
  const checklists = [];

  try {
    const directory = `${CONTENT_SOURCE_DIR}/${collectionName}`;
    fs.readdirSync(directory).forEach(filename => {
      const checklist = require(`../${directory}/${filename}`);
      checklists.push({ ...checklist, slug: _.kebabCase(checklist.name).toLowerCase() });
    });
  } catch (e) {
    logError(e);
  }

  return checklists;
};

const fillChecklistsWithTasks = ({ checklistsCollection, tasksCollection }) =>
  checklistsCollection.map(checklist => {
    const sections = checklist.sections.map(section => {
      let tasks = [];

      if (section.tasks) {
        try {
          tasks = section.tasks.reduce((acc, taskName) => {
            const task = tasksCollection.find(t => t.name === taskName);
            if (task) {
              acc.push(task);
            }
            return acc;
          }, []);
        } catch (e) {
          logError(e);
        }
      }

      return { ...section, tasks };
    });

    return { ...checklist, sections };
  });

const prepareContent = () => {
  const checklistsCollection = getCollection('checklists');
  const tasksCollection = getCollection('tasks');
  const data = { checklists: fillChecklistsWithTasks({ checklistsCollection, tasksCollection }) };

  const fileContent = JSON.stringify(data, null, 2);

  storeFile(`${fileContent}\n`, CONTENT_TARGET_FILENAME, `/../src`);
};

module.exports = prepareContent;
