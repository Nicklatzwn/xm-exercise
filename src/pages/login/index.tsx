import { loginApi } from 'api/http/login';
import LoginForm from 'components/loginForm';
import React from 'react';
import { useMutation } from 'react-query';
import { Container, Content } from './styled';

type LoginFormInputs = {
  name: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage: React.FC = () => {
  const { mutate, isLoading } = useMutation(
    (formData: LoginFormInputs) => loginApi(formData).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('Login successful:', data);
        // redirect to dashboard or do something else
      },
    },
  );

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    // loginMutation.mutate(data);
  };

  return (
    <Container>
      <Content>
        <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default LoginPage;
