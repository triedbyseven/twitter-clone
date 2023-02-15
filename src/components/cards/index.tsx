import React from 'react';
import Feed from './Feed';
import { FeedProps } from './Feed/interfaces';
import Detail from './Detail';
import { DetailProps } from './Detail/interfaces';
import Avatar from './Feed/Avatar';
import { AvatarProps } from './Feed/Avatar/interfaces';
import Content from './Feed/Content';
import { ContentProps } from './Feed/Content/interfaces';
import Reply from './Reply';
import { ReplyCardProps } from './Reply/interfaces';
import Gifs from './Gifs';
import { GifsProps } from './Gifs/interfaces';

interface CardComponents {
  Feed: React.FC<FeedProps>;
  Detail: React.FC<DetailProps>;
  Avatar: React.FC<AvatarProps>;
  Content: React.FC<ContentProps>;
  Reply: React.FC<ReplyCardProps>;
  Gifs: React.FC<GifsProps>;
};

const Cards: CardComponents = (): void => {
};

Cards.Feed = Feed;
Cards.Detail = Detail;
Cards.Avatar = Avatar;
Cards.Content = Content;
Cards.Reply = Reply;
Cards.Gifs = Gifs;

export default Cards;