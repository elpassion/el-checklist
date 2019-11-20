/*eslint-disable @typescript-eslint/no-var-requires*/
const fs = require('fs');

const _ = require('lodash');

const storeFile = require('./storeFile');
const logError = require('./logError');
const objectToJson = require('./objectToJson');

const CONTENT_SOURCE_DIR = 'content';

const CONTENT_TARGET_FILENAME = '_prepared_content.json';
const CONTENT_TARGET_PATH = '/../src';
const TEST_TARGET_PATH = '/../cypress/fixtures';

const getCollection = (collectionName, fields) => {
  const checklists = [];

  try {
    const directory = `${CONTENT_SOURCE_DIR}/${collectionName}`;
    fs.readdirSync(directory).forEach(filename => {
      const checklist = require(`../${directory}/${filename}`);
      const checklistData = {
        ..._.pick(checklist, fields),
        slug: _.kebabCase(checklist.name).toLowerCase(),
      };
      checklists.push(checklistData);
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

const storeData = data => {
  const fileContent = objectToJson(data);
  storeFile(fileContent, CONTENT_TARGET_FILENAME, CONTENT_TARGET_PATH);
};
const storeChecklistTestData = data => {
  const fileContent = JSON.stringify(data.checklists[0], null, 2);
  storeFile(fileContent, '_checklist.json', TEST_TARGET_PATH);
};
const storeChecklistIndexTestData = data => {
  const checklistsIndexData = data.checklists.map(checklist => _.pick(checklist, ['name', 'slug']));
  const fileContent = JSON.stringify(checklistsIndexData, null, 2);
  storeFile(fileContent, '_checklists-index.json', TEST_TARGET_PATH);
};

const prepareContent = () => {
  const checklistsCollection = getCollection('checklists', ['name', 'slug', 'description', 'sections']);
  const tasksCollection = getCollection('tasks', ['name', 'description', 'solution', 'tags', 'severity', 'slug']);

  const data = { checklists: fillChecklistsWithTasks({ checklistsCollection, tasksCollection }) };

  storeData(data);
  storeChecklistTestData(data);
  storeChecklistIndexTestData(data);
};

module.exports = prepareContent;
