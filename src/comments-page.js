import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import CommentsList from './comments-list';
import CommentsForm from './comments-form';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    height: '100vh',
  },
};

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
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <CommentsForm save={text => this.props.save(this.state.id, text)} />
        {comments && <CommentsList comments={comments} />}
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(CommentsPage));
