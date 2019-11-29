import React, { ReactNode } from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';

type TRendererProps = {
  href: string;
  children: ReactNode;
};

const LinkRenderer: React.FC<TRendererProps> = ({ href, children }: TRendererProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

type TProps = ReactMarkdownProps;
export const Markdown: React.FC<TProps> = (props: TProps) => (
  <ReactMarkdown renderers={{ link: LinkRenderer }} {...props} />
);
