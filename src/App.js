import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import Header from './header';
import ItemsList from './list';

const lsKey = 'SayerItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem(lsKey)) || [],
    };
  }

  handleDelete = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id),
    });
    this.save();
  };

  save = () => {
    localStorage.setItem(lsKey, JSON.stringify(this.state.items));
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (<ItemsList items={this.state.items} handleDelete={this.handleDelete} />)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
