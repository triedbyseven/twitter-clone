import React from 'react';
import { RegisterProps } from './interfaces';
import Forms from '../../forms';
import useWindowSize from '../../../hooks/useWindowsDimensions';
import './styles.css';

const Register: React.FC<RegisterProps> = (): React.ReactElement | null => {
  const windowSize = useWindowSize(true);

  if (!windowSize.height) return null;

  return (
    <div className='screen-register-form' style={{ height: windowSize.height }}>
      <Forms.Register />
    </div>
  );
};

export default Register;