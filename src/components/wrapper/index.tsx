import React from 'react';
import { WithChildrenProps } from 'types/generalTypes';
import { Container } from './styled';

export const Wrapper: React.FC<WithChildrenProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
