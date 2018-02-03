import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import { withStyles } from 'material-ui/styles';

const styles = {
  listItem: {
    alignItems: 'flex-start',
  },
};

const CommentsList = (props) => {
  const { comments, classes } = props;

  return (
    <List>
      {comments.map(comment => (
        <ListItem key={comment.id} className={classes.listItem}>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary={comment.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default withStyles(styles)(CommentsList);
