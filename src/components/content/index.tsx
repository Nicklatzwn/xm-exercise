import React from 'react';
import { WithChildrenProps } from 'types/generalTypes';
import { ContentWrapper } from './styled';

const Content: React.FC<WithChildrenProps> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
