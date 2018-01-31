import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Badge from 'material-ui/Badge';
import LinesEllipsis from 'react-lines-ellipsis';

const styles = {
  item: {
    borderBottomWidth: 0.5, borderColor: '#d6d7da', borderStyle: 'solid', padding: 0,
  },
  badge: {
    margin: '0 10px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Roboto, arial',
  },
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments || 0,
      isDeleting: false,
      text: props.text,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <List component="nav" className={classes.item}>
        <ListItem button className={classes.flex}>
          <LinesEllipsis
            text={this.state.text}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className={classes.text}
          />
          {this.state.comments > 0 &&
            <Badge className={classes.badge} badgeContent={this.state.comments} color="primary" />}
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)(Item);
