import React from 'react';
import List from 'material-ui/List';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles/index';
import { Link } from 'react-router-dom';
import Item from './item';

const styles = {
  add: {
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const ItemsList = props => (
  <div className={props.classes.container}>
    <List component="nav">
      {props.items.map(item => (
        <Item
          text={item.text}
          comments={item.comments}
          isDeleting={item.isDeleting}
          key={item.id}
          handleDelete={() => props.handleDelete(item.id)}
        />))
      }
    </List>
    <Link to="/new" className={props.classes.add}>
      <Button fab color="secondary" aria-label="add">
        <AddIcon />
      </Button>
    </Link>
  </div>
);

export default withStyles(styles)(ItemsList);
