import React from 'react';
import Cards from '../../cards';
import Layout from '../../layout';
import { DetailTweetsProps } from './interfaces';
import './styles.css';

const DetailTweets: React.FC<DetailTweetsProps> = (props): React.ReactElement | null => {
  const renderItems = (): React.ReactElement[] => {
    const items = props.items.map((item, index: number): React.ReactElement => {
      return (
        <div key={index} className='tweet'>
          <Layout.Row>
            <Layout.Column>
              <Cards.Avatar />
            </Layout.Column>
            <Layout.Column flex='1'>
              <div className='handler-section'>
                <div className='handler'>AWS Amplify</div>
                <div className='replyTo'>@{item.author}</div>
                <div className='seperator'>·</div>
                <div className='timestamp'>Aug 2</div>
              </div>
              <div className='paragraph'>
                {item.tweet}
              </div>
            </Layout.Column>
          </Layout.Row>
        </div>
      );
    });

    return items;
  };

  return (
    <div className='detail-tweets-container'>
      { renderItems() }
    </div>
  );
};

export default DetailTweets;