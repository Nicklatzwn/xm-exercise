import styled from 'styled-components/macro';

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.CardBg};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 8px;
  padding: 30px 60px;
  box-shadow: 0 0 0 2px rgba(51, 156, 253, 0.2);

  .login-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    :after {
      content: ' *';
      color: ${({ theme }) => theme.colors.errorText};
    }
    &.form-check-label {
      :after {
        content: none;
      }
    }
  }

  .form-control {
    width: 100%;
    height: 40px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.borderColor};
    border-radius: 4px;
    padding: 8px;
    &:focus {
      outline: none !important;
      border: 1px solid ${({ theme }) => theme.colors.inputFocus};
      box-shadow: 0 0 0 2px rgba(51, 156, 253, 0.2);
    }
  }

  .form-control-error {
    color: ${({ theme }) => theme.colors.errorText};
    font-size: 0.8em;
    margin: 0;
  }

  .form-check {
    display: flex;
    justify-content: space-between;
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.colors.login};
    border: none;
    border-radius: 4px;
    padding: 8px 20px;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    &:not([disabled]):hover {
      background-color: ${({ theme }) => theme.colors.loginHover};
      cursor: pointer;
    }
    .beat__loader {
      span {
        background-color: ${({ theme }) => theme.colors.white} !important;
      }
    }
  }
`;
