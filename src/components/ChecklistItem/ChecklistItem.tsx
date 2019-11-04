/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactDOM, Fragment, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import { TChecklistTask } from '../../@types/checklist';
import { Checkbox } from '../Checkbox/Checkbox';
import { Pill } from '../Pill/Pill';
import { InlineList } from '../InlineList/InlineList';

import { titleStyle, wrapperStyle } from './ChecklistItem.styles';

type TProps = TChecklistTask & {
  Tag?: keyof ReactDOM | FC;
  isFulfilled?: boolean;
  onChange?: (id: string, value: boolean) => void;
};

export const ChecklistItem: FC<TProps> = ({
  name,
  slug,
  severity,
  description,
  tags,
  solution,
  isFulfilled = false,
  onChange = () => {},
  Tag = Fragment,
  ...rest
}: TProps) => {
  const onCheckboxChange = useCallback(() => {
    onChange(slug, !isFulfilled);
  }, [onChange, slug, isFulfilled]);
  const tagsToRender = useMemo(() => tags.map(tag => ({ children: tag })), [tags]);

  return (
    <Tag {...rest} css={wrapperStyle}>
      <h3 css={titleStyle}>
        <Checkbox id={slug} isChecked={isFulfilled} onChange={onCheckboxChange}>
          {name} ({severity})
        </Checkbox>
      </h3>

      {tags.length > 0 && <InlineList items={tagsToRender} />}

      {description && (
        <section>
          <h4>Description:</h4>

          <ReactMarkdown source={description} />
        </section>
      )}

      {solution && (
        <section>
          <h4>Solution:</h4>

          <ReactMarkdown source={solution} />
        </section>
      )}
    </Tag>
  );
};
