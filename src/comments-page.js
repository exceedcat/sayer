import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import CommentsList from './comments-list';

class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +props.match.url.split('/')[1],
    };
  }

  render() {
    const item = this.props.items.filter(i => i.id === this.state.id)[0];
    if (!item) return <Redirect to="/" />;
    const { comments } = item;
    return (
      <div>
        {comments && <CommentsList comments={comments} /> }
      </div>
    );
  }
}

export default withRouter(CommentsPage);
