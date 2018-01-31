import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Badge from 'material-ui/Badge';

const styles = {
  item: {
    borderBottomWidth: 0.5, borderColor: '#d6d7da', borderStyle: 'solid', padding: 0,
  },
  badge: {
    margin: '0 10px',
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
        <ListItem button>
          <ListItemText primary={this.state.text} />
          {this.state.comments > 0 &&
            <Badge className={classes.badge} badgeContent={this.state.comments} color="primary" />}
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)(Item);
