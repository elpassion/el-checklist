export type TChecklistTask = {
  name: string;
  description?: string;
  solution?: string;
  tags: string[];
  severity: number;
  slug: string;
};
export type TChecklistSection = {
  name: string;
  tasks: TChecklistTask[];
};
export type TChecklist = {
  name: string;
  description?: string;
  slug: string;
  sections: TChecklistSection[];
};
export type TChecklistsIndex = {
  name: string;
  slug: string;
}[];
