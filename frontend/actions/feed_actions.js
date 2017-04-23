import * as FeedAPIUtil from '../util/feed_api_util';

export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_FEED_ERR = "RECEIVE_FEED_ERR";

const receiveFeed = (feed) => ({
  type: RECEIVE_FEED,
  feed
});

const receiveFeedErr = (err) => ({
  type: RECEIVE_FEED_ERR,
  err
})

export const getFeed = () => (dispatch) => {
  return FeedAPIUtil.fetchFeed().then(
    (feed) => dispatch(receiveFeed(feed)),
    (err) => dispatch(receiveFeedErr(err))
  );
};
