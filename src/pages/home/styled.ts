import styled from 'styled-components/macro';

export const Home = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BurgerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
  &::after {
    content: '';
    flex: 1;
    margin-left: 1rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.headerBorder};
  }
  &::before {
    content: '•';
    margin-right: 1rem;
    position: relative;
    bottom: 2px;
  }
`;

export const SpinnerContainer = styled.div`
  padding: 50px;
`;

export const BurgerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
