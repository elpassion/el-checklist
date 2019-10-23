import { TChecklist } from './checklist';

export type TContentContextData = {
  checklists: TChecklist[];
  getChecklistBySlug: (slug: TChecklist['slug']) => TChecklist | null;
};
