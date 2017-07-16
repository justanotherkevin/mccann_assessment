import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class RedditPost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      created: '',
      score: '',
      image: '',
    }
  }
  componentWillMount() {

      let thisPost = this.props.post.data

      this.setState({
            title: thisPost.title,
            author: thisPost.author,
            created: thisPost.created_utc,
            score: thisPost.score,
            image: thisPost.preview.images[0].source.url,
      })

  }

  render() {
    return (
      <div className="post_wrapper">
        <div className="image_wrapper">
          <img className="post_image" src={this.state.image} alt={this.state.title} />
        </div>
        <div className="title_wrapper">
          <h3>{this.state.title}</h3>
        </div>
        <div className="info_wrapper">
          <ul>
            <li><FontAwesome className='fa-user' name='user-icon'/> <span>/u/{this.state.author} &middot;</span></li>
            <li><FontAwesome className='fa-clock-o' name='clock'/><span>{this.state.created} &middot;</span></li>
            <li><FontAwesome className='fa-bolt' name='bolt'/><span>{this.state.score}</span></li>
          </ul>
        </div>
      </div>
    );
  }

}

export default RedditPost;
