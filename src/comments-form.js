import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
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
    backgroundColor: '#eeeeee',
    padding: '10px 0',
  },
  textFieldInput: {
    backgroundColor: '#ffffff',
    border: '1px solid #ced4da',
    fontSize: 16,
    marginRight: '10px',
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
  },
  incorrectTextFieldInput: {
    backgroundColor: '#ffffff',
    border: '1px solid red',
    fontSize: 16,
    marginRight: '10px',
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
  }
};

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isSubmitted: false,
      isCorrect: true,
    };
  }


  handleChange = e => this.setState({text: e.target.value});

  handleSubmit = () => {
    if (!!this.state.text.trim()) {
      this.props.save(this.state.text);
      this.setState({
        text: '',
        isCorrect: true,
        isSubmitted: false,
      });
    } else {
    this.setState({ ...this.state, isCorrect: false, isSubmitted: true });
    }
  };

  render() {
    const { classes } = this.props;
    const { isCorrect } = this.state;
    return(
      <div className={classes.container}>
        <TextField
          required
          placeholder="New comment..."
          value={this.state.text}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true,
            classes: {
              input: isCorrect ? classes.textFieldInput : classes.incorrectTextFieldInput,
            },
          }}
        />
        <Button fab mini color="primary" className={classes.button} onClick={this.handleSubmit}>
          <KeyboardArrowRightIcon />
        </Button>
      </div>
    );
  }
}


export default withStyles(styles)(CommentsForm);
