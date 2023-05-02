import { tweets as localTweets, Tweet } from '../data/tweets';
import axios from 'axios';

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

interface APIResponse {
  fetchTweets: () => Promise<Tweet[]>;
  fetchTweetById: (id: string) => Promise<Tweet>;
  addReply: (reply: AxiosPostAddReplyParams) => Promise<any>;
  fetchLikes: (id: string) => Promise<number>;
  like: (id: string) => Promise<void>;
  unlike: (id: string) => Promise<void>;
};

interface AxiosGetFetchTweetsResponse {
  data: {
    tweets: Tweet[]
  }
};

interface AxiosGetFetchTweetResponse {
  data: {
    tweet: Tweet
  }
};

interface AxiosGetFetchTweetParams {
  id: string | undefined;
};

type AxiosPostAddReplyResponse = AxiosPostAddReplySuccess | AxiosPostAddReplyError;

interface AxiosPostAddReplySuccess {
  data: {
    message: string;
  };
};

interface AxiosPostAddReplyError {
  data: {
    error: {
      message: string;
    };
  };
};

interface AxiosPostAddReplyParams {
  id: string;
  author: string;
  tweet: string;
  mediaURL: string;
  mediaType: string;
  likes: number;
  tweetID: string;
};

interface AxiosGetFetchLikesResponse {
  data: {
    likes: number;
  }
};

interface AxiosPostLikeParams {
  id: string; 
};

const API = (): APIResponse => {
  const fetchTweets = async (): Promise<Tweet[]> => {
    const response = await axios.get<any, AxiosGetFetchTweetsResponse, any>('http://localhost:3001/fetchTweets');
    const tweets: Tweet[] = response.data.tweets;
    return tweets;
  };

  const fetchTweetById = async (id: string): Promise<Tweet> => {
    const params: AxiosGetFetchTweetParams = {
      id: id
    };
    const response = await axios.get<any, AxiosGetFetchTweetResponse, any>('http://localhost:3001/fetchTweetById', {
      params: params
    });
    const tweet: Tweet = response.data.tweet;
    return tweet;
  };

  const addReply = async (reply: AxiosPostAddReplyParams): Promise<any> => {
    const response = await axios.post<any, AxiosPostAddReplyResponse, AxiosPostAddReplyParams>('http://localhost:3001/addReply', reply);

    return response;
  };

  const fetchLikes = async (id: string): Promise<number> => {
    const params = {
      id: id
    };

    console.log("fetching with id:", id);

    const response = await axios.get<any, AxiosGetFetchLikesResponse, any>("http://localhost:3001/fetchLikes", { params: params });
    const likes: number = response.data.likes;
    return likes;
  };

  const like = async (id: string): Promise<void> => {
    await axios.post<any, any, AxiosPostLikeParams>('http://localhost:3001/like', { id: id });
  };
  
  const unlike = async (id: string): Promise<void> => {
    await axios.post<any, any, AxiosPostLikeParams>('http://localhost:3001/unlike', { id: id });
  };

  return {
    fetchTweets: fetchTweets,
    fetchTweetById: fetchTweetById,
    addReply: addReply,
    fetchLikes: fetchLikes,
    like: like,
    unlike: unlike
  };
};

export {
  getAllTweets,
  getTweetById,
  API
};