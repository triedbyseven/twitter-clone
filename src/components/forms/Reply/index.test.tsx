import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Reply from '.';
import Providers from '../../../contexts';

beforeEach(() => {
  render(
    <Providers.ReplyOverlay>
      <Providers.GiphyOverlay>
        <Providers.Tweets>
          <Reply />
        </Providers.Tweets>
      </Providers.GiphyOverlay>
    </Providers.ReplyOverlay> 
  );
});

test('If text area input defaults to empty value.', () => {
  const inputNode = screen.getByTestId('reply-tweet-input');

  expect(inputNode).toHaveDisplayValue('');
});

test('If tweet input changes when user types.', () => {
  const inputNode = screen.getByTestId('reply-tweet-input');
  const tweetMessage = 'This is a tweet to post by Michael.';

  userEvent.type(inputNode, tweetMessage);

  expect(inputNode).toHaveDisplayValue(tweetMessage);
});