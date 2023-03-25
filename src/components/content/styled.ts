import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
  overflow: auto;
  flex: 1;
  display: flex;
  padding: 0 20px;
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollerBgColor};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollerColorHover};
  }
`;
