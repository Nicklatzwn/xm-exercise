import styled from 'styled-components/macro';
import { Toaster, ToasterProps } from 'react-hot-toast';

export const Notify = styled(Toaster)<ToasterProps>`
  background-color: ${({ theme }) => theme.colors.headerBg};
  color: ${({ theme }) => theme.colors.textColor};
`;
