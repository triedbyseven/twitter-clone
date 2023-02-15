import React from 'react';
import ReplyOverlayProvider, { ReplyOverlayProviderProps } from './ReplyOverlay';
import TweetsProvider, { TweetsProviderProps } from './Tweets';
import Authenticated, { AuthenticatedProps } from './Authenticated';
import GiphyOverlay, { GiphyOverlayProviderProps } from './GiphyOverlay';

interface ProviderComponents {
  ReplyOverlay: React.FC<ReplyOverlayProviderProps>;
  Tweets: React.FC<TweetsProviderProps>;
  Authenticated: React.FC<AuthenticatedProps>;
  GiphyOverlay: React.FC<GiphyOverlayProviderProps>;
};

const Providers: ProviderComponents = (): void => {};

Providers.ReplyOverlay = ReplyOverlayProvider;
Providers.Tweets = TweetsProvider;
Providers.Authenticated = Authenticated;
Providers.GiphyOverlay = GiphyOverlay;

export default Providers;