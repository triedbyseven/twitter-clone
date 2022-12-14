import { useCallback, useState } from 'react';
import { LikeState, UseLikeHook } from './interface';
import { httpGetCountRequest, httpPostDecrementCountRequest, httpPostIncrementCountRequest } from './utils';

const useLikeHook = (): UseLikeHook => {
  const [state, setState] = useState<LikeState>({
    counter: 0,
    isLiked: false
  });

  const onClickHandler = async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
    event.preventDefault();

    const countering = (isLiked: boolean, counter: number): number => !isLiked ? counter + 1 : counter - 1;

    setState(prevState => ({
      counter: countering(prevState.isLiked, prevState.counter),
      isLiked: !prevState.isLiked
    }));

    try {
      const response = !state.isLiked ? await httpPostIncrementCountRequest() : await httpPostDecrementCountRequest();
    } catch (error) {
      console.error('Error has been detected. Reverting state.. ', error);
      setState(prevState => ({
        counter: countering(prevState.isLiked, prevState.counter),
        isLiked: !prevState.isLiked
      }));
    };
  };

  const componentDidMountHandler = useCallback(async () => {
    const response = await httpGetCountRequest();

    setState({ counter: response.data.likeCounter, isLiked: false });
  }, []);

  return {
    state: state,
    onClickHandler: onClickHandler,
    componentDidMountHandler: componentDidMountHandler
  };
};

export default useLikeHook;