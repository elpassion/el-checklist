export type TChecklistSectionItem = {
  title: string;
  description: string;
  solutions: string[];
  categories: string[];
  severity: number;
  slug: string;
  isDone: boolean;
};
export type TChecklistSection = {
  name: string;
  items: TChecklistSectionItem[];
};
export type TChecklist = {
  name: string;
  slug: string;
  sections: TChecklistSection[];
};
