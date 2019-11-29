/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactDOM, Fragment, useCallback, useMemo } from 'react';
import { useTheme } from 'emotion-theming';

import { TChecklistTask } from '../../@types/checklist';
import { Color, Theme } from '../../@types/styling';
import { Checkbox } from '../Checkbox/Checkbox';
import { InlineList } from '../InlineList/InlineList';
import { Collapsible } from '../Collapsible/Collapsible';
import { Markdown } from '../Markdown/Markdown';
import { getSeverityLabel } from '../../utils/misc/getSeverityLabel';

import {
  titleStyle,
  sectionStyle,
  tagListStyle,
  subtitleStyle,
  wrapperStyle,
  getFulfillmentStyle,
  severityTextStyle,
} from './ChecklistItem.styles';

type TProps = TChecklistTask & {
  Tag?: keyof ReactDOM | FC;
  isFulfilled?: boolean;
  onChange?: (id: string, value: boolean) => void;
};

type TItemProps = {
  severity: TProps['severity'];
};

type TSeverityGetterProps = TItemProps & { theme: Theme };
const getSeverityColor = ({ severity, theme }: TSeverityGetterProps): Color => {
  switch (severity) {
    case 1:
      return theme.palette['success'];
    case 2:
      return theme.palette['warning'];
    case 3:
      return theme.palette['error'];
    default:
      return theme.palette['disabled'];
  }
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
  const theme = useTheme<Theme>();
  const fulfillmentStyle = getFulfillmentStyle(isFulfilled);
  const severityColor = getSeverityColor({ severity, theme });

  return (
    <Tag {...rest} css={wrapperStyle}>
      <h3 css={titleStyle}>
        <Checkbox id={slug} isChecked={isFulfilled} onChange={onCheckboxChange} color={severityColor}>
          <span css={fulfillmentStyle}>{name}</span>

          <span css={[severityTextStyle(theme), fulfillmentStyle()]}>
            severity:&nbsp;<span css={{ color: severityColor }}>{getSeverityLabel(severity)}</span>
          </span>
        </Checkbox>
      </h3>

      <div css={fulfillmentStyle}>
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
      </div>
    </Tag>
  );
};
