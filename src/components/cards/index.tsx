import React from 'react';
import Feed from './Feed';
import Detail from './Detail';
import Avatar from './Feed/Avatar';
import Content from './Feed/Content';
import { FeedProps } from './Feed/interfaces';
import { DetailProps } from './Detail/interfaces';
import { AvatarProps } from './Feed/Avatar/interfaces';
import { ContentProps } from './Feed/Content/interfaces';
import Reply from './Reply';
import { ReplyCardProps } from './Reply/interfaces';

interface CardComponents {
  Feed: React.FC<FeedProps>;
  Detail: React.FC<DetailProps>;
  Avatar: React.FC<AvatarProps>;
  Content: React.FC<ContentProps>;
  Reply: React.FC<ReplyCardProps>;
};

const Cards: CardComponents = (): void => {
};

Cards.Feed = Feed;
Cards.Detail = Detail;
Cards.Avatar = Avatar;
Cards.Content = Content;
Cards.Reply = Reply;

export default Cards;