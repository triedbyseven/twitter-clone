import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TweetsContext } from '../../../contexts/Tweets';
import { getTweetById } from '../../../utils/api';
import { DetailState, RouterParams, UseDetailScreenHookResponse } from './interfaces';

const useDetailScreenHook = (): UseDetailScreenHookResponse => {
  const { state: globalState } = useContext(TweetsContext);
  const params = useParams<RouterParams>();
  const [state, setState] = useState<DetailState>({
    tweet: {
      id: '',
      author: '',
      tweet: '',
      likes: 0,
      replies: []
    },
    loading: true
  });

  const onMount = async (): Promise<void> => {
    try {
      const tweet = await getTweetById(params.id, globalState.tweets);

      setState({
        tweet: tweet,
        loading: false
      });
    } catch(error){
      console.log('Error: ', error);
    };
  };

  useEffect(() => {
    if (params.id) onMount();
  }, []);

  return {
    state: state
  };
};

export default useDetailScreenHook;