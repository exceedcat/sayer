import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ItemsList from './list';

const styles = {
  title: {
    fontSize: 36,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '30px 20px',
  },
  appbar: {
    boxShadow: 'none',
  },
};

const MainPage = props => (
  <div>
    <AppBar position="static" className={props.classes.appbar}>
      <Toolbar className={props.classes.toolbar}>
        <Typography type="title" color="inherit" className={props.classes.title}>
          Sayer
        </Typography>
        <Typography type="subheading" color="inherit" >
          World‘s most used time waster
        </Typography>
      </Toolbar>
    </AppBar>
    <ItemsList items={props.items} handleDelete={props.handleDelete} />
  </div>
);

export default withStyles(styles)(MainPage);
