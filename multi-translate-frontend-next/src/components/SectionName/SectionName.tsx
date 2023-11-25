import React from 'react';
import styled from 'styled-components';


interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}


export const Word = ({
  children,
  type = "p",
  ...delegated
}: HeadingProps) => {
  let Tag: HeadingProps["type"];
  switch (type) {
    case 'h1':
      Tag = 'h1';
      break;
    case 'h2':
      Tag = 'h2';
      break;
    case 'h3':
      Tag = 'h3';
      break;
    case 'h4':
      Tag = 'h4';
      break;
    default:
      Tag = 'p';
      break;
  }

  return (<Tag {...delegated}>{children}</Tag>)
};

const SectionName = styled(Word)`
  align-self: center;
  justify-self: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  color: var(--color-gray-900);
`;

export default SectionName;
