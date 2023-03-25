import { loginApi } from 'api/http/login';
import LoginForm from 'components/loginForm';
import { withAuthentication } from 'hocs/withAuthentication.hoc';
import React from 'react';
import { useMutation } from 'react-query';
import { useAuth } from 'router/AuthProvider';
import { Container, Content } from './styled';

type LoginFormInputs = {
  name: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage: React.FC = () => {
  const { handleLogin } = useAuth();
  const { mutate, isLoading } = useMutation(
    (formData: LoginFormInputs) => loginApi(formData).then((response) => (response ? response.data : null)),
    {
      onSuccess: (data, variables) => {
        if (data) {
          const { token } = data;
          const { rememberMe } = variables;
          handleLogin(token, rememberMe);
        }
      },
    },
  );
  const onSubmit = (data: LoginFormInputs) => mutate(data);

  return (
    <Container>
      <Content>
        <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default withAuthentication(LoginPage);
