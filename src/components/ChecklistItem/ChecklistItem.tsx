/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactDOM, Fragment, useCallback, useMemo } from 'react';

import { TChecklistTask } from '../../@types/checklist';
import { Checkbox } from '../Checkbox/Checkbox';
import { InlineList } from '../InlineList/InlineList';
import { Collapsible } from '../Collapsible/Collapsible';
import { Markdown } from '../Markdown/Markdown';

import { titleStyle, wrapperStyle, sectionStyle, tagListStyle, subtitleStyle } from './ChecklistItem.styles';

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
          {name} (severity: {severity})
        </Checkbox>
      </h3>

      {tags.length > 0 && (
        <section css={tagListStyle}>
          <InlineList items={tagsToRender} />
        </section>
      )}

      {description && (
        <section css={sectionStyle}>
          <Collapsible header={<span css={subtitleStyle}>Description</span>} WrapperTag="div">
            <Markdown css={{ overflowX: 'auto' }} source={description} />
          </Collapsible>
        </section>
      )}

      {solution && (
        <section css={sectionStyle}>
          <Collapsible header={<span css={subtitleStyle}>Solution</span>} WrapperTag="div">
            <Markdown css={{ overflowX: 'auto' }} source={solution} />
          </Collapsible>
        </section>
      )}
    </Tag>
  );
};
