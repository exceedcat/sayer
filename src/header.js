import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import Button from 'material-ui/Button';

const styles = {
  toolbar: {
    display: 'flex',
    padding: '30px 20px',
  },
  appBar: {
    boxShadow: 'none',
  },
  button: {
    boxShadow: 'none',
    '&:active': {
      boxShadow: 'none',
    },
    marginRight: '10px',
  },
};

const Header = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <Button fab mini color="primary" className={classes.button}>
            <ArrowBackIcon />
          </Button>
        </Link>
        <Typography type="title" color="inherit" className={classes.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
