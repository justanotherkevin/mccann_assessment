import React, { Component } from 'react';
import RedditPost from './redditPost'

class RedditPosts extends Component {
  render() {
    let redditPosts;
    if (this.props.redditPosts){
      redditPosts = this.props.redditPosts.map((post, index) => {
        return (
          <RedditPost key={index} post={post} />
        )
      })
    }

    return (
      <div className="reddit_posts">
        {redditPosts}
      </div>
    );
  }
}

export default RedditPosts;
