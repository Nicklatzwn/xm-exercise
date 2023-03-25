import styled from 'styled-components/macro';

export const BurgerContainer = styled.div`
  flex: 1;
  padding-bottom: 20px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.CardBg};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 8px;
  box-shadow: 0 0 0 2px rgba(51, 156, 253, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 600px) {
    width: ${({ theme }) => `${theme.sizes.cardWidth}px`};
    margin: auto;
  }
`;

export const CardBody = styled.div`
  max-width: ${({ theme }) => `${theme.sizes.cardWidth}px`};
  padding: 20px;
`;

export const ImageContainer = styled.div`
  &:hover {
    cursor: pointer;
    > img {
      transform: scale(1.1);
      transition-duration: 0.5s;
    }
  }
`;
