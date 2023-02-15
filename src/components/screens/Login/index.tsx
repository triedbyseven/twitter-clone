import React, { useContext, useState } from 'react';
import { LoginProps } from './interfaces';
import { AuthenticatedContext } from '../../../contexts/Authenticated/index';

const Login: React.FC<LoginProps> = (): React.ReactElement => {
  const [state, setState] = useState<string>('');
  const { state: authenticatedState, dispatch } = useContext(AuthenticatedContext);

  const onSubmit = (): void => {
    dispatch({ type: 'LOGIN' });
  };

  return (
    <div>
      <h1>Login {authenticatedState.isLoggedIn ? 'true' : 'false'}</h1>
      <input type='text' value={state} />
      <button onClick={onSubmit}>Login</button>
    </div>
  );
};

export default Login;