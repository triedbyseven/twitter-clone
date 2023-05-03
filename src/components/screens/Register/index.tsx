import React, { useContext, useState } from 'react';
import { RegisterProps } from './interfaces';
import { AuthenticatedContext } from '../../../contexts/Authenticated/index';

const Register: React.FC<RegisterProps> = (): React.ReactElement => {
  const [state, setState] = useState<string>('');
  const { state: authenticatedState, dispatch } = useContext(AuthenticatedContext);

  const onSubmit = (): void => {
    dispatch({ type: 'Register' });
  };

  return (
    <div>
      <h1>Register {authenticatedState.isLoggedIn ? 'true' : 'false'}</h1>
      <input type='text' value={state} />
      <button onClick={onSubmit}>Register</button>
    </div>
  );
};

export default Register;