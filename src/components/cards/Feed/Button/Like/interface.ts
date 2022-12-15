
export interface LikeProps {
  tweetLikeCount: number;
};

export interface LikeState {
  counter: number;
  isLiked: boolean;
};

export interface UseLikeHook {
  state: LikeState;
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
  componentDidMountHandler: () => Promise<void>;
};