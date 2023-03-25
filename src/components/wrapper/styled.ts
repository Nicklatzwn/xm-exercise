import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  .toaster-container {
    > div {
      > div {
        background-color: ${({ theme }) => theme.colors.headerBg} !important;
        color: ${({ theme }) => theme.colors.textColor};
      }
    }
  }
`;
