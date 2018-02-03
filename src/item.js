import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction } from 'material-ui/List';
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
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Roboto, arial',
    // paddingRight: '50px',
  },
  textPr50: {
    fontFamily: 'Roboto, arial',
    paddingRight: '50px',
  },
  pr50: {
    paddingRight: '50px',
  },
  pr100: {
    paddingRight: '120px',
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
  p0: {
    padding: 0,
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
      <Link to={`/${this.state.id}`}>
        <ListItem
          button
          divider
          className={classes.flex && this.state.isDeleting ? classes.pr100 : classes.pr50}
        >
          <LinesEllipsis
            text={this.state.text}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="words"
            className={this.state.isDeleting ? classes.text : classes.textPr50}
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
      </Link>
    );
  }
}

export default withStyles(styles)(Item);
