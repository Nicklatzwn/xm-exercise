import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.headerBg};
  padding: 0 20px;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.colors.headerBorder};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.07);
`;

export const Logo = styled.div`
  padding: 10px 5px;
`;

export const Button = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.logout};
  color: white;
  border-radius: 4px;
  padding: 5px 10px;
  height: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.logoutHover};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
