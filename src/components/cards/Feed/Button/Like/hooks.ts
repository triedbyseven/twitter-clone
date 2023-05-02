import { useCallback, useState } from 'react';
import { LikeState, UseLikeHook } from './interface';
import { API } from '../../../../../utils/api';
import { useParams } from 'react-router-dom';
import { RouterParams } from '../../../../screens/Detail/interfaces';

const useLikeHook = (tweetID: string): UseLikeHook => {
  const params = useParams<RouterParams>();
  const [state, setState] = useState<LikeState>({
    counter: 0,
    isLiked: false
  });

  const onClickHandler = async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
    event.preventDefault();
    const countering = (isLiked: boolean, counter: number): number => !isLiked ? counter + 1 : counter - 1;

    try {
      !state.isLiked ? await API().like(params.id || "") : await API().unlike(params.id || "");

      setState(prevState => ({
        counter: countering(prevState.isLiked, prevState.counter),
        isLiked: !prevState.isLiked
      }));
    } catch (error) {
      console.error('Error has been detected. Reverting state.. ', error);
      setState(prevState => ({
        counter: countering(prevState.isLiked, prevState.counter),
        isLiked: !prevState.isLiked
      }));
    };
  };

  const componentDidMountHandler = useCallback(async () => {
    const likes = await API().fetchLikes(params.id || tweetID);

    setState({ counter: likes, isLiked: false });
  }, []);

  return {
    state: state,
    onClickHandler: onClickHandler,
    componentDidMountHandler: componentDidMountHandler
  };
};

export default useLikeHook;