import React from 'react';
import './style.css';
import { HomeProps } from './interfaces';

const Home: React.FC<HomeProps> = (props): React.ReactElement => {
  return (
    <div className='container'>{ props.children }</div>
  );
};

export default Home;