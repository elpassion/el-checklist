export type TChecklistSectionItem = {
  title: string;
  description: string;
  solutions: string[];
  categories: string[];
  severity: number;
  slug: string;
  isDone: boolean;
  id: string;
};
export type TChecklistSection = {
  name: string;
  items: TChecklistSectionItem[];
};
export type TChecklist = {
  name: string;
  slug: string;
  id: string;
  sections: TChecklistSection[];
};
export type TChecklistsIndex = {
  name: string;
  slug: string;
  id: string;
}[];
