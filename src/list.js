import React from 'react';
import List from 'material-ui/List';
import Item from './item';

const ItemsList = props => (
  <div>
    <List component="nav">
      {props.items.map(item => (
        <Item
          text={item.text}
          comments={item.comments}
          isDeleting={item.isDeleting}
          key={item.id}
        />))
      }
    </List>
  </div>
);

export default ItemsList;
