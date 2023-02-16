import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { SyntheticEvent, useContext } from 'react';
import { IGif } from '@giphy/js-types';
import { GiphyOverlayActionType, GiphyOverlayContext } from '../../contexts/GiphyOverlay';
import './styles.css';

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('zKV10l1IN9iwkHxRC5F1L26957yG2ls2');

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

const GiphyGrid: React.FC = (): React.ReactElement => {
  const { dispatch } = useContext(GiphyOverlayContext);

  const onGifClickHandler = (gif: IGif, event: SyntheticEvent<HTMLElement, Event>): void => {
    event.preventDefault();
    console.log('Gif URL: ', gif.images.original.url);

    const gifURL: string = gif.images.original.url;

    dispatch({ type: GiphyOverlayActionType.UPDATE_GIF, payload: gifURL });
    dispatch({ type: GiphyOverlayActionType.TOGGLE });
  };

  return (
    <Grid
      className='giphy-container'
      width={568}
      columns={2}
      fetchGifs={fetchGifs}
      onGifClick={onGifClickHandler}
    />
  )
};

export default GiphyGrid;