import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from './styled';

type LoginFormInputs = {
  name: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<{ onSubmit: (data: LoginFormInputs) => void; isLoading: boolean }> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="login-header">Sign In</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          autoComplete="on"
          type="text"
          id="username"
          {...register('name', { required: true })}
        />
        {errors.name && <p className="form-control-error">Username is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          autoComplete="on"
          type="password"
          id="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p className="form-control-error">Password is required</p>}
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
        <input className="form-check-input" type="checkbox" id="rememberMe" {...register('rememberMe')} />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {isLoading && <span>Loading...</span>}
    </Form>
  );
};

export default LoginForm;
