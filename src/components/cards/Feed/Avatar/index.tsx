import React from 'react';
import { AvatarProps } from './interfaces';
import './styles.css'

const Avatar: React.FC<AvatarProps> = (props): React.ReactElement => {
  return (
    <div className='avatar'>
      <div className='logo'>
        <img src={props.src ? props.src : '/aws-amplified.png'} alt='user-avatar' />
      </div>
    </div>
  );
};

export default Avatar;