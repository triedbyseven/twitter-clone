import React, { useContext } from 'react';
import { ReplyOverlayContext } from '../../../contexts/ReplyOverlay';
import { GiphyOverlayActionType, GiphyOverlayContext } from '../../../contexts/GiphyOverlay';
import Cards from '../../cards';
import { ReplyOverlayProps } from './interfaces';
import './styles.css';

const Reply: React.FC<ReplyOverlayProps> = (props): React.ReactElement | null => {
  const { state, dispatch } = useContext(ReplyOverlayContext);
  const giphyOverlayContext = useContext(GiphyOverlayContext);

  const onClickHandler = () => {
    dispatch({ type: 'TOGGLE', payload: { tweetID: '', tweetPreview: '' } });
    giphyOverlayContext.dispatch({ type: GiphyOverlayActionType.TOGGLE_RESET });
  };

  if (!state.isToggled) return null;

  return (
    <div className='overlay-reply-container'>
      <div
        className='overlay-reply'
        onClick={onClickHandler}
      >
      </div>
      {giphyOverlayContext.state.isToggled ? <Cards.Gifs /> : null}
      <Cards.Reply />
    </div>
  );
};

export default Reply;