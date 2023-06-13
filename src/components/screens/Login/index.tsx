import React, { useContext, useState } from 'react';
import { LoginProps } from './interfaces';
import { AuthenticatedContext } from '../../../contexts/Authenticated/index';
import Forms from '../../forms';
import useWindowSize from '../../../hooks/useWindowsDimensions';
import "./styles.css";

const Login: React.FC<LoginProps> = (): React.ReactElement => {
  const [state, setState] = useState<string>('');
  const windowsSize = useWindowSize(true);

  return (
    <div className="screen-login-form" style={{ height: windowsSize.height }}>
      <Forms.Login />
    </div>
  );
};

export default Login;