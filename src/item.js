import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction } from 'material-ui/List';
import Badge from 'material-ui/Badge';
import LinesEllipsis from 'react-lines-ellipsis';
import CloseIcon from 'material-ui-icons/Close';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

const styles = {
  badge: {
    margin: '0 10px',
    marginLeft: 'auto',
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Roboto, arial',
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
    paddingRight: '50px',
  },
  button: {
    boxShadow: 'none',
    '&:active': {
      boxShadow: 'none',
    },
    height: '100%',
    marginTop: '2px',
  },
  secondary: {
    right: 0,
    height: '100%',
  },
  mw200: {
    width: '100%',
    maxWidth: 'calc(100vw - 100px)',
  },
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments || 0,
      isDeleting: false,
      text: props.text,
      id: props.id,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <ListItem
        divider
        className={classes.text}
        component={Link}
        to={`/${this.state.id}`}
      >
        <LinesEllipsis
          text={this.state.text}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="words"
          className={classes.mw200}
        />
        {this.state.comments > 0 && !this.state.isDeleting &&
          <Badge className={classes.badge} badgeContent={this.state.comments} color="primary" />}
        <ListItemSecondaryAction className={classes.secondary}>
          {(!this.state.isDeleting &&
          <IconButton>
            <CloseIcon onClick={() => this.setState({ ...this.state, isDeleting: true })} />
          </IconButton>) ||
          <Button
            raised
            color="secondary"
            className={classes.button}
            onClick={this.props.handleDelete}
          >
                Delete
          </Button>
          }
        </ListItemSecondaryAction>

      </ListItem>

    );
  }
}

export default withStyles(styles)(Item);
