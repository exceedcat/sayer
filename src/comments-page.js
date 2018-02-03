import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import Header from './header';
import CommentsList from './comments-list';
import CommentsForm from './comments-form';

const styles = {
  container: {
    height: '100vh',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '30px 20px',
  },
  appBar: {
    boxShadow: 'none',
  },
  comments: {
    height: 'calc(100vh - 116px - 61px)',
    overflowY: 'scroll',
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
        <Header title={item.text} />
        <div className={classes.comments}>
          {comments && <CommentsList comments={comments} />}
        </div>
        <CommentsForm save={text => this.props.save(this.state.id, text)} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(CommentsPage));
