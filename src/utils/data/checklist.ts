import { TChecklist } from '../../@types/checklist';
import { Maybe } from '../../@types/utils';

const checklists: { [key: string]: TChecklist } = {
  'best-practices': {
    name: 'Best Practices',
    slug: 'best-practices',
    sections: [
      {
        name: 'HEAD',
        items: [
          {
            title: 'Doctype',
            description:
              'The Doctype is HTML5 and is at the top of all your HTML pages.',
            solutions: [],
            categories: ['meta tag'],
            severity: 3,
            slug: 'doctype',
            isDone: false,
          },
          {
            title: 'Favicons',
            description:
              'Each favicon has been created and displays correctly.',
            solutions: [
              '[Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)',
            ],
            categories: ['meta tag'],
            severity: 2,
            slug: 'favicons',
            isDone: false,
          },
        ],
      },
      {
        name: 'HTML',
        items: [
          {
            title: 'Adblockers test:',
            description:
              'Your website shows your content correctly with adblockers enabled',
            solutions: [],
            categories: ['html', 'testing'],
            severity: 2,
            slug: 'adblockers-test',
            isDone: false,
          },
        ],
      },
    ],
  },
};

export const getChecklist = (key: string): Maybe<TChecklist> => {
  return checklists[key] || null;
};
