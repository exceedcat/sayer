import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import { Redirect } from 'react-router-dom';
import Button from 'material-ui/Button';

const styles = {
  button: {
    boxShadow: 'none',
    '&:active': {
      boxShadow: 'none',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textField: {
    marginRight: '10px',
  },
};


class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isSubmitted: false,
      isCorrect: true,
    };
  }

  handleChange = e => this.setState({title: e.target.value});

  handleSubmit = () => this.setState({
        ...this.state,
        isCorrect: !!this.state.title.trim(),
        isSubmitted: true,
      });

  render() {
    const { classes, save } = this.props;
    const { isSubmitted, isCorrect } = this.state;
    if (isSubmitted && isCorrect) {
      save(this.state.title);
      return (<Redirect to="/" />);
    }
    return (
      <div className={classes.container}>
        <TextField
          required
          id="required"
          placeholder="New item title..."
          className={classes.textField}
          onChange={this.handleChange}
          error={!isCorrect}
        />
          <Button fab mini color="primary" className={classes.button} onClick={this.handleSubmit}>
            <KeyboardArrowRightIcon />
          </Button>
      </div>
    );
  }
}

export default withStyles(styles)(NewForm);
