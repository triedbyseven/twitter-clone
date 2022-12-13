import { tweets as localTweets, Tweet } from '../data/tweets';

const getAllTweets = async (): Promise<Tweet[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error: boolean = false; 

      if (error) return reject('Network error.');

      resolve(localTweets);
    }, 2000);
  }); 
};

const getTweetById = async (tweetID: string | undefined, tweets: Tweet[]): Promise<Tweet> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error: boolean = false;

      if (error) reject('Network error.');

      const tweet = tweets.find((tweet) => tweet.id === tweetID);

      if (!tweet) return reject('No tweet was found by that ID.');
  
      resolve(tweet);
    }, 2000);
  });
};

export {
  getAllTweets,
  getTweetById
};