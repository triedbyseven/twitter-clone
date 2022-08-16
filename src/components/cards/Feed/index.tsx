import React from 'react';
import { FeedProps } from './interfaces';
import './styles.css'
import Cards from '..';

const Feed: React.FC<FeedProps> = (): React.ReactElement => {
  return (
    <div className='card-container'>
      <Cards.Avatar />
      <Cards.Content />
    </div>
  );
};

export default Feed;