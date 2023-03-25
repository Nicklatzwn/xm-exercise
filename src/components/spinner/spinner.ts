import styled, { css } from 'styled-components/macro';

export const SpinnerContainer = styled.div<{ $overlay: boolean }>`
  flex: 1;
  display: flex;
  ${({ $overlay }) =>
    css`
      ${$overlay &&
      css`
        height: 100%;
        align-items: center;
        justify-content: center;
      `}
    `}
`;
