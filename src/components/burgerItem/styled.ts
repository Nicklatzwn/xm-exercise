import styled from 'styled-components/macro';

export const Card = styled.div`
  width: ${({ theme }) => `${theme.sizes.cardWidth}px`};
  background-color: ${({ theme }) => theme.colors.CardBg};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 8px;
  box-shadow: 0 0 0 2px rgba(51, 156, 253, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.textColor};
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.colors.headerBorder};
  .counter-container {
    display: flex;
    align-items: center;
    padding-top: 5px;
  }

  .counter-btn {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .counter-btn:not([disabled]):hover {
    background-color: ${({ theme }) => theme.colors.counterHover};
  }

  .counter-text {
    font-weight: bold;
    padding-bottom: 3px;
  }
`;

export const ImageContainer = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  align-items: center;
`;
