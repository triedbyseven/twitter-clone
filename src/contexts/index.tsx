import React from 'react';
import ReplyOverlayProvider, { ReplyOverlayProviderProps } from './ReplyOverlay';
import TweetsProvider, { TweetsProviderProps } from './Tweets';

interface ProviderComponents {
  ReplyOverlay: React.FC<ReplyOverlayProviderProps>;
  Tweets: React.FC<TweetsProviderProps>;
};

const Providers: ProviderComponents = (): void => {};

Providers.ReplyOverlay = ReplyOverlayProvider;
Providers.Tweets = TweetsProvider;

export default Providers;