import React, { FC, PropsWithChildren, useCallback } from 'react';
import { Context, createContext } from 'react';

import { TChecklist } from '../@types/checklist';
import { TContentContextData } from '../@types/content';
import * as content from '../_prepared_content.json';

const initialData: TContentContextData = {
  checklists: (content.checklists || []) as TChecklist[],
  getChecklistBySlug: () => null,
};

export const ContentContext: Context<TContentContextData> = createContext(initialData);

type TProps = {};
export const ContentContextProvider: FC<TProps> = ({ children }: PropsWithChildren<TProps>) => {
  const { checklists } = initialData;

  const getChecklistBySlug = useCallback(
    (slug: TChecklist['slug']) => {
      console.warn('hello', slug, checklists);
      return checklists.find(checklist => checklist.slug === slug) || null;
    },
    [checklists],
  );

  return (
    <ContentContext.Provider
      value={{
        checklists,
        getChecklistBySlug,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
