import React from 'react';
import Feed from './Feed';
import Avatar from './Feed/Avatar';
import Content from './Feed/Content';
import { FeedProps } from './Feed/interfaces';
import { AvatarProps } from './Feed/Avatar/interfaces';
import { ContentProps } from './Feed/Content/interfaces';

const Cards: {
  Feed: React.FC<FeedProps>,
  Avatar: React.FC<AvatarProps>,
  Content: React.FC<ContentProps>
} = (): void => {
};

Cards.Feed = Feed;
Cards.Avatar = Avatar;
Cards.Content = Content;

export default Cards;